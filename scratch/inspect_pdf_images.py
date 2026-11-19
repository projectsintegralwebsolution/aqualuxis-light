import fitz  # PyMuPDF
from PIL import Image
import io
import os

doc = fitz.open('scratch/catalogue_extracted/AQUALUXIS LIGHT CATLOGUE.pdf')
os.makedirs('scratch/catalogue_audit', exist_ok=True)

print(f"Total pages: {len(doc)}")

for page_idx in range(len(doc)):
    page = doc[page_idx]
    image_list = page.get_images(full=True)
    text = page.get_text().strip().replace('\n', ' ')
    first_words = text[:80]
    print(f"\n--- Page {page_idx + 1} ({len(image_list)} images) : {first_words} ---")
    
    for img_idx, img_info in enumerate(image_list):
        xref = img_info[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        width = base_image["width"]
        height = base_image["height"]
        
        # Save thumbnail/sample to audit dir
        pil_img = Image.open(io.BytesIO(image_bytes))
        aspect = width / height if height > 0 else 1
        print(f"  img {img_idx+1}: xref {xref}, {width}x{height} (aspect: {aspect:.2f}), format {image_ext}")
