import json, re
from product_applications_specs import PRODUCTS_APPLICATION_SPECS

with open('src/data/products.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# We need to update "applications": [ ... ] for each product
for slug, spec in PRODUCTS_APPLICATION_SPECS.items():
    new_titles = [card['title'] for card in spec['cards']]
    json_titles = json.dumps(new_titles, indent=6)
    # json_titles looks like:
    # [\n      "Title 1",\n      "Title 2",\n      ... ]
    
    # Find the product block by its slug
    slug_pattern = re.compile(rf'("slug":\s*"{re.escape(slug)}".*?"applications":\s*)\[[^\]]*\]', re.DOTALL)
    match = slug_pattern.search(content)
    if match:
        content = slug_pattern.sub(rf'\g<1>{json_titles}', content, count=1)
        print(f"Updated applications for {slug}")
    else:
        print(f"WARNING: slug {slug} not matched in products.ts")

with open('src/data/products.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done updating src/data/products.ts!")
