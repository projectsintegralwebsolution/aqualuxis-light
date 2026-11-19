import os, sys
from PIL import Image

sys.path.insert(0, 'scratch')
from product_applications_specs import PRODUCTS_APPLICATION_SPECS

GENERIC_IMAGES = [
    '/assets/hero/hero-pool-night-luxury.webp',
    '/assets/hero/hero-fountain-grand.webp',
    '/assets/banners/features-pool-water.jpg',
    '/assets/products/hf077-action-villa-pool.jpg'
]

print("=== VERIFYING ALL PRODUCT APPLICATIONS ===")
total_products = len(PRODUCTS_APPLICATION_SPECS)
print(f"Total products mapped: {total_products}")

all_ok = True
total_cards = 0
unique_images = set()

for idx, (slug, data) in enumerate(PRODUCTS_APPLICATION_SPECS.items(), 1):
    cards = data["cards"]
    family = data["family"]
    if len(cards) != 4:
        print(f"ERROR [{slug}]: expected 4 cards, found {len(cards)}")
        all_ok = False
        continue

    total_cards += len(cards)
    for c_idx, card in enumerate(cards, 1):
        img_rel = f"/assets/applications/{slug}-app-{c_idx}.jpg"
        img_disk = f"public{img_rel}"
        
        # Check forbidden generic images
        if img_rel in GENERIC_IMAGES:
            print(f"ERROR [{slug}]: card {c_idx} uses generic image {img_rel}")
            all_ok = False

        # Check disk existence
        if not os.path.exists(img_disk):
            print(f"ERROR [{slug}]: image file missing on disk: {img_disk}")
            all_ok = False
            continue

        try:
            im = Image.open(img_disk)
            w, h = im.size
            if w < 600 or h < 300:
                print(f"WARNING [{slug}]: image {img_disk} is low res ({w}x{h})")
        except Exception as e:
            print(f"ERROR [{slug}]: cannot open image {img_disk}: {e}")
            all_ok = False

        unique_images.add(img_rel)

        # Check title and desc
        if not card["title"] or len(card["title"]) < 5:
            print(f"ERROR [{slug}]: card {c_idx} has invalid title: {card['title']}")
            all_ok = False
        if not card["desc"] or len(card["desc"]) < 15:
            print(f"ERROR [{slug}]: card {c_idx} has invalid desc: {card['desc']}")
            all_ok = False

print(f"\nVerification Summary:")
print(f"  Products verified: {total_products}")
print(f"  Total application cards: {total_cards}")
print(f"  Total unique images: {len(unique_images)}")
if all_ok:
    print("SUCCESS: ALL 28 PRODUCTS HAVE 4 VERIFIED PRODUCT-SPECIFIC APPLICATION CARDS!")
else:
    print("FAILED: Some errors were detected.")
