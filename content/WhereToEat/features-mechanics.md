+++
title = "Features & Mechanics"
weight = 20
+++

# Features & Roulette Mechanics

This document provides a deep dive into the food roulette engine, spatial quadrant search, sensor integration, session memory, establishment badges, and external action links in `eat.trinhism.com`.

---

## 🎰 The Roulette Spin Engine

The core recommendation engine balances visual excitement with smart candidate caching and mathematical odds fairness:

*   **Slot-Reel Animation**: When triggered, the result card enters a high-speed cycling state, flashing random candidate restaurant names and establishment icons with accelerating tick intervals before easing to a halt on the chosen winner.
*   **Candidate Pre-Filtering**: The entire candidate pool is strictly pre-filtered against your active category and sub-category criteria before the roulette animation begins. If zero candidates match your selected criteria within 5 miles, a toast notification alerts you immediately without showing unrelated random spots.
*   **Balanced Category Selection (`selectBalancedWinner`)**: When you multi-select multiple categories (e.g., *Steakhouse + Mexican + Asian*), the picker does not simply pick a random place from the entire pool (which would unfairly bias toward the category with the most nearby locations). Instead, it assigns **equal 1/N odds** to each selected category, picks a category at random, and then picks an unvisited restaurant within that category.
*   **Session Anti-Repeat Memory**:
    *   The app tracks each spot recommended during your active session via an in-memory `Set`.
    *   Previously shown restaurants are excluded from subsequent spins until all available candidates in the 5-mile radius are exhausted.
    *   If you cycle through all candidate spots, the session history resets automatically, or you can manually click **Reset History**.

---

## 🧭 Spatial Quadrant Search Engine (80–150+ Candidates)

Google's modern `Place.searchNearby` API imposes a hard ceiling of **20 results per request** without pagination support (`nextPageToken` is unsupported). In dense metropolitan areas or sprawling suburbs, a single search from a downtown pin causes the top 20 most popular downtown venues to crowd out every eatery in surrounding neighborhoods.

To solve this, `eat.trinhism.com` implements a **Spatial Quadrant Search Engine**:

```
                  [ North Quadrant ]
                  lat +0.032°, r=4.5km
                           ▲
                           │
[ West Quadrant ]   ◄── [ Center ] ──►   [ East Quadrant ]
lng -0.037°, r=4.5km   Pop + Dist       lng +0.037°, r=4.5km
       5.0-mile radius (r=8.05km)
                           │
                           ▼
                  [ South Quadrant ]
                  lat -0.032°, r=4.5km
```

### How It Works:
1. **Dual-Ranking Center Circle**: Simultaneously queries the user's 5-mile radius by both `POPULARITY` (the 20 most famous spots) and `DISTANCE` (the 20 closest spots to the pin).
2. **Four Spatial Quadrant Sub-Circles**: In parallel, queries 4 offset sub-circles shifted ~2.2 miles North, South, East, and West, each with a ~2.8-mile radius (`4,500 meters`). Because each sub-circle has its own top-20 cutoff, neighborhood restaurants 2 to 4 miles away (e.g., UT campus, East Austin, South Lamar, North Burnet) get full representation.
3. **Strict 5-Mile Haversine Boundary**: All candidate places returned by quadrant queries are validated against the user's active coordinates via [`calculateDistanceMiles()`](#). Any spot beyond 5.15 miles is discarded.
4. **Result Pool**: Expands the candidate pool from 20 places to **80–150+ unique establishments** on a single spin with zero added API billing tier cost.

---

## 📳 Accelerometer Shake Detection

To make decision-making tactile and fun, `eat.trinhism.com` listens to physical device movement using the native HTML5 `devicemotion` API:

```javascript
// Multi-axis delta calculation
const deltaX = Math.abs(currentX - lastX);
const deltaY = Math.abs(currentY - lastY);
const deltaZ = Math.abs(currentZ - lastZ);
const totalDelta = deltaX + deltaY + deltaZ;

// Threshold & Debounce Cooldown
if (totalDelta > 19 && (now - lastShakeTime > 2000)) {
  lastShakeTime = now;
  triggerSpin();
}
```

