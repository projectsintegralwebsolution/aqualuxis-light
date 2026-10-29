Add-Type -AssemblyName System.Drawing

$srcPath = "public\assets\products\featured-led-pool-light-new.jpg"
$destPath = "public\assets\products\featured-led-pool-light-cutout.png"

$orig = [System.Drawing.Bitmap]::FromFile($srcPath)
$width = $orig.Width
$height = $orig.Height

# Check corner pixel colors
$c00 = $orig.GetPixel(5, 5)
$c10 = $orig.GetPixel($width - 6, 5)
Write-Output "Top-left: R=$($c00.R), G=$($c00.G), B=$($c00.B)"
Write-Output "Top-right: R=$($c10.R), G=$($c10.G), B=$($c10.B)"

# Create a 32-bit ARGB bitmap
$bmp = New-Object System.Drawing.Bitmap($width, $height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

for ($y = 0; $y -lt $height; $y++) {
    for ($x = 0; $x -lt $width; $x++) {
        $c = $orig.GetPixel($x, $y)
        $r = [int]$c.R
        $g = [int]$c.G
        $b = [int]$c.B
        
        # Pure white or near white background
        if ($r -ge 250 -and $g -ge 250 -and $b -ge 250) {
            $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 255, 255, 255))
        } elseif ($r -gt 238 -and $g -gt 238 -and $b -gt 238) {
            # Feathered edge for anti-aliasing
            $avg = ($r + $g + $b) / 3.0
            $alpha = [int]([Math]::Max(0, [Math]::Min(255, (250.0 - $avg) / 12.0 * 255.0)))
            $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, $r, $g, $b))
        } else {
            $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, $r, $g, $b))
        }
    }
}

$orig.Dispose()
$bmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()

Write-Output "Successfully generated: $destPath ($width x $height)"
