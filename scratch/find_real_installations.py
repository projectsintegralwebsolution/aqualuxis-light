import os
from PIL import Image

# Let's inspect which photos in catalogue are genuine full-scene installation photos
# Full scene installation photos typically have varied pixel values across the entire frame (no large pure white borders)
app_dir = 'scratch/catalogue_app_photos'
files = sorted(os.listdir(app_dir))

def is_installation_scene(im_path):
    im = Image.open(im_path)
    if im.mode != 'RGB':
        im = im.convert('RGB')
    w, h = im.size
    if w < 400 or h < 250:
        return False, "too small"
    
    # Check corners and borders: if borders are all near pure white (e.g. > 245), it is likely a product cutout!
    pixels = im.load()
    border_pixels = []
    for x in range(0, w, max(1, w//20)):
        border_pixels.append(pixels[x, 5])
        border_pixels.append(pixels[x, h - 5])
    for y in range(0, h, max(1, h//20)):
        border_pixels.append(pixels[5, y])
        border_pixels.append(pixels[w - 5, y])
    
    white_borders = sum(1 for (r, g, b) in border_pixels if r > 240 and g > 240 and b > 240)
    white_ratio = white_borders / len(border_pixels)
    if white_ratio > 0.4:
        return False, f"likely product cutout on white (white_border={white_ratio:.2f})"
    
    return True, f"installation scene (w={w}, h={h}, white_border={white_ratio:.2f})"

for f in files:
    if f.endswith(('.jpeg', '.jpg', '.png')):
        try:
            ok, reason = is_installation_scene(os.path.join(app_dir, f))
            if ok:
                print(f"{f}: {reason}")
        except Exception as e:
            pass
