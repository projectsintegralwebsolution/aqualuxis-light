import subprocess

# Read original 4ad4af8 version of products.ts
orig_content = subprocess.check_output(['git', 'show', '4ad4af8:src/data/products.ts'], text=True, encoding='utf-8')

# In orig_content:
# It has PRODUCTS and CATEGORIES.
# But CATALOGUES had the two old items:
# export const CATALOGUES: CatalogueItem[] = [ ... ];

# In Request 9, CATALOGUES was updated to:
new_catalogues = """export const CATALOGUES: CatalogueItem[] = [
  {
    "id": "complete-catalogue",
    "title": "AQUALUXIS LIGHT – Complete Product Catalogue",
    "filename": "AQUALUXIS LIGHT CATLOGUE.pdf",
    "cover": "/assets/catalogue/aqualuxis-light-catalogue-cover.jpg",
    "file": "/assets/catalogue/aqualuxis-light-catalogue.pdf",
    "pages": 37,
    "fileSize": "10.5 MB",
    "description": "Explore our complete range of swimming pool lights, fountain lights, LED wall washers, fountain nozzles and water cascade products. View product models and technical specifications in our latest catalogue."
  }
];"""

import re

# Replace CATALOGUES block in orig_content with new_catalogues
pattern = r'export const CATALOGUES: CatalogueItem\[\] = \[[\s\S]*?\];'
reverted_content = re.sub(pattern, new_catalogues, orig_content)

with open('src/data/products.ts', 'w', encoding='utf-8') as f:
    f.write(reverted_content)

print("Successfully reverted PRODUCTS and CATEGORIES in src/data/products.ts while keeping Request 9 CATALOGUES!")
