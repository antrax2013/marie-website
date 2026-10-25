param( 
  [Parameter(Mandatory = $true)] [string]$mainUrl, 
  [Parameter(Mandatory = $true)] [string]$secondaryUrl, 
  [Parameter(Mandatory = $true)] [string]$tertiaryUrl
)

# 1. PowerShell Post-Build Script - Deletes index.html and Renames accueil.html

# 1.1 Delete the index.html file
Remove-Item -Path "./build/index.html" -Force -ErrorAction SilentlyContinue

# 1.2 Rename accueil.html to index.hml
Rename-Item -Path "./build/accueil.html" -NewName "index.html" -Force -ErrorAction SilentlyContinue

Write-Host "Deletes index.html and Renames accueil.html script completed."

# 2. PowerShell Script to Replace URL in Build Directory - With Command Line URL Input and Confirmation

# Define the directory to search
$directory = "./build/*"

# Define the templates
$mainTemplate = "##main-web-site-url##"
$secondaryTemplate = "##secondary-web-site-url##"
$tertiaryTemplate = "##tertiary-web-site-url##"

# Display URLs to confirm
# Write-Host "Urls are main: '$mainUrl'"
# Write-Host "Urls are secondary: '$secondaryUrl'"
# Write-Host "Urls are tertiary: '$tertiaryUrl'"

# $confirm = Read-Host "Do you want to repalce (Y/N)?"

# if ($confirm -eq "N" -or $confirm -eq "n") {
#   exit 0
# } 

# Get all files in the directory
$files = Get-ChildItem -Path $directory -File

# Iterate through each file
foreach ($file in $files) {
  try {
    # Read the file content
    $content = Get-Content -Path $file.FullName -Raw

    # Replace URLs
    $content = $content -replace [regex]::Escape($mainTemplate), $mainUrl
    $content = $content -replace [regex]::Escape($secondaryTemplate), $secondaryUrl
    $content = $content -replace [regex]::Escape($tertiaryTemplate), $tertiaryUrl
   
   # Write the modified content back to the file
    Set-Content -Path $file.FullName -Value $content
  }
  catch {
    Write-Host "Error processing file $($file.FullName): $($_.Exception.Message)"
  }
}

Write-Host "URLs replacement complete."
