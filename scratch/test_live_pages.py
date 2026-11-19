import urllib.request
import re

products = [
    ("surface-model-swimming-pool-light-al00-al015", "Surface Model Swimming Pool Light"),
    ("abs-body-swimming-pool-light-al016-al029a", "ABS Body Swimming Pool Light"),
    ("ss-body-swimming-pool-light-al030-al031", "SS Body Swimming Pool Light"),
    ("concealed-swimming-pool-light-al032-al036", "Concealed Swimming Pool Light"),
    ("full-ss-spot-fountain-light-al037-al040", "Full SS Spot Fountain Light"),
    ("ss-spot-fountain-light-al041-al052", "SS Spot Fountain Light"),
    ("nozzle-fountain-light-al053-al057", "Nozzle Fountain Light"),
    ("adjustable-nozzle-fountain-light-al058-al061", "Adjustable Nozzle Fountain Light"),
    ("led-wall-washer-light-al062", "LED Wall Washer Light"),
    ("umbrella-bell-nozzle-al063", "Umbrella / Bell Nozzle"),
    ("foam-nozzle-al064", "Foam Nozzle"),
    ("finger-jet-nozzle-al065", "Finger Jet Nozzle"),
    ("long-foam-nozzle-al066", "Long Foam Nozzle"),
    ("geyser-nozzle-al067", "Geyser Nozzle"),
    ("ss-foam-nozzle-al068", "SS Foam Nozzle"),
    ("tulip-nozzle-al069", "Tulip Nozzle"),
    ("fan-jet-nozzle-al070", "Fan Jet Nozzle"),
    ("revolving-nozzle-al071", "Revolving Nozzle"),
    ("diamond-flower-cluster-nozzle-al072", "Diamond / Flower Cluster Nozzle"),
    ("crown-nozzle-al073", "Crown Nozzle"),
    ("flower-nozzle-al074", "Flower Nozzle"),
    ("ss-water-cascade-blade-nozzle-al075", "SS Water Cascade / Blade Nozzle"),
    ("ss-step-water-blade-nozzle-al076", "SS Step Water Blade Nozzle"),
    ("ss-water-cascade-nozzle-al077", "SS Water Cascade Nozzle"),
    ("cobra-nozzle-al078", "Cobra Nozzle"),
    ("dolphin-nozzle-al079", "Dolphin Nozzle"),
    ("acrylic-cobra-nozzle-al080", "Acrylic Cobra Nozzle"),
    ("acrylic-blade-nozzle-al081", "Acrylic Blade Nozzle"),
]

print(f"Testing {len(products)} live product detail pages on http://localhost:3002...\n")

success = 0
failed = 0

for slug, name in products:
    url = f"http://localhost:3002/products/{slug}"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        res = urllib.request.urlopen(req, timeout=5)
        status = res.status
        html = res.read().decode('utf-8')
        
        # Check that old gallery-1 is not in the page
        has_old_gallery = "gallery-1.jpg" in html
        # Check that studio image is present
        has_studio = ".jpg" in html or ".webp" in html
        
        if status == 200 and not has_old_gallery:
            print(f"✓ [200 OK] {name} (/products/{slug})")
            success += 1
        else:
            print(f"✗ [FAIL] {name} - Status: {status}, has_old_gallery: {has_old_gallery}")
            failed += 1
    except Exception as e:
        print(f"✗ [ERROR] {name} (/products/{slug}) -> {e}")
        failed += 1

print(f"\nRESULTS: {success} Passed, {failed} Failed out of {len(products)} total products.")
