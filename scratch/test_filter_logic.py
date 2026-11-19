import json, re

# Let's verify that selecting each option returns matching products
txt = open('src/data/products.ts', 'r', encoding='utf-8').read()

# Let's test matches for 9W, SS 304, IP68, etc.
test_filters = {
    'wattages': ['9W', '9 Watt'],
    'materials': ['SS 304'],
    'colours': ['Blue', 'RGB'],
    'beam_angles': ['30°', '45°'],
    'ip_ratings': ['IP68']
}

print("Testing filter matching logic...")
# Parse products from products.ts
matches = re.findall(r'"id":\s*"([^"]+)",\s*"code":\s*"([^"]+)",\s*"name":\s*"([^"]+)",.*?category":\s*"([^"]+)",.*?subCategory":\s*"([^"]+)"', txt, re.DOTALL)
print(f"Total products found: {len(matches)}")
