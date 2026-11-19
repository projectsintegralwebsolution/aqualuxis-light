import os, sys
from PIL import Image

# Let's inspect what images we have in scratch/catalogue_app_photos
cat_dir = 'scratch/catalogue_app_photos'
cat_images = os.listdir(cat_dir)
print(f"Total catalogue images: {len(cat_images)}")

# Check public assets
banners_dir = 'public/assets/banners'
hero_dir = 'public/assets/hero'
about_dir = 'public/assets/about'
categories_dir = 'public/assets/categories'

for d in [banners_dir, hero_dir, about_dir, categories_dir]:
    if os.path.exists(d):
        print(f"{d}: {os.listdir(d)}")
