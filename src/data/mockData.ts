import { Property, SiteConfig, AgentInfo, Testimonial, StepItem, BenefitItem } from '../types';

export const siteConfig: SiteConfig = {
  brandName: "Haven Ilorin",
  brandTagline: "Modern Housing & Property Finding in Ilorin",
  locationBadge: "Ilorin, Kwara State",
  phone: "+2348034567890",
  phoneDisplay: "+234 (0) 803 456 7890",
  whatsappNumber: "2348034567890",
  whatsappDefaultMessage: "Hello Haven Ilorin! I visited your website and would like assistance finding a suitable property in Ilorin.",
  email: "contact@havenilorin.ng",
  instagramHandle: "@havenilorin",
  officeAddress: "Plot 14, Fate Road, Near GRA Junction, Ilorin, Kwara State",
  // High-performance royalty-free architectural video of modern home exterior & pool with warm daylight
  heroVideoUrl: "https://assets.mixkit.co/videos/preview/mixkit-modern-luxury-house-with-a-pool-and-garden-42777-large.mp4",
  heroPosterUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85",
};

export const sampleLocations = [
  { value: "all", label: "All Locations" },
  { value: "GRA", label: "GRA (Government Reserved Area)" },
  { value: "Tanke", label: "Tanke (University Road Area)" },
  { value: "Fate", label: "Fate (Fate Road & Environs)" },
  { value: "Adewole", label: "Adewole (Estate Area)" },
  { value: "Basin", label: "Basin (Basin Road & Environs)" },
  { value: "Sango", label: "Sango (Kulende & Surroundings)" },
];

export const propertyTypes = [
  { value: "all", label: "All Property Types" },
  { value: "Duplex", label: "Detached / Semi-Detached Duplex" },
  { value: "Apartment", label: "Serviced Apartment / Flat" },
  { value: "Terrace", label: "Executive Terraced Home" },
  { value: "Bungalow", label: "Contemporary Bungalow" },
  { value: "Villa", label: "Private Compound Villa" },
];

export const budgetRanges = [
  { value: "all", label: "Any Budget" },
  { value: "under-1.5m", label: "Under ₦1,500,000 / yr", max: 1500000 },
  { value: "1.5m-3m", label: "₦1,500,000 – ₦3,000,000 / yr", min: 1500000, max: 3000000 },
  { value: "3m-5m", label: "₦3,000,000 – ₦5,000,000 / yr", min: 3000000, max: 5000000 },
  { value: "above-5m", label: "₦5,000,000+ / yr & For Sale", min: 5000000 },
];

export const bedroomOptions = [
  { value: "all", label: "Any Bedrooms" },
  { value: "2", label: "2 Bedrooms" },
  { value: "3", label: "3 Bedrooms" },
  { value: "4", label: "4+ Bedrooms" },
];

