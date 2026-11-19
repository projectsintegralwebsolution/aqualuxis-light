import json, re

txt = open('src/data/products.ts', 'r', encoding='utf-8').read()

# We can parse the PRODUCTS array by writing a small script that extracts specifications and variants
import re

specs_blocks = re.findall(r'"specifications":\s*\{([^}]+)\}', txt)
variants_blocks = re.findall(r'"wattage":\s*"([^"]+)"', txt)
dimensions_blocks = re.findall(r'"dimension":\s*"([^"]+)"', txt)

print(f"Total specs blocks: {len(specs_blocks)}")
print(f"Total wattage entries: {len(variants_blocks)}")
print(f"Total dimension entries: {len(dimensions_blocks)}")

wattages = set()
for w in variants_blocks:
    for part in w.split('/'):
        clean = part.replace('1*3=', '').replace('1*3 =', '').strip()
        if clean: wattages.add(clean)

print("Unique Wattages:", sorted(list(wattages)))

materials = set()
for b in specs_blocks:
    m = re.search(r'"Body Material":\s*"([^"]+)"', b)
    if m:
        for mat in m.group(1).split('/'):
            materials.add(mat.strip())
print("Unique Materials:", sorted(list(materials)))

colors = set()
for b in specs_blocks:
    m = re.search(r'"Color Options":\s*"([^"]+)"', b)
    if m:
        for c in re.split(r'[,|→]', m.group(1)):
            c_clean = c.strip()
            if c_clean: colors.add(c_clean)
print("Unique Colors:", sorted(list(colors)))

beam_angles = set()
for b in specs_blocks:
    m = re.search(r'"Beam Angle":\s*"([^"]+)"', b)
    if m:
        for a in m.group(1).split(','):
            a_clean = a.strip()
            if a_clean: beam_angles.add(a_clean)
print("Unique Beam Angles:", sorted(list(beam_angles)))

ip_ratings = set()
for b in specs_blocks:
    m = re.search(r'"Protection Class":\s*"([^"]+)"', b)
    if m:
        ip_ratings.add(m.group(1).strip())
print("Unique IP Ratings:", sorted(list(ip_ratings)))
