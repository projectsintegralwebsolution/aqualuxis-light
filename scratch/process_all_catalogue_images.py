import fitz
from PIL import Image, ImageOps
import io
import os

doc = fitz.open('scratch/catalogue_extracted/AQUALUXIS LIGHT CATLOGUE.pdf')
out_dir = 'public/assets/products'
os.makedirs(out_dir, exist_ok=True)

def make_studio_image(pil_img, out_name, target_size=(800, 800), pad_ratio=0.10):
    """
    Takes a PIL image (RGB or RGBA), trims excess borders,
    and places it neatly centered on a pure white square canvas.
    """
    if pil_img.mode != 'RGBA':
        pil_img = pil_img.convert('RGBA')
        
    # Invert to detect non-white bounding box
    bg = Image.new('RGB', pil_img.size, (255, 255, 255))
    bg.paste(pil_img, mask=pil_img.split()[3])
    diff = ImageOps.invert(bg)
    bbox = diff.getbbox()
    
    if bbox:
        # Add 2% padding around the bounding box if possible
        bx0, by0, bx1, by1 = bbox
        bw, bh = bx1 - bx0, by1 - by0
        pad = max(2, int(min(bw, bh) * 0.02))
        bx0 = max(0, bx0 - pad)
        by0 = max(0, by0 - pad)
        bx1 = min(pil_img.width, bx1 + pad)
        by1 = min(pil_img.height, by1 + pad)
        cropped = pil_img.crop((bx0, by0, bx1, by1))
    else:
        cropped = pil_img
        
    tw, th = target_size
    max_w = int(tw * (1.0 - 2 * pad_ratio))
    max_h = int(th * (1.0 - 2 * pad_ratio))
    
    cw, ch = cropped.size
    scale = min(max_w / cw, max_h / ch)
    nw = max(1, int(cw * scale))
    nh = max(1, int(ch * scale))
    
    resized = cropped.resize((nw, nh), Image.Resampling.LANCZOS)
    
    canvas = Image.new('RGB', target_size, (255, 255, 255))
    paste_x = (tw - nw) // 2
    paste_y = (th - nh) // 2
    
    canvas.paste(resized, (paste_x, paste_y), mask=resized.split()[3])
    
    out_path = os.path.join(out_dir, out_name)
    canvas.save(out_path, quality=95)
    print(f"Saved: {out_name} ({target_size[0]}x{target_size[1]})")
    return out_path

def extract_and_make(xref, out_name, crop_box=None):
    bimg = doc.extract_image(xref)
    pimg = Image.open(io.BytesIO(bimg["image"]))
    if crop_box:
        pimg = pimg.crop(crop_box)
    return make_studio_image(pimg, out_name)

print("Starting full catalogue image extraction and studio generation...")

# =========================================================================
# 1. SWIMMING POOL LIGHTS
# =========================================================================

# --- AL00 to AL015 (Surface Model Swimming Pool Light) ---
extract_and_make(69, "al00-surface-pool-light.jpg") # AL00 front studio
extract_and_make(55, "al01-surface-pool-light.jpg") # AL01
extract_and_make(59, "al02-surface-pool-light.jpg") # AL02
extract_and_make(54, "al03-surface-pool-light.jpg") # AL03
extract_and_make(57, "al04-surface-pool-light.jpg") # AL04
extract_and_make(60, "al05-surface-pool-light.jpg") # AL05
extract_and_make(62, "al00-surface-pool-light-profile.jpg") # Side Profile
extract_and_make(64, "al00-surface-pool-light-rear.jpg") # Rear View

extract_and_make(86, "al06-surface-pool-light.jpg") # AL06
extract_and_make(90, "al07-surface-pool-light.jpg") # AL07
extract_and_make(88, "al08-surface-pool-light.jpg") # AL08
extract_and_make(92, "al09-surface-pool-light.jpg") # AL09
extract_and_make(95, "al010-surface-pool-light.jpg") # AL010
extract_and_make(99, "al011-surface-pool-light.jpg") # AL011
extract_and_make(100, "al012-surface-pool-light.jpg") # AL012
extract_and_make(97, "al013-surface-pool-light.jpg") # AL013
extract_and_make(93, "al014-surface-pool-light.jpg") # AL014
extract_and_make(102, "al015-surface-pool-light.jpg") # AL015

