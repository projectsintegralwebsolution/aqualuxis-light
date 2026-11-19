import fitz
from PIL import Image
import io
import os

doc = fitz.open('scratch/catalogue_extracted/AQUALUXIS LIGHT CATLOGUE.pdf')
out_dir = 'scratch/pdf_images'
os.makedirs(out_dir, exist_ok=True)

html_rows = []

for page_idx in range(len(doc)):
    page = doc[page_idx]
    image_list = page.get_images(full=True)
    text = page.get_text().strip().replace('\n', ' ')
    
    for img_idx, img_info in enumerate(image_list):
        xref = img_info[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        width = base_image["width"]
        height = base_image["height"]
        ext = base_image["ext"]
        
        fname = f"p{page_idx+1}_xref{xref}_{width}x{height}.{ext}"
        fpath = os.path.join(out_dir, fname)
        with open(fpath, "wb") as f:
            f.write(image_bytes)
            
        html_rows.append(f"""
        <div style="display:inline-block; margin:8px; border:1px solid #ccc; padding:5px; text-align:center; vertical-align:top; width:220px; font-family:sans-serif; font-size:11px;">
            <img src="{fname}" style="max-width:200px; max-height:160px; object-fit:contain; background:#f5f5f5;" />
            <div><b>Page {page_idx+1} (xref {xref})</b></div>
            <div>{width}x{height} ({ext})</div>
            <div style="font-size:10px; color:#555; height:36px; overflow:hidden;">{text[:80]}</div>
        </div>
        """)

html_content = f"""
<!DOCTYPE html>
<html>
<head><title>Catalogue PDF Images</title></head>
<body>
<h1>Catalogue PDF Images ({len(html_rows)} total)</h1>
<div>
{"".join(html_rows)}
</div>
</body>
</html>
"""

with open(os.path.join(out_dir, "index.html"), "w", encoding="utf-8") as f:
    f.write(html_content)

print(f"Extracted {len(html_rows)} images to {out_dir}/index.html")
