import os
from PIL import Image

upload_img = 'C:/Users/admin/.gemini/antigravity/brain/8ba9a458-02c7-47c8-a6b9-0bfa883c4f88/.user_uploaded/media_1795065931137_934273d1.jpg'
screenshot = 'C:/Users/admin/.gemini/antigravity/brain/8ba9a458-02c7-47c8-a6b9-0bfa883c4f88/.user_uploaded/media_1795065928203_c01a6e66.jpg'

print('Upload img exists:', os.path.exists(upload_img), os.path.getsize(upload_img))
print('Screenshot exists:', os.path.exists(screenshot), os.path.getsize(screenshot))

# Let's check public/assets/products
for f in os.listdir('public/assets/products'):
    if 'concealed' in f:
        path = os.path.join('public/assets/products', f)
        im = Image.open(path)
        print(f, im.size, im.mode)
