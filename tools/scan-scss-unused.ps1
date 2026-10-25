Param(
    [string]$Root = "${PWD}"
)

# Exclure dossiers lourds
$excludeDirs = @('node_modules','build','dist','.git')

Function Get-AllFiles {
    param($root, $patterns)
    $patterns | ForEach-Object {
        Get-ChildItem -Path $root -Recurse -Include $_ -File -ErrorAction SilentlyContinue | Where-Object {
            $p = $_.FullName
            -not ($excludeDirs | ForEach-Object { $p -match [regex]::Escape((Join-Path $root $_)) })
        }
    }
}

# Fichiers styles
$styleFiles = Get-ChildItem -Path $Root -Recurse -Include *.scss,*.sass,*.css -File -ErrorAction SilentlyContinue | Where-Object { $_.FullName -notmatch 'node_modules' -and $_.FullName -notmatch '\\build\\' }

# Fichiers à scanner pour usages
$searchExts = @('*.ts','*.tsx','*.js','*.jsx','*.html','*.scss','*.sass','*.css')
$allCodeFiles = Get-ChildItem -Path $Root -Recurse -Include $searchExts -File -ErrorAction SilentlyContinue | Where-Object { $_.FullName -notmatch 'node_modules' -and $_.FullName -notmatch '\\build\\' }
$paths = $allCodeFiles | ForEach-Object { $_.FullName }

$classes = @()
$mixins = @()
$placeholders = @()
$variables = @()
$unreferencedFiles = @()

foreach ($f in $styleFiles) {
    try {
        $text = Get-Content -Raw -Path $f.FullName -ErrorAction Stop
    } catch {
        continue
    }

    # classes définies (sélecteurs commençant par . au début de ligne ou après une accolade)
    $clsMatches = [regex]::Matches($text, '(?m)(?:^|\{|\})\s*\.([A-Za-z0-9_-]+)')
    foreach ($m in $clsMatches) {
        $name = $m.Groups[1].Value
        if (-not ($classes | Where-Object { $_.name -eq $name -and $_.file -eq $f.FullName })) {
            $classes += [PSCustomObject]@{ name = $name; file = $f.FullName }
        }
    }

    # mixins
    $mixMatches = [regex]::Matches($text, '(?m)@mixin\s+([A-Za-z0-9_\-]+)')
    foreach ($m in $mixMatches) {
        $name = $m.Groups[1].Value
        if (-not ($mixins | Where-Object { $_.name -eq $name -and $_.file -eq $f.FullName })) {
            $mixins += [PSCustomObject]@{ name = $name; file = $f.FullName }
        }
    }

    # placeholders
    $phMatches = [regex]::Matches($text, '(?m)^\s*%([A-Za-z0-9_\-]+)')
    foreach ($m in $phMatches) {
        $name = $m.Groups[1].Value
        if (-not ($placeholders | Where-Object { $_.name -eq $name -and $_.file -eq $f.FullName })) {
            $placeholders += [PSCustomObject]@{ name = $name; file = $f.FullName }
        }
    }

    # variables SASS
    $varMatches = [regex]::Matches($text, '(?m)\$([A-Za-z0-9_\-]+)\s*:')
    foreach ($m in $varMatches) {
        $name = '$' + $m.Groups[1].Value
        if (-not ($variables | Where-Object { $_.name -eq $name -and $_.file -eq $f.FullName })) {
            $variables += [PSCustomObject]@{ name = $name; file = $f.FullName }
        }
    }

    # fichier référencé ? (recherches basiques par basename)
    $fileName = [System.IO.Path]::GetFileName($f.FullName)
    try {
        $refs = Select-String -Path $paths -Pattern [regex]::Escape($fileName) -SimpleMatch -ErrorAction SilentlyContinue | Where-Object { $_.Path -ne $f.FullName }
    } catch {
        $refs = $null
    }
    if (-not $refs) {
        $unreferencedFiles += [PSCustomObject]@{ file = $f.FullName; note = "Aucune occurrence du nom de fichier trouvée dans le code (import possible par @use sans extension)" }
    }
}

# Maintenant déterminer usages des classes/mixins/variables/placeholders
$unusedClasses = @()
foreach ($c in $classes) {
    $pattern = "\b" + [regex]::Escape($c.name) + "\b"
    try {
        $found = Select-String -Path $paths -Pattern $pattern -AllMatches -ErrorAction SilentlyContinue | Where-Object { $_.Path -ne $c.file }
    } catch {
        $found = $null
    }
    if (-not $found) {
        $unusedClasses += [PSCustomObject]@{ name = $c.name; file = $c.file; note = "Probablement non référencé dans les fichiers .ts/.tsx (aucune occurrence trouvée en dehors du fichier de définition)" }
    }
}

$unusedMixins = @()
foreach ($m in $mixins) {
    # search for @include m or include mixins.m
    $pattern1 = "@include\s+" + [regex]::Escape($m.name)
    $pattern2 = "@include\s+mixins\." + [regex]::Escape($m.name)
    try {
        $found = Select-String -Path $paths -Pattern $pattern1,$pattern2 -AllMatches -ErrorAction SilentlyContinue | Where-Object { $_.Path -ne $m.file }
    } catch {
        $found = $null
    }
    if (-not $found) {
        $unusedMixins += [PSCustomObject]@{ name = $m.name; file = $m.file; note = "Aucun @include trouvé dans le projet" }
    }
}

$unusedPlaceholders = @()
foreach ($p in $placeholders) {
    $pattern = "%" + [regex]::Escape($p.name)
    try {
        $found = Select-String -Path $paths -Pattern $pattern -AllMatches -ErrorAction SilentlyContinue | Where-Object { $_.Path -ne $p.file }
    } catch {
        $found = $null
    }
    if (-not $found) {
        $unusedPlaceholders += [PSCustomObject]@{ name = $p.name; file = $p.file; note = "Placeholder %$($p.name) non référencé" }
    }
}

$unusedVariables = @()
foreach ($v in $variables) {
    # cherche usages $var (exclure définition)
    $name = $v.name.TrimStart('$')
    $pattern = "\$" + [regex]::Escape($name) + "\b"
    try {
        $found = Select-String -Path $paths -Pattern $pattern -AllMatches -ErrorAction SilentlyContinue | Where-Object { $_.Path -ne $v.file -or ($_.Line -notmatch "\$" + [regex]::Escape($name) + "\s*:") }
    } catch {
        $found = $null
    }
    if (-not $found) {
        $unusedVariables += [PSCustomObject]@{ name = $v.name; file = $v.file; note = "Variable SASS non utilisée (aucune occurrence d'usage trouvée)" }
    }
}

# Prepare result
$result = [PSCustomObject]@{
    generatedAt = (Get-Date).ToString()
    summary = [PSCustomObject]@{
        totalStyleFiles = $styleFiles.Count
        totalCodeFiles = $allCodeFiles.Count
        totalClasses = $classes.Count
        totalMixins = $mixins.Count
        totalPlaceholders = $placeholders.Count
        totalVariables = $variables.Count
    }
    unused = [PSCustomObject]@{
        classes = $unusedClasses
        mixins = $unusedMixins
        placeholders = $unusedPlaceholders
        variables = $unusedVariables
        unreferencedFiles = $unreferencedFiles
    }
}

$result | ConvertTo-Json -Depth 6
