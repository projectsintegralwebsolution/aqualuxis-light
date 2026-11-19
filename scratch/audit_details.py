import os
import re
from PIL import Image

with open('src/data/products.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Parse products
chunks = re.split(r'\{\s*"id":', content)

product_list = []
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

    # Also parse variants with code, image, wattage, dimension
    var_matches = re.findall(r'\{\s*"code":\s*"([^"]+)",\s*"dimension":\s*"([^"]+)",\s*"wattage":\s*"([^"]+)"(?:,\s*"image":\s*"([^"]+)")?', chunk)
    variants = []
    for vm in var_matches:
        variants.append({
            "code": vm[0],
            "dimension": vm[1],
            "wattage": vm[2],
            "image": vm[3] if len(vm) > 3 and vm[3] else ""
        })

    product_list.append({
        "code": code,
        "name": name,
        "slug": slug,
        "category": category,
        "image": img,
        "gallery": gallery,
        "variants": variants
    })

print(f"Auditing {len(product_list)} products in products.ts:\n")

for p in product_list:
    print(f"Product: [{p['code']}] {p['name']}")
    print(f"Slug: {p['slug']} | Category: {p['category']}")
    print(f"Primary Image: {p['image']}")
    print(f"Gallery Images ({len(p['gallery'])}):")
    for g in p['gallery']:
        print(f"  - {g}")
    print(f"Variants ({len(p['variants'])}):")
    for v in p['variants'][:3]:
        print(f"  - {v['code']}: image={v['image'] or 'None (uses product.image)'}")
    if len(p['variants']) > 3:
        print(f"  ... and {len(p['variants']) - 3} more variants")
    print("-" * 50)
