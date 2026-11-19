from PIL import Image
import os

# Let's inspect p30_img3 (page 30 collage)
im30 = Image.open('scratch/catalogue_app_photos/p30_img3_xref384.jpeg')
print('Page 30 collage size:', im30.size)

# Let's inspect p33_img3 (page 33 cobra collage)
im33 = Image.open('scratch/catalogue_app_photos/p33_img3_xref400.jpeg')
print('Page 33 cobra collage size:', im33.size)

# Let's inspect p10_img7
im10_7 = Image.open('scratch/catalogue_app_photos/p10_img7_xref219.jpeg')
print('Page 10_7 size:', im10_7.size)

# Let's inspect p23 banner
im23 = Image.open('scratch/catalogue_app_photos/p23_img0_xref335.jpeg')
print('Page 23 banner size:', im23.size)
