import os
from PIL import Image

brain_dir = r'C:\Users\admin\.gemini\antigravity\brain\8ba9a458-02c7-47c8-a6b9-0bfa883c4f88'
for f in [
    'luxury_villa_pool_night_1795005703474.jpg',
    'saltwater_resort_lagoon_1795005716997.jpg',
    'minimalist_flush_pool_1795005727824.jpg',
    'commercial_lap_pool_1795005711609.jpg',
    'test_resort_pool_1795004034178.jpg',
    'musical_fountain_night_1795005699969.jpg',
    'stone_water_wall_lit_1795005723574.jpg',
    'umbrella_bell_fountain_atrium_1795005711804.jpg',
    'foam_geyser_plaza_fountain_1795005724596.jpg',
    'tulip_flower_garden_fountain_1795005736207.jpg',
    'ss_blade_pool_waterfall_1795005722965.jpg',
    'stepped_stone_cascade_feature_1795005735619.jpg',
    'card2_underwater_lights_1792731948268.jpg',
    'card3_led_fountain_lights_png_1792731954820.jpg',
    'card4_fountain_nozzle_1792731961016.jpg',
    'garden_landscape_lights_1792731961782.jpg',
    'wall_washer_lights_1792731968498.jpg',
    'water_curtains_night_luxury_1792731973558.jpg',
    'swimming_pool_lights_new_1792731891941.jpg'
]:
    p = os.path.join(brain_dir, f)
    if os.path.exists(p):
        im = Image.open(p)
        print(f"{f}: size={im.size}, format={im.format}")
    else:
        print(f"MISSING: {f}")
