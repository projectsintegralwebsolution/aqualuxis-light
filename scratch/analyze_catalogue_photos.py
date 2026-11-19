import os
from PIL import Image

photos = os.listdir('scratch/catalogue_app_photos')
print(f"Total extracted photos: {len(photos)}")

# Check sizes and properties
details = []
for p in photos:
    fpath = os.path.join('scratch/catalogue_app_photos', p)
    try:
        im = Image.open(fpath)
        details.append((p, im.size, im.format))
    except Exception as e:
        pass

# Group by page
by_page = {}
for p, sz, fmt in details:
    page = p.split('_')[0]
    if page not in by_page:
        by_page[page] = []
    by_page[page].append((p, sz))

for page in sorted(by_page.keys(), key=lambda x: int(x[1:])):
    print(f"{page}: {len(by_page[page])} photos")
    for fname, sz in by_page[page]:
        if sz[0] >= 400 and sz[1] >= 250:
            print(f"   {fname}: {sz}")
