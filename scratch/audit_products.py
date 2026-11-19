import json, re

with open('src/data/products.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Find export const PRODUCTS: Product[] = [
start_idx = content.find('export const PRODUCTS: Product[] = [')
sub = content[start_idx:]
first_bracket = sub.find('[')
last_bracket = sub.rfind('];')
array_content = sub[first_bracket:last_bracket+1]

try:
    data = json.loads(array_content)
    print(f"Successfully loaded {len(data)} products with json.loads!")
except Exception as e:
    # Use ast or regex
    print("Parsing via regex chunks...")
    chunks = re.split(r'\{\s*"id":', array_content)
    data = []
    for chunk in chunks[1:]:
        def get_val(key):
            m = re.search(r'"' + key + r'":\s*"([^"]+)"', chunk)
            return m.group(1) if m else ""
        def get_list(key):
            m = re.search(r'"' + key + r'":\s*\[(.*?)\]', chunk, re.DOTALL)
            return re.findall(r'"([^"]+)"', m.group(1)) if m else []
        def get_variants():
            m = re.search(r'"variants":\s*\[(.*?)\]\s*,\s*"applications"', chunk, re.DOTALL)
            if not m:
                return []
            var_chunks = re.findall(r'\{([^{}]+)\}', m.group(1))
            res = []
            for vc in var_chunks:
                cm = re.search(r'"code":\s*"([^"]+)"', vc)
                im = re.search(r'"image":\s*"([^"]+)"', vc)
                res.append({"code": cm.group(1) if cm else "", "image": im.group(1) if im else ""})
            return res

        data.append({
            "id": chunk.split('"')[1] if '"' in chunk else "",
            "code": get_val("code"),
            "name": get_val("name"),
            "slug": get_val("slug"),
            "image": get_val("image"),
            "gallery": get_list("gallery"),
            "variants": get_variants()
        })

print(f"Auditing {len(data)} products:\n")
for idx, p in enumerate(data, 1):
    print(f"{idx}. [{p['code']}] {p['name']} (slug: {p['slug']})")
    print(f"   Primary: {p['image']}")
    print(f"   Gallery: {p['gallery']}")
    var_with_img = [v for v in p['variants'] if v['image']]
    print(f"   Variants: {len(p['variants'])} total, {len(var_with_img)} with custom image")
    print()