*   **Multi-Axis Sensitivity**: Tunes accelerometer deltas across X, Y, and Z axes to distinguish deliberate shakes from gentle walking or picking up the phone.
*   **2-Second Cooldown**: Prevents multiple accidental re-spins while the phone is still in motion.
*   **iOS Safari Early Activation**: Rather than waiting for a specific button click, the app requests motion permissions on the first user interaction anywhere on the document (such as tapping a category chip or the interactive shake status pill).

---

## 🏷️ Establishment Classification Badges

Google Places API returns an array of primary and secondary `types` for each location. `eat.trinhism.com` parses these types and applies whole-word regex heuristics to badge the winner:

| Badge | Criteria & Detection Heuristics |
| :--- | :--- |
| **🚚 Food Truck / Stand** | Matches explicit name regex `/\b(food\s*truck\|food\s*trailer\|taco\s*truck\|taco\s*trailer\|food\s*cart)\b/i`, or places where `primaryType` is `meal_takeaway` without sit-down `restaurant` or `bar` tags. (Excludes sit-down burger stands). |
| **🍽️ Dine-In / Restaurant** | Matches standard sit-down dining rooms, bistros, grills, and restaurants. |

---

## 🍷 Strict Fine Dining Scoping

To ensure that searching for **🍷 Fine Dining** exclusively surfaces true upscale dinner establishments (and never casual bakeries, creperies, or pubs that happen to carry a French cuisine tag), the engine employs a two-tier filter:

1. **Mandatory Type**: The place must carry Google's official `fine_dining_restaurant` tag.
2. **Primary Type Guard (`FINE_DINING_EXCLUDED_TYPES`)**: The establishment's `primaryType` cannot be a cafe, bakery, dessert shop, breakfast diner, fast-food joint, or pub.
3. **Bar & Takeaway Tag Support**: Because world-class steakhouses (like Perry's, The Capital Grille, Eddie V's) and fine dining rooms (like Uchi, Emmer & Rye) frequently feature full cocktail bars or takeout options as secondary tags, secondary `bar` or `meal_takeaway` tags are permitted as long as the venue's `primaryType` is a restaurant or fine dining room.

---

## 🗺️ Interactive Dark-Slate Map Reveal

Once the winning spot is selected:
* An embedded Google Map container smoothly transitions into view below the restaurant card.
* Styled in a custom dark-slate aesthetic matching the app's palette.
* Features Google's modern `AdvancedMarkerElement` centered precisely on the restaurant's geographic coordinates with an interactive pin drop animation.

---

## 🚀 Native Deep Links & Social Actions

Rather than loading bloated external widgets, the winner card provides three instant, lightweight native actions:

### 1. 🚗 Let's Go (Turn-by-Turn GPS Navigation)
* Generates a direct Google Maps Navigation URL:
  `https://www.google.com/maps/dir/?api=1&destination={LAT,LNG}&destination_place_id={PLACE_ID}`
* Opens directly in the native Google Maps app on iOS or Android, immediately calculating driving routes and traffic.

### 2. 📋 View Details (Free Native Google Maps Overview)
* Generates a direct Google Maps search link:
  `https://www.google.com/maps/search/?api=1&query={NAME}&query_place_id={PLACE_ID}`
* Provides users with live opening hours, menus, patron photos, atmosphere ratings, and reviews inside Google's native interface—all **without incurring Google Places Advanced or Atmosphere API fees**.

### 3. 📤 Share Spot (Web Share API)
* Uses native mobile sharing (`navigator.share()`) so you can send the restaurant name, address, and Google Maps link directly to friends via iMessage, WhatsApp, Slack, or SMS.
* On desktop browsers without Web Share support, it automatically copies the Google Maps link to the clipboard with visual button confirmation (`✓ Copied Link!`).

---

## 💜 Collapsible Support & Donation Panel

The bottom support panel features:
* **Direct Donation QR Codes**: High-contrast, scannable QR codes and deep links for **Venmo** (`@TonyLTrinh`), **PayPal** (`paypal.me/Genghis1227`), and **Zelle** (`tony@trinhism.com`).
* **Trinhism Labs Ecosystem**: Companion tools including QuickCatch, FinanceWidget, 401(k) Optimizer, Tournament Director, Cash Game Director, and CuratedLists.
* **Support & Documentation Hub**: Contact link to `support [at] trinhism.com` and documentation links to the [Trinhism Wiki](https://trinhism.com/wiki/wheretoeat/).
