import os
import glob
from PIL import Image

# Let's inspect the files in public/assets/products for each of the 28 products
products_to_check = [
    "al00-surface-pool-light",
    "al016-abs-pool-light",
    "al030-ss-pool-light",
    "al032-concealed-pool-light",
    "al037-full-ss-spot-fountain-light",
    "al041-ss-spot-fountain-light",
    "al053-nozzle-fountain-light",
    "al058-adjustable-nozzle-fountain-light",
    "al062-led-wall-washer-light",
    "al063-umbrella-bell-nozzle",
    "al064-foam-nozzle",
    "al065-finger-jet-nozzle",
    "al066-long-foam-nozzle",
    "al067-geyser-nozzle",
    "al068-ss-foam-nozzle",
    "al069-tulip-nozzle",
    "al070-fan-jet-nozzle",
    "al071-revolving-nozzle",
    "al072-diamond-flower-cluster-nozzle",
    "al073-crown-nozzle",
    "al074-flower-nozzle",
    "al075-ss-water-cascade-blade-nozzle",
    "al076-ss-step-water-blade-nozzle",
    "al077-ss-water-cascade-nozzle",
    "al078-cobra-nozzle",
    "al079-dolphin-nozzle",
    "al080-acrylic-cobra-nozzle",
    "al081-acrylic-blade-nozzle",
]

for p in products_to_check:
    matches = glob.glob(f"public/assets/products/{p}*")
    print(f"=== {p} ({len(matches)} files) ===")
    for m in sorted(matches):
        im = Image.open(m)
        print(f"  {os.path.basename(m)}: {im.size}, aspect={im.width/im.height:.2f}")
    print()
