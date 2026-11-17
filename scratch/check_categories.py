with open('src/data/products.ts', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = re.findall(r'"id":\s*"([^"]+)",\s*"name":\s*"([^"]+)",[\s\S]*?"productCount":\s*(\d+)', text)
for m in matches:
    print(f"Category: {m[0]} | Name: {m[1]} | Product Count: {m[2]}")
