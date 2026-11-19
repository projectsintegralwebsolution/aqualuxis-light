import os
import json
import re
from PIL import Image

with open('src/data/products.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract all products
chunks = re.split(r'\{\s*"id":', content)
results = []

for chunk in chunks[1:]:
    def get_val(key):
        m = re.search(r'"' + key + r'":\s*"([^"]+)"', chunk)
        return m.group(1) if m else ""
    def get_list(key):
        m = re.search(r'"' + key + r'":\s*\[(.*?)\]', chunk, re.DOTALL)
        return re.findall(r'"([^"]+)"', m.group(1)) if m else []

    code = get_val("code")
    name = get_val("name")
    slug = get_val("slug")
    category = get_val("category")
    img = get_val("image")
    gallery = get_list("gallery")
    
    if not code:
        continue

    results.append({
        "code": code,
        "name": name,
        "slug": slug,
        "category": category,
        "image": img,
        "gallery": gallery
    })

print(f"Loaded {len(results)} products.\n")

for p in results:
    print(f"=== [{p['code']}] {p['name']} ({p['slug']}) ===")
    print(f"  Primary: {p['image']}")
    for g in p['gallery']:
        path = "public" + g if g.startswith('/') else "public/" + g
        if os.path.exists(path):
            try:
                im = Image.open(path)
                print(f"    Gallery item: {g} -> {im.size}, mode {im.mode}")
            except Exception as e:
                print(f"    Gallery item: {g} -> ERROR {e}")
        else:
            print(f"    Gallery item: {g} -> FILE NOT FOUND!")
    print()
