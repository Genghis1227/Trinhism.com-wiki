+++
title = "Architecture & Google Places API"
weight = 30
+++

# Architecture & Google Places API Integration

`eat.trinhism.com` is engineered around client-side performance, responsive touch interaction, and strict cost controls against Google Cloud Places API billing.

---

## 🛠️ Technology Stack Overview

| Layer | Implementation | Details |
| :--- | :--- | :--- |
| **Frontend Runtime** | Vanilla ES Modules / Single-File App | Native JavaScript, HTML5 Canvas, and Web Audio API without framework overhead (no React, Next.js, or Vue dependencies). |
| **Styling** | [Tailwind CSS CDN](https://tailwindcss.com/) & Custom CSS | Dark-slate theme (`#020617` / `#0f172a`), neon accents, glassmorphism panels, and responsive auto-flex pills. |
| **Maps & Places SDK** | Google Maps JavaScript API (New) | Dynamic asynchronous library import via `google.maps.importLibrary("places")`, `("maps")`, and `("marker")`. |
| **Service Worker** | `sw.js` (Cache-First Shell) | Caches HTML, manifest, and icons for instant offline shell loading. All API and Google Maps requests bypass the cache. |
| **Hosting & CI/CD** | [Cloudflare Pages](https://pages.cloudflare.com/) | Deployed as purely static files with build-time environment variable replacement (`sed`). |

---

## 💰 Zero-Cost Field Masking Strategy

Google Cloud bills Places API requests based on tiered data categories. Requesting advanced fields (like opening hours, reviews, or price levels) incurs steep pricing per thousand requests.

`eat.trinhism.com` avoids all Advanced and Atmosphere tier fees by strictly limiting field masks in `Place.searchNearby()`:

```javascript
// Strict Basic Tier Request Only
const req = {
  fields: ['displayName', 'location', 'id', 'formattedAddress', 'types', 'primaryType', 'businessStatus'],
  locationRestriction: {
    center: { lat: region.lat, lng: region.lng },
    radius: region.radius
  },
  includedTypes: chunkTypes,
  maxResultCount: 20
};

// Safely set SDK enum (never pass raw string)
const placesLib = state.placesLib || window.google?.maps?.places;
const RankEnum = placesLib?.SearchNearbyRankPreference;
if (RankEnum) {
  req.rankPreference = region.rank === 'DISTANCE' ? RankEnum.DISTANCE : RankEnum.POPULARITY;
}

const { places } = await Place.searchNearby(req);
```

### Why This Matters:
1. **Zero-Dollar Operation (Pro SKU Free Tier)**: By restricting field masks to foundational attributes (`displayName`, `location`, `id`, `formattedAddress`, `types`, `primaryType`, and `businessStatus`), searches map to the **Nearby Search Pro SKU**. Google provides **5,000 completely free Pro requests every month**. Adding `businessStatus` incurs **$0 extra cost** because `displayName` already operates in the Pro tier, while strictly avoiding expensive Enterprise and Atmosphere tiers.
2. **Operational Status Guarantee**: Non-operational listings (`CLOSED_PERMANENTLY` and `CLOSED_TEMPORARILY`) are filtered out client-side during place ingestion, preventing closed restaurants from entering the candidate pool.
2. **No Data Deprecation Risk**: Secondary data like photos, operating hours, and user reviews are accessed for free by deep-linking users directly to the official Google Maps page (`https://www.google.com/maps/search/?api=1&query=...&query_place_id=...`).

---

## 🧭 Spatial Quadrant Search Architecture

To break the 20-place ceiling without pagination, the app deploys a multi-region spatial query using `getSearchRegions()`:

1. **Center Circle (`FULL_RADIUS`)**:
   - `FULL_RADIUS = radiusMiles * 1,609.344 meters` (8.05 km for 5 mi, 16.09 km for 10 mi, 24.14 km for 15 mi).
   - Query 1: `rankPreference: SearchNearbyRankPreference.POPULARITY` (top 20 most popular spots).
   - Query 2: `rankPreference: SearchNearbyRankPreference.DISTANCE` (top 20 closest spots to the pin).
2. **Four Offset Quadrants (`QUAD_RADIUS`)**:
   - `QUAD_RADIUS = FULL_RADIUS * 0.56` (56% radius for sub-circles).
   - `offsetMiles = radiusMiles * 0.44` (44% offset North/South/East/West).
   - **North**: `lat + (offsetMiles * 0.0145°)`.
   - **South**: `lat - (offsetMiles * 0.0145°)`.
   - **East**: `lng + (offsetMiles * 0.0145° / cos(lat))`.
   - **West**: `lng - (offsetMiles * 0.0145° / cos(lat))`.
   - Because `0.44 offset + 0.56 radius = 1.0`, each quadrant sub-circle remains strictly inside the search boundary.
3. **De-duplication & Haversine Distance Check**: Results across all regions are deduplicated by `place.id` and verified against active coordinates with `calculateDistanceMiles() <= radiusMiles + 0.25`.
4. **Candidate Depth**: Returns **80 to 150+ unique establishments** per spin cycle.

---

## 🎲 Multi-Chunk `Any` Query Strategy

When the user selects **🎲 Any**, querying only `['restaurant']` returns only the top 20 most prominent establishments overall. To ensure diverse representation, `getSelectedTypes()` expands `Any` into **4 balanced cuisine chunks (20 Table A types)**:

* **Chunk 1**: `american_restaurant`, `barbecue_restaurant`, `hamburger_restaurant`, `steak_house`, `seafood_restaurant`
* **Chunk 2**: `mexican_restaurant`, `latin_american_restaurant`, `italian_restaurant`, `pizza_restaurant`, `mediterranean_restaurant`
* **Chunk 3**: `asian_restaurant`, `chinese_restaurant`, `japanese_restaurant`, `sushi_restaurant`, `ramen_restaurant`
* **Chunk 4**: `thai_restaurant`, `vietnamese_restaurant`, `indian_restaurant`, `breakfast_restaurant`, `restaurant`

Each chunk is distributed across quadrants, and client-side filtering excludes fast food, coffee shops, bakeries, and bars.

---

## 🛡️ Suburban Query Widening

In suburban areas outside major downtown cores, Google Places often tags specialized dining spots (such as Vietnamese kitchens or Ramen bars) with broad parent types like `asian_restaurant` or generic `restaurant`, rather than specific sub-types like `vietnamese_restaurant` or `ramen_restaurant`.

If a specialized sub-category query yields zero results within the 5-mile radius, `fetchPlaces()` automatically executes a widened background query for the parent cuisine:
```javascript
// Graceful suburban widening if specialized sub-types return 0 spots
if (places.length === 0 && !state.selectedCategoryIds.has('any')) {
  const parentTypes = Array.from(state.selectedCategoryIds)
    .map(id => CATEGORIES.find(c => c.id === id)?.types?.[0])
    .filter(Boolean);
  if (parentTypes.length > 0 && !parentTypes.every(pt => types.includes(pt))) {
    const widenedPlaces = await executeSearchNearbyChunks(parentTypes);
    if (widenedPlaces.length > 0) {
      places = widenedPlaces;
    }
  }
}
```
Client-side keyword matching then evaluates the candidate names (matching keywords like *Pho*, *Banh Mi*, *Saigon*, *Ramen*, etc.) to surface authentic local spots that would otherwise be missed.

---

## 📱 Service Worker & Active PWA Lifecycle

`eat.trinhism.com` implements an active Progressive Web App lifecycle:

1. **Proactive Background Update Checking**:
   - **On Startup**: Executes `reg.update()` on page load to immediately verify if `sw.js` or static assets have changed.
   - **On Foreground Resume**: Listens to `document.addEventListener('visibilitychange')`. Whenever the user switches back to the installed PWA, the service worker immediately checks for updates rather than waiting for 24-hour browser polling.
2. **Automated Asset Synchronization**:
   - Master badges (`assets/badge-round-text.jpg` and `assets/badge-round-clean.jpg`) are synchronized across all densities.
   - **Website Logo (`logo.png`)**: 512x512 tightly cropped square around the phone and roulette wheel for crisp, high-contrast header presentation.
   - **PWA Splash Screen (`icon-512.png`, `icon-192.png`)**: `purpose: any` featuring the full circular emblem with "WHERE TO EAT..." title on dark slate background.
   - **Mobile Launcher (`icon-maskable-512.png`, `icon-maskable-192.png`, `apple-touch-icon.png`)**: `purpose: maskable` calibrated within the 80% safe zone to eliminate clipping across Android circular/squircle and iOS home screen masks.

---

## 🏷️ Category Mapping to Google Places Table A Types

| Cuisine Category | Sub-Category | Google Places Table A Types |
| :--- | :--- | :--- |
| **🎲 Any** | *None* | 20 dining types across 4 chunks (excludes fast food / cafes / bars) |
| **🥩 Steakhouse** | *None* | `steak_house` |
| **🍝 Italian** | *None* | `italian_restaurant` |
| **🍕 Pizza** | *None* | `pizza_restaurant` |
| **🥢 Asian** | **All Asian** | `asian_restaurant`, `chinese_restaurant`, `japanese_restaurant`, `vietnamese_restaurant`, `thai_restaurant`, `korean_restaurant`, `ramen_restaurant` |
| | **🍜 Vietnamese** | `vietnamese_restaurant`, `asian_restaurant` |
| | **🥩 Korean** | `korean_restaurant` |
| | **🍱 Japanese** | `japanese_restaurant`, `ramen_restaurant` |
| | **🍜 Ramen** | `ramen_restaurant` |
| | **🥟 Chinese** | `chinese_restaurant` |
| | **🍛 Thai** | `thai_restaurant` |
| | **🥘 Indian** | `indian_restaurant` |
| **🍔 Burgers** | *None* | `hamburger_restaurant` |
| **🍳 Diner** | *None* | `diner` |
| **🍣 Sushi** | *None* | `sushi_restaurant` *(excludes pure ramen rooms)* |
| **🌮 Latin** | **All Latin** | `mexican_restaurant`, `latin_american_restaurant`, `brazilian_restaurant`, `spanish_restaurant` |
| | **🌮 Mexican** | `mexican_restaurant` |
| | **🥩 Brazilian** | `brazilian_restaurant` |
| | **🥘 Spanish** | `spanish_restaurant` |
| **🥙 Mediterranean** | **All Med** | `mediterranean_restaurant`, `greek_restaurant`, `middle_eastern_restaurant`, `lebanese_restaurant`, `turkish_restaurant` |
| | **🌙 Halal** | `halal_restaurant`, `middle_eastern_restaurant`, `mediterranean_restaurant` |
| | **🇬🇷 Greek** | `greek_restaurant` |
| | **🧆 Middle Eastern**| `middle_eastern_restaurant` |
| | **🇱🇧 Lebanese** | `lebanese_restaurant` |
| | **🍢 Turkish** | `turkish_restaurant` |
| **🍖 BBQ** | *None* | `barbecue_restaurant` |
| **🥞 Breakfast** | **All Breakfast**| `breakfast_restaurant`, `brunch_restaurant`, `bakery` |
| | **🍳 Diner & Brunch**| `breakfast_restaurant`, `brunch_restaurant`, `diner` |
| | **🥞 Crepes & Waffles**| `breakfast_restaurant`, `brunch_restaurant`, `dessert_restaurant`, `cafe` |
| | **🥐 Bakery** | `bakery`, `bagel_shop`, `donut_shop` |
| | **☕ Coffee & Cafe** | `cafe`, `coffee_shop` |
| **🥪 American** | *None* | `american_restaurant` |
| **🍺 Bar** | *None* | `bar`, `pub` |
| **🍷 Fine Dining** | *None* | `fine_dining_restaurant` *(primaryType checked against casual exclusions)* |
| **🍟 Fast Food** | *None* | `fast_food_restaurant` |
| **🦞 Seafood** | *None* | `seafood_restaurant` |
| **🥗 Healthy** | *None* | `vegetarian_restaurant`, `vegan_restaurant` |

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
