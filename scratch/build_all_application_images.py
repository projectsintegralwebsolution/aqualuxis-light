import os
from PIL import Image, ImageEnhance, ImageFilter

out_dir = 'public/assets/applications'
os.makedirs(out_dir, exist_ok=True)

TARGET_SIZE = (800, 450)

def process_and_save(src_path, crop_box, out_name):
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
        # clamp
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
    im = enh.enhance(1.08)
    enh_col = ImageEnhance.Color(im)
    im = enh_col.enhance(1.06)
    im = im.filter(ImageFilter.UnsharpMask(radius=1.2, percent=120, threshold=3))

    out_path = os.path.join(out_dir, out_name)
    im.save(out_path, format='JPEG', quality=92)
    return True

# Map all 112 images
MAPPINGS = [
    # 1. Surface Pool Light
    ("scratch/catalogue_app_photos/p6_img7_xref121.jpeg", (0.0, 0.05, 1.0, 0.95), "surface-model-swimming-pool-light-al00-al015-app-1.jpg"),
    (r"C:\Users\admin\.gemini\antigravity\brain\8ba9a458-02c7-47c8-a6b9-0bfa883c4f88\test_resort_pool_1795004034178.jpg", (0.0, 0.0, 1.0, 1.0), "surface-model-swimming-pool-light-al00-al015-app-2.jpg"),
    ("scratch/catalogue_app_photos/p7_img17_xref161.jpeg", (0.0, 0.0, 0.6, 1.0), "surface-model-swimming-pool-light-al00-al015-app-3.jpg"),
    ("scratch/catalogue_app_photos/p9_img13_xref200.jpeg", (0.2, 0.1, 0.9, 0.9), "surface-model-swimming-pool-light-al00-al015-app-4.jpg"),

    # 2. ABS Body Pool Light
    ("scratch/catalogue_app_photos/p7_img17_xref161.jpeg", (0.25, 0.0, 1.0, 1.0), "abs-body-swimming-pool-light-al016-al029a-app-1.jpg"),
    ("scratch/catalogue_app_photos/p7_img15_xref157.jpeg", (0.0, 0.0, 1.0, 1.0), "abs-body-swimming-pool-light-al016-al029a-app-2.jpg"),
    ("scratch/catalogue_app_photos/p6_img7_xref121.jpeg", (0.1, 0.15, 0.9, 0.85), "abs-body-swimming-pool-light-al016-al029a-app-3.jpg"),
    ("scratch/catalogue_app_photos/p9_img10_xref194.jpeg", (0.0, 0.0, 1.0, 1.0), "abs-body-swimming-pool-light-al016-al029a-app-4.jpg"),

    # 3. SS Body Pool Light
    ("scratch/catalogue_app_photos/p8_img7_xref173.jpeg", (0.0, 0.05, 1.0, 0.95), "ss-body-swimming-pool-light-al030-al031-app-1.jpg"),
    ("scratch/catalogue_app_photos/p8_img1_xref165.jpeg", (0.0, 0.0, 1.0, 1.0), "ss-body-swimming-pool-light-al030-al031-app-2.jpg"),
    ("scratch/catalogue_app_photos/p8_img4_xref170.jpeg", (0.0, 0.0, 1.0, 1.0), "ss-body-swimming-pool-light-al030-al031-app-3.jpg"),
    ("scratch/catalogue_app_photos/p8_img6_xref172.jpeg", (0.0, 0.0, 1.0, 1.0), "ss-body-swimming-pool-light-al030-al031-app-4.jpg"),

    # 4. Concealed Pool Light
    ("scratch/catalogue_app_photos/p9_img13_xref200.jpeg", (0.0, 0.0, 0.7, 1.0), "concealed-swimming-pool-light-al032-al036-app-1.jpg"),
    ("scratch/catalogue_app_photos/p9_img10_xref194.jpeg", (0.1, 0.1, 0.9, 0.9), "concealed-swimming-pool-light-al032-al036-app-2.jpg"),
    ("scratch/catalogue_app_photos/p9_img5_xref187.jpeg", (0.0, 0.0, 1.0, 1.0), "concealed-swimming-pool-light-al032-al036-app-3.jpg"),
    ("scratch/catalogue_app_photos/p9_img3_xref183.jpeg", (0.0, 0.0, 1.0, 1.0), "concealed-swimming-pool-light-al032-al036-app-4.jpg"),

    # 5. Full SS Spot Fountain Light
    ("scratch/catalogue_app_photos/p10_img1_xref207.jpeg", (0.0, 0.0, 1.0, 1.0), "full-ss-spot-fountain-light-al037-al040-app-1.jpg"),
    ("scratch/catalogue_app_photos/p11_img0_xref223.jpeg", (0.0, 0.2, 1.0, 0.8), "full-ss-spot-fountain-light-al037-al040-app-2.jpg"),
    ("scratch/catalogue_app_photos/p10_img7_xref219.jpeg", (0.0, 0.0, 0.5, 1.0), "full-ss-spot-fountain-light-al037-al040-app-3.jpg"),
    ("scratch/catalogue_app_photos/p10_img7_xref219.jpeg", (0.5, 0.0, 1.0, 1.0), "full-ss-spot-fountain-light-al037-al040-app-4.jpg"),

    # 6. SS Spot Fountain Light
    ("scratch/catalogue_app_photos/p14_img3_xref258.jpeg", (0.0, 0.0, 1.0, 1.0), "ss-spot-fountain-light-al041-al052-app-1.jpg"),
    ("scratch/catalogue_app_photos/p14_img8_xref266.jpeg", (0.0, 0.0, 1.0, 1.0), "ss-spot-fountain-light-al041-al052-app-2.jpg"),
    ("scratch/catalogue_app_photos/p15_img0_xref270.jpeg", (0.0, 0.1, 1.0, 0.7), "ss-spot-fountain-light-al041-al052-app-3.jpg"),
    ("scratch/catalogue_app_photos/p13_img0_xref250.jpeg", (0.0, 0.15, 1.0, 0.75), "ss-spot-fountain-light-al041-al052-app-4.jpg"),

    # 7. Nozzle Fountain Light
    ("scratch/catalogue_app_photos/p17_img0_xref284.jpeg", (0.0, 0.0, 1.0, 1.0), "nozzle-fountain-light-al053-al057-app-1.jpg"),
    ("scratch/catalogue_app_photos/p17_img1_xref285.jpeg", (0.0, 0.0, 1.0, 1.0), "nozzle-fountain-light-al053-al057-app-2.jpg"),
    ("scratch/catalogue_app_photos/p17_img2_xref286.jpeg", (0.0, 0.0, 1.0, 1.0), "nozzle-fountain-light-al053-al057-app-3.jpg"),
    ("scratch/catalogue_app_photos/p17_img3_xref287.jpeg", (0.0, 0.0, 1.0, 1.0), "nozzle-fountain-light-al053-al057-app-4.jpg"),

    # 8. Adjustable Nozzle Fountain Light
    ("scratch/catalogue_app_photos/p18_img0_xref291.jpeg", (0.0, 0.0, 1.0, 1.0), "adjustable-nozzle-fountain-light-al058-al061-app-1.jpg"),
    ("scratch/catalogue_app_photos/p18_img1_xref292.jpeg", (0.0, 0.0, 1.0, 1.0), "adjustable-nozzle-fountain-light-al058-al061-app-2.jpg"),
    ("scratch/catalogue_app_photos/p18_img2_xref294.jpeg", (0.0, 0.0, 1.0, 1.0), "adjustable-nozzle-fountain-light-al058-al061-app-3.jpg"),
    ("scratch/catalogue_app_photos/p17_img4_xref288.jpeg", (0.0, 0.0, 1.0, 1.0), "adjustable-nozzle-fountain-light-al058-al061-app-4.jpg"),

    # 9. LED Wall Washer Light
    ("scratch/catalogue_app_photos/p19_img8_xref305.jpeg", (0.0, 0.0, 1.0, 1.0), "led-wall-washer-light-al062-app-1.jpg"),
    ("scratch/catalogue_app_photos/p20_img0_xref315.jpeg", (0.0, 0.0, 1.0, 0.5), "led-wall-washer-light-al062-app-2.jpg"),
    ("scratch/catalogue_app_photos/p20_img0_xref315.jpeg", (0.0, 0.5, 1.0, 1.0), "led-wall-washer-light-al062-app-3.jpg"),
    ("scratch/catalogue_app_photos/p19_img8_xref305.jpeg", (0.1, 0.0, 0.9, 1.0), "led-wall-washer-light-al062-app-4.jpg"),

    # 10. Umbrella / Bell Nozzle
    ("scratch/catalogue_app_photos/p24_img1_xref341.jpeg", (0.0, 0.0, 1.0, 1.0), "umbrella-bell-nozzle-al063-app-1.jpg"),
    ("scratch/catalogue_app_photos/p24_img1_xref341.jpeg", (0.1, 0.1, 0.9, 0.9), "umbrella-bell-nozzle-al063-app-2.jpg"),
    ("scratch/catalogue_app_photos/p23_img1_xref337.jpeg", (0.0, 0.0, 0.6, 1.0), "umbrella-bell-nozzle-al063-app-3.jpg"),
    ("scratch/catalogue_app_photos/p23_img1_xref337.jpeg", (0.4, 0.0, 1.0, 1.0), "umbrella-bell-nozzle-al063-app-4.jpg"),

    # 11. Foam Nozzle
    ("scratch/catalogue_app_photos/p24_img2_xref342.jpeg", (0.0, 0.0, 1.0, 0.75), "foam-nozzle-al064-app-1.jpg"),
    ("scratch/catalogue_app_photos/p24_img3_xref343.jpeg", (0.0, 0.0, 1.0, 1.0), "foam-nozzle-al064-app-2.jpg"),
    ("scratch/catalogue_app_photos/p23_img0_xref335.jpeg", (0.0, 0.0, 0.5, 1.0), "foam-nozzle-al064-app-3.jpg"),
    ("scratch/catalogue_app_photos/p24_img2_xref342.jpeg", (0.0, 0.25, 1.0, 1.0), "foam-nozzle-al064-app-4.jpg"),

    # 12. Finger Jet Nozzle
    ("scratch/catalogue_app_photos/p25_img0_xref346.jpeg", (0.0, 0.0, 1.0, 1.0), "finger-jet-nozzle-al065-app-1.jpg"),
    ("scratch/catalogue_app_photos/p25_img0_xref346.jpeg", (0.1, 0.0, 0.9, 0.8), "finger-jet-nozzle-al065-app-2.jpg"),
    ("scratch/catalogue_app_photos/p25_img0_xref346.jpeg", (0.0, 0.2, 1.0, 1.0), "finger-jet-nozzle-al065-app-3.jpg"),
    ("scratch/catalogue_app_photos/p23_img1_xref337.jpeg", (0.2, 0.1, 0.8, 0.9), "finger-jet-nozzle-al065-app-4.jpg"),

    # 13. Long Foam Nozzle
    ("scratch/catalogue_app_photos/p25_img3_xref349.jpeg", (0.0, 0.0, 1.0, 1.0), "long-foam-nozzle-al066-app-1.jpg"),
    ("scratch/catalogue_app_photos/p25_img3_xref349.jpeg", (0.1, 0.0, 0.9, 0.8), "long-foam-nozzle-al066-app-2.jpg"),
    ("scratch/catalogue_app_photos/p23_img0_xref335.jpeg", (0.3, 0.0, 0.8, 1.0), "long-foam-nozzle-al066-app-3.jpg"),
    ("scratch/catalogue_app_photos/p25_img3_xref349.jpeg", (0.0, 0.2, 1.0, 1.0), "long-foam-nozzle-al066-app-4.jpg"),

    # 14. Geyser Nozzle
    ("scratch/catalogue_app_photos/p26_img1_xref353.jpeg", (0.0, 0.0, 1.0, 1.0), "geyser-nozzle-al067-app-1.jpg"),
    ("scratch/catalogue_app_photos/p26_img2_xref354.jpeg", (0.0, 0.0, 1.0, 1.0), "geyser-nozzle-al067-app-2.jpg"),
    ("scratch/catalogue_app_photos/p26_img1_xref353.jpeg", (0.1, 0.1, 0.9, 0.9), "geyser-nozzle-al067-app-3.jpg"),
    ("scratch/catalogue_app_photos/p11_img0_xref223.jpeg", (0.1, 0.3, 0.9, 0.9), "geyser-nozzle-al067-app-4.jpg"),

    # 15. SS Foam Nozzle
    ("scratch/catalogue_app_photos/p26_img3_xref355.jpeg", (0.0, 0.0, 0.6, 1.0), "ss-foam-nozzle-al068-app-1.jpg"),
    ("scratch/catalogue_app_photos/p26_img3_xref355.jpeg", (0.4, 0.0, 1.0, 1.0), "ss-foam-nozzle-al068-app-2.jpg"),
    ("scratch/catalogue_app_photos/p26_img3_xref355.jpeg", (0.2, 0.0, 0.8, 1.0), "ss-foam-nozzle-al068-app-3.jpg"),
    ("scratch/catalogue_app_photos/p23_img0_xref335.jpeg", (0.5, 0.0, 1.0, 1.0), "ss-foam-nozzle-al068-app-4.jpg"),

    # 16. Tulip Nozzle
    ("scratch/catalogue_app_photos/p27_img3_xref362.jpeg", (0.0, 0.0, 1.0, 1.0), "tulip-nozzle-al069-app-1.jpg"),
    ("scratch/catalogue_app_photos/p27_img3_xref362.jpeg", (0.1, 0.0, 0.9, 0.8), "tulip-nozzle-al069-app-2.jpg"),
    ("scratch/catalogue_app_photos/p27_img3_xref362.jpeg", (0.0, 0.2, 1.0, 1.0), "tulip-nozzle-al069-app-3.jpg"),
    ("scratch/catalogue_app_photos/p23_img1_xref337.jpeg", (0.3, 0.1, 0.9, 0.9), "tulip-nozzle-al069-app-4.jpg"),

    # 17. Fan Jet Nozzle
    ("scratch/catalogue_app_photos/p27_img4_xref363.jpeg", (0.0, 0.0, 1.0, 1.0), "fan-jet-nozzle-al070-app-1.jpg"),
    ("scratch/catalogue_app_photos/p27_img4_xref363.jpeg", (0.1, 0.1, 0.9, 0.9), "fan-jet-nozzle-al070-app-2.jpg"),
    ("scratch/catalogue_app_photos/p27_img4_xref363.jpeg", (0.0, 0.15, 1.0, 0.85), "fan-jet-nozzle-al070-app-3.jpg"),
    ("scratch/catalogue_app_photos/p23_img0_xref335.jpeg", (0.2, 0.0, 0.7, 1.0), "fan-jet-nozzle-al070-app-4.jpg"),

    # 18. Revolving Nozzle
    ("scratch/catalogue_app_photos/p28_img0_xref366.jpeg", (0.0, 0.0, 1.0, 1.0), "revolving-nozzle-al071-app-1.jpg"),
    ("scratch/catalogue_app_photos/p28_img1_xref367.jpeg", (0.0, 0.0, 1.0, 1.0), "revolving-nozzle-al071-app-2.jpg"),
    ("scratch/catalogue_app_photos/p28_img0_xref366.jpeg", (0.1, 0.1, 0.9, 0.9), "revolving-nozzle-al071-app-3.jpg"),
    ("scratch/catalogue_app_photos/p28_img1_xref367.jpeg", (0.1, 0.1, 0.9, 0.9), "revolving-nozzle-al071-app-4.jpg"),

    # 19. Diamond / Flower Cluster Nozzle
    ("scratch/catalogue_app_photos/p28_img2_xref368.jpeg", (0.0, 0.0, 1.0, 1.0), "diamond-flower-cluster-nozzle-al072-app-1.jpg"),
    ("scratch/catalogue_app_photos/p28_img2_xref368.jpeg", (0.1, 0.0, 0.9, 0.9), "diamond-flower-cluster-nozzle-al072-app-2.jpg"),
    ("scratch/catalogue_app_photos/p28_img2_xref368.jpeg", (0.0, 0.1, 1.0, 1.0), "diamond-flower-cluster-nozzle-al072-app-3.jpg"),
    ("scratch/catalogue_app_photos/p23_img1_xref337.jpeg", (0.1, 0.1, 0.7, 0.9), "diamond-flower-cluster-nozzle-al072-app-4.jpg"),

    # 20. Crown Nozzle
    ("scratch/catalogue_app_photos/p29_img1_xref375.jpeg", (0.0, 0.0, 1.0, 1.0), "crown-nozzle-al073-app-1.jpg"),
    ("scratch/catalogue_app_photos/p29_img1_xref375.jpeg", (0.1, 0.0, 0.9, 0.9), "crown-nozzle-al073-app-2.jpg"),
    ("scratch/catalogue_app_photos/p29_img1_xref375.jpeg", (0.0, 0.1, 1.0, 1.0), "crown-nozzle-al073-app-3.jpg"),
    ("scratch/catalogue_app_photos/p23_img0_xref335.jpeg", (0.0, 0.0, 0.6, 1.0), "crown-nozzle-al073-app-4.jpg"),

    # 21. Flower Nozzle
    ("scratch/catalogue_app_photos/p29_img2_xref376.jpeg", (0.0, 0.0, 1.0, 1.0), "flower-nozzle-al074-app-1.jpg"),
    ("scratch/catalogue_app_photos/p29_img3_xref377.jpeg", (0.0, 0.0, 1.0, 1.0), "flower-nozzle-al074-app-2.jpg"),
    ("scratch/catalogue_app_photos/p29_img2_xref376.jpeg", (0.1, 0.1, 0.9, 0.9), "flower-nozzle-al074-app-3.jpg"),
    ("scratch/catalogue_app_photos/p23_img1_xref337.jpeg", (0.2, 0.0, 0.8, 1.0), "flower-nozzle-al074-app-4.jpg"),

    # 22. SS Water Cascade / Blade Nozzle
    ("scratch/catalogue_app_photos/p30_img3_xref384.jpeg", (0.0, 0.0, 0.35, 0.5), "ss-water-cascade-blade-nozzle-al075-app-1.jpg"),
    ("scratch/catalogue_app_photos/p30_img3_xref384.jpeg", (0.35, 0.0, 0.7, 0.5), "ss-water-cascade-blade-nozzle-al075-app-2.jpg"),
    ("scratch/catalogue_app_photos/p30_img3_xref384.jpeg", (0.7, 0.0, 1.0, 0.5), "ss-water-cascade-blade-nozzle-al075-app-3.jpg"),
    ("scratch/catalogue_app_photos/p30_img3_xref384.jpeg", (0.0, 0.5, 0.45, 1.0), "ss-water-cascade-blade-nozzle-al075-app-4.jpg"),

    # 23. SS Step Water Blade Nozzle
    ("scratch/catalogue_app_photos/p31_img0_xref387.jpeg", (0.0, 0.0, 0.6, 1.0), "ss-step-water-blade-nozzle-al076-app-1.jpg"),
    ("scratch/catalogue_app_photos/p31_img1_xref388.jpeg", (0.0, 0.0, 1.0, 1.0), "ss-step-water-blade-nozzle-al076-app-2.jpg"),
    ("scratch/catalogue_app_photos/p31_img0_xref387.jpeg", (0.4, 0.0, 1.0, 1.0), "ss-step-water-blade-nozzle-al076-app-3.jpg"),
    ("scratch/catalogue_app_photos/p31_img1_xref388.jpeg", (0.1, 0.1, 0.9, 0.9), "ss-step-water-blade-nozzle-al076-app-4.jpg"),

    # 24. SS Water Cascade Nozzle
    ("scratch/catalogue_app_photos/p32_img0_xref391.jpeg", (0.0, 0.0, 1.0, 1.0), "ss-water-cascade-nozzle-al077-app-1.jpg"),
    ("scratch/catalogue_app_photos/p32_img0_xref391.jpeg", (0.1, 0.1, 0.9, 0.9), "ss-water-cascade-nozzle-al077-app-2.jpg"),
    ("scratch/catalogue_app_photos/p30_img3_xref384.jpeg", (0.45, 0.5, 0.85, 1.0), "ss-water-cascade-nozzle-al077-app-3.jpg"),
    ("scratch/catalogue_app_photos/p30_img3_xref384.jpeg", (0.85, 0.5, 1.0, 1.0), "ss-water-cascade-nozzle-al077-app-4.jpg"),

    # 25. Cobra Nozzle
    ("scratch/catalogue_app_photos/p33_img3_xref400.jpeg", (0.0, 0.0, 0.48, 0.52), "cobra-nozzle-al078-app-1.jpg"),
    ("scratch/catalogue_app_photos/p33_img2_xref398.jpeg", (0.0, 0.0, 1.0, 1.0), "cobra-nozzle-al078-app-2.jpg"),
    ("scratch/catalogue_app_photos/p33_img3_xref400.jpeg", (0.48, 0.0, 1.0, 0.52), "cobra-nozzle-al078-app-3.jpg"),
    ("scratch/catalogue_app_photos/p33_img3_xref400.jpeg", (0.0, 0.52, 1.0, 1.0), "cobra-nozzle-al078-app-4.jpg"),

    # 26. Dolphin Nozzle
    ("scratch/catalogue_app_photos/p34_img1_xref408.jpeg", (0.0, 0.0, 1.0, 1.0), "dolphin-nozzle-al079-app-1.jpg"),
    ("scratch/catalogue_app_photos/p34_img1_xref408.jpeg", (0.1, 0.0, 0.9, 0.85), "dolphin-nozzle-al079-app-2.jpg"),
    ("scratch/catalogue_app_photos/p34_img1_xref408.jpeg", (0.0, 0.15, 0.85, 1.0), "dolphin-nozzle-al079-app-3.jpg"),
    ("scratch/catalogue_app_photos/p34_img1_xref408.jpeg", (0.15, 0.1, 1.0, 0.9), "dolphin-nozzle-al079-app-4.jpg"),

    # 27. Acrylic Cobra Nozzle
    ("scratch/catalogue_app_photos/p35_img0_xref412.jpeg", (0.0, 0.0, 1.0, 1.0), "acrylic-cobra-nozzle-al080-app-1.jpg"),
    ("scratch/catalogue_app_photos/p35_img0_xref412.jpeg", (0.1, 0.0, 0.9, 0.9), "acrylic-cobra-nozzle-al080-app-2.jpg"),
    ("scratch/catalogue_app_photos/p35_img0_xref412.jpeg", (0.0, 0.1, 0.8, 1.0), "acrylic-cobra-nozzle-al080-app-3.jpg"),
    ("scratch/catalogue_app_photos/p35_img0_xref412.jpeg", (0.2, 0.0, 1.0, 1.0), "acrylic-cobra-nozzle-al080-app-4.jpg"),

    # 28. Acrylic Blade Nozzle
    ("scratch/catalogue_app_photos/p36_img0_xref416.jpeg", (0.0, 0.0, 1.0, 1.0), "acrylic-blade-nozzle-al081-app-1.jpg"),
    ("scratch/catalogue_app_photos/p36_img2_xref419.jpeg", (0.0, 0.0, 1.0, 1.0), "acrylic-blade-nozzle-al081-app-2.jpg"),
    ("scratch/catalogue_app_photos/p36_img0_xref416.jpeg", (0.1, 0.1, 0.9, 0.9), "acrylic-blade-nozzle-al081-app-3.jpg"),
    ("scratch/catalogue_app_photos/p36_img2_xref419.jpeg", (0.1, 0.0, 0.9, 0.85), "acrylic-blade-nozzle-al081-app-4.jpg"),
]

print(f"Total mappings to process: {len(MAPPINGS)}")
count = 0
for src, box, out_name in MAPPINGS:
    ok = process_and_save(src, box, out_name)
    if ok:
        count += 1

print(f"Successfully created {count} / {len(MAPPINGS)} application images in {out_dir}!")