# --- AL030 / AL031 (SS Body Swimming Pool Light) ---
extract_and_make(227, "al030-ss-pool-light.jpg") # AL030 Front
extract_and_make(230, "al030-ss-pool-light-side.jpg") # AL030 Side
extract_and_make(234, "al030-ss-pool-light-rear.jpg") # AL030 Rear
extract_and_make(238, "al031-ss-pool-light.jpg") # AL031 Front
extract_and_make(242, "al031-ss-pool-light-side.jpg") # AL031 Side
extract_and_make(244, "al031-ss-pool-light-rear.jpg") # AL031 Rear
extract_and_make(246, "al031-ss-pool-light-profile.jpg") # AL031 Profile

# --- AL032 - AL036 (Concealed Swimming Pool Light) ---
extract_and_make(253, "al032-concealed-pool-light.jpg") # AL032 Front
extract_and_make(254, "al032-concealed-pool-light-profile.jpg") # AL032 Profile
extract_and_make(256, "al033-concealed-pool-light.jpg") # AL033 Front
extract_and_make(258, "al033-concealed-pool-light-profile.jpg") # AL033 Profile
extract_and_make(260, "al034-concealed-pool-light.jpg") # AL034 Front
extract_and_make(261, "al035-concealed-pool-light.jpg") # AL035 Front (9 LED)
extract_and_make(263, "al036-concealed-pool-light.jpg") # AL036 Front (12 LED)
extract_and_make(264, "al036-concealed-pool-light-rear.jpg") # Cable Gland / Rear
extract_and_make(266, "al032-concealed-pool-light-flush.jpg") # Flush sleeve mounting

# =========================================================================
# 2. FOUNTAIN LIGHTS
# =========================================================================

# --- AL037 - AL040 (Full SS Spot Fountain Light) ---
extract_and_make(273, "al037-full-ss-spot-fountain-light.jpg") # AL037 Front
extract_and_make(274, "al038-full-ss-spot-fountain-light.jpg") # AL038 Front
extract_and_make(275, "al039-full-ss-spot-fountain-light.jpg") # AL039 Front
extract_and_make(276, "al040-full-ss-spot-fountain-light.jpg") # AL040 Front
extract_and_make(278, "al037-full-ss-spot-fountain-light-bracket.jpg") # Yoke Bracket
extract_and_make(280, "al037-full-ss-spot-fountain-light-profile.jpg") # Angle Profile
extract_and_make(279, "al037-full-ss-spot-fountain-light-bezel.jpg") # Bezel Detail

# --- AL041 - AL052 (SS Spot Fountain Light) ---
extract_and_make(285, "al041-ss-spot-fountain-light.jpg") # AL041 Front
extract_and_make(284, "al042-ss-spot-fountain-light.jpg") # AL042 Front
extract_and_make(286, "al043-ss-spot-fountain-light.jpg") # AL043 Front
extract_and_make(287, "al044-ss-spot-fountain-light.jpg") # AL044 Front
extract_and_make(288, "al045-ss-spot-fountain-light.jpg") # AL045 Front
extract_and_make(291, "al046-ss-spot-fountain-light.jpg") # AL046 Front
extract_and_make(292, "al047-ss-spot-fountain-light.jpg") # AL047 Front
extract_and_make(294, "al048-ss-spot-fountain-light.jpg") # AL048 Front
extract_and_make(295, "al049-ss-spot-fountain-light.jpg") # AL049 Front
extract_and_make(296, "al050-ss-spot-fountain-light.jpg") # AL050 Front

# --- AL053 - AL057 (Nozzle Fountain Light) ---
extract_and_make(318, "al053-nozzle-fountain-light.jpg") # AL053 Front
extract_and_make(319, "al054-nozzle-fountain-light.jpg") # AL054 Front
extract_and_make(320, "al055-nozzle-fountain-light.jpg") # AL055 Front
extract_and_make(321, "al056-nozzle-fountain-light.jpg") # AL056 Front
extract_and_make(322, "al057-nozzle-fountain-light.jpg") # AL057 Front

# --- AL058 - AL061 (Adjustable Nozzle Fountain Light) ---
extract_and_make(329, "al058-adjustable-nozzle-fountain-light.jpg") # AL058 Front
extract_and_make(327, "al059-adjustable-nozzle-fountain-light.jpg") # AL059 Front
extract_and_make(325, "al060-adjustable-nozzle-fountain-light.jpg") # AL060 Front
extract_and_make(330, "al061-adjustable-nozzle-fountain-light.jpg") # AL061 Front
extract_and_make(331, "al058-adjustable-nozzle-fountain-light-side.jpg") # Profile

# --- AL062 (LED Wall Washer Light) ---
extract_and_make(335, "al062-led-wall-washer-light.jpg") # Full Linear Bar