export const sampleProperties: Property[] = [
  {
    id: "prop-gra-01",
    title: "The Palms Contemporary 4-Bed Duplex",
    tagline: "Gated luxury with dedicated solar inverter & serene perimeter",
    propertyType: "Duplex",
    bedrooms: 4,
    bathrooms: 4,
    toilets: 5,
    parkingSpaces: 4,
    location: "GRA Phase 1, Off Ahmadu Bello Way, Ilorin",
    neighborhood: "GRA",
    priceAnnual: 5500000,
    priceFormatted: "₦5,500,000",
    listingType: "Both",
    salePriceFormatted: "₦95,000,000",
    shortDescription: "Immaculately finished 4-bedroom detached duplex in a tranquil, tree-lined cul-de-sac in GRA with 24/7 security and dual water boreholes.",
    fullDescription: "Located within the quiet and highly secure residential belt of GRA Phase 1, this contemporary home offers unmatched privacy, excellent road access, and constant security. Designed with open-plan living in mind, it features high POP ceilings, a chef's kitchen fitted with marble countertops, all en-suite bedrooms with walk-in wardrobes, an automated perimeter gate, and dedicated solar inverter wiring already routed.",
    features: [
      "24/7 Uniformed Guarded Estate",
      "Dedicated Industrial Water Borehole",
      "Fully Fitted Kitchen with Heat Extractor",
      "Solar & Inverter Pre-wired Connections",
      "Ample Paved Parking for 4+ Vehicles",
      "Private Boy's Quarters (BQ)",
      "Premium Imported Ceramic Tile Finishes",
      "Close to Top Schools & Government Offices"
    ],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
    ],
    featuredImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    floorArea: "380 sqm",
    isVerified: true,
    status: "Available"
  },
  {
    id: "prop-fate-02",
    title: "The Ridge Executive 3-Bedroom Flat",
    tagline: "Spacious family residence with reliable power transformer & modern finish",
    propertyType: "Apartment",
    bedrooms: 3,
    bathrooms: 3,
    toilets: 4,
    parkingSpaces: 2,
    location: "Fate Road, Adjacent Stella Maris Area, Ilorin",
    neighborhood: "Fate",
    priceAnnual: 2800000,
    priceFormatted: "₦2,800,000",
    listingType: "Rent",
    shortDescription: "High-spec 3-bedroom apartment with expansive balcony views, private transformer connection, and modern fittings on vibrant Fate Road.",
    fullDescription: "A standout property on Fate Road, perfect for medical consultants, corporate executives, or growing families. Situated inside a fenced compound with only four units, this residence guarantees peace and exclusivity. Features include a bright reception parlor, well-ventilated en-suite bedrooms, continuous treated water flow, and a dedicated high-capacity community transformer.",
    features: [
      "Dedicated 500kVA Neighborhood Transformer",
      "Private Balcony with Panoramic View",
      "Treated Water Filtration System",
      "Interlocked Gated Compound",
      "Modern POP Lighting Schemes",
      "Individual Prepaid Electric Meter",
      "Minutes to Fate Supermarkets & Eateries"
    ],
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502005229762-ae1b460020e2?auto=format&fit=crop&w=1200&q=80"
    ],
    featuredImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    floorArea: "210 sqm",
    isVerified: true,
    status: "Available"
  },
  {
    id: "prop-tanke-03",
    title: "Flora Court Serviced 2-Bed Residence",
    tagline: "Ideal for tech workers, young families & academic professionals",
    propertyType: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    toilets: 3,
    parkingSpaces: 2,
    location: "Tanke University Road, Off Tipper Garage, Ilorin",
    neighborhood: "Tanke",
    priceAnnual: 1600000,
    priceFormatted: "₦1,600,000",
    listingType: "Rent",
    shortDescription: "Charming, well-maintained 2-bedroom serviced apartment with fast fiber-optic internet proximity and secure gated perimeter.",
    fullDescription: "Located along the accessible corridor of Tanke, this contemporary 2-bedroom home offers the perfect balance of connectivity, comfort, and affordability. Featuring sleek tiled floors, a private kitchen balcony, water heaters installed in every bathroom, and round-the-clock facility management for waste, cleaning, and gate security.",
    features: [
      "Fiber-Optic Internet Ready",
      "Gated Compound with Uniformed Night Watch",
      "Clean Borehole & Automated Overhead Tanks",
      "Individual Prepaid Energy Meter",
      "Water Heaters Installed in All Bathrooms",
      "Paved Access Road with Streetlights"
    ],
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
    ],
    featuredImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    floorArea: "145 sqm",
    isVerified: true,
    status: "Available"
  },
  {
    id: "prop-adewole-04",
    title: "Adewole Executive 4-Bed Terraced Villa",
    tagline: "Serene suburban estate living with manicured greenery & privacy",
    propertyType: "Terrace",
    bedrooms: 4,
    bathrooms: 4,
    toilets: 5,
    parkingSpaces: 3,
    location: "Adewole Housing Estate Extension, Ilorin",
    neighborhood: "Adewole",
    priceAnnual: 4200000,
    priceFormatted: "₦4,200,000",
    listingType: "Rent",
    shortDescription: "Sophisticated 4-bedroom terraced home with private compound space, security perimeter, and expansive master suite in Adewole Estate.",
    fullDescription: "Nestled in one of Ilorin's most established residential districts, this newly modernized terraced villa combines peaceful neighborhood ambiance with close proximity to town. Featuring a sunken formal sitting lounge, granite countertop kitchen, expansive master bedroom with a dressing foyer, and dedicated security post.",
    features: [
      "Gated Community with Neighborhood Patrol",
      "Double Living Rooms (Ground & Family Lounge)",
      "Dedicated Generator House & Changeover Switch",
      "Interlocked Driveway with Garden Strip",
      "CCTV Surveillance Installed",
      "Pressure-Boosted Water Distribution"
    ],
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    featuredImage: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
    floorArea: "320 sqm",
    isVerified: true,
    status: "Available"
  },
  {
    id: "prop-basin-05",
    title: "Basin View Family Residence",
    tagline: "Peaceful family sanctuary with generous compound & steady utilities",
    propertyType: "Bungalow",
    bedrooms: 3,
    bathrooms: 3,
    toilets: 4,
    parkingSpaces: 4,
    location: "Basin Area, Off Asa Dam Road Connection, Ilorin",
    neighborhood: "Basin",
    priceAnnual: 2200000,
    priceFormatted: "₦2,200,000",
    listingType: "Rent",
    shortDescription: "Sprawling 3-bedroom detached bungalow with expansive compound, mature shade trees, and quiet residential neighborhood.",
    fullDescription: "A comfortable family residence situated in the calm, unhurried enclave of Basin Area. Offers a generous front and backyard space perfect for children or outdoor leisure, high ceilings for natural cooling, cross-ventilation windows, clean water supply, and easy access to Asa Dam Road and central Ilorin commercial nodes.",
    features: [
      "Substantial Private Compound (Full Plot)",
      "High Ceilings & Large Windows for Cross-Ventilation",
      "Dual Water Sources (Borehole + Municipal)",
      "Secure High Perimeter Fence with Barb Wire",
      "Car Port for Two Vehicles",
      "Peaceful Residential Enclave"
    ],
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1598228723793-52759bba239c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
    ],
    featuredImage: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
    floorArea: "240 sqm",
    isVerified: true,
    status: "Available"
  },
  {
    id: "prop-sango-06",
    title: "Sango Crest Modern 3-Bed Villa",
    tagline: "Contemporary architecture with smart fittings & easy town commute",
    propertyType: "Villa",
    bedrooms: 3,
    bathrooms: 3,
    toilets: 4,
    parkingSpaces: 3,
    location: "Sango Residential Hub, Close to Kulende, Ilorin",
    neighborhood: "Sango",
    priceAnnual: 1900000,
    priceFormatted: "₦1,900,000",
    listingType: "Rent",
    shortDescription: "Recently completed 3-bedroom contemporary home featuring stylish kitchen cabinetry, modern sanitary wares, and secure gated environment.",
    fullDescription: "Enjoy modern suburban living in Sango with this newly built 3-bedroom home. Boasting crisp architectural lines, recessed LED ceiling lighting, all-en-suite rooms with walk-in shower stalls, automated booster pump system, and immediate link to Sango-Kulende expressway.",
    features: [
      "Newly Constructed (Never Inhabited Before)",
      "Contemporary Architectural Facade",
      "En-suite Bedrooms with Modern Glass Showers",
      "Borehole with Continuous Automated Pumping",
      "Gated Perimeter with Remote Gate Option",
      "Close to Express Commute Route"
    ],
    images: [
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80"
    ],
    featuredImage: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80",
    floorArea: "205 sqm",
    isVerified: true,
    status: "Available"
  }
];

