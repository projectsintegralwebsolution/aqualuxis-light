import pymupdf
import os

doc = pymupdf.open('scratch/catalogue_extracted/AQUALUXIS LIGHT CATLOGUE.pdf')
os.makedirs('scratch/extracted_images', exist_ok=True)

# For each page from 4 to 36 (index 3 to 35)
for pno in range(3, 36):
    page = doc[pno]
    il = page.get_images()
    print(f'Page {pno+1}: {len(il)} images')
    for i, img_info in enumerate(il):
        xref = img_info[0]
        base_img = doc.extract_image(xref)
        w, h, ext = base_img['width'], base_img['height'], base_img['ext']
        rects = page.get_image_rects(xref)
        r_str = f"({rects[0].x0:.1f},{rects[0].y0:.1f},{rects[0].x1:.1f},{rects[0].y1:.1f})" if rects else "none"
        filename = f"p{pno+1}_img{i+1}_xref{xref}_{w}x{h}.{ext}"
        filepath = os.path.join('scratch/extracted_images', filename)
        with open(filepath, 'wb') as f:
            f.write(base_img['image'])
        print(f"   saved {filename} at {r_str}")
