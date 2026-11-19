import json
from product_applications_specs import PRODUCTS_APPLICATION_SPECS

ts_lines = [
    "// Centralized Product Application Mapping for AQUALUXIS LIGHT",
    "// Provides 4 product-specific, authentic application cards for every product detail page.",
    "",
    "export interface ProductApplicationCard {",
    "  title: string;",
    "  image: string;",
    "  description: string;",
    "}",
    "",
    "export const PRODUCT_APPLICATIONS: Record<string, ProductApplicationCard[]> = {"
]

for slug, data in PRODUCTS_APPLICATION_SPECS.items():
    family = data["family"]
    ts_lines.append(f"  // {family}: {slug}")
    ts_lines.append(f'  "{slug}": [')
    for idx, card in enumerate(data["cards"], 1):
        img_path = f"/assets/applications/{slug}-app-{idx}.jpg"
        title = card["title"].replace('"', '\\"')
        desc = card["desc"].replace('"', '\\"')
        ts_lines.append("    {")
        ts_lines.append(f'      title: "{title}",')
        ts_lines.append(f'      image: "{img_path}",')
        ts_lines.append(f'      description: "{desc}",')
        ts_lines.append("    },")
    ts_lines.append("  ],")

ts_lines.append("};")
ts_lines.append("")
ts_lines.append("/**")
ts_lines.append(" * Retrieves the verified product-specific application cards.")
ts_lines.append(" * Falls back to tailored category defaults if a product is not explicitly mapped.")
ts_lines.append(" */")
ts_lines.append("export function getProductApplications(slug: string): ProductApplicationCard[] {")
ts_lines.append("  if (PRODUCT_APPLICATIONS[slug] && PRODUCT_APPLICATIONS[slug].length > 0) {")
ts_lines.append("    return PRODUCT_APPLICATIONS[slug];")
ts_lines.append("  }")
ts_lines.append("  // Default fallback")
ts_lines.append("  return [")
ts_lines.append("    {")
ts_lines.append('      title: "Commercial Aquatic Facilities",')
ts_lines.append('      image: "/assets/banners/features-pool-water.jpg",')
ts_lines.append('      description: "Engineered for continuous underwater immersion and high durability in public and commercial facilities.",')
ts_lines.append("    },")
ts_lines.append("  ];")
ts_lines.append("}")
ts_lines.append("")

with open("src/data/productApplications.ts", "w", encoding="utf-8") as f:
    f.write("\n".join(ts_lines))

print("Successfully written src/data/productApplications.ts!")
