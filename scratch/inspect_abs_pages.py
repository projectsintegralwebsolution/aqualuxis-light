import fitz
import os

doc = fitz.open('scratch/catalogue_extracted/AQUALUXIS LIGHT CATLOGUE.pdf')
out_dir = 'scratch/abs_images'
os.makedirs(out_dir, exist_ok=True)

for p in [5, 6, 7, 8, 9]:
    page = doc[p]
    print(f'=== PAGE {p+1} ===')
    print('TEXT:')
    print(page.get_text())
    images = page.get_images()
    print(f'Images count: {len(images)}')
    for idx, img in enumerate(images):
        xref = img[0]
        base_image = doc.extract_image(xref)
        w = base_image['width']
        h = base_image['height']
        ext = base_image['ext']
        size = len(base_image['image'])
        out_filename = f'page_{p+1}_img_{idx+1}_xref_{xref}_{w}x{h}.{ext}'
        out_path = os.path.join(out_dir, out_filename)
        with open(out_path, 'wb') as f:
            f.write(base_image['image'])
        print(f'   Saved {out_filename} ({w}x{h}, {size} bytes)')