export const agentInfo: AgentInfo = {
  name: "Abubakar S. Bello",
  title: "Principal Housing Consultant",
  location: "Ilorin, Kwara State",
  phone: "+234 803 456 7890",
  whatsapp: "2348034567890",
  email: "abubakar@havenilorin.ng",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85",
  headline: "Your Local Home-Finding Partner",
  introText: "Looking for a home in Ilorin doesn't have to be stressful. With local knowledge and a personal approach, we help you explore suitable housing options and make the search easier.",
  approachBullets: [
    "Ground-truth verification: We visit and inspect every property personally before recommending it to you.",
    "Neighborhood clarity: Honest breakdown of water reliability, power regularity, and road accessibility in every zone.",
    "Zero time wastage: Only options strictly matching your budget and lifestyle are brought to your attention."
  ]
};

export const howItWorksSteps: StepItem[] = [
  {
    number: "01",
    title: "Tell Us What You Need",
    description: "Share your preferred location, budget and property type with our team.",
    highlight: "GRA, Tanke, Fate, Adewole, or Basin"
  },
  {
    number: "02",
    title: "We Find Suitable Options",
    description: "We help you discover homes that match your requirements without endless wandering.",
    highlight: "Pre-screened & verified properties"
  },
  {
    number: "03",
    title: "Inspect the Property",
    description: "Choose a property and arrange a convenient inspection at your preferred date and time.",
    highlight: "Guided physical walkthrough"
  },
  {
    number: "04",
    title: "Make It Home",
    description: "Once you've found the right place, we'll help you take the next step with clear documentation.",
    highlight: "Smooth, stress-free move-in"
  }
];

