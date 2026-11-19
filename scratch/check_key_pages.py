import os
from PIL import Image

# Let's inspect images on key pages
pages_to_check = [6, 7, 8, 9, 10, 11, 13, 14, 15, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 31, 32, 34, 35, 36]
photos = os.listdir('scratch/catalogue_app_photos')

for p in pages_to_check:
    p_photos = [f for f in photos if f.startswith(f"p{p}_")]
    print(f"=== Page {p} ({len(p_photos)} images) ===")
    for f in p_photos:
        im = Image.open(os.path.join('scratch/catalogue_app_photos', f))
        print(f"   {f}: {im.size}")
