import urllib.request
import urllib.error

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
    # All 28 products
    '/products/surface-model-swimming-pool-light-al00-al015',
    '/products/abs-body-swimming-pool-light-al016-al029a',
    '/products/ss-body-swimming-pool-light-al030-al031',
    '/products/concealed-swimming-pool-light-al032-al036',
    '/products/full-ss-spot-fountain-light-al037-al040',
    '/products/ss-spot-fountain-light-al041-al052',
    '/products/nozzle-fountain-light-al053-al057',
    '/products/adjustable-nozzle-fountain-light-al058-al061',
    '/products/led-wall-washer-light-al062',
    '/products/umbrella-bell-nozzle-al063',
    '/products/foam-nozzle-al064',
    '/products/finger-jet-nozzle-al065',
    '/products/long-foam-nozzle-al066',
    '/products/geyser-nozzle-al067',
    '/products/ss-foam-nozzle-al068',
    '/products/tulip-nozzle-al069',
    '/products/fan-jet-nozzle-al070',
    '/products/revolving-nozzle-al071',
    '/products/diamond-flower-cluster-nozzle-al072',
    '/products/crown-nozzle-al073',
    '/products/flower-nozzle-al074',
    '/products/ss-water-cascade-blade-nozzle-al075',
    '/products/ss-step-water-blade-nozzle-al076',
    '/products/ss-water-cascade-nozzle-al077',
    '/products/cobra-nozzle-al078',
    '/products/dolphin-nozzle-al079',
    '/products/acrylic-cobra-nozzle-al080',
    '/products/acrylic-blade-nozzle-al081',
]

print("Testing 200 OK routes...")
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

# Test Redirects
print("\nTesting 308 permanent redirects from old slugs...")
old_slugs = [
    '/products/surface-model-swimming-pool-light-hf00-hf05',
    '/products/abs-body-swimming-pool-light-hf06-hf010',
    '/products/full-ss-body-swimming-pool-light-hf020-hf021',
    '/products/nozzle-fountain-light-center-hole-hf052-hf057',
    '/products/ss-water-cascade-nozzle-hf076',
]

class NoRedirectHandler(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        print(f"  Redirected code {code}: {req.full_url} -> {newurl}")
        return None

opener = urllib.request.build_opener(NoRedirectHandler)

for o in old_slugs:
    try:
        opener.open(base + o)
    except urllib.error.HTTPError as e:
        print(f"  HTTPError {e.code} for {o} (Redirect handled)")
    except Exception as e:
        print(f"  Result: {e}")

print("\nVerification complete!")
