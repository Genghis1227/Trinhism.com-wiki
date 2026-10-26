+++
title = "Features & Mechanics"
weight = 20
+++

# Features & Roulette Mechanics

This document provides a deep dive into the food roulette engine, sensor integration, session memory, establishment badges, and external action links in `eat.trinhism.com`.

---

## 🎰 The Roulette Spin Engine

The core recommendation engine balances visual excitement with smart candidate caching:

*   **Slot-Reel Animation**: When triggered, the result card enters a high-speed cycling state, flashing random candidate restaurant names and establishment icons with accelerating tick intervals before easing to a halt on the chosen winner.
*   **In-Memory Query Cache**: If you spin multiple times without changing your coordinates or cuisine filters, the app reuses the cached Places API results in memory rather than generating redundant network requests.
*   **Session Anti-Repeat Memory**:
    *   The app tracks each spot recommended during your active session.
    *   Previously shown restaurants are excluded from subsequent spins until all available candidates in the 5-mile radius are exhausted.
    *   If you cycle through all candidate spots, the session resets automatically, or you can manually click **Reset History**.

---

## 📳 Accelerometer Shake Detection

To make decision-making tactile and fun, `eat.trinhism.com` listens to physical device movement using the native HTML5 `devicemotion` API:

```javascript
// Multi-axis delta calculation
const deltaX = Math.abs(currentX - lastX);
const deltaY = Math.abs(currentY - lastY);
const deltaZ = Math.abs(currentZ - lastZ);
const totalDelta = deltaX + deltaY + deltaZ;

// Threshold & Debounce
if (totalDelta > 19 && (now - lastShakeTime > 2000)) {
  lastShakeTime = now;
  triggerSpin();
}
```

*   **Multi-Axis Sensitivity**: Tunes accelerometer deltas across X, Y, and Z axes to distinguish deliberate shakes from gentle walking or picking up the phone.
*   **2-Second Cooldown**: Prevents multiple accidental re-spins while the phone is still in motion.
*   **iOS Safari Permission Handling**: Adheres to Apple's security requirements by prompting for `DeviceMotionEvent.requestPermission()` upon the first user interaction.

---

## 🏷️ Establishment Classification Badges

Google Places API returns an array of primary and secondary `types` for each location. `eat.trinhism.com` parses these types and applies name heuristics to badge the winner:

| Badge | Criteria & Detection Heuristics |
| :--- | :--- |
| **🚚 Food Truck / Stand** | Matches types `food_court`, `meal_takeaway`, or contains keywords (*"Food Truck"*, *"Trailer"*, *"Stand"*, *"Mobile"*, *"Tacos y Mas"*) in the establishment name. |
| **🍽️ Dine-In / Restaurant** | Matches standard sit-down types (`restaurant`, `cafe`, `bar`, `diner`, `bakery`). |

This distinction is crucial for diners who want to know immediately whether they are heading to a sit-down dining room or an outdoor food trailer park.

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
