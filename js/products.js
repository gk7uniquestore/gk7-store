// js/products.js — the catalogue.
// Add/remove products here; grids are generated from this data.
// Field reference:
//   id       (req)  URL-safe slug
//   name     (req)  shown on tile; " · " separates items in a trio
//   tag      (req)  small caption line
//   image    (req)  relative path (assets/images/...)
//   notes    (opt)  {top, heart, base} for the feature block
//   blurb    (opt)  longer description shown in the feature block
//   price    (opt)  string, e.g. "₹1,200 / 6ml"; null to hide
//   featured (opt)  true renders a large signature feature block
//                   (list them here in the order they should appear)

export const ATTARS = [
  {
    id: "imperial-valley-attar",
    name: "Imperial Valley",
    tag: "Crafted for the Connoisseur",
    image: "assets/images/posters/imperial-valley-arch.jpg",
    notes: { top: "Bergamot, Bitter Orange", heart: "Oud, Spice", base: "Amber, Leather" },
    blurb: "Our signature scent — a luminous rise of bright bergamot and bitter orange over smoky oud and spice, settling into warm amber and leather. Crafted for the connoisseur who wears distinction quietly.",
    badge: "Bestseller",
    price: null,
    featured: true
  },
  {
    id: "purple-oud",
    name: "Purple Oud",
    tag: "The Essence of Majesty",
    image: "assets/images/feature/purple-oud-velvet.jpg"
  },

  // ---- Single attars ----
  { id: "musk-e-rizali", name: "Musk-e Rizali", tag: "Essence of Royalty",
    image: "assets/images/products/musk-e-rizali.jpg" },
  { id: "marj", name: "Marj", tag: "Desert Bloom",
    image: "assets/images/products/marj.jpg" },
  { id: "shanaya", name: "Shanaya", tag: "Radiant & Floral",
    image: "assets/images/products/shanaya.jpg" },
  { id: "khamrah-qahwa", name: "Khamrah Qahwa", tag: "Coffee, Dates & Spice",
    image: "assets/images/products/khamrah-qahwa.jpg" },
  { id: "white-oud", name: "White Oud", tag: "Clean & Contemplative",
    image: "assets/images/products/white-oud.jpg" },
  { id: "white-amber", name: "White Amber", tag: "Warm Resinous Glow",
    image: "assets/images/products/white-amber.jpg" },
  { id: "mafia-oud", name: "Mafia Oud", tag: "Unveil the Power",
    image: "assets/images/products/mafia-oud.jpg" },
  { id: "ombre-leather", name: "Ombre Leather", tag: "Bold Leather Oud",
    image: "assets/images/products/ombre-leather.jpg" },
  { id: "cr7", name: "CR7", tag: "Unleash the Champion Within",
    image: "assets/images/products/cr7.jpg" },
  { id: "ck-one-summer", name: "CK One Summer", tag: "Fresh Citrus & Jasmine",
    image: "assets/images/products/ck-one-summer.jpg" },
];

export const TRIOS = [
  { id: "trio-amber-white-saffron", name: "Amber Musk · White Oud · Royal Saffron", tag: "Curated Trio",
    image: "assets/images/products/trio-amber-white-saffron.jpg" },
  { id: "trio-velvet-sandal-majestic", name: "Velvet Rose · Sandal Oud · Majestic Musk", tag: "Signature Trio",
    image: "assets/images/products/trio-velvet-sandal-majestic.jpg" },
  { id: "trio-saphire-oud-floral", name: "Musk Saphire · Oud Intense · Floral Velvet", tag: "Arabian & French",
    image: "assets/images/products/trio-saphire-oud-floral.jpg" },
  { id: "trio-royal-mystic-bvlgari", name: "Royal Oud · Mystic Amber · Bvlgari Aqva", tag: "Collection",
    image: "assets/images/products/trio-royal-mystic-bvlgari.jpg" },
  { id: "trio-white-amber-royal-saffron", name: "White Amber · Royal Oudh · Saffron", tag: "The Elite Collection",
    image: "assets/images/products/trio-white-amber-royal-saffron.jpg" },
  { id: "trio-sultan-desert-rose", name: "Sultan's Oud · Desert Rose · Imperial", tag: "Royal Trio",
    image: "assets/images/products/trio-sultan-desert-rose.jpg" },
];

export const PERFUMES = [
  { id: "gk7-signature", name: "GK7 Signature", tag: "Crafted to Be Remembered · 50ml EDP",
    image: "assets/images/products/gk7-signature.jpg" },
  { id: "imperial-valley", name: "Imperial Valley", tag: "Crafted for the Connoisseur",
    image: "assets/images/products/imperial-valley.jpg", badge: "Bestseller" },
  { id: "royal-red-rose", name: "Royal Red Rose", tag: "Deep, Romantic Rose",
    image: "assets/images/products/royal-red-rose.jpg" },
  { id: "hawas-ice", name: "Hawas Ice", tag: "Cool Aquatic Masculine",
    image: "assets/images/products/hawas-ice.jpg" },
  { id: "bvlgari-aqva", name: "Bvlgari Aqva", tag: "Legendary Marine EDP",
    image: "assets/images/products/bvlgari-aqva.jpg" },
  { id: "armani-acqua", name: "Armani Acqua di Gio", tag: "Mediterranean Freshness",
    image: "assets/images/products/armani-acqua-di-gio.jpg" },
];
