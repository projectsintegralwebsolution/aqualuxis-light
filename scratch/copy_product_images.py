import os
import shutil
from PIL import Image

SRC = 'scratch/extracted_images'
DST = 'public/assets/products'

mapping = {
    # 1. Surface Model Swimming Pool Light (AL00 - AL015)
    'al00-surface-pool-light.jpg': 'p4_img11_xref69_316x232.jpeg',
    'al00-surface-pool-light-gallery-1.jpg': 'p4_img1_xref52_248x237.jpeg',
    'al00-surface-pool-light-gallery-2.jpg': 'p4_img2_xref54_265x270.jpeg',
    'al00-surface-pool-light-gallery-3.jpg': 'p4_img3_xref55_367x282.jpeg',
    'al00-surface-pool-light-gallery-4.jpg': 'p4_img4_xref57_252x244.jpeg',
    'al00-surface-pool-light-gallery-5.jpg': 'p5_img1_xref86_246x308.jpeg',

    # 2. ABS Body Swimming Pool Light (AL016 - AL029(A))
    'al016-abs-pool-light.jpg': 'p6_img8_xref121_736x530.jpeg',
    'al016-abs-pool-light-gallery-1.jpg': 'p7_img18_xref161_1056x500.jpeg',
    'al016-abs-pool-light-gallery-2.jpg': 'p8_img8_xref173_960x640.jpeg',
    'al016-abs-pool-light-gallery-3.jpg': 'p9_img14_xref200_1142x605.jpeg',
    'al016-abs-pool-light-gallery-4.jpg': 'p10_img1_xref206_685x901.jpeg',
    'al016-abs-pool-light-gallery-5.jpg': 'p10_img2_xref207_905x492.jpeg',

    # 3. SS Body Swimming Pool Light (AL030 - AL031)
    'al030-ss-pool-light.jpg': 'p12_img2_xref227_424x372.jpeg',
    'al030-ss-pool-light-gallery-1.jpg': 'p12_img4_xref230_413x390.jpeg',
    'al030-ss-pool-light-gallery-2.jpg': 'p12_img6_xref234_467x394.jpeg',
    'al030-ss-pool-light-gallery-3.jpg': 'p12_img8_xref238_391x407.jpeg',
    'al030-ss-pool-light-gallery-4.jpg': 'p12_img10_xref242_385x416.jpeg',

    # 4. Concealed Swimming Pool Light (AL032 - AL036)
    'al032-concealed-pool-light.jpg': 'p14_img6_xref261_348x345.jpeg',
    'al032-concealed-pool-light-gallery-1.jpg': 'p14_img4_xref258_478x320.jpeg',
    'al032-concealed-pool-light-gallery-2.jpg': 'p14_img5_xref260_385x361.jpeg',
    'al032-concealed-pool-light-gallery-3.jpg': 'p14_img7_xref263_313x333.jpeg',
    'al032-concealed-pool-light-gallery-4.jpg': 'p14_img8_xref264_350x365.jpeg',
    'al032-concealed-pool-light-gallery-5.jpg': 'p14_img9_xref266_476x363.jpeg',

    # 5. Full SS Spot Fountain Light (AL037 - AL040)
    'al037-full-ss-spot-fountain-light.jpg': 'p16_img4_xref274_371x415.jpeg',
    'al037-full-ss-spot-fountain-light-gallery-1.jpg': 'p16_img3_xref273_318x360.jpeg',
    'al037-full-ss-spot-fountain-light-gallery-2.jpg': 'p16_img5_xref275_348x394.jpeg',
    'al037-full-ss-spot-fountain-light-gallery-3.jpg': 'p16_img6_xref276_348x380.jpeg',
    'al037-full-ss-spot-fountain-light-gallery-4.jpg': 'p16_img7_xref278_342x342.jpeg',

    # 6. SS Spot Fountain Light (AL041 - AL052)
    'al041-ss-spot-fountain-light.jpg': 'p17_img1_xref284_654x295.jpeg',
    'al041-ss-spot-fountain-light-gallery-1.jpg': 'p17_img2_xref285_613x296.jpeg',
    'al041-ss-spot-fountain-light-gallery-2.jpg': 'p18_img1_xref291_636x326.jpeg',
    'al041-ss-spot-fountain-light-gallery-3.jpg': 'p18_img3_xref294_695x410.jpeg',
    'al041-ss-spot-fountain-light-gallery-4.jpg': 'p19_img2_xref300_451x463.jpeg',
    'al041-ss-spot-fountain-light-gallery-5.jpg': 'p19_img9_xref305_751x328.jpeg',

    # 7. Nozzle Fountain Light (AL053 - AL057)
    'al053-nozzle-fountain-light.jpg': 'p21_img1_xref318_438x399.jpeg',
    'al053-nozzle-fountain-light-gallery-1.jpg': 'p21_img2_xref319_384x280.jpeg',
    'al053-nozzle-fountain-light-gallery-2.jpg': 'p21_img3_xref320_377x327.jpeg',
    'al053-nozzle-fountain-light-gallery-3.jpg': 'p21_img4_xref321_261x327.jpeg',
    'al053-nozzle-fountain-light-gallery-4.jpg': 'p21_img5_xref322_290x352.jpeg',

    # 8. Adjustable Nozzle Fountain Light (AL058 - AL061)
    'al058-adjustable-nozzle-fountain-light.jpg': 'p22_img1_xref325_362x379.jpeg',
    'al058-adjustable-nozzle-fountain-light-gallery-1.jpg': 'p22_img2_xref327_313x310.jpeg',
    'al058-adjustable-nozzle-fountain-light-gallery-2.jpg': 'p22_img3_xref329_332x324.jpeg',
    'al058-adjustable-nozzle-fountain-light-gallery-3.jpg': 'p22_img4_xref330_367x368.jpeg',
    'al058-adjustable-nozzle-fountain-light-gallery-4.jpg': 'p22_img5_xref331_400x374.jpeg',

    # 9. LED Wall Washer Light (AL062)
    'al062-led-wall-washer-light.jpg': 'p23_img1_xref335_1419x409.jpeg',
    'al062-led-wall-washer-light-gallery-1.jpg': 'p23_img2_xref337_736x632.jpeg',

    # 10. Umbrella / Bell Nozzle (AL063)
    'al063-umbrella-bell-nozzle.jpg': 'p24_img1_xref340_211x603.jpeg',
    'al063-umbrella-bell-nozzle-gallery-1.jpg': 'p24_img2_xref341_784x567.jpeg',

    # 11. Foam Nozzle (AL064)
    'al064-foam-nozzle.jpg': 'p24_img3_xref342_476x1062.jpeg',
    'al064-foam-nozzle-gallery-1.jpg': 'p24_img4_xref343_642x642.jpeg',

    # 12. Finger Jet Nozzle (AL065)
    'al065-finger-jet-nozzle.jpg': 'p25_img1_xref346_576x675.jpeg',
    'al065-finger-jet-nozzle-gallery-1.jpg': 'p25_img3_xref348_250x213.jpeg',

    # 13. Long Foam Nozzle (AL066)
    'al066-long-foam-nozzle.jpg': 'p25_img2_xref347_285x671.jpeg',
    'al066-long-foam-nozzle-gallery-1.jpg': 'p25_img4_xref349_659x755.jpeg',

    # 14. Geyser Nozzle (AL067)
    'al067-geyser-nozzle.jpg': 'p26_img1_xref352_314x652.jpeg',
    'al067-geyser-nozzle-gallery-1.jpg': 'p26_img4_xref355_1089x342.jpeg',

    # 15. SS Foam Nozzle (AL068)
    'al068-ss-foam-nozzle.jpg': 'p26_img2_xref353_685x685.jpeg',
    'al068-ss-foam-nozzle-gallery-1.jpg': 'p26_img3_xref354_531x600.jpeg',

    # 16. Tulip Nozzle (AL069)
    'al069-tulip-nozzle.jpg': 'p27_img1_xref358_287x686.jpeg',
    'al069-tulip-nozzle-gallery-1.jpg': 'p27_img3_xref361_297x170.jpeg',

    # 17. Fan Jet Nozzle (AL070)
    'al070-fan-jet-nozzle.jpg': 'p27_img4_xref362_399x510.jpeg',
    'al070-fan-jet-nozzle-gallery-1.jpg': 'p27_img5_xref363_700x700.jpeg',

    # 18. Revolving Nozzle (AL071)
    'al071-revolving-nozzle.jpg': 'p28_img1_xref366_427x401.jpeg',
    'al071-revolving-nozzle-gallery-1.jpg': 'p28_img3_xref368_697x468.jpeg',

    # 19. Diamond / Flower Cluster Nozzle (AL072)
    'al072-diamond-flower-cluster-nozzle.jpg': 'p28_img2_xref367_433x423.jpeg',
    'al072-diamond-flower-cluster-nozzle-gallery-1.jpg': 'p28_img5_xref371_357x545.jpeg',

    # 20. Crown Nozzle (AL073)
    'al073-crown-nozzle.png': 'p29_img1_xref374_500x500.png',
    'al073-crown-nozzle-gallery-1.jpg': 'p29_img2_xref375_640x600.jpeg',

    # 21. Flower Nozzle (AL074)
    'al074-flower-nozzle.jpg': 'p29_img3_xref376_447x554.jpeg',
    'al074-flower-nozzle-gallery-1.jpg': 'p29_img4_xref377_500x375.jpeg',

    # 22. SS Water Cascade / Blade Nozzle (AL075)
    'al075-ss-water-cascade-blade-nozzle.jpg': 'p30_img2_xref382_640x559.jpeg',
    'al075-ss-water-cascade-blade-nozzle-gallery-1.jpg': 'p30_img3_xref383_747x468.jpeg',
    'al075-ss-water-cascade-blade-nozzle-gallery-2.jpg': 'p30_img4_xref384_964x503.jpeg',

    # 23. SS Step Water Blade Nozzle (AL076)
    'al076-ss-step-water-blade-nozzle.jpg': 'p31_img1_xref387_1323x545.jpeg',
    'al076-ss-step-water-blade-nozzle-gallery-1.jpg': 'p31_img2_xref388_736x421.jpeg',

    # 24. SS Water Cascade Nozzle (AL077)
    'al077-ss-water-cascade-nozzle.jpg': 'p32_img1_xref391_596x429.jpeg',
    'al077-ss-water-cascade-nozzle-gallery-1.jpg': 'p32_img2_xref392_750x750.jpeg',

    # 25. Cobra Nozzle (AL078)
    'al078-cobra-nozzle.jpg': 'p33_img2_xref397_640x640.jpeg',
    'al078-cobra-nozzle-gallery-1.jpg': 'p33_img4_xref400_800x562.jpeg',
    'al078-cobra-nozzle-gallery-2.jpg': 'p33_img5_xref402_630x609.jpeg',
    'al078-cobra-nozzle-gallery-3.jpg': 'p33_img3_xref398_612x503.jpeg',

    # 26. Dolphin Nozzle (AL079)
    'al079-dolphin-nozzle.jpg': 'p34_img2_xref408_466x417.jpeg',
    'al079-dolphin-nozzle-gallery-1.jpg': 'p34_img3_xref409_688x919.jpeg',

    # 27. Acrylic Cobra Nozzle (AL080)
    'al080-acrylic-cobra-nozzle.jpg': 'p35_img2_xref413_750x750.jpeg',
    'al080-acrylic-cobra-nozzle-gallery-1.jpg': 'p35_img1_xref412_750x365.jpeg',

    # 28. Acrylic Blade Nozzle (AL081)
    'al081-acrylic-blade-nozzle.jpg': 'p36_img2_xref418_750x750.jpeg',
    'al081-acrylic-blade-nozzle-gallery-1.jpg': 'p36_img1_xref416_798x439.jpeg',
    'al081-acrylic-blade-nozzle-gallery-2.jpg': 'p36_img3_xref419_640x578.jpeg',
}

for dst_name, src_name in mapping.items():
    src_path = os.path.join(SRC, src_name)
    dst_path = os.path.join(DST, dst_name)
    if os.path.exists(src_path):
        # If dst is .jpg but src is .png, or vice versa, handle cleanly
        shutil.copy2(src_path, dst_path)
        print(f"Copied {src_name} -> {dst_name}")
    else:
        print(f"WARNING: Missing {src_path}")

print("Done copying product images!")
