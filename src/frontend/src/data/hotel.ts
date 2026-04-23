export interface Room {
  id: string;
  name: string;
  type: string;
  price: number;
  description: string;
  shortDesc: string;
  imageUrl: string;
  amenities: string[];
  size: string;
  capacity: number;
}

export interface Amenity {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  country: string;
  rating: number;
  text: string;
  initials: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export const rooms: Room[] = [
  {
    id: "deluxe-ocean",
    name: "Deluxe Ocean Room",
    type: "Deluxe",
    price: 4800,
    description:
      "Wake up to panoramic views of the Gulf of Thailand in our Deluxe Ocean Room. Featuring a king-size bed with premium Thai silk linens, a private balcony, and an ensuite marble bathroom with a deep soaking tub. Every detail has been curated for the discerning traveler.",
    shortDesc: "Panoramic sea views, king bed, private balcony.",
    imageUrl: "/assets/generated/room-deluxe-ocean.dim_800x600.jpg",
    amenities: [
      "Private Balcony",
      "King Bed",
      "Marble Bath",
      "Ocean View",
      "Mini Bar",
      "Smart TV",
    ],
    size: "42 m²",
    capacity: 2,
  },
  {
    id: "royal-suite",
    name: "Royal Suite",
    type: "Suite",
    price: 9500,
    description:
      "The pinnacle of Thai luxury. Our Royal Suite spans an entire floor with sweeping 180-degree ocean vistas, a separate living room, a private dining area, and a butler on call 24 hours. An unrivalled sanctuary above the azure waters of Pattaya.",
    shortDesc: "180° ocean vista, butler service, private dining.",
    imageUrl: "/assets/generated/room-royal-suite.dim_800x600.jpg",
    amenities: [
      "Butler Service",
      "180° Ocean View",
      "Private Dining",
      "Jacuzzi",
      "Walk-in Closet",
      "Espresso Bar",
    ],
    size: "110 m²",
    capacity: 3,
  },
  {
    id: "garden-terrace",
    name: "Garden Terrace Villa",
    type: "Villa",
    price: 7200,
    description:
      "Secluded in lush tropical gardens, the Garden Terrace Villa offers a private plunge pool, an outdoor sala for open-air dining, and authentic Thai decor celebrating the artisans of the region. A retreat within a retreat.",
    shortDesc: "Private plunge pool, tropical garden, open sala.",
    imageUrl: "/assets/generated/room-garden-terrace.dim_800x600.jpg",
    amenities: [
      "Private Plunge Pool",
      "Garden Sala",
      "King Bed",
      "Outdoor Shower",
      "Thai Décor",
      "Private Terrace",
    ],
    size: "85 m²",
    capacity: 2,
  },
  {
    id: "classic-comfort",
    name: "Classic Comfort Room",
    type: "Classic",
    price: 2900,
    description:
      "An elegant introduction to Siam Guest House. The Classic Comfort Room combines warm teak wood accents, a queen-size bed dressed in 400-thread-count linens, and a serene garden-view balcony — all at an accessible entry point for luxury.",
    shortDesc: "Teak accents, garden view, queen bed.",
    imageUrl:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
    amenities: [
      "Garden View",
      "Queen Bed",
      "Rain Shower",
      "Work Desk",
      "Mini Fridge",
      "Complimentary Wi-Fi",
    ],
    size: "30 m²",
    capacity: 2,
  },
];

export const amenities: Amenity[] = [
  {
    icon: "🏊",
    title: "Infinity Pool",
    description:
      "A horizon-edge pool merging seamlessly with the Gulf of Thailand.",
  },
  {
    icon: "🌿",
    title: "Thai Spa",
    description:
      "Indulge in ancient healing rituals performed by master therapists.",
  },
  {
    icon: "🍜",
    title: "Fine Dining",
    description:
      "Curated Thai and international menus crafted by award-winning chefs.",
  },
  {
    icon: "🏋️",
    title: "Fitness Suite",
    description:
      "State-of-the-art gym with private training and sea-view cardio.",
  },
  {
    icon: "🛥️",
    title: "Water Sports",
    description: "Guided excursions, kayaking, and private boat charters.",
  },
  {
    icon: "🌅",
    title: "Sunset Terrace",
    description: "Curated cocktails and live classical music every evening.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Sophie Laurent",
    country: "France",
    rating: 5,
    text: "From the moment we arrived, the attention to detail was extraordinary. The Royal Suite exceeded every expectation — a level of luxury I have not experienced elsewhere in Southeast Asia.",
    initials: "SL",
  },
  {
    name: "James Whitmore",
    country: "United Kingdom",
    rating: 5,
    text: "The Garden Terrace Villa is absolute perfection. Waking up to bird song, stepping into the plunge pool before breakfast — Siam Guest House understands what true rest means.",
    initials: "JW",
  },
  {
    name: "Aiko Tanaka",
    country: "Japan",
    rating: 5,
    text: "The Thai Spa treatments are transformative. The staff remembered every preference from our first visit. We return each year and it only becomes more special.",
    initials: "AT",
  },
  {
    name: "Marco Rossi",
    country: "Italy",
    rating: 5,
    text: "Exceptional. The sunset terrace with cocktails and live music was the highlight of our honeymoon. The chef's tasting menu was a revelation of Thai cuisine at its finest.",
    initials: "MR",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
    alt: "Siam infinity pool at twilight",
    category: "Pool",
  },
  {
    id: "g2",
    src: "/assets/generated/room-royal-suite.dim_800x600.jpg",
    alt: "Royal Suite living space",
    category: "Rooms",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
    alt: "Thai spa treatment room",
    category: "Spa",
  },
  {
    id: "g4",
    src: "/assets/generated/room-deluxe-ocean.dim_800x600.jpg",
    alt: "Deluxe ocean room interior",
    category: "Rooms",
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    alt: "Fine dining restaurant at Siam",
    category: "Dining",
  },
  {
    id: "g6",
    src: "/assets/generated/room-garden-terrace.dim_800x600.jpg",
    alt: "Garden terrace villa plunge pool",
    category: "Villa",
  },
  {
    id: "g7",
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
    alt: "Sea view at golden hour",
    category: "Views",
  },
  {
    id: "g8",
    src: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=80",
    alt: "Hotel beachfront at dusk",
    category: "Views",
  },
  {
    id: "g9",
    src: "https://images.unsplash.com/photo-1567633810809-a3b7e12fae1d?w=800&q=80",
    alt: "Thai breakfast in bed",
    category: "Dining",
  },
];

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Rooms", to: "/rooms" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];
