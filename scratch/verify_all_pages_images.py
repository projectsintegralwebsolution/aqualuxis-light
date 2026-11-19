import os
import json
import re
from PIL import Image

with open('src/data/products.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Parse products
chunks = re.split(r'\{\s*"id":', content)

forbidden_keywords = [
    "pool-water",
    "night-luxury",
    "installed",
    "villa-pool",
    "action-",
    "fountain-grand",
    "banner-fountains"
]

audit_results = []

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

    # Variants
    var_matches = re.findall(r'\{\s*"code":\s*"([^"]+)",\s*"dimension":\s*"([^"]+)",\s*"wattage":\s*"([^"]+)"(?:,\s*"image":\s*"([^"]+)")?', chunk)
    variants = []
    for vm in var_matches:
        variants.append({
            "code": vm[0],
            "dimension": vm[1],
            "wattage": vm[2],
            "image": vm[3] if len(vm) > 3 and vm[3] else ""
        })

    # Check images existence and validity
    all_imgs = [img] + gallery + [v["image"] for v in variants if v["image"]]
    issues = []
    for im_path in all_imgs:
        if not im_path:
            continue
        full_path = os.path.join("public", im_path.lstrip("/"))
        if not os.path.exists(full_path):
            issues.append(f"Missing file: {im_path}")
        else:
            for kw in forbidden_keywords:
                if kw in im_path:
                    issues.append(f"Forbidden installation photo keyword '{kw}' found in product image: {im_path}")

    audit_results.append({
        "code": code,
        "name": name,
        "slug": slug,
        "category": category,
        "image": img,
        "gallery_count": len(gallery),
        "gallery": gallery,
        "variants_count": len(variants),
        "variants_with_img": len([v for v in variants if v["image"]]),
        "issues": issues
    })

print(f"AUDIT SUMMARY FOR {len(audit_results)} PRODUCTS:\n")
total_issues = 0
for r in audit_results:
    status = "PASS" if not r["issues"] else "FAIL"
    if r["issues"]:
        total_issues += len(r["issues"])
    print(f"[{status}] [{r['code']}] {r['name']} ({r['slug']})")
    print(f"       Primary: {r['image']}")
    print(f"       Gallery ({r['gallery_count']} items): {r['gallery']}")
    if r["variants_count"] > 0:
        print(f"       Variants: {r['variants_count']} total, {r['variants_with_img']} with model images")
    if r["issues"]:
        print(f"       ISSUES: {r['issues']}")
    print()

print(f"TOTAL ISSUES DETECTED: {total_issues}")
