import os
from PIL import Image

app_dir = 'scratch/catalogue_app_photos'
files = sorted(os.listdir(app_dir))

for f in files:
    try:
        im = Image.open(os.path.join(app_dir, f))
        w, h = im.size
        # Filter for photos (typically larger dimensions, e.g. w > 300 and h > 200)
        if w >= 350 and h >= 220:
            print(f"{f}: {w}x{h}, aspect={w/h:.2f}")
    except Exception as e:
        pass
