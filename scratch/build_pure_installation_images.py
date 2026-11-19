import os
from PIL import Image, ImageEnhance, ImageFilter

out_dir = 'public/assets/applications'
os.makedirs(out_dir, exist_ok=True)

TARGET_SIZE = (800, 450)

# Bank of verified REAL-WORLD INSTALLATION PHOTOGRAPHS
REAL_ASSETS = {
    "pool_villa_night": r"C:\Users\admin\.gemini\antigravity\brain\8ba9a458-02c7-47c8-a6b9-0bfa883c4f88\luxury_villa_pool_night_1795005703474.jpg",
    "pool_resort_lagoon": r"C:\Users\admin\.gemini\antigravity\brain\8ba9a458-02c7-47c8-a6b9-0bfa883c4f88\saltwater_resort_lagoon_1795005716997.jpg",
    "pool_commercial_lap": r"C:\Users\admin\.gemini\antigravity\brain\8ba9a458-02c7-47c8-a6b9-0bfa883c4f88\commercial_lap_pool_1795005711609.jpg",
    "pool_resort_infinity": r"C:\Users\admin\.gemini\antigravity\brain\8ba9a458-02c7-47c8-a6b9-0bfa883c4f88\test_resort_pool_1795004034178.jpg",
    "pool_minimalist_flush": r"C:\Users\admin\.gemini\antigravity\brain\8ba9a458-02c7-47c8-a6b9-0bfa883c4f88\minimalist_flush_pool_1795005727824.jpg",
    "pool_luminaire_installed": "public/assets/products/underwater-pool-luminaire-installed.jpg",
    "pool_light_illumination": "public/assets/products/underwater-pool-light-illumination.jpg",
    "pool_night_banner": "public/assets/banners/banner-pool-night.jpg",
    "pool_category_new": "public/assets/categories/swimming-pool-lights-new.jpg",
    "pool_underwater_cat": "public/assets/categories/underwater-lights-new.jpg",
    "pool_p6_catalogue": "scratch/catalogue_app_photos/p6_img7_xref121.jpeg",
    "pool_p7_catalogue": "scratch/catalogue_app_photos/p7_img17_xref161.jpeg",
    "pool_p8_catalogue": "scratch/catalogue_app_photos/p8_img7_xref173.jpeg",
    "pool_p9_catalogue": "scratch/catalogue_app_photos/p9_img13_xref200.jpeg",

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

    "nozzle_umbrella_bell_atrium": r"C:\Users\admin\.gemini\antigravity\brain\8ba9a458-02c7-47c8-a6b9-0bfa883c4f88\umbrella_bell_fountain_atrium_1795005711804.jpg",
    "nozzle_bell_p24": "scratch/catalogue_app_photos/p24_img1_xref341.jpeg",
    "nozzle_foam_geyser_plaza": r"C:\Users\admin\.gemini\antigravity\brain\8ba9a458-02c7-47c8-a6b9-0bfa883c4f88\foam_geyser_plaza_fountain_1795005724596.jpg",
    "nozzle_longfoam_p25": "scratch/catalogue_app_photos/p25_img3_xref349.jpeg",
    "nozzle_tulip_garden": r"C:\Users\admin\.gemini\antigravity\brain\8ba9a458-02c7-47c8-a6b9-0bfa883c4f88\tulip_flower_garden_fountain_1795005736207.jpg",
    "nozzle_fan_p27": "scratch/catalogue_app_photos/p27_img4_xref363.jpeg",
    "nozzle_crown_p29": "scratch/catalogue_app_photos/p29_img1_xref375.jpeg",
    "nozzle_category": "public/assets/categories/fountain-nozzles-new.jpg",

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

def crop_and_save(src_key, crop_box, out_name):
    src_path = REAL_ASSETS[src_key]
    if not os.path.exists(src_path):
        print(f"ERROR: missing {src_path}")
        return False
    
    im = Image.open(src_path)
    if im.mode != 'RGB':
        im = im.convert('RGB')
    
    w, h = im.size
    if crop_box:
        l = int(crop_box[0] * w)
        t = int(crop_box[1] * h)
        r = int(crop_box[2] * w)
        b = int(crop_box[3] * h)
        l = max(0, min(l, w - 10))
        t = max(0, min(t, h - 10))
        r = max(l + 10, min(r, w))
        b = max(t + 10, min(b, h))
        im = im.crop((l, t, r, b))
    
    # 16:9 crop
    w, h = im.size
    target_aspect = 16.0 / 9.0
    current_aspect = w / h

    if current_aspect > target_aspect:
        new_w = int(h * target_aspect)
        offset = (w - new_w) // 2
        im = im.crop((offset, 0, offset + new_w, h))
    elif current_aspect < target_aspect:
        new_h = int(w / target_aspect)
        offset = (h - new_h) // 2
        im = im.crop((0, offset, w, offset + new_h))

    im = im.resize(TARGET_SIZE, Image.Resampling.LANCZOS)
    
    # Subtle enhancement for sharp contrast and vibrant colors
    enh = ImageEnhance.Contrast(im)
    im = enh.enhance(1.06)
    enh_col = ImageEnhance.Color(im)
    im = enh_col.enhance(1.04)
    im = im.filter(ImageFilter.UnsharpMask(radius=1.2, percent=110, threshold=3))

    out_path = os.path.join(out_dir, out_name)
    im.save(out_path, format='JPEG', quality=92)
    return True

# Complete 112 mapping table: ONLY REAL INSTALLATION PHOTOGRAPHS
PRODUCT_IMAGE_MAPPINGS = [
    # 1. Surface Pool Light
    ("pool_villa_night", None, "surface-model-swimming-pool-light-al00-al015-app-1.jpg"),
    ("pool_resort_lagoon", None, "surface-model-swimming-pool-light-al00-al015-app-2.jpg"),
    ("pool_commercial_lap", None, "surface-model-swimming-pool-light-al00-al015-app-3.jpg"),
    ("pool_resort_infinity", None, "surface-model-swimming-pool-light-al00-al015-app-4.jpg"),

    # 2. ABS Body Pool Light
    ("pool_p7_catalogue", None, "abs-body-swimming-pool-light-al016-al029a-app-1.jpg"),
    ("pool_resort_lagoon", (0.1, 0.0, 0.9, 1.0), "abs-body-swimming-pool-light-al016-al029a-app-2.jpg"),
    ("pool_luminaire_installed", None, "abs-body-swimming-pool-light-al016-al029a-app-3.jpg"),
    ("pool_commercial_lap", (0.1, 0.0, 0.9, 1.0), "abs-body-swimming-pool-light-al016-al029a-app-4.jpg"),

    # 3. SS Body Pool Light
    ("pool_p8_catalogue", None, "ss-body-swimming-pool-light-al030-al031-app-1.jpg"),
    ("pool_night_banner", None, "ss-body-swimming-pool-light-al030-al031-app-2.jpg"),
    ("pool_category_new", None, "ss-body-swimming-pool-light-al030-al031-app-3.jpg"),
    ("pool_underwater_cat", None, "ss-body-swimming-pool-light-al030-al031-app-4.jpg"),

    # 4. Concealed Pool Light
    ("pool_minimalist_flush", None, "concealed-swimming-pool-light-al032-al036-app-1.jpg"),
    ("pool_p9_catalogue", None, "concealed-swimming-pool-light-al032-al036-app-2.jpg"),
    ("pool_resort_infinity", (0.05, 0.05, 0.95, 0.95), "concealed-swimming-pool-light-al032-al036-app-3.jpg"),
    ("pool_light_illumination", None, "concealed-swimming-pool-light-al032-al036-app-4.jpg"),

    # 5. Full SS Spot Fountain Light
    ("fountain_arch_p10", None, "full-ss-spot-fountain-light-al037-al040-app-1.jpg"),
    ("fountain_musical_night", None, "full-ss-spot-fountain-light-al037-al040-app-2.jpg"),
    ("fountain_public_p13", (0.0, 0.1, 1.0, 0.9), "full-ss-spot-fountain-light-al037-al040-app-3.jpg"),
    ("fountain_banner", None, "full-ss-spot-fountain-light-al037-al040-app-4.jpg"),

    # 6. SS Spot Fountain Light
    ("fountain_resort_p15", (0.0, 0.1, 1.0, 0.9), "ss-spot-fountain-light-al041-al052-app-1.jpg"),
    ("fountain_garden_cat", None, "ss-spot-fountain-light-al041-al052-app-2.jpg"),
    ("fountain_led_cat", None, "ss-spot-fountain-light-al041-al052-app-3.jpg"),
    ("fountain_hero_grand", None, "ss-spot-fountain-light-al041-al052-app-4.jpg"),

    # 7. Nozzle Fountain Light
    ("fountain_musical_p11", (0.0, 0.15, 1.0, 0.85), "nozzle-fountain-light-al053-al057-app-1.jpg"),
    ("fountain_musical_night", (0.05, 0.05, 0.95, 0.95), "nozzle-fountain-light-al053-al057-app-2.jpg"),
    ("fountain_led_cat", (0.1, 0.0, 0.9, 1.0), "nozzle-fountain-light-al053-al057-app-3.jpg"),
    ("fountain_public_p13", None, "nozzle-fountain-light-al053-al057-app-4.jpg"),

    # 8. Adjustable Nozzle Fountain Light
    ("fountain_hero_grand", (0.0, 0.0, 0.8, 1.0), "adjustable-nozzle-fountain-light-al058-al061-app-1.jpg"),
    ("fountain_musical_p11", (0.0, 0.3, 1.0, 1.0), "adjustable-nozzle-fountain-light-al058-al061-app-2.jpg"),
    ("fountain_resort_p15", None, "adjustable-nozzle-fountain-light-al058-al061-app-3.jpg"),
    ("fountain_banner", (0.1, 0.0, 0.9, 1.0), "adjustable-nozzle-fountain-light-al058-al061-app-4.jpg"),

    # 9. LED Wall Washer Light
    ("fountain_water_wall_lit", None, "led-wall-washer-light-al062-app-1.jpg"),
    ("fountain_facade_p20", (0.0, 0.0, 1.0, 0.7), "led-wall-washer-light-al062-app-2.jpg"),
    ("fountain_wall_washer_cat", None, "led-wall-washer-light-al062-app-3.jpg"),
    ("cascade_water_curtains_cat", None, "led-wall-washer-light-al062-app-4.jpg"),

    # 10. Umbrella / Bell Nozzle
    ("nozzle_umbrella_bell_atrium", None, "umbrella-bell-nozzle-al063-app-1.jpg"),
    ("nozzle_bell_p24", None, "umbrella-bell-nozzle-al063-app-2.jpg"),
    ("nozzle_category", (0.0, 0.0, 0.8, 1.0), "umbrella-bell-nozzle-al063-app-3.jpg"),
    ("fountain_resort_p15", (0.1, 0.1, 0.9, 0.9), "umbrella-bell-nozzle-al063-app-4.jpg"),

    # 11. Foam Nozzle
    ("nozzle_foam_geyser_plaza", None, "foam-nozzle-al064-app-1.jpg"),
    ("nozzle_longfoam_p25", (0.0, 0.1, 1.0, 0.9), "foam-nozzle-al064-app-2.jpg"),
    ("fountain_hero_grand", (0.1, 0.1, 0.9, 0.9), "foam-nozzle-al064-app-3.jpg"),
    ("fountain_public_p13", (0.1, 0.0, 0.9, 1.0), "foam-nozzle-al064-app-4.jpg"),

    # 12. Finger Jet Nozzle
    ("fountain_musical_p11", (0.0, 0.0, 1.0, 0.7), "finger-jet-nozzle-al065-app-1.jpg"),
    ("fountain_public_p13", (0.0, 0.2, 1.0, 1.0), "finger-jet-nozzle-al065-app-2.jpg"),
    ("fountain_musical_night", (0.1, 0.0, 0.9, 1.0), "finger-jet-nozzle-al065-app-3.jpg"),
    ("nozzle_category", (0.2, 0.0, 1.0, 1.0), "finger-jet-nozzle-al065-app-4.jpg"),

    # 13. Long Foam Nozzle
    ("nozzle_longfoam_p25", None, "long-foam-nozzle-al066-app-1.jpg"),
    ("nozzle_foam_geyser_plaza", (0.1, 0.0, 0.9, 1.0), "long-foam-nozzle-al066-app-2.jpg"),
    ("fountain_hero_grand", (0.2, 0.0, 1.0, 1.0), "long-foam-nozzle-al066-app-3.jpg"),
    ("fountain_banner", (0.0, 0.0, 0.8, 1.0), "long-foam-nozzle-al066-app-4.jpg"),

    # 14. Geyser Nozzle
    ("nozzle_foam_geyser_plaza", (0.0, 0.0, 0.85, 1.0), "geyser-nozzle-al067-app-1.jpg"),
    ("fountain_public_p13", (0.1, 0.1, 0.9, 0.9), "geyser-nozzle-al067-app-2.jpg"),
    ("fountain_hero_grand", (0.0, 0.0, 1.0, 0.8), "geyser-nozzle-al067-app-3.jpg"),
    ("fountain_musical_night", (0.2, 0.0, 1.0, 1.0), "geyser-nozzle-al067-app-4.jpg"),

    # 15. SS Foam Nozzle
    ("nozzle_foam_geyser_plaza", (0.15, 0.0, 1.0, 1.0), "ss-foam-nozzle-al068-app-1.jpg"),
    ("nozzle_longfoam_p25", (0.05, 0.05, 0.95, 0.95), "ss-foam-nozzle-al068-app-2.jpg"),
    ("fountain_resort_p15", (0.0, 0.0, 0.8, 1.0), "ss-foam-nozzle-al068-app-3.jpg"),
    ("nozzle_category", None, "ss-foam-nozzle-al068-app-4.jpg"),

    # 16. Tulip Nozzle
    ("nozzle_tulip_garden", None, "tulip-nozzle-al069-app-1.jpg"),
    ("fountain_garden_cat", (0.1, 0.0, 0.9, 1.0), "tulip-nozzle-al069-app-2.jpg"),
    ("nozzle_umbrella_bell_atrium", (0.1, 0.1, 0.9, 0.9), "tulip-nozzle-al069-app-3.jpg"),
    ("fountain_led_cat", (0.0, 0.1, 1.0, 0.9), "tulip-nozzle-al069-app-4.jpg"),

    # 17. Fan Jet Nozzle
    ("nozzle_fan_p27", None, "fan-jet-nozzle-al070-app-1.jpg"),
    ("fountain_water_wall_lit", (0.1, 0.0, 0.9, 1.0), "fan-jet-nozzle-al070-app-2.jpg"),
    ("fountain_hero_grand", (0.15, 0.0, 0.85, 1.0), "fan-jet-nozzle-al070-app-3.jpg"),
    ("fountain_musical_p11", (0.1, 0.0, 0.9, 0.8), "fan-jet-nozzle-al070-app-4.jpg"),

    # 18. Revolving Nozzle
    ("fountain_musical_p11", (0.0, 0.2, 1.0, 0.9), "revolving-nozzle-al071-app-1.jpg"),
    ("fountain_musical_night", (0.0, 0.1, 0.8, 1.0), "revolving-nozzle-al071-app-2.jpg"),
    ("fountain_public_p13", (0.0, 0.0, 0.8, 1.0), "revolving-nozzle-al071-app-3.jpg"),
    ("nozzle_category", (0.1, 0.1, 0.9, 0.9), "revolving-nozzle-al071-app-4.jpg"),

    # 19. Diamond / Flower Cluster Nozzle
    ("fountain_musical_p11", (0.0, 0.1, 1.0, 0.85), "diamond-flower-cluster-nozzle-al072-app-1.jpg"),
    ("fountain_hero_grand", (0.05, 0.05, 0.95, 0.95), "diamond-flower-cluster-nozzle-al072-app-2.jpg"),
    ("fountain_musical_night", (0.1, 0.1, 0.9, 0.9), "diamond-flower-cluster-nozzle-al072-app-3.jpg"),
    ("nozzle_category", (0.0, 0.1, 1.0, 0.9), "diamond-flower-cluster-nozzle-al072-app-4.jpg"),

    # 20. Crown Nozzle
    ("nozzle_crown_p29", None, "crown-nozzle-al073-app-1.jpg"),
    ("fountain_hero_grand", (0.2, 0.1, 0.8, 0.9), "crown-nozzle-al073-app-2.jpg"),
    ("fountain_resort_p15", (0.15, 0.0, 0.85, 1.0), "crown-nozzle-al073-app-3.jpg"),
    ("fountain_public_p13", (0.05, 0.05, 0.95, 0.95), "crown-nozzle-al073-app-4.jpg"),

    # 21. Flower Nozzle
    ("nozzle_tulip_garden", (0.05, 0.05, 0.95, 0.95), "flower-nozzle-al074-app-1.jpg"),
    ("fountain_garden_cat", None, "flower-nozzle-al074-app-2.jpg"),
    ("nozzle_category", (0.15, 0.0, 0.85, 1.0), "flower-nozzle-al074-app-3.jpg"),
    ("fountain_led_cat", (0.15, 0.0, 0.85, 1.0), "flower-nozzle-al074-app-4.jpg"),

    # 22. SS Water Cascade / Blade Nozzle
    ("cascade_ss_blade_pool", None, "ss-water-cascade-blade-nozzle-al075-app-1.jpg"),
    ("cascade_villa_pool", None, "ss-water-cascade-blade-nozzle-al075-app-2.jpg"),
    ("cascade_blade_p30", None, "ss-water-cascade-blade-nozzle-al075-app-3.jpg"),
    ("fountain_water_wall_lit", (0.0, 0.0, 0.8, 1.0), "ss-water-cascade-blade-nozzle-al075-app-4.jpg"),

    # 23. SS Step Water Blade Nozzle
    ("cascade_stepped_stone", None, "ss-step-water-blade-nozzle-al076-app-1.jpg"),
    ("cascade_step_night_p31", None, "ss-step-water-blade-nozzle-al076-app-2.jpg"),
    ("cascade_stepped_stone", (0.1, 0.0, 0.9, 1.0), "ss-step-water-blade-nozzle-al076-app-3.jpg"),
    ("cascade_step_night_p31", (0.05, 0.05, 0.95, 0.95), "ss-step-water-blade-nozzle-al076-app-4.jpg"),

    # 24. SS Water Cascade Nozzle
    ("cascade_warm_lit", None, "ss-water-cascade-nozzle-al077-app-1.jpg"),
    ("cascade_villa_pool", (0.1, 0.0, 0.9, 1.0), "ss-water-cascade-nozzle-al077-app-2.jpg"),
    ("cascade_hero_luxury", None, "ss-water-cascade-nozzle-al077-app-3.jpg"),
    ("cascade_water_curtains_cat", (0.1, 0.0, 0.9, 1.0), "ss-water-cascade-nozzle-al077-app-4.jpg"),

    # 25. Cobra Nozzle
    ("cascade_cobra_swimmers_p33", None, "cobra-nozzle-al078-app-1.jpg"),
    ("cascade_hero_luxury", (0.05, 0.05, 0.95, 0.95), "cobra-nozzle-al078-app-2.jpg"),
    ("cascade_villa_pool", (0.15, 0.0, 0.85, 1.0), "cobra-nozzle-al078-app-3.jpg"),
    ("cascade_warm_lit", (0.1, 0.0, 0.9, 1.0), "cobra-nozzle-al078-app-4.jpg"),

    # 26. Dolphin Nozzle
    ("cascade_dolphin_p34", None, "dolphin-nozzle-al079-app-1.jpg"),
    ("cascade_villa_pool", (0.05, 0.05, 0.95, 0.95), "dolphin-nozzle-al079-app-2.jpg"),
    ("cascade_hero_luxury", (0.1, 0.0, 0.9, 1.0), "dolphin-nozzle-al079-app-3.jpg"),
    ("cascade_warm_lit", (0.05, 0.05, 0.95, 0.95), "dolphin-nozzle-al079-app-4.jpg"),

    # 27. Acrylic Cobra Nozzle
    ("cascade_acrylic_flow", None, "acrylic-cobra-nozzle-al080-app-1.jpg"),
    ("cascade_acrylic_neon_p36", None, "acrylic-cobra-nozzle-al080-app-2.jpg"),
    ("cascade_rgb_night", None, "acrylic-cobra-nozzle-al080-app-3.jpg"),
    ("cascade_acrylic_flow", (0.1, 0.0, 0.9, 1.0), "acrylic-cobra-nozzle-al080-app-4.jpg"),

    # 28. Acrylic Blade Nozzle
    ("cascade_acrylic_neon_p36", (0.05, 0.05, 0.95, 0.95), "acrylic-blade-nozzle-al081-app-1.jpg"),
    ("cascade_rgb_night", (0.1, 0.0, 0.9, 1.0), "acrylic-blade-nozzle-al081-app-2.jpg"),
    ("cascade_acrylic_flow", (0.15, 0.0, 0.85, 1.0), "acrylic-blade-nozzle-al081-app-3.jpg"),
    ("cascade_acrylic_neon_p36", (0.1, 0.0, 0.9, 1.0), "acrylic-blade-nozzle-al081-app-4.jpg"),
]

print(f"Total mappings to process: {len(PRODUCT_IMAGE_MAPPINGS)}")
count = 0
for src_key, box, out_name in PRODUCT_IMAGE_MAPPINGS:
    ok = crop_and_save(src_key, box, out_name)
    if ok:
        count += 1

print(f"Successfully created {count} / {len(PRODUCT_IMAGE_MAPPINGS)} application installation images!")
