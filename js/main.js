// js/main.js — entry point.
// Header solidify-on-scroll, mobile menu, scroll reveals, CTA wiring.

import { wa, IG, IG_HANDLE } from "./config.js";
import { renderAll } from "./render.js";

function initHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const onScroll = () => header.classList.toggle("solid", window.scrollY > 24);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function initMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;

  const close = () => {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  links.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
  window.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
}

function initReveals() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((n) => n.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    }
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  items.forEach((n) => io.observe(n));
}

// Wire any element carrying data-wa (optional product name) or data-ig.
function initLinks() {
  document.querySelectorAll("[data-wa]").forEach((a) => {
    a.href = wa(a.getAttribute("data-wa") || "");
    a.target = "_blank";
    a.rel = "noopener";
  });
  document.querySelectorAll("[data-ig]").forEach((a) => {
    a.href = IG;
    a.target = "_blank";
    a.rel = "noopener";
    if (a.hasAttribute("data-ig-handle")) a.textContent = IG_HANDLE;
  });
}

function initYear() {
  const y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();
}

// Graceful placeholder for any image that fails to load (before real
// photos are dropped into assets/images/). Uses a branded gold-on-dark SVG.
function initImageFallback() {
  const placeholder = (label) =>
    "data:image/svg+xml;utf8," + encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='1000' viewBox='0 0 800 1000'>
        <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0' stop-color='#1A140D'/><stop offset='1' stop-color='#0D0A06'/>
        </linearGradient></defs>
        <rect width='800' height='1000' fill='url(#g)'/>
        <rect x='24' y='24' width='752' height='952' fill='none' stroke='#C9A24B' stroke-opacity='0.28'/>
        <text x='400' y='500' fill='#C9A24B' font-family='Georgia,serif' font-size='40' text-anchor='middle' letter-spacing='4'>GK7</text>
        <text x='400' y='548' fill='#A99C82' font-family='monospace' font-size='18' text-anchor='middle' letter-spacing='2'>${label}</text>
      </svg>`
    );

  document.addEventListener("error", (e) => {
    const img = e.target;
    if (img.tagName !== "IMG" || img.dataset.fallback) return;
    img.dataset.fallback = "1";
    img.src = placeholder("Image coming soon");
  }, true); // capture phase — img error events don't bubble
}

function boot() {
  initImageFallback(); // register before images start failing
  renderAll();      // build grids/feature/reviews first
  initLinks();      // then wire static CTAs
  initReveals();    // observe everything, including rendered tiles
  initHeader();
  initMenu();
  initYear();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
