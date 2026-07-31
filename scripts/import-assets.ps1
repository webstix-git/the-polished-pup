# Copies the img1..img11 photo set into public\images\photos\ under descriptive
# filenames, preserving each file's original extension.
#
# Run from the project root:
#
#   powershell -ExecutionPolicy Bypass -File .\scripts\import-assets.ps1
#
# Or point it at whichever folder holds the originals:
#
#   powershell -ExecutionPolicy Bypass -File .\scripts\import-assets.ps1 -Source "C:\Users\DELL\Downloads"
#
# The paths it writes must match the `photos` object in src\lib\content.ts.

param(
    [string]$Source,
    # Removes the loose img1..img11 originals from public\images once copied.
    [switch]$CleanOriginals
)

$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$imagesDir = Join-Path $root "public\images"
$photosDir = Join-Path $imagesDir "photos"

New-Item -ItemType Directory -Force -Path $photosDir | Out-Null

# Folders searched for source images, in order.
$candidates = @()
if ($Source) { $candidates += $Source }
$candidates += @(
    $imagesDir,
    "$env:USERPROFILE\.cursor\projects\c-Next-js-projects-The-Polished-Pup-Design-1\assets",
    (Join-Path $root "assets-inbox")
)

$searchDirs = $candidates | Where-Object { $_ -and (Test-Path $_) }

if (-not $searchDirs) {
    Write-Error "No source folder found. Re-run with -Source pointing at the folder holding the images."
}

$files = foreach ($dir in $searchDirs) {
    Get-ChildItem -Path $dir -Recurse -File -Include *.png, *.jpg, *.jpeg, *.webp -ErrorAction SilentlyContinue
}

# Attachments often keep a .png name while holding JPEG or WebP bytes, so trust
# the file signature rather than the extension.
function Get-ImageExtension {
    param([string]$Path)

    $bytes = New-Object byte[] 12
    $stream = [System.IO.File]::OpenRead($Path)
    try { $null = $stream.Read($bytes, 0, 12) } finally { $stream.Dispose() }

    if ($bytes[0] -eq 0x89 -and $bytes[1] -eq 0x50) { return ".png" }
    if ($bytes[0] -eq 0xFF -and $bytes[1] -eq 0xD8) { return ".jpg" }
    if ((-join ($bytes[8..11] | ForEach-Object { [char]$_ })) -eq "WEBP") { return ".webp" }

    return [System.IO.Path]::GetExtension($Path).ToLower()
}

# Source image number -> destination basename (extension comes from the source).
$map = [ordered]@{
    "img1"  = "shih-tzu-groom"
    "img2"  = "dog-towel-duck"
    "img3"  = "dog-with-comb"
    "img4"  = "dalmatian-tub"
    "img5"  = "dalmatian-groomer"
    "img6"  = "senior-dog-tub"
    "img7"  = "shop-decor-tray"
    "img8"  = "golden-rinse"
    "img9"  = "shop-dog-relaxing"
    "img10" = "spa-cucumber"
    "img11" = "dog-teal-towel"
}

$copied = 0
$missing = @()
$originals = @()

foreach ($entry in $map.GetEnumerator()) {
    $key = $entry.Key

    # The trailing delimiter keeps img1 from also matching img10 and img11.
    $match = $files |
        Where-Object { $_.BaseName -eq $key -or $_.Name -like "*_images_$key-*" } |
        Sort-Object LastWriteTime -Descending |
        Select-Object -First 1

    if (-not $match) {
        $missing += $key
        continue
    }

    $destination = Join-Path $photosDir ($entry.Value + (Get-ImageExtension $match.FullName))

    # Drop any earlier copy of this photo saved under a different extension.
    Get-ChildItem -Path $photosDir -File -Filter ($entry.Value + ".*") -ErrorAction SilentlyContinue |
        Where-Object { $_.FullName -ne $destination } |
        Remove-Item -Force

    Copy-Item -Path $match.FullName -Destination $destination -Force
    Write-Host "$key -> photos\$(Split-Path $destination -Leaf)"
    $copied++

    if ($match.DirectoryName -eq $imagesDir) { $originals += $match.FullName }
}

Write-Host "`n$copied of $($map.Count) copied into $photosDir"

if ($missing.Count -gt 0) {
    Write-Host "`nNot found: $($missing -join ', ')" -ForegroundColor Yellow
    Write-Host "Re-run with -Source pointing at the folder holding img1 .. img11."
}

if ($CleanOriginals -and $originals.Count -gt 0) {
    $originals | Remove-Item -Force
    Write-Host "`nRemoved $($originals.Count) loose original(s) from public\images"
}

$logo = Join-Path $imagesDir "the-polished-pup-logo.png"
if (Test-Path $logo) {
    Write-Host "`nLogo in place ($((Get-ImageExtension $logo).TrimStart('.').ToUpper())): public\images\the-polished-pup-logo.png"
}
else {
    Write-Host "`nLogo missing. Save it to public\images\the-polished-pup-logo.png" -ForegroundColor Yellow
}
