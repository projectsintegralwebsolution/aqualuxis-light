import os
from PIL import Image

screenshot_path = 'C:/Users/admin/.gemini/antigravity/brain/8ba9a458-02c7-47c8-a6b9-0bfa883c4f88/.user_uploaded/media_1795065928203_c01a6e66.jpg'
im = Image.open(screenshot_path)
print('Screenshot size:', im.size)

# Crop the main image area in the screenshot
# The main image is roughly in the center-left
# Let's save a crop of the main image and check
w, h = im.size
crop_main = im.crop((int(w * 0.15), int(h * 0.2), int(w * 0.45), int(h * 0.85)))
crop_main.save('scratch/screenshot_main_crop.jpg')
print('Saved crop_main, size:', crop_main.size)

# Now compare this crop with every jpg in public/assets/products
import numpy as np

crop_np = np.array(crop_main.convert('RGB').resize((100, 100)))

best_diff = 1e9
best_file = None

for f in os.listdir('public/assets/products'):
    if f.endswith('.jpg') or f.endswith('.png') or f.endswith('.webp'):
        p = os.path.join('public/assets/products', f)
        try:
            cand = Image.open(p).convert('RGB').resize((100, 100))
            diff = np.mean(np.abs(crop_np.astype(float) - np.array(cand).astype(float)))
            if diff < best_diff:
                best_diff = diff
                best_file = f
        except Exception as e:
            pass

print('Best matching file in products:', best_file, 'with diff:', best_diff)
