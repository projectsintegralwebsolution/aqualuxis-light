import os
from PIL import Image

# Let's inspect mean pixel values or compare
files = [
    'al032-concealed-pool-light.jpg',
    'al033-concealed-pool-light.jpg',
    'al034-concealed-pool-light.jpg',
    'al035-concealed-pool-light.jpg',
    'al036-concealed-pool-light.jpg',
    'al032-concealed-pool-light-profile.jpg',
    'al032-concealed-pool-light-flush.jpg',
    'al033-concealed-pool-light-profile.jpg',
    'al036-concealed-pool-light-rear.jpg'
]

for f in files:
    p = os.path.join('public/assets/products', f)
    if os.path.exists(p):
        im = Image.open(p)
        # Check corner pixel color (black or white?)
        corners = [im.getpixel((0,0)), im.getpixel((10,10)), im.getpixel((im.width//2, 10))]
        print(f, 'Corners:', corners)
