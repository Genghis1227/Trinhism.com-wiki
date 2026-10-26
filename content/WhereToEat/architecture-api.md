+++
title = "Architecture & Google Places API"
weight = 30
+++

# Architecture & Google Places API Integration

`eat.trinhism.com` is designed around extreme client-side efficiency, zero external framework overhead, and strict cost controls against Google Cloud billing.

---

## 🛠️ Technology Stack Overview

| Layer | Implementation | Details |
| :--- | :--- | :--- |
| **Frontend Runtime** | Vanilla ES Modules / Single-File App | Native JavaScript, HTML5 Canvas, and Web Audio API without framework overhead (no React, Next.js, or Vue dependencies). |
| **Styling** | [Tailwind CSS CDN](https://tailwindcss.com/) | Dark-slate theme (`#020617` / `#0f172a`), neon accents, glassmorphism blur panels, and responsive touch-first layouts. |
| **Maps & Places SDK** | Google Maps JavaScript API (New) | Dynamic asynchronous library import via `google.maps.importLibrary("places")`, `("maps")`, and `("marker")`. |
| **Service Worker** | `sw.js` (Cache-First Shell) | Caches HTML, manifest, and icons for instant offline shell loading. All API and Google Maps requests are routed through network-only bypasses. |
| **Hosting & CI/CD** | [Cloudflare Pages](https://pages.cloudflare.com/) | Deployed as purely static files with server-side environment variable replacement (`sed`) during build. |

---

## 💰 Zero-Cost Field Masking Strategy

Google Cloud bills Places API requests based on tiered data categories. Requesting advanced fields (like opening hours, reviews, or price levels) incurs steep pricing per thousand requests.

`eat.trinhism.com` avoids all Advanced and Atmosphere tier fees by strictly limiting field masks in `Place.searchNearby()`:

```javascript
// Strict Basic Tier Request Only
const request = {
  fields: ['displayName', 'location', 'id', 'formattedAddress', 'types'],
  locationRestriction: {
    center: { lat: userLat, lng: userLng },
    radius: 8046 // Exactly 5 miles
  },
  includedTypes: activeTypes,
  maxResultCount: 20
};

const { places } = await Place.searchNearby(request);
```

### Why This Matters:
1. **Zero-Dollar Operation**: By fetching only Basic Tier fields (`displayName`, `location`, `id`, `formattedAddress`, `types`), the app stays well within Google's free monthly credit allotment.
2. **No Data Deprecation Risk**: Secondary data like photos, operating hours, and user reviews are accessed for free by deep-linking users directly to the official Google Maps page (`https://www.google.com/maps/search/?api=1&query=...&query_place_id=...`).

---

## 🏷️ Category Mapping to Google Places Table A Types

To ensure accurate filtering, cuisine chips map strictly to validated Google Places Table A types, capped at a maximum of 5 types per search:

| Cuisine Chip | Google Places `includedTypes` |
| :--- | :--- |
| **🍔 Burgers** | `hamburger_restaurant` |
| **🍕 Pizza** | `pizza_restaurant` |
| **🌮 Tacos / Mexican** | `mexican_restaurant` |
| **🍖 BBQ** | `barbecue_restaurant` |
| **🍜 Asian / Noodles** | `asian_restaurant`, `chinese_restaurant`, `ramen_restaurant` |
| **🍣 Sushi / Japanese** | `japanese_restaurant`, `sushi_restaurant` |
| **🍲 Thai** | `thai_restaurant` |
| **🥣 Pho / Vietnamese** | `vietnamese_restaurant` |
| **🫓 Mediterranean** | `mediterranean_restaurant`, `greek_restaurant`, `middle_eastern_restaurant` |
| **🍝 Italian** | `italian_restaurant` |
| **🦞 Seafood** | `seafood_restaurant` |
| **🥞 Breakfast & Brunch** | `brunch_restaurant`, `breakfast_restaurant` |
| **☕ Coffee & Bakery** | `cafe`, `coffee_shop`, `bakery` |
| **🥪 Sandwiches & Deli** | `sandwich_shop`, `meal_takeaway` |
| **🍗 Wings** | `chicken_restaurant` |
| **🍦 Desserts & Sweets** | `ice_cream_shop`, `dessert_restaurant`, `bakery` |

*Note*: Specific types are calibrated to avoid catch-all mismatches (e.g., preventing generic burrito chains from matching pizza searches).

---

## 🚀 Cloudflare Pages Build & Deployment

In Cloudflare Pages, the application deploys directly from GitHub without needing `npm install` or complex bundle steps:

```bash
# Cloudflare Pages Build Command
sed -i "s/__GOOGLE_MAPS_API_KEY__/$GOOGLE_MAPS_API_KEY/g" index.html
```

* **Environment Variable**: `GOOGLE_MAPS_API_KEY` is securely injected into the static `index.html` file at build time.
* **Build Output Directory**: `/` (root directory).
* **Zero Cold Starts**: Served globally via Cloudflare's edge CDN with sub-20ms initial HTML delivery.
