import json

with open('products.json', 'r', encoding='utf-8') as f:
    products = json.load(f)

print(f'Total products in products.json: {len(products)}')
for p in products:
    print(f"ID: {p['id']} | Code: {p['code']} | Name: {p['name']} | Cat: {p['category']} | Slug: {p['slug']}")