# =========================================================================
# 3. FOUNTAIN NOZZLES (HARDWARE CUTOUTS ONLY - NO WATER SPRAYS)
# =========================================================================

# AL063: Umbrella / Bell Nozzle (Brass Chrome Plated)
extract_and_make(340, "al063-umbrella-bell-nozzle.jpg")

# AL064: Foam Nozzle (Brass Chrome Plated)
extract_and_make(342, "al064-foam-nozzle.jpg")

# AL065: Finger Jet Nozzle (Brass Chrome Plated Multi-finger)
extract_and_make(346, "al065-finger-jet-nozzle.jpg")

# AL066: Long Foam Nozzle (Brass Chrome Plated Column)
extract_and_make(347, "al066-long-foam-nozzle.jpg")

# AL067: Geyser / Cascade Jet Nozzle (Brass Chrome Plated)
extract_and_make(352, "al067-geyser-nozzle.jpg")

# AL068: SS Foam Nozzle (Brass Chrome with Black ABS)
extract_and_make(353, "al068-ss-foam-nozzle.jpg")
extract_and_make(354, "al068-ss-foam-nozzle-detail.jpg")

# AL069: Tulip Nozzle (Brass Chrome Plated)
extract_and_make(358, "al069-tulip-nozzle.jpg")

# AL070: Fan Jet Nozzle (Brass Chrome Plated Flat Fan)
extract_and_make(362, "al070-fan-jet-nozzle.jpg")

# AL071: Revolving Nozzle (Brass Chrome Plated Swivel Head)
extract_and_make(366, "al071-revolving-nozzle.jpg")

# AL072: Diamond / Flower Cluster Nozzle (Brass Chrome Plated Multi-Tier)
extract_and_make(367, "al072-diamond-flower-cluster-nozzle.jpg")

# AL073: Crown Nozzle (Brass Chrome Plated Ring Jet)
extract_and_make(374, "al073-crown-nozzle.jpg")

# AL074: Flower Nozzle (Brass Chrome Plated Petal Head)
extract_and_make(376, "al074-flower-nozzle.jpg")

# =========================================================================
# 4. WATER FEATURES (HARDWARE FIXTURES ONLY - NO POOL/WATERFALL SCENES)
# =========================================================================

# AL075: SS Water Cascade / Blade Nozzle (Solid Stainless Steel Blade)
extract_and_make(382, "al075-ss-water-cascade-blade-nozzle.jpg")

# AL076: SS Step Water Blade Nozzle (Solid Stainless Steel Step Blade)
# xref 387 is the step waterfall banner; let's crop the actual SS step blade from page 31
page31 = doc[30] # 0-indexed page 30 = page 31
pix31 = page31.get_pixmap(dpi=200)
pimg31 = Image.open(io.BytesIO(pix31.tobytes("png")))
# The step blade drawing/fixture is at top of page 31
# Let's inspect page 31 dimensions: 595 x 842 pt -> 1190 x 1684 px at 200dpi
# bbox of xref 387 on page is (72, 111, 504, 289)
step_blade_crop = pimg31.crop((int(72 * 200/72), int(111 * 200/72), int(504 * 200/72), int(290 * 200/72)))
make_studio_image(step_blade_crop, "al076-ss-step-water-blade-nozzle.jpg")

# AL077: SS Water Cascade Nozzle (Curved Stainless Steel Cascade)
extract_and_make(391, "al077-ss-water-cascade-nozzle.jpg")

# AL078: Cobra Nozzle (Marine Stainless Steel Cobra Arch)
extract_and_make(397, "al078-cobra-nozzle.jpg")
extract_and_make(402, "al078-cobra-nozzle-profile.jpg") # Profile

# AL079: Dolphin Nozzle (Marine Stainless Steel Dolphin Arch)
extract_and_make(408, "al079-dolphin-nozzle.jpg")

# AL080: Acrylic Cobra Nozzle (Clear Acrylic Curved Cascade)
extract_and_make(412, "al080-acrylic-cobra-nozzle.jpg")

# AL081: Acrylic Blade Nozzle (Clear Acrylic Illuminated Blade)
extract_and_make(419, "al081-acrylic-blade-nozzle.jpg")
extract_and_make(416, "al081-acrylic-blade-nozzle-detail.jpg")

print("\nALL CATALOGUE IMAGES EXTRACTED AND STANDARDIZED TO 800x800 STUDIO CUTOUTS SUCCESSFULLY!")
