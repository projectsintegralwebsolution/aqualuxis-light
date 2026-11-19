// Centralized Product Application Mapping for AQUALUXIS LIGHT
// Provides 4 product-specific, authentic application cards for every product detail page.

export interface ProductApplicationCard {
  title: string;
  image: string;
  description: string;
}

export const PRODUCT_APPLICATIONS: Record<string, ProductApplicationCard[]> = {
  // Swimming Pool Lights: surface-model-swimming-pool-light-al00-al015
  "surface-model-swimming-pool-light-al00-al015": [
    {
      title: "Residential Underwater Swimming Pool Lighting",
      image: "/assets/applications/surface-model-swimming-pool-light-al00-al015-app-1.jpg",
      description: "Surface-mounted low-profile illumination engineered for private villa pools, providing wide beam optical spread across crystalline water.",
    },
    {
      title: "Luxury Resort Swimming Pool Illumination",
      image: "/assets/applications/surface-model-swimming-pool-light-al00-al015-app-2.jpg",
      description: "High-lumen 316 stainless steel fixture withstanding continuous high-salinity exposure and chemical chlorination in multi-tier resort lagoons.",
    },
    {
      title: "Commercial Swimming Pool Lighting",
      image: "/assets/applications/surface-model-swimming-pool-light-al00-al015-app-3.jpg",
      description: "Reliable 12V AC/DC low-voltage operation for Olympic-length competition pools, aquatic centers, and health club lap basins.",
    },
    {
      title: "Architectural Pool Lighting",
      image: "/assets/applications/surface-model-swimming-pool-light-al00-al015-app-4.jpg",
      description: "Precision optical beam shaping for infinity edges, perimeter wet decks, and modern geometric architectural water elements.",
    },
  ],
  // Swimming Pool Lights: abs-body-swimming-pool-light-al016-al029a
  "abs-body-swimming-pool-light-al016-al029a": [
    {
      title: "Residential Swimming Pools",
      image: "/assets/applications/abs-body-swimming-pool-light-al016-al029a-app-1.jpg",
      description: "Corrosion-free ABS engineering housing designed for quick surface mounting on gunite, tiled, and fiberglass private swimming pools.",
    },
    {
      title: "Saltwater & Chlorinated Swimming Pools",
      image: "/assets/applications/abs-body-swimming-pool-light-al016-al029a-app-2.jpg",
      description: "100% non-corrosive polymer body completely impervious to saltwater electrolysis and heavy chlorination in coastal pool settings.",
    },
    {
      title: "Hotel & Resort Swimming Pools",
      image: "/assets/applications/abs-body-swimming-pool-light-al016-al029a-app-3.jpg",
      description: "Vibrant warm white, neutral, or dynamic RGB underwater glow enhancing night-time swimming experiences in boutique hotels.",
    },
    {
      title: "Commercial Aquatic Facilities",
      image: "/assets/applications/abs-body-swimming-pool-light-al016-al029a-app-4.jpg",
      description: "Heavy-duty thermal-dissipating polymer construction built for continuous 24/7 public facility operation and aquatic parks.",
    },
  ],
  // Swimming Pool Lights: ss-body-swimming-pool-light-al030-al031
  "ss-body-swimming-pool-light-al030-al031": [
    {
      title: "Premium Residential Swimming Pools",
      image: "/assets/applications/ss-body-swimming-pool-light-al030-al031-app-1.jpg",
      description: "Solid electro-polished SS 304/316 marine-grade bezel adding timeless metallic luxury to custom bespoke private residential pools.",
    },
    {
      title: "Luxury Hotel Swimming Pools",
      image: "/assets/applications/ss-body-swimming-pool-light-al030-al031-app-2.jpg",
      description: "High-output Cree SMD arrays projecting rich, uniform illumination through deep resort plunge pools and rooftop hotel decks.",
    },
    {
      title: "Resort Pool Installations",
      image: "/assets/applications/ss-body-swimming-pool-light-al030-al031-app-3.jpg",
      description: "IP68 submersible engineering designed to resist harsh tropical climate changes, mineralized water, and heavy guest bather loads.",
    },
    {
      title: "Commercial Swimming Pool Environments",
      image: "/assets/applications/ss-body-swimming-pool-light-al030-al031-app-4.jpg",
      description: "Superior mechanical impact resistance and structural rigidity ideal for municipal pools, sports clubs, and spa plunge basins.",
    },
  ],
  // Swimming Pool Lights: concealed-swimming-pool-light-al032-al036
  "concealed-swimming-pool-light-al032-al036": [
    {
      title: "Flush-Mounted Pool Lighting Installations",
      image: "/assets/applications/concealed-swimming-pool-light-al032-al036-app-1.jpg",
      description: "Zero-protrusion concealed niche installation creating seamless, clean vertical pool walls without snag points or turbulence.",
    },
    {
      title: "Minimalist Architectural Swimming Pools",
      image: "/assets/applications/concealed-swimming-pool-light-al032-al036-app-2.jpg",
      description: "Understated recessed aesthetic blending harmoniously into micro-cement, dark granite, and porcelain designer pool basins.",
    },
    {
      title: "Luxury Infinity Pools",
      image: "/assets/applications/concealed-swimming-pool-light-al032-al036-app-3.jpg",
      description: "Unobtrusive concealed placement beneath waterlines ensuring smooth overflow reflections along panoramic vanishing edges.",
    },
    {
      title: "Integrated Underwater Pool Lighting",
      image: "/assets/applications/concealed-swimming-pool-light-al032-al036-app-4.jpg",
      description: "Recessed architectural illumination for built-in pool benches, spa steps, underwater baja shelves, and swim-up bars.",
    },
  ],
  // Fountain Lights: full-ss-spot-fountain-light-al037-al040
  "full-ss-spot-fountain-light-al037-al040": [
    {
      title: "Large Architectural Fountains",
      image: "/assets/applications/full-ss-spot-fountain-light-al037-al040-app-1.jpg",
      description: "Heavy-duty solid stainless steel spotlight with high-throw optics capable of penetrating high-velocity vertical fountain plumes.",
    },
    {
      title: "Musical Fountain Installations",
      image: "/assets/applications/full-ss-spot-fountain-light-al037-al040-app-2.jpg",
      description: "DMX512 addressable control enabling millisecond color synchronization with choreographed musical water sequences.",
    },
    {
      title: "Public Fountain Lighting",
      image: "/assets/applications/full-ss-spot-fountain-light-al037-al040-app-3.jpg",
      description: "Vandal-resistant tempered safety glass and IK10 structural rating designed for civic plazas and public monument water basins.",
    },
    {
      title: "Commercial Water Displays",
      image: "/assets/applications/full-ss-spot-fountain-light-al037-al040-app-4.jpg",
      description: "Powerful high-wattage spotlighting illuminating central water geysers and cascading architectural corporate water features.",
    },
  ],
  // Fountain Lights: ss-spot-fountain-light-al041-al052
  "ss-spot-fountain-light-al041-al052": [
    {
      title: "Decorative Fountains",
      image: "/assets/applications/ss-spot-fountain-light-al041-al052-app-1.jpg",
      description: "Compact adjustable stainless steel bracket mount offering flexible aiming angles for multi-tiered decorative garden water bowls.",
    },
    {
      title: "Garden Fountains",
      image: "/assets/applications/ss-spot-fountain-light-al041-al052-app-2.jpg",
      description: "Discreet submerged spot accentuating decorative stone fountains, bubbling urns, and tranquil residential water ponds.",
    },
    {
      title: "Resort Fountains",
      image: "/assets/applications/ss-spot-fountain-light-al041-al052-app-3.jpg",
      description: "Warm 3000K or rich RGB ambient lighting enriching hotel entryway fountains, courtyard reflecting pools, and landscape waters.",
    },
    {
      title: "Landscape Water Installations",
      image: "/assets/applications/ss-spot-fountain-light-al041-al052-app-4.jpg",
      description: "Durable IP68 waterproof housing engineered for continuous submersion in natural ponds, stream courses, and rock water features.",
    },
  ],
  // Fountain Lights: nozzle-fountain-light-al053-al057
  "nozzle-fountain-light-al053-al057": [
    {
      title: "Illuminated Fountain Jets",
      image: "/assets/applications/nozzle-fountain-light-al053-al057-app-1.jpg",
      description: "Center-hole ring geometry allowing fountain nozzle pipes to pass directly through the lamp for zero-shadow internal jet lighting.",
    },
    {
      title: "Musical Fountain Displays",
      image: "/assets/applications/nozzle-fountain-light-al053-al057-app-2.jpg",
      description: "Synchronized center-mount LED ring transforming high-speed jumping laminar water jets into brilliant conduits of light.",
    },
    {
      title: "Decorative Water Features",
      image: "/assets/applications/nozzle-fountain-light-al053-al057-app-3.jpg",
      description: "Uniform concentric water beam highlighting central foam geysers and decorative multi-stream fountain centerpieces.",
    },
    {
      title: "Public Fountain Installations",
      image: "/assets/applications/nozzle-fountain-light-al053-al057-app-4.jpg",
      description: "Robust full stainless steel center-hole body built to withstand high water recoil pressure in public square dry-deck plazas.",
    },
  ],
  // Fountain Lights: adjustable-nozzle-fountain-light-al058-al061
  "adjustable-nozzle-fountain-light-al058-al061": [
    {
      title: "Adjustable Fountain Jet Installations",
      image: "/assets/applications/adjustable-nozzle-fountain-light-al058-al061-app-1.jpg",
      description: "Articulated internal nozzle pass-through collar permitting precise directional tilting of angled arching water streams.",
    },
    {
      title: "Decorative Water Displays",
      image: "/assets/applications/adjustable-nozzle-fountain-light-al058-al061-app-2.jpg",
      description: "Variable-angle center-hole optics aligning beam angles with parabolic arching sprays and concentric water jets.",
    },
    {
      title: "Landscape Fountains",
      image: "/assets/applications/adjustable-nozzle-fountain-light-al058-al061-app-3.jpg",
      description: "Submerged directional ring light illuminating kinetic weeping willow, tulip, and finger jet landscape water patterns.",
    },
    {
      title: "Architectural Fountains",
      image: "/assets/applications/adjustable-nozzle-fountain-light-al058-al061-app-4.jpg",
      description: "Engineered for perimeter nozzle rings in commercial shopping center water basins and atrium water features.",
    },
  ],
  // Fountain Lights: led-wall-washer-light-al062
  "led-wall-washer-light-al062": [
    {
      title: "Illuminated Water Walls",
      image: "/assets/applications/led-wall-washer-light-al062-app-1.jpg",
      description: "Linear asymmetric optical lens producing continuous, uniform vertical light sweeps across textured stone water walls.",
    },
    {
      title: "Architectural Facades",
      image: "/assets/applications/led-wall-washer-light-al062-app-2.jpg",
      description: "High-lumen linear underwater grazing enhancing the depth and texture of building facades, weeping walls, and reflecting bas-reliefs.",
    },
    {
      title: "Landscape Walls",
      image: "/assets/applications/led-wall-washer-light-al062-app-3.jpg",
      description: "Recessed ground and trough installation highlighting natural slate, stacked stone, and marble garden perimeter retaining walls.",
    },
    {
      title: "Fountain Structures",
      image: "/assets/applications/led-wall-washer-light-al062-app-4.jpg",
      description: "Seamless linear linkable bar providing uninterrupted linear illumination beneath cascading multi-tiered fountain weirs.",
    },
  ],
  // Fountain Nozzles: umbrella-bell-nozzle-al063
  "umbrella-bell-nozzle-al063": [
    {
      title: "Umbrella-Shaped Water Displays",
      image: "/assets/applications/umbrella-bell-nozzle-al063-app-1.jpg",
      description: "Precision-crafted brass bell cap producing a clear, tranquil 360-degree laminar water film resembling an elegant glass dome.",
    },
    {
      title: "Bell Fountain Installations",
      image: "/assets/applications/umbrella-bell-nozzle-al063-app-2.jpg",
      description: "Low-noise, splash-free laminar water sheet perfect for sheltered wind-free atriums, courtyard urns, and luxury lobbies.",
    },
    {
      title: "Garden & Landscape Fountains",
      image: "/assets/applications/umbrella-bell-nozzle-al063-app-3.jpg",
      description: "Graceful circular water film offering gentle soothing acoustics in Zen gardens, botanical landscapes, and reflection ponds.",
    },
    {
      title: "Decorative Resort Fountains",
      image: "/assets/applications/umbrella-bell-nozzle-al063-app-4.jpg",
      description: "Subtle, non-turbulent water dome ideally illuminated from below with warm submerged LED rings in luxury resort pavilions.",
    },
  ],
  // Fountain Nozzles: foam-nozzle-al064
  "foam-nozzle-al064": [
    {
      title: "Aerated Foam Fountain Displays",
      image: "/assets/applications/foam-nozzle-al064-app-1.jpg",
      description: "Venturi air-induction chamber generating a high-contrast frothy white water column with exceptional wind stability.",
    },
    {
      title: "Decorative Water Jets",
      image: "/assets/applications/foam-nozzle-al064-app-2.jpg",
      description: "Rich, frothy, sparkling foam plume delivering high optical volume and dense water presence with minimal water consumption.",
    },
    {
      title: "Landscape Fountains",
      image: "/assets/applications/foam-nozzle-al064-app-3.jpg",
      description: "Submerged venturi aeration creating energetic, bubbling water life in park ponds, estate driveways, and reflection basins.",
    },
    {
      title: "Public Fountain Installations",
      image: "/assets/applications/foam-nozzle-al064-app-4.jpg",
      description: "Highly visible thick white foam columns capturing vivid nighttime illumination in civic center squares and commercial entries.",
    },
  ],
  // Fountain Nozzles: finger-jet-nozzle-al065
  "finger-jet-nozzle-al065": [
    {
      title: "Multiple Narrow Water Jet Displays",
      image: "/assets/applications/finger-jet-nozzle-al065-app-1.jpg",
      description: "Concentric circle of individual micro-jets projecting fine parabolic water streams forming an intricate crystalline bouquet.",
    },
    {
      title: "Interactive Fountain Installations",
      image: "/assets/applications/finger-jet-nozzle-al065-app-2.jpg",
      description: "Crisp multi-finger water streams suited for dry-deck splash pads and interactive children play plazas with zero standing water.",
    },
    {
      title: "Musical Fountain Arrangements",
      image: "/assets/applications/finger-jet-nozzle-al065-app-3.jpg",
      description: "Rapid dynamic response under solenoid valve control, creating rhythmic dancing water fingers synchronized with musical scores.",
    },
    {
      title: "Decorative Water Features",
      image: "/assets/applications/finger-jet-nozzle-al065-app-4.jpg",
      description: "Classic crown bouquet effect creating sparkling light refraction and playful sound in residential garden courtyards.",
    },
  ],
  // Fountain Nozzles: long-foam-nozzle-al066
  "long-foam-nozzle-al066": [
    {
      title: "Continuous Foam Fountain Displays",
      image: "/assets/applications/long-foam-nozzle-al066-app-1.jpg",
      description: "Extended vertical mixing tube producing a dense, highly compact bubbling column that retains shape at elevated heights.",
    },
    {
      title: "Aerated Water Features",
      image: "/assets/applications/long-foam-nozzle-al066-app-2.jpg",
      description: "Substantial frothy volume providing strong aesthetic mass against large architectural backdrops and corporate towers.",
    },
    {
      title: "Decorative Fountains",
      image: "/assets/applications/long-foam-nozzle-al066-app-3.jpg",
      description: "Striking vertical focal point for formal multi-tiered fountain basins and grand palace courtyard centerpieces.",
    },
    {
      title: "Landscape Installations",
      image: "/assets/applications/long-foam-nozzle-al066-app-4.jpg",
      description: "Excellent wind-resistant water mass designed for open lakeside promenades, golf club ponds, and windy coastal landscapes.",
    },
  ],
  // Fountain Nozzles: geyser-nozzle-al067
  "geyser-nozzle-al067": [
    {
      title: "Vertical Water Jet Fountains",
      image: "/assets/applications/geyser-nozzle-al067-app-1.jpg",
      description: "Water-level dependent jet drawing basin water into its core to produce an imposing, turbulent erupting geyser plume.",
    },
    {
      title: "Plaza Fountains",
      image: "/assets/applications/geyser-nozzle-al067-app-2.jpg",
      description: "Towering vertical focal display commanding attention in grand municipal plazas, retail lifestyle centers, and university grounds.",
    },
    {
      title: "Public Water Displays",
      image: "/assets/applications/geyser-nozzle-al067-app-3.jpg",
      description: "High visual fullness and dramatic water splashing sound creating a lively, refreshing microclimate in warm urban spaces.",
    },
    {
      title: "Musical Fountain Installations",
      image: "/assets/applications/geyser-nozzle-al067-app-4.jpg",
      description: "Impressive climax element in musical fountain shows, shooting towering bursts of foamy water illuminated by RGB spotlights.",
    },
  ],
  // Fountain Nozzles: ss-foam-nozzle-al068
  "ss-foam-nozzle-al068": [
    {
      title: "Aerated Fountain Displays",
      image: "/assets/applications/ss-foam-nozzle-al068-app-1.jpg",
      description: "Solid stainless steel construction offering lifetime resistance against corrosion, lime scale, and chemical water treatments.",
    },
    {
      title: "Decorative Water Features",
      image: "/assets/applications/ss-foam-nozzle-al068-app-2.jpg",
      description: "Pristine white aerated cone of water that catches and scatters sunlight by day and underwater LED brilliance by night.",
    },
    {
      title: "Resort Fountains",
      image: "/assets/applications/ss-foam-nozzle-al068-app-3.jpg",
      description: "Low maintenance stainless steel foam jet ideal for luxury resort entrances, swimming pool islands, and hotel lobbies.",
    },
    {
      title: "Landscape Fountains",
      image: "/assets/applications/ss-foam-nozzle-al068-app-4.jpg",
      description: "Heavy-duty SS 304/316 body withstanding natural pond sediment and biological growth in ecological landscape waters.",
    },
  ],
  // Fountain Nozzles: tulip-nozzle-al069
  "tulip-nozzle-al069": [
    {
      title: "Tulip-Shaped Fountain Displays",
      image: "/assets/applications/tulip-nozzle-al069-app-1.jpg",
      description: "Precision conical deflector shaping water into a blooming floral chalice reminiscent of an open tulip flower.",
    },
    {
      title: "Decorative Garden Fountains",
      image: "/assets/applications/tulip-nozzle-al069-app-2.jpg",
      description: "Artistic botanical silhouette adding romantic elegance to estate gardens, flowerbeds, and formal English courtyard pools.",
    },
    {
      title: "Resort Water Features",
      image: "/assets/applications/tulip-nozzle-al069-app-3.jpg",
      description: "Gentle, whisper-quiet sheet of falling water creating a serene relaxing atmosphere in wellness retreats and luxury spas.",
    },
    {
      title: "Architectural Fountains",
      image: "/assets/applications/tulip-nozzle-al069-app-4.jpg",
      description: "Clear laminar floral canopy perfectly paired with central spot fountain lights for dramatic nocturnal illumination.",
    },
  ],
  // Fountain Nozzles: fan-jet-nozzle-al070
  "fan-jet-nozzle-al070": [
    {
      title: "Fan-Shaped Water Displays",
      image: "/assets/applications/fan-jet-nozzle-al070-app-1.jpg",
      description: "Wide-angle duckbill slit projecting a broad, vertical parabolic fan of water that covers extensive linear areas.",
    },
    {
      title: "Decorative Water Walls",
      image: "/assets/applications/fan-jet-nozzle-al070-app-2.jpg",
      description: "Flat curtain of water acting as an acoustic water screen or decorative room divider in commercial atrium ponds.",
    },
    {
      title: "Landscape Fountains",
      image: "/assets/applications/fan-jet-nozzle-al070-app-3.jpg",
      description: "Broad fan spray creating an expansive canvas of shimmering water droplets across lake perimeters and golf course ponds.",
    },
    {
      title: "Architectural Water Features",
      image: "/assets/applications/fan-jet-nozzle-al070-app-4.jpg",
      description: "Multiple overlapping fan jets arranged in circular or linear arrays generating dramatic intersecting wings of illuminated water.",
    },
  ],
  // Fountain Nozzles: revolving-nozzle-al071
  "revolving-nozzle-al071": [
    {
      title: "Rotating Water Displays",
      image: "/assets/applications/revolving-nozzle-al071-app-1.jpg",
      description: "Hydrodynamically driven curved arms spinning automatically under water pressure to create mesmerizing spiral water helixes.",
    },
    {
      title: "Dynamic Fountain Installations",
      image: "/assets/applications/revolving-nozzle-al071-app-2.jpg",
      description: "Continuous rotation generating dynamic kinetic energy and fluid motion without requiring external electrical motors.",
    },
    {
      title: "Musical Fountains",
      image: "/assets/applications/revolving-nozzle-al071-app-3.jpg",
      description: "Twirling water vortices producing enchanting, ever-changing light reflections when illuminated by underwater multi-color LED rings.",
    },
    {
      title: "Public Water Attractions",
      image: "/assets/applications/revolving-nozzle-al071-app-4.jpg",
      description: "Eye-catching kinetic centerpiece delighting visitors in theme parks, botanical gardens, and community amusement plazas.",
    },
  ],
  // Fountain Nozzles: diamond-flower-cluster-nozzle-al072
  "diamond-flower-cluster-nozzle-al072": [
    {
      title: "Multi-Stream Flower Cluster Displays",
      image: "/assets/applications/diamond-flower-cluster-nozzle-al072-app-1.jpg",
      description: "Tiered concentric rings of precision brass nozzles forming a full, dome-shaped bouquet of crystalline intersecting jets.",
    },
    {
      title: "Decorative Fountains",
      image: "/assets/applications/diamond-flower-cluster-nozzle-al072-app-2.jpg",
      description: "Rich, multi-layered water fullness making it the premier centerpiece for classical round fountain basins and palace courtyards.",
    },
    {
      title: "Musical Water Displays",
      image: "/assets/applications/diamond-flower-cluster-nozzle-al072-app-3.jpg",
      description: "Exceptional vertical water density capturing and magnifying colored spotlighting during choreographic fountain performances.",
    },
    {
      title: "Landscape Fountains",
      image: "/assets/applications/diamond-flower-cluster-nozzle-al072-app-4.jpg",
      description: "Spectacular voluminous water spray producing dramatic acoustic presence and evaporative cooling across expansive gardens.",
    },
  ],
  // Fountain Nozzles: crown-nozzle-al073
  "crown-nozzle-al073": [
    {
      title: "Crown-Shaped Water Displays",
      image: "/assets/applications/crown-nozzle-al073-app-1.jpg",
      description: "Symmetrically angled peripheral jets creating an majestic outward-flaring coronet resembling a royal water crown.",
    },
    {
      title: "Decorative Fountains",
      image: "/assets/applications/crown-nozzle-al073-app-2.jpg",
      description: "Regal water architecture designed to serve as the signature focal attraction of high-end commercial and residential estates.",
    },
    {
      title: "Resort Installations",
      image: "/assets/applications/crown-nozzle-al073-app-3.jpg",
      description: "Surrounding a central foam geyser to create a composite multi-tiered water sculpture in luxury resort lagoons.",
    },
    {
      title: "Public Fountain Displays",
      image: "/assets/applications/crown-nozzle-al073-app-4.jpg",
      description: "Wide diameter spray distribution providing magnificent panoramic visual presence in city center squares and monuments.",
    },
  ],
  // Fountain Nozzles: flower-nozzle-al074
  "flower-nozzle-al074": [
    {
      title: "Flower-Shaped Water Displays",
      image: "/assets/applications/flower-nozzle-al074-app-1.jpg",
      description: "Layered two-tier nozzle geometry mimicking the delicate petals and stamen of a blooming aquatic flower.",
    },
    {
      title: "Decorative Garden Fountains",
      image: "/assets/applications/flower-nozzle-al074-app-2.jpg",
      description: "Harmonious organic water sculpture blending seamlessly into ornate floral landscaping, arboretums, and French parterres.",
    },
    {
      title: "Landscape Water Features",
      image: "/assets/applications/flower-nozzle-al074-app-3.jpg",
      description: "Gentle cascading water tiers delivering tranquil aquatic melodies to residential courtyards and meditation gardens.",
    },
    {
      title: "Architectural Fountains",
      image: "/assets/applications/flower-nozzle-al074-app-4.jpg",
      description: "Intricate spray geometry illuminated by submerged center-hole lights to produce a glowing blossom of nocturnal water.",
    },
  ],
  // Water Features: ss-water-cascade-blade-nozzle-al075
  "ss-water-cascade-blade-nozzle-al075": [
    {
      title: "Stainless Steel Blade Waterfalls",
      image: "/assets/applications/ss-water-cascade-blade-nozzle-al075-app-1.jpg",
      description: "Engineered internal baffle chamber producing a continuous, glass-smooth sheer descent waterfall sheet falling cleanly into pools.",
    },
    {
      title: "Infinity Pool Cascades",
      image: "/assets/applications/ss-water-cascade-blade-nozzle-al075-app-2.jpg",
      description: "Recessed into perimeter retaining walls to provide a flawless, silent water curtain merging into vanishing infinity edges.",
    },
    {
      title: "Resort Water Walls",
      image: "/assets/applications/ss-water-cascade-blade-nozzle-al075-app-3.jpg",
      description: "Available in lengths from 6 inches to 10 feet, creating majestic continuous horizontal water ribbons for hotel courtyards.",
    },
    {
      title: "Architectural Water Features",
      image: "/assets/applications/ss-water-cascade-blade-nozzle-al075-app-4.jpg",
      description: "Flush built-in stainless steel lip integrating cleanly behind granite cladding, masonry, and glass mosaic tile walls.",
    },
  ],
  // Water Features: ss-step-water-blade-nozzle-al076
  "ss-step-water-blade-nozzle-al076": [
    {
      title: "Stepped Waterfall Installations",
      image: "/assets/applications/ss-step-water-blade-nozzle-al076-app-1.jpg",
      description: "Multi-tier stepped lip design allowing water to cascade gracefully down stepped terraces into lower collection basins.",
    },
    {
      title: "Multi-Level Water Features",
      image: "/assets/applications/ss-step-water-blade-nozzle-al076-app-2.jpg",
      description: "Designed for sloping gardens and architectural stepped water landscapes where water travels dynamically across tiers.",
    },
    {
      title: "Landscape Cascades",
      image: "/assets/applications/ss-step-water-blade-nozzle-al076-app-3.jpg",
      description: "Simulating the natural descent of a mountain brook over rocks, providing crisp visual motion and gentle aeration.",
    },
    {
      title: "Architectural Water Walls",
      image: "/assets/applications/ss-step-water-blade-nozzle-al076-app-4.jpg",
      description: "Stepped stainless steel profile catching ambient and underwater downlights to accentuate each distinct falling water level.",
    },
  ],
  // Water Features: ss-water-cascade-nozzle-al077
  "ss-water-cascade-nozzle-al077": [
    {
      title: "Stainless Steel Water Cascades",
      image: "/assets/applications/ss-water-cascade-nozzle-al077-app-1.jpg",
      description: "Heavy-gauge marine-grade SS construction projecting a robust, broad curtain of soothing waterfall flow.",
    },
    {
      title: "Poolside Waterfalls",
      image: "/assets/applications/ss-water-cascade-nozzle-al077-app-2.jpg",
      description: "Mounted on elevated pool copings to provide refreshing shoulder and neck hydro-massage therapy for swimmers.",
    },
    {
      title: "Luxury Resort Installations",
      image: "/assets/applications/ss-water-cascade-nozzle-al077-app-3.jpg",
      description: "Signature architectural water feature adding movement, sound, and a luxurious spa ambiance to resort lagoon complexes.",
    },
    {
      title: "Decorative Water Walls",
      image: "/assets/applications/ss-water-cascade-nozzle-al077-app-4.jpg",
      description: "Freestanding or wall-projected water cascade creating a dramatic focal backdrop for outdoor entertainment patios.",
    },
  ],
  // Water Features: cobra-nozzle-al078
  "cobra-nozzle-al078": [
    {
      title: "Cobra-Style Poolside Waterfalls",
      image: "/assets/applications/cobra-nozzle-al078-app-1.jpg",
      description: "Iconic sculptural arching silhouette crafted in gleaming mirror-polished SS 304/316 standing proudly on pool decks.",
    },
    {
      title: "Resort Swimming Pool Features",
      image: "/assets/applications/cobra-nozzle-al078-app-2.jpg",
      description: "Striking architectural centerpiece delivering a wide, soothing sheet of water for swimmers in commercial and resort pools.",
    },
    {
      title: "Decorative Landscape Waterfalls",
      image: "/assets/applications/cobra-nozzle-al078-app-3.jpg",
      description: "Sculptural metallic art piece enhancing poolside landscapes with modern curves and the acoustics of falling water.",
    },
    {
      title: "Luxury Spa Water Features",
      image: "/assets/applications/cobra-nozzle-al078-app-4.jpg",
      description: "Therapeutic hydrotherapy neck and shoulder cascade revitalizing spa guests in wellness pools and thermal hydro-circuits.",
    },
  ],
  // Water Features: dolphin-nozzle-al079
  "dolphin-nozzle-al079": [
    {
      title: "Dolphin-Style Water Displays",
      image: "/assets/applications/dolphin-nozzle-al079-app-1.jpg",
      description: "Hydrodynamic dolphin-inspired sweeping curve projecting an arching water sheet back into swimming pool basins.",
    },
    {
      title: "Decorative Swimming Pool Installations",
      image: "/assets/applications/dolphin-nozzle-al079-app-2.jpg",
      description: "Freestanding poolside fixture blending whimsical hydrodynamic form with marine-grade stainless steel durability.",
    },
    {
      title: "Themed Water Features",
      image: "/assets/applications/dolphin-nozzle-al079-app-3.jpg",
      description: "Ideal for coastal resorts, family aquatic centers, and marine-themed luxury private villa pool decks.",
    },
    {
      title: "Resort Water Attractions",
      image: "/assets/applications/dolphin-nozzle-al079-app-4.jpg",
      description: "Generates a gentle, continuous cascade that masks urban ambient noise with soothing hydrodynamic acoustics.",
    },
  ],
  // Water Features: acrylic-cobra-nozzle-al080
  "acrylic-cobra-nozzle-al080": [
    {
      title: "Acrylic Waterfall Installations",
      image: "/assets/applications/acrylic-cobra-nozzle-al080-app-1.jpg",
      description: "Crystal-clear high-grade acrylic construction allowing ambient light to illuminate the flowing water from within.",
    },
    {
      title: "Illuminated Poolside Cascades",
      image: "/assets/applications/acrylic-cobra-nozzle-al080-app-2.jpg",
      description: "Integrated RGB LED illumination glowing vividly through the transparent body, transforming nighttime pool decks.",
    },
    {
      title: "Decorative Water Features",
      image: "/assets/applications/acrylic-cobra-nozzle-al080-app-3.jpg",
      description: "Modern transparent styling providing an ultra-contemporary, floating water aesthetic for luxury architectural homes.",
    },
    {
      title: "Resort Swimming Pools",
      image: "/assets/applications/acrylic-cobra-nozzle-al080-app-4.jpg",
      description: "Non-corrosive UV-stabilized optical acrylic engineered for long-term outdoor sunlight and pool chemical exposure.",
    },
  ],
  // Water Features: acrylic-blade-nozzle-al081
  "acrylic-blade-nozzle-al081": [
    {
      title: "Acrylic Blade Waterfalls",
      image: "/assets/applications/acrylic-blade-nozzle-al081-app-1.jpg",
      description: "Transparent acrylic sheer descent waterfall producing an illuminated, seamless horizontal sheet of crystal water.",
    },
    {
      title: "Architectural Water Walls",
      image: "/assets/applications/acrylic-blade-nozzle-al081-app-2.jpg",
      description: "Recessed into glass walls, sheer stone, and tiled backdrops with integrated LED illumination changing water color dynamically.",
    },
    {
      title: "Poolside Cascades",
      image: "/assets/applications/acrylic-blade-nozzle-al081-app-3.jpg",
      description: "Vibrant night-time glow projecting neon-accented waterfalls into swimming pools for unforgettable evening entertainment.",
    },
    {
      title: "Decorative Water Installations",
      image: "/assets/applications/acrylic-blade-nozzle-al081-app-4.jpg",
      description: "Sleek, transparent lip remaining invisible when unlit and transforming into a brilliant glowing water edge when powered on.",
    },
  ],
};

/**
 * Retrieves the verified product-specific application cards.
 * Falls back to tailored category defaults if a product is not explicitly mapped.
 */
export function getProductApplications(slug: string): ProductApplicationCard[] {
  if (PRODUCT_APPLICATIONS[slug] && PRODUCT_APPLICATIONS[slug].length > 0) {
    return PRODUCT_APPLICATIONS[slug];
  }
  // Default fallback
  return [
    {
      title: "Commercial Aquatic Facilities",
      image: "/assets/banners/features-pool-water.jpg",
      description: "Engineered for continuous underwater immersion and high durability in public and commercial facilities.",
    },
  ];
}
