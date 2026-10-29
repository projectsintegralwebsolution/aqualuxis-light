Add-Type -AssemblyName System.Drawing

# Test 1: From uploaded JPEG (White background)
$srcImgPath = "C:\Users\admin\.gemini\antigravity\brain\8ba9a458-02c7-47c8-a6b9-0bfa883c4f88\.user_uploaded\media_1793001609999_972fb587.jpg"
$srcImg = [System.Drawing.Bitmap]::FromFile($srcImgPath)
$srcWidth = [int]$srcImg.Width
$srcHeight = [int]($srcImg.Height - 1)

foreach ($size in @(16, 32, 48, 180, 512)) {
    $destBmp = New-Object System.Drawing.Bitmap($size, $size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($destBmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $g.Clear([System.Drawing.Color]::White)

    $targetWidth = [int]($size * 0.94)
    $targetHeight = [int]($targetWidth * ($srcHeight / $srcWidth))
    $destX = [int](($size - $targetWidth) / 2)
    $destY = [int](($size - $targetHeight) / 2)

    $destRect = [System.Drawing.RectangleF]::new([float]$destX, [float]$destY, [float]$targetWidth, [float]$targetHeight)
    $srcRect = [System.Drawing.RectangleF]::new(0.0, 1.0, [float]$srcWidth, [float]$srcHeight)

    $g.DrawImage($srcImg, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    
    $destBmp.Save("scratch\favicon_white_$size.png", [System.Drawing.Imaging.ImageFormat]::Png)
    $destBmp.Dispose()
}
$srcImg.Dispose()
Write-Host "White favicons generated."

# Test 2: Transparent with transparent logo
$srcTransPath = "c:\Users\admin\Downloads\Nutan\AntiGravity_Projects\Aqualuxis\public\assets\branding\aqualuxis-logo-transparent.png"
$srcTransImg = [System.Drawing.Bitmap]::FromFile($srcTransPath)
# Emblem is in [0, 218] x [0, 185]
$srcRectTrans = [System.Drawing.RectangleF]::new(0.0, 0.0, 222.0, 185.0)

foreach ($size in @(16, 32, 48, 180, 512)) {
    $destBmp = New-Object System.Drawing.Bitmap($size, $size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($destBmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $g.Clear([System.Drawing.Color]::Transparent)

    $targetWidth = [int]($size * 0.94)
    $targetHeight = [int]($targetWidth * (185.0 / 222.0))
    $destX = [int](($size - $targetWidth) / 2)
    $destY = [int](($size - $targetHeight) / 2)

    $destRect = [System.Drawing.RectangleF]::new([float]$destX, [float]$destY, [float]$targetWidth, [float]$targetHeight)

    $g.DrawImage($srcTransImg, $destRect, $srcRectTrans, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    
    $destBmp.Save("scratch\favicon_trans_$size.png", [System.Drawing.Imaging.ImageFormat]::Png)
    $destBmp.Dispose()
}
$srcTransImg.Dispose()
Write-Host "Transparent favicons generated."
