import os
from PIL import Image

app_dir = 'scratch/catalogue_app_photos'
files = [f for f in os.listdir(app_dir) if f.startswith('p6_img7')]
print(files)
if files:
    im = Image.open(os.path.join(app_dir, files[0]))
    print("p6_img7 size:", im.size, "format:", im.format)
