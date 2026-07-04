// js/render.js — turns data into DOM.
// Builds product grids, the feature block, and reviews.

import { wa } from "./config.js";
import { ATTARS, TRIOS, PERFUMES } from "./products.js";
import { REVIEWS } from "../data/reviews.js";

const el = (tag, attrs = {}, ...kids) => {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v == null) continue;
    if (k === "class") node.className = v;
    else if (k === "html") node.innerHTML = v;
    else node.setAttribute(k, v);
  }
  for (const kid of kids) {
    if (kid == null) continue;
    node.append(kid.nodeType ? kid : document.createTextNode(kid));
  }
  return node;
};

// A single product tile.
function tile(p) {
  const media = el("div", { class: "tile-media" },
    el("img", { src: p.image, alt: `${p.name} — ${p.tag}`, loading: "lazy", decoding: "async" }),
    p.badge ? el("span", { class: "badge" }, p.badge) : null
  );

  const body = el("div", { class: "tile-body" },
    el("h3", { class: "tile-name" }, p.name),
    el("p", { class: "tile-tag" }, p.tag),
    p.price ? el("p", { class: "tile-price" }, p.price) : null,
    el("div", { class: "tile-cta" },
      el("a", {
        class: "btn btn-primary wa",
        href: wa(p.name),
        target: "_blank",
        rel: "noopener",
        "aria-label": `Enquire about ${p.name} on WhatsApp`
      }, waIcon(), "Enquire")
    )
  );

  return el("article", { class: "tile reveal" }, media, body);
}

// Small inline WhatsApp glyph (no external asset).
function waIcon() {
  const svg = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.99c2.11 0 4.09.82 5.58 2.31a7.85 7.85 0 0 1 2.32 5.6c0 4.36-3.55 7.91-7.92 7.91a7.9 7.9 0 0 1-4.03-1.1l-.29-.17-2.99.79.8-2.92-.19-.3a7.86 7.86 0 0 1-1.21-4.21c0-4.36 3.55-7.91 7.92-7.91Zm-2.6 4.16c-.13 0-.34.05-.52.24-.18.19-.68.66-.68 1.62 0 .95.7 1.87.8 2 .1.13 1.37 2.09 3.32 2.93.46.2.83.32 1.11.41.47.15.9.13 1.23.08.38-.06 1.15-.47 1.31-.92.16-.45.16-.84.11-.92-.05-.08-.18-.13-.37-.23-.19-.1-1.15-.57-1.32-.63-.18-.06-.31-.1-.44.1-.13.19-.5.63-.62.76-.11.13-.23.15-.42.05-.19-.1-.81-.3-1.54-.95-.57-.51-.96-1.13-1.07-1.32-.11-.19-.01-.29.08-.39.09-.09.19-.23.29-.34.1-.11.13-.19.19-.32.06-.13.03-.24-.02-.34-.05-.1-.44-1.08-.61-1.48-.16-.38-.32-.33-.44-.34l-.38-.01Z"/>
  </svg>`;
  const span = document.createElement("span");
  span.innerHTML = svg;
  return span.firstElementChild;
}

// A single large signature feature block (image + copy).
function featureBlock(p, index) {
  const notes = p.notes
    ? el("div", { class: "notes" },
        el("div", { class: "note" }, el("div", { class: "k" }, "Top"), el("div", { class: "v" }, p.notes.top)),
        el("div", { class: "note" }, el("div", { class: "k" }, "Heart"), el("div", { class: "v" }, p.notes.heart)),
        el("div", { class: "note" }, el("div", { class: "k" }, "Base"), el("div", { class: "v" }, p.notes.base)),
      )
    : null;

  const cls = "feature-grid wrap" + (index % 2 ? " reverse" : "");

  return el("div", { class: cls },
    el("div", { class: "feature-media reveal" },
      el("img", { src: p.image, alt: `${p.name} — ${p.tag}`, loading: "lazy", decoding: "async" }),
      p.badge ? el("span", { class: "badge feature-badge" }, p.badge) : null
    ),
    el("div", { class: "feature-copy reveal" },
      el("p", { class: "eyebrow" }, "Signature Attar"),
      el("h2", {}, el("span", { class: "gold-text" }, p.name)),
      el("span", { class: "accent" }, p.tag),
      el("p", {}, p.blurb || "Hand-poured in small batches for a scent that lingers with quiet authority."),
      notes,
      el("div", { class: "feature-cta" },
        el("a", { class: "btn btn-primary wa", href: wa(p.name), target: "_blank", rel: "noopener" }, waIcon(), "Enquire on WhatsApp")
      )
    )
  );
}

// Render every signature (featured) product, in order.
function renderFeature(list) {
  const host = document.querySelector("[data-feature]");
  if (!host || !list.length) return;
  host.replaceChildren(...list.map((p, i) => featureBlock(p, i)));
}

// Stars string.
const starStr = (n = 5) => "★".repeat(n) + "☆".repeat(Math.max(0, 5 - n));

function reviewCard(r) {
  return el("article", { class: "rev reveal" },
    el("div", { class: "rev-head" },
      el("div", { class: "rev-avatar" }, r.initial),
      el("div", {},
        el("div", { class: "rev-name" }, r.name),
        el("div", { class: "rev-stars", "aria-label": `${r.stars || 5} out of 5 stars` }, starStr(r.stars || 5))
      )
    ),
    el("h3", { class: "rev-title" }, r.title),
    el("p", { class: "rev-body" }, r.body)
  );
}

// Render everything into the page.
export function renderAll() {
  const featured = ATTARS.filter((p) => p.featured);
  renderFeature(featured);

  const attarGrid = document.querySelector("[data-grid=attars]");
  if (attarGrid) attarGrid.replaceChildren(...ATTARS.filter((p) => !p.featured).map(tile));

  const trioGrid = document.querySelector("[data-grid=trios]");
  if (trioGrid) trioGrid.replaceChildren(...TRIOS.map(tile));

  const perfumeGrid = document.querySelector("[data-grid=perfumes]");
  if (perfumeGrid) perfumeGrid.replaceChildren(...PERFUMES.map(tile));

  const revGrid = document.querySelector("[data-grid=reviews]");
  if (revGrid) revGrid.replaceChildren(...REVIEWS.map(reviewCard));
}
