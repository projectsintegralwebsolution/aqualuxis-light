import urllib.request

base = 'http://localhost:3002'

urls = [
    '/',
    '/products',
    '/pool-lighting',
    '/fountain-lighting',
    '/water-feature-lighting',
    '/catalogue',
    '/about-us',
    '/contact-us',
    '/applications',
    '/gallery',
    # Original products
    '/products/surface-model-swimming-pool-light-hf00-hf05',
    '/products/abs-body-swimming-pool-light-hf06-hf010',
    '/products/ultra-slim-15mm-abs-swimming-pool-light-hf012',
    '/products/heavy-duty-11-inch-abs-swimming-pool-light-hf011-hf013',
    '/products/custom-color-rim-abs-swimming-pool-light-hf018',
    '/products/full-ss-body-swimming-pool-light-hf020-hf021',
    '/products/ss-blue-white-rim-swimming-pool-light-hf022',
    '/products/concealed-in-ground-swimming-pool-light-hf023-hf027',
    '/products/ss-spot-fountain-light-hf039-hf042',
    '/products/spot-fountain-stand-light-hf043-hf047',
    '/products/nozzle-fountain-light-center-hole-hf052-hf057',
    '/products/adjustable-center-hole-nozzle-fountain-light-hf058-hf061',
    '/products/led-architectural-wall-washer-light-hf062',
    '/products/ss-water-cascade-nozzle-hf076',
    '/products/stainless-steel-cobra-waterfall-nozzle-hf078',
    '/products/acrylic-cobra-nozzle-illuminated-hf080',
    '/products/umbrella-bell-nozzle-hf063',
    '/products/foam-jet-fountain-nozzle-hf064',
    '/products/finger-jet-multi-jet-fountain-nozzle-hf065',
    '/products/revolving-rotational-fountain-nozzle-hf072',
    '/products/step-water-blade-nozzle-hf077',
]

print("Testing 200 OK routes after revert...")
success_count = 0
for u in urls:
    try:
        req = urllib.request.Request(base + u, headers={'User-Agent': 'Mozilla/5.0'})
        res = urllib.request.urlopen(req)
        if res.status == 200:
            success_count += 1
        else:
            print(f"FAILED {u}: Status {res.status}")
    except Exception as e:
        print(f"ERROR {u}: {e}")

print(f"Total checked: {len(urls)} | Success: {success_count}")
