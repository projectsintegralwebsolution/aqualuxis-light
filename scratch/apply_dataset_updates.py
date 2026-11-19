import re
import json

with open('src/data/products.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Load the updates dict from update_products_dataset.py
import sys
sys.path.append('scratch')
from update_products_dataset import updates

updated_count = 0

for pid, up in updates.items():
    # Find the block for this product: "id": "pid"
    pattern = re.compile(r'(\{\s*"id":\s*"' + re.escape(pid) + r'",.*?)(,\s*"applications":)', re.DOTALL)
    match = pattern.search(text)
    if not match:
        print(f"WARNING: Could not find product with id '{pid}'")
        continue

    block = match.group(1)
    
    # 1. Update image
    new_image = up["image"]
    block = re.sub(r'"image":\s*"[^"]+"', f'"image": "{new_image}"', block, count=1)
    
    # 2. Update gallery
    new_gallery_json = json.dumps(up["gallery"], indent=6)
    # adjust indentation to match 6 spaces
    new_gallery_str = '"gallery": ' + new_gallery_json
    block = re.sub(r'"gallery":\s*\[.*?\]', new_gallery_str, block, flags=re.DOTALL, count=1)
    
    # 3. Update variants if variant_images is provided
    if "variant_images" in up:
        var_map = up["variant_images"]
        # Extract variants block
        var_match = re.search(r'"variants":\s*\[(.*?)\]', block, re.DOTALL)
        if var_match:
            v_content = var_match.group(1)
            # Find each variant object { ... }
            def replace_variant(vm):
                v_obj = vm.group(0)
                code_m = re.search(r'"code":\s*"([^"]+)"', v_obj)
                if code_m:
                    v_code = code_m.group(1)
                    if v_code in var_map:
                        v_img = var_map[v_code]
                        if '"image":' in v_obj:
                            v_obj = re.sub(r'"image":\s*"[^"]+"', f'"image": "{v_img}"', v_obj)
                        else:
                            # Insert before the closing brace
                            v_obj = re.sub(r'(\s*)\}', f',\n        "image": "{v_img}"\\1}}', v_obj)
                return v_obj
            
            new_v_content = re.sub(r'\{[^{}]+\}', replace_variant, v_content)
            block = block[:var_match.start(1)] + new_v_content + block[var_match.end(1):]

    # Replace the block in text
    text = text[:match.start(1)] + block + text[match.start(2):]
    updated_count += 1
    print(f"Updated: {pid}")

with open('src/data/products.ts', 'w', encoding='utf-8') as f:
    f.write(text)

print(f"\nSuccessfully updated {updated_count} product definitions in src/data/products.ts!")
