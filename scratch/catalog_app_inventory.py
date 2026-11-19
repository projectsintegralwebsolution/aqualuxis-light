import os
from PIL import Image

app_dir = 'scratch/catalogue_app_photos'
files = sorted(os.listdir(app_dir))

print(f"Total files in catalogue_app_photos: {len(files)}")
# Let's inspect pages from 6 to 36
for p in range(6, 37):
    p_files = [f for f in files if f.startswith(f"p{p}_")]
    if p_files:
        info = []
        for f in p_files:
            try:
                im = Image.open(os.path.join(app_dir, f))
                w, h = im.size
                info.append(f"{f}({w}x{h})")
            except Exception as e:
                pass
        print(f"Page {p:02d}: {', '.join(info)}")
