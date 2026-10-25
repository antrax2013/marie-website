# Charge le JSON depuis un fichier
$json = Get-Content -Raw -Path ".\src\components\fragments\MetaTags\metas.json" | ConvertFrom-Json

$results = @()

foreach ($meta in $json.metas) {
    $key = $meta.key
    $title = $meta.title
    $description = $meta.description

    $titleLength = $title.Length
    $descLength = $description.Length

    # Vérification du title
    if ($titleLength -gt 70) {
        $results += [PSCustomObject]@{
            Key              = $key
            Propriete        = "title"
            Longueur         = $titleLength
            Original         = $title
            Tronque          = $title.Substring(0,70)
        }
    }

    # Vérification de la description
    if ($descLength -gt 160) {
        $results += [PSCustomObject]@{
            Key              = $key
            Propriete        = "description"
            Longueur         = $descLength
            Original         = $description
            Tronque          = $description.Substring(0,160)
        }
    }
}

# Affichage final
if ($results.Count -eq 0) {
    Write-Host "Toutes les metas respectent les limites de longueur."
} else {
    Write-Host "Metas dépassant les limites :"
    $results | Format-Table -AutoSize
    exit 1
}