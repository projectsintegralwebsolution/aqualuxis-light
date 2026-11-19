import re

with open('src/data/surfacePoolLightModels.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Fix slug in relatedSubcategories
text = text.replace("'concealed-light-swimming-pool-light-al032-al036'", "'concealed-swimming-pool-light-al032-al036'")

# Replace gallery references:
# Replace al00-surface-pool-light-gallery-1.jpg with al00-surface-pool-light-profile.jpg
# Replace al00-surface-pool-light-gallery-2.jpg with al00-surface-pool-light-rear.jpg
# Replace al00-surface-pool-light-gallery-3.jpg with al01-surface-pool-light.jpg
# Replace al00-surface-pool-light-gallery-4.jpg with al02-surface-pool-light.jpg

text = text.replace('/assets/products/al00-surface-pool-light-gallery-1.jpg', '/assets/products/al00-surface-pool-light-profile.jpg')
text = text.replace('/assets/products/al00-surface-pool-light-gallery-2.jpg', '/assets/products/al00-surface-pool-light-rear.jpg')
text = text.replace('/assets/products/al00-surface-pool-light-gallery-3.jpg', '/assets/products/al01-surface-pool-light.jpg')
text = text.replace('/assets/products/al00-surface-pool-light-gallery-4.jpg', '/assets/products/al02-surface-pool-light.jpg')

with open('src/data/surfacePoolLightModels.ts', 'w', encoding='utf-8') as f:
    f.write(text)

print("Updated surfacePoolLightModels.ts successfully!")
