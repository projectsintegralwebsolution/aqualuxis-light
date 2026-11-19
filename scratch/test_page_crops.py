from PIL import Image
import os

os.makedirs('scratch/test_crops', exist_ok=True)

# Function to save a 16:9 crop (800x450)
def crop_and_save(page_num, box, out_name):
    page_path = f"scratch/pdf_pages/page_{page_num:02d}.png"
    im = Image.open(page_path)
    # box is (left, top, right, bottom) in pixels on 1241x1754 page
    crop = im.crop(box)
    crop_resized = crop.resize((800, 450), Image.Resampling.LANCZOS)
    out_path = os.path.join('scratch/test_crops', out_name)
    crop_resized.save(out_path, quality=92)
    print(f"Saved {out_path} from page {page_num} box {box}")

# Test on page 6 (bottom half is pool installation)
# Let's inspect page 6 dimensions and crop bottom
crop_and_save(6, (40, 1100, 1200, 1700), "p6_pool_install.jpg")
crop_and_save(7, (40, 1050, 1200, 1680), "p7_abs_pool_install.jpg")
crop_and_save(8, (40, 1080, 1200, 1700), "p8_ss_pool_install.jpg")
crop_and_save(9, (40, 1100, 1200, 1700), "p9_concealed_pool_install.jpg")
