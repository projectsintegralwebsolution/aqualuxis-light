Add-Type -AssemblyName System.Drawing

$srcImgPath = "C:\Users\admin\.gemini\antigravity\brain\8ba9a458-02c7-47c8-a6b9-0bfa883c4f88\.user_uploaded\media_1793001609999_972fb587.jpg"
$srcImg = [System.Drawing.Bitmap]::FromFile($srcImgPath)

$srcWidth = [int]$srcImg.Width
$srcHeight = [int]($srcImg.Height - 1)

$canvasSize = 512
$destBmp = New-Object System.Drawing.Bitmap($canvasSize, $canvasSize, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($destBmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

$g.Clear([System.Drawing.Color]::White)

$targetWidth = [int]($canvasSize * 0.90)
$targetHeight = [int]($targetWidth * ($srcHeight / $srcWidth))
$destX = [int](($canvasSize - $targetWidth) / 2)
$destY = [int](($canvasSize - $targetHeight) / 2)

$destRect = [System.Drawing.RectangleF]::new([float]$destX, [float]$destY, [float]$targetWidth, [float]$targetHeight)
$srcRect = [System.Drawing.RectangleF]::new(0.0, 1.0, [float]$srcWidth, [float]$srcHeight)

$g.DrawImage($srcImg, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)

$g.Dispose()
$srcImg.Dispose()

$destBmp.Save("scratch\preview_512.png", [System.Drawing.Imaging.ImageFormat]::Png)
$destBmp.Dispose()
Write-Host "Success! preview_512.png created."
