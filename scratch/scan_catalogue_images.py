import fitz, os

doc = fitz.open('scratch/catalogue_extracted/AQUALUXIS LIGHT CATLOGUE.pdf')
os.makedirs('scratch/catalogue_all_images', exist_ok=True)

print(f"Total pages: {len(doc)}")
for p_no in range(len(doc)):
    page = doc[p_no]
    ilist = page.get_images()
    text = page.get_text()
    title = ""
    for line in text.split('\n'):
        line = line.strip()
        if len(line) > 3 and not line.isdigit() and 'PAGE' not in line.upper():
            title = line
            break
    print(f"Page {p_no+1} ({title}): {len(ilist)} images")
    for idx, img in enumerate(ilist):
        xref = img[0]
        base = doc.extract_image(xref)
        rects = page.get_image_rects(xref)
        print(f"  img {idx} (xref {xref}): {base['width']}x{base['height']} {base['ext']} rects={rects}")
