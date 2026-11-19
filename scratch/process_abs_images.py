import os
from PIL import Image

# Directory where we extracted the raw images from PDF
src_dir = 'scratch/abs_images'
dst_dir = 'public/assets/products'
os.makedirs(dst_dir, exist_ok=True)

# Helper function to place an image centered on a square white background
def make_square_product_image(img_path, out_path, size=800, padding=40):
    with Image.open(img_path) as im:
        im = im.convert('RGB')
        w, h = im.size
        # scale so max dimension fits within size - 2*padding
        max_dim = size - 2 * padding
        scale = max_dim / max(w, h)
        new_w = int(w * scale)
        new_h = int(h * scale)
        im_resized = im.resize((new_w, new_h), Image.Resampling.LANCZOS)
        
        # New square white canvas
        canvas = Image.new('RGB', (size, size), (255, 255, 255))
        offset_x = (size - new_w) // 2
        offset_y = (size - new_h) // 2
        canvas.paste(im_resized, (offset_x, offset_y))
        canvas.save(out_path, 'JPEG', quality=95)
        print(f'Created {os.path.basename(out_path)} ({size}x{size}) from {os.path.basename(img_path)}')

# Mapping based on verified xref and page bounding rects:
# Page 6:
# img_1 (xref 109, 266x301) -> AL016
make_square_product_image(f'{src_dir}/page_6_img_1_xref_109_266x301.jpeg', f'{dst_dir}/al016-abs-pool-light.jpg')
# img_3 (xref 113, 244x271) -> AL017
make_square_product_image(f'{src_dir}/page_6_img_3_xref_113_244x271.jpeg', f'{dst_dir}/al017-abs-pool-light.jpg')
# img_4 (xref 115, 299x311) -> AL018
make_square_product_image(f'{src_dir}/page_6_img_4_xref_115_299x311.jpeg', f'{dst_dir}/al018-abs-pool-light.jpg')
# img_5 (xref 116, 249x275) -> AL019
make_square_product_image(f'{src_dir}/page_6_img_5_xref_116_249x275.jpeg', f'{dst_dir}/al019-abs-pool-light.jpg')
# img_7 (xref 119, 325x301) -> AL020
make_square_product_image(f'{src_dir}/page_6_img_7_xref_119_325x301.jpeg', f'{dst_dir}/al020-abs-pool-light.jpg')

# Page 7:
# img_2 (xref 129, 336x314) -> AL021 Front View
make_square_product_image(f'{src_dir}/page_7_img_2_xref_129_336x314.jpeg', f'{dst_dir}/al021-abs-pool-light.jpg')
# img_4 (xref 133, 352x369) -> AL021 Rear View
make_square_product_image(f'{src_dir}/page_7_img_4_xref_133_352x369.jpeg', f'{dst_dir}/al021-abs-pool-light-rear.jpg')
# img_6 (xref 137, 359x359) -> AL021 Slotted Rim Front
make_square_product_image(f'{src_dir}/page_7_img_6_xref_137_359x359.jpeg', f'{dst_dir}/al021-abs-pool-light-slotted.jpg')
# img_10 (xref 145, 337x336) -> AL022 Front View
make_square_product_image(f'{src_dir}/page_7_img_10_xref_145_337x336.jpeg', f'{dst_dir}/al022-abs-pool-light.jpg')
# img_16 (xref 157, 378x318) -> AL022 Rear View
make_square_product_image(f'{src_dir}/page_7_img_16_xref_157_378x318.jpeg', f'{dst_dir}/al022-abs-pool-light-rear.jpg')

