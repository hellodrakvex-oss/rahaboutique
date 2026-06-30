export const products = [
  {
    id: "p-001",
    name: "Midnight Silk Zari Saree",
    price: 45000,
    category: "sarees",
    fabric: "Pure Banarasi Silk",
    color: "Midnight Blue",
    description: "A breathtaking Midnight Blue Banarasi silk saree adorned with intricate silver and gold zari work. Handwoven by master artisans, this piece takes over 150 hours to create, ensuring every motif tells a story of heritage and luxury.",
    image: "/images/sarees.png",
    images: [
      "/images/sarees.png"],
    isNewArrival: true,
  },
  {
    id: "p-002",
    name: "Ivory Georgette Kurti Set",
    price: 18500,
    category: "kurtis",
    fabric: "Premium Georgette",
    color: "Ivory",
    description: "Experience modern elegance with this Ivory Georgette Kurti Set. Featuring delicate pearl embroidery and a flattering A-line silhouette, it comes complete with matching tailored trousers and a sheer chiffon dupatta.",
    image: "/images/kurtis.png" ,
    images: [
      "/images/kurtis.png" ],
    isNewArrival: true,
  },
  {
    id: "p-003",
    name: "Ruby Red Bridal Lehenga",
    price: 125000,
    category: "wedding",
    fabric: "Raw Silk",
    color: "Ruby Red",
    description: "The epitome of bridal grandeur. This Ruby Red Raw Silk Lehenga is heavily embroidered with zardozi, sequins, and crystals. Designed to make you feel like royalty on your special day.",
    image: "/images/sarees.png",
    images: [
      "/images/sarees.png",
      "/images/sarees.png",
      "/images/sarees.png"
    ],
  },
  {
    id: "p-004",
    name: "Emerald Green Chiffon",
    price: 32000,
    category: "sarees",
    fabric: "Pure Chiffon",
    color: "Emerald Green",
    description: "A lightweight, fluid Emerald Green chiffon saree featuring scalloped borders and scattered sequin motifs. Perfect for evening soirees and cocktail events.",
    image: "/images/sarees.png",
    images: ["/images/sarees.png"],
  },
  {
    id: "p-005",
    name: "Golden Tissue Silk Set",
    price: 55000,
    category: "salwar-sets",
    fabric: "Tissue Silk",
    color: "Gold",
    description: "Radiate warmth and luxury in this Golden Tissue Silk Salwar Set. The metallic sheen of the fabric combined with vintage embroidery techniques creates a timeless masterpiece.",
    image: "/images/salwar.png",
    images: [
      "/images/salwar.png",
    "/images/salwar.png"],
  },
  {
    id: "p-006",
    name: "Pastel Pink Handloom Dupatta",
    price: 12000,
    category: "dupattas",
    fabric: "Organza",
    color: "Pastel Pink",
    description: "Elevate any ensemble with this delicate Pastel Pink Organza Dupatta, featuring hand-painted floral motifs and a subtle zari border.",
    image: "/images/dupattas.png",
    images: [
      "/images/dupattas.png",
    "/images/dupattas.png"
   ],
  },
  {
    id: "p-007",
    name: "Royal Velvet Kurta",
    price: 24000,
    category: "kurtis",
    fabric: "Premium Velvet",
    color: "Deep Maroon",
    description: "A rich Deep Maroon velvet kurta designed for winter festivities. Features intricate antique gold embroidery along the neckline and cuffs.",
    image: "/images/kurtis.png",
    images: [
      "/images/kurtis.png",
    "/images/kurtis.png"
  ],
    isNewArrival: true,
  },
  {
    id: "p-008",
    name: "Mustard Yellow Silk Saree",
    price: 38000,
    category: "sarees",
    fabric: "Kanchipuram Silk",
    color: "Mustard Yellow",
    description: "A vibrant Mustard Yellow Kanchipuram silk saree with a contrasting magenta border. A quintessential piece for festive wardrobes.",
    image: "/images/sarees.png",
    images: [
      "/images/sarees.png",
      "/images/sarees.png"
     ],
  },
];

export const collections = [
  { id: "sarees", name: "Sarees", desc: "Six yards of pure elegance.", img: "/images/sarees.png" },
  { id: "kurtis", name: "Kurtis", desc: "Contemporary silhouettes rooted in tradition.", img: "/images/kurtis.png" },
  { id: "salwar-sets", name: "Salwar Sets", desc: "Complete ensembles for every occasion.", img: "/images/salwar.png" },
  { id: "dupattas", name: "Dupattas", desc: "The perfect finishing touch.", img: "/images/dupattas.png" },
  { id: "wedding", name: "Wedding Collection", desc: "Masterpieces for your special day.", img: "/images/wcoll.png" },
  { id: "festive", name: "Festive Collection", desc: "Celebrate in colors of joy.", img: "/images/festive.png" },
];

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
};
