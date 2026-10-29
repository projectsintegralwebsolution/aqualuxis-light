Add-Type -AssemblyName System.Drawing

$srcPath = "public\assets\products\hf00-surface-pool-light.jpg"
$destPath = "public\assets\products\led-swimming-pool-light-cutout.png"

$orig = [System.Drawing.Bitmap]::FromFile($srcPath)
$width = $orig.Width
$height = $orig.Height

# Create a 32-bit ARGB bitmap
$bmp = New-Object System.Drawing.Bitmap($width, $height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

for ($y = 0; $y -lt $height; $y++) {
    for ($x = 0; $x -lt $width; $x++) {
        $c = $orig.GetPixel($x, $y)
        $r = [int]$c.R
        $g = [int]$c.G
        $b = [int]$c.B
        
        # Check white background threshold
        if ($r -gt 245 -and $g -gt 245 -and $b -gt 245) {
            $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 255, 255, 255))
        } elseif ($r -gt 230 -and $g -gt 230 -and $b -gt 230) {
            # Smooth feathered alpha edge
            $avg = ($r + $g + $b) / 3.0
            $alpha = [int]([Math]::Max(0, [Math]::Min(255, (245.0 - $avg) / 15.0 * 255.0)))
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