# Page 8:
# img_1 (xref 164, 418x418) -> AL023 Front View
make_square_product_image(f'{src_dir}/page_8_img_1_xref_164_418x418.jpeg', f'{dst_dir}/al023-abs-pool-light.jpg')
# img_2 (xref 165, 500x242) -> AL023 Profile/Depth 50mm View
make_square_product_image(f'{src_dir}/page_8_img_2_xref_165_500x242.jpeg', f'{dst_dir}/al023-abs-pool-light-profile.jpg')
# img_4 (xref 168, 432x463) -> AL023 Rear View
make_square_product_image(f'{src_dir}/page_8_img_4_xref_168_432x463.jpeg', f'{dst_dir}/al023-abs-pool-light-rear.jpg')
# img_5 (xref 170, 455x470) -> AL024 Ultra Slim Front View
make_square_product_image(f'{src_dir}/page_8_img_5_xref_170_455x470.jpeg', f'{dst_dir}/al024-abs-pool-light.jpg')
# img_6 (xref 171, 321x449) -> AL024 Ultra Slim 15mm Side Profile
make_square_product_image(f'{src_dir}/page_8_img_6_xref_171_321x449.jpeg', f'{dst_dir}/al024-abs-pool-light-profile.jpg')
# img_7 (xref 172, 364x398) -> AL024 Rear View
make_square_product_image(f'{src_dir}/page_8_img_7_xref_172_364x398.jpeg', f'{dst_dir}/al024-abs-pool-light-rear.jpg')

# Page 9:
# img_2 (xref 179, 312x338) -> AL025 Front View
make_square_product_image(f'{src_dir}/page_9_img_2_xref_179_312x338.jpeg', f'{dst_dir}/al025-abs-pool-light.jpg')
# img_4 (xref 183, 474x316) -> AL025 Rear View
make_square_product_image(f'{src_dir}/page_9_img_4_xref_183_474x316.jpeg', f'{dst_dir}/al025-abs-pool-light-rear.jpg')
# img_6 (xref 187, 528x352) -> AL026 Front View
make_square_product_image(f'{src_dir}/page_9_img_6_xref_187_528x352.jpeg', f'{dst_dir}/al026-abs-pool-light.jpg')
# img_8 (xref 190, 345x329) -> AL027 Front View
make_square_product_image(f'{src_dir}/page_9_img_8_xref_190_345x329.jpeg', f'{dst_dir}/al027-abs-pool-light.jpg')
# img_11 (xref 194, 513x342) -> AL028 Front View
make_square_product_image(f'{src_dir}/page_9_img_11_xref_194_513x342.jpeg', f'{dst_dir}/al028-abs-pool-light.jpg')

# Page 10:
# img_7 (xref 217, 418x418) -> AL029 / AL029(A) Front View
make_square_product_image(f'{src_dir}/page_10_img_7_xref_217_418x418.jpeg', f'{dst_dir}/al029-abs-pool-light.jpg')
make_square_product_image(f'{src_dir}/page_10_img_7_xref_217_418x418.jpeg', f'{dst_dir}/al029a-abs-pool-light.jpg')
# img_4 (xref 211, 460x449) -> AL029 Rear View
make_square_product_image(f'{src_dir}/page_10_img_4_xref_211_460x449.jpeg', f'{dst_dir}/al029-abs-pool-light-rear.jpg')
# img_8 (xref 219, 1405x329) -> AL029 Colorways Strip
make_square_product_image(f'{src_dir}/page_10_img_8_xref_219_1405x329.jpeg', f'{dst_dir}/al029-abs-colorways.jpg')

# Also crop individual rims from img_8 (1405x329) for the 4 colors: Grey, Black, Blue, Red
with Image.open(f'{src_dir}/page_10_img_8_xref_219_1405x329.jpeg') as im_strip:
    w, h = im_strip.size
    # 4 rims side by side
    col_w = w // 4
    rim_names = ['grey', 'black', 'blue', 'red']
    for i, name in enumerate(rim_names):
        box = (i * col_w, 0, (i + 1) * col_w, h)
        rim_crop = im_strip.crop(box)
        # paste onto square canvas
        canvas = Image.new('RGB', (800, 800), (255, 255, 255))
        scale = 720 / max(rim_crop.width, rim_crop.height)
        crop_resized = rim_crop.resize((int(rim_crop.width * scale), int(rim_crop.height * scale)), Image.Resampling.LANCZOS)
        canvas.paste(crop_resized, ((800 - crop_resized.width) // 2, (800 - crop_resized.height) // 2))
        canvas.save(f'{dst_dir}/al029-abs-rim-{name}.jpg', 'JPEG', quality=95)
        print(f'Created al029-abs-rim-{name}.jpg')

print('ALL ABS PRODUCT IMAGES GENERATED SUCCESSFULLY!')
