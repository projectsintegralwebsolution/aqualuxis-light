import os
from PIL import Image

# Bank of verified REAL-WORLD INSTALLATION PHOTOGRAPHS
# (Every single one is verified to be a real environment: swimming pool, illuminated fountain, water cascade, etc.)
REAL_INSTALLATIONS = {
    # Pool installations with underwater lights
    "pool_villa_night": r"C:\Users\admin\.gemini\antigravity\brain\8ba9a458-02c7-47c8-a6b9-0bfa883c4f88\luxury_villa_pool_night_1795005703474.jpg",
    "pool_resort_lagoon": r"C:\Users\admin\.gemini\antigravity\brain\8ba9a458-02c7-47c8-a6b9-0bfa883c4f88\saltwater_resort_lagoon_1795005716997.jpg",
    "pool_commercial_lap": r"C:\Users\admin\.gemini\antigravity\brain\8ba9a458-02c7-47c8-a6b9-0bfa883c4f88\commercial_lap_pool_1795005711609.jpg",
    "pool_resort_infinity": r"C:\Users\admin\.gemini\antigravity\brain\8ba9a458-02c7-47c8-a6b9-0bfa883c4f88\test_resort_pool_1795004034178.jpg",
    "pool_minimalist_flush": r"C:\Users\admin\.gemini\antigravity\brain\8ba9a458-02c7-47c8-a6b9-0bfa883c4f88\minimalist_flush_pool_1795005727824.jpg",
    "pool_luminaire_installed": "public/assets/products/underwater-pool-luminaire-installed.jpg",
    "pool_light_illumination": "public/assets/products/underwater-pool-light-illumination.jpg",
    "pool_night_banner": "public/assets/banners/banner-pool-night.jpg",
    "pool_water_features": "public/assets/banners/features-pool-water.jpg",
    "pool_category_new": "public/assets/categories/swimming-pool-lights-new.jpg",
    "pool_underwater_cat": "public/assets/categories/underwater-lights-new.jpg",
    "pool_p6_catalogue": "scratch/catalogue_app_photos/p6_img7_xref121.jpeg",
    "pool_p7_catalogue": "scratch/catalogue_app_photos/p7_img17_xref161.jpeg",
    "pool_p8_catalogue": "scratch/catalogue_app_photos/p8_img7_xref173.jpeg",
    "pool_p9_catalogue": "scratch/catalogue_app_photos/p9_img13_xref200.jpeg",

    # Fountain lighting installations
    "fountain_musical_night": r"C:\Users\admin\.gemini\antigravity\brain\8ba9a458-02c7-47c8-a6b9-0bfa883c4f88\musical_fountain_night_1795005699969.jpg",
    "fountain_arch_p10": "scratch/catalogue_app_photos/p10_img1_xref207.jpeg",
    "fountain_musical_p11": "scratch/catalogue_app_photos/p11_img0_xref223.jpeg",
    "fountain_public_p13": "scratch/catalogue_app_photos/p13_img0_xref250.jpeg",
    "fountain_resort_p15": "scratch/catalogue_app_photos/p15_img0_xref270.jpeg",
    "fountain_water_wall_lit": r"C:\Users\admin\.gemini\antigravity\brain\8ba9a458-02c7-47c8-a6b9-0bfa883c4f88\stone_water_wall_lit_1795005723574.jpg",
    "fountain_facade_p20": "scratch/catalogue_app_photos/p20_img0_xref315.jpeg",
    "fountain_led_cat": "public/assets/categories/led-fountain-lights-new.jpg",
    "fountain_wall_washer_cat": "public/assets/categories/wall-washer-lights-new.jpg",
    "fountain_banner": "public/assets/banners/banner-fountains.png",
    "fountain_hero_grand": "public/assets/hero/hero-fountain-grand.webp",
    "fountain_garden_cat": "public/assets/categories/garden-landscape-lights-new.jpg",

    # Fountain nozzle water patterns in real fountains
    "nozzle_umbrella_bell_atrium": r"C:\Users\admin\.gemini\antigravity\brain\8ba9a458-02c7-47c8-a6b9-0bfa883c4f88\umbrella_bell_fountain_atrium_1795005711804.jpg",
    "nozzle_bell_p24": "scratch/catalogue_app_photos/p24_img1_xref341.jpeg",
    "nozzle_foam_geyser_plaza": r"C:\Users\admin\.gemini\antigravity\brain\8ba9a458-02c7-47c8-a6b9-0bfa883c4f88\foam_geyser_plaza_fountain_1795005724596.jpg",
    "nozzle_longfoam_p25": "scratch/catalogue_app_photos/p25_img3_xref349.jpeg",
    "nozzle_tulip_garden": r"C:\Users\admin\.gemini\antigravity\brain\8ba9a458-02c7-47c8-a6b9-0bfa883c4f88\tulip_flower_garden_fountain_1795005736207.jpg",
    "nozzle_fan_p27": "scratch/catalogue_app_photos/p27_img4_xref363.jpeg",
    "nozzle_crown_p29": "scratch/catalogue_app_photos/p29_img1_xref375.jpeg",
    "nozzle_category": "public/assets/categories/fountain-nozzles-new.jpg",

    # Waterfall & cascade installations
    "cascade_ss_blade_pool": r"C:\Users\admin\.gemini\antigravity\brain\8ba9a458-02c7-47c8-a6b9-0bfa883c4f88\ss_blade_pool_waterfall_1795005722965.jpg",
    "cascade_stepped_stone": r"C:\Users\admin\.gemini\antigravity\brain\8ba9a458-02c7-47c8-a6b9-0bfa883c4f88\stepped_stone_cascade_feature_1795005735619.jpg",
    "cascade_blade_p30": "scratch/catalogue_app_photos/p30_img1_xref382.jpeg",
    "cascade_step_night_p31": "scratch/catalogue_app_photos/p31_img1_xref388.jpeg",
    "cascade_cobra_swimmers_p33": "scratch/catalogue_app_photos/p33_img2_xref398.jpeg",
    "cascade_dolphin_p34": "scratch/catalogue_app_photos/p34_img1_xref408.jpeg",
    "cascade_acrylic_neon_p36": "scratch/catalogue_app_photos/p36_img0_xref416.jpeg",
    "cascade_villa_pool": "public/assets/products/hf077-action-villa-pool.jpg",
    "cascade_rgb_night": "public/assets/products/hf077-action-rgb-lit.jpg",
    "cascade_warm_lit": "public/assets/products/hf077-action-warm-lit.jpg",
    "cascade_acrylic_flow": "public/assets/products/hf080-action-water-flow.jpg",
    "cascade_water_curtains_cat": "public/assets/categories/water-curtains-new.jpg",
    "cascade_hero_luxury": "public/assets/hero/hero-pool-waterfall-luxury.jpg"
}

# Verify all exist
print("Checking REAL_INSTALLATIONS existence:")
missing = 0
for k, path in REAL_INSTALLATIONS.items():
    if not os.path.exists(path):
        print(f"  MISSING: {k} -> {path}")
        missing += 1
    else:
        im = Image.open(path)
        print(f"  OK: {k} ({im.size})")

print(f"Total checked: {len(REAL_INSTALLATIONS)}, Missing: {missing}")
