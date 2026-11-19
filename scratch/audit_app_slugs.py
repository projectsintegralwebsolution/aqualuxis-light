import re
with open('src/data/products.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Match each product block
matches = re.findall(r'id:\s*["\']([^"\']+)["\'].*?slug:\s*["\']([^"\']+)["\'].*?name:\s*["\']([^"\']+)["\']', content, re.DOTALL)
print(f"Total products found: {len(matches)}")
for idx, (pid, slug, name) in enumerate(matches, 1):
    print(f"{idx}. {pid} | {slug} | {name}")