export const whyChooseUsBenefits: BenefitItem[] = [
  {
    id: "local-knowledge",
    title: "Local Knowledge",
    description: "Deep roots across Ilorin's distinct neighborhoods, from GRA to Fate and Tanke.",
    detail: "We know where water runs freely, where power supply is most consistent, and which streets guarantee true peace of mind."
  },
  {
    id: "personal-assistance",
    title: "Personal Assistance",
    description: "One-on-one attention tailored to your family's exact needs, timeline and budget.",
    detail: "No generic lists or rushed decisions. We listen first, understand your priorities, and accompany you through every step."
  },
  {
    id: "property-options",
    title: "Property Options",
    description: "Curated residential choices ranging from affordable modern flats to executive duplexes.",
    detail: "Every home in our portfolio is pre-checked for structural condition, valid landlord agreements, and clean paperwork."
  },
  {
    id: "simple-process",
    title: "Simple Process",
    description: "Transparent communication, straightforward inspections, and clear tenancy steps.",
    detail: "Direct WhatsApp updates, flexible scheduling around your working hours, and zero hidden inspection surprises."
  }
];

export const demoTestimonials: Testimonial[] = [
  {
    id: "test-01",
    clientName: "Dr. Farouk & Fatima Alabi",
    role: "Relocated from Lagos to Ilorin",
    location: "GRA Phase 1",
    propertyPurchasedOrRented: "4-Bedroom Detached Duplex",
    quote: "Relocating from Lagos to Ilorin with two school-age children was daunting. Finding a secure, well-finished home in GRA while we were still wrapping up work in Lagos was made completely seamless. The video walkthroughs and honest neighborhood insights saved us weeks of travel.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    rating: 5
  },
  {
    id: "test-02",
    clientName: "Engr. Kehinde Adeyemi",
    role: "Consultant, Medical Facility",
    location: "Fate Road",
    propertyPurchasedOrRented: "3-Bedroom Modern Apartment",
    quote: "What stood out immediately was their honesty about utility reliability. They clearly explained the power transformer setup and water schedule on Fate Road before I even made a deposit. No exaggerations, no pressure. Easily the most professional housing service in Kwara.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    rating: 5
  },
  {
    id: "test-03",
    clientName: "Tolu & Bolaji Oladipo",
    role: "Remote Software Engineer & Educator",
    location: "Tanke (University Environs)",
    propertyPurchasedOrRented: "2-Bedroom Serviced Flat",
    quote: "As a remote tech professional, consistent electricity and good internet connectivity were non-negotiable. They curated two homes in Tanke that fit my exact criteria. Within 48 hours of inspection, agreements were finalized and keys handed over.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    rating: 5
  }
];

// Helper to format WhatsApp click-to-chat links
export function getWhatsAppLink(customMessage?: string): string {
  const text = encodeURIComponent(customMessage || siteConfig.whatsappDefaultMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}

export function getPropertyWhatsAppLink(property: Property): string {
  const message = `Hello Haven Ilorin! I am interested in "${property.title}" in ${property.neighborhood}, Ilorin (${property.priceFormatted}/yr). Can I get more details or schedule an inspection?`;
  return getWhatsAppLink(message);
}
