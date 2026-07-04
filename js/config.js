// js/config.js — site constants & WhatsApp helper.
// Change contact details here and every button updates.

export const PHONE = "919175434412";                     // country code + number, no +
export const IG    = "https://instagram.com/gk7unique_store";
export const IG_HANDLE = "@gk7unique_store";

export const BRAND = "GK7 Unique Store";

// Build a WhatsApp deep link, optionally pre-filled with a product enquiry.
export const wa = (product) =>
  `https://wa.me/${PHONE}?text=` + encodeURIComponent(
    product
      ? `Hi ${BRAND}, I'm interested in ${product}. Please share the price and details.`
      : `Hi ${BRAND}, I'd like to know more about your attars and perfumes.`
  );
