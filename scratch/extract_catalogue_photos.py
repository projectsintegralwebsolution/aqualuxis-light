import fitz, os
from PIL import Image

doc = fitz.open('scratch/catalogue_extracted/AQUALUXIS LIGHT CATLOGUE.pdf')
os.makedirs('scratch/catalogue_app_photos', exist_ok=True)

# Look for raster images with width > 250 and height > 150 that are likely photos
candidates = []
for p_no in range(len(doc)):
    page = doc[p_no]
    for idx, img in enumerate(page.get_images()):
        xref = img[0]
        base = doc.extract_image(xref)
        w = base['width']
        h = base['height']
        if w >= 250 and h >= 150:
            ext = base['ext']
            fname = f"scratch/catalogue_app_photos/p{p_no+1}_img{idx}_xref{xref}.{ext}"
            with open(fname, 'wb') as f:
                f.write(base['image'])
            candidates.append((p_no+1, xref, w, h, fname))

print(f"Extracted {len(candidates)} candidate images from catalogue:")
for p, xref, w, h, fname in candidates:
    print(f"  Page {p}: xref={xref}, size={w}x{h} -> {fname}")
