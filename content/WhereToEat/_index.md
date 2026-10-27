+++
title = "Where to Eat (eat.trinhism.com)"
type = "docdock"
weight = 70
+++

<p align="center">
  <img src="/wiki/images/where-to-eat-logo.png" alt="Where to Eat Logo" width="120" />
</p>

# Where to Eat (`eat.trinhism.com`) Documentation Hub

Welcome to the **Where to Eat** (`eat.trinhism.com`) documentation space. "Where to eat..." is a mobile-first Progressive Web App (PWA) food roulette designed to instantly eliminate dining indecision by spinning through nearby restaurants, food trucks, and eateries.

---

## 💡 What is `eat.trinhism.com`?

Hosted at [eat.trinhism.com](https://eat.trinhism.com), the app transforms the age-old question *"What do you want to eat?"* into an interactive, high-energy gameshow spin. Powered by the modern **Google Places (New) API** and native device sensors, it scans a 5-mile radius around your current location, filters by your chosen cuisine cravings, and rapidly cycles through real open spots before locking onto a winner.

Crucially, the application is engineered with a **Zero-Cost API Architecture**: by strictly utilizing Google Places Basic Tier field masking, the app completely avoids expensive Advanced and Atmosphere billing while providing free deep-links into native Google Maps for live menus, photos, reviews, and turn-by-turn navigation.

---

## 🌟 Why Use `eat.trinhism.com`? (Value Proposition)

Browsing generic review platforms often leads to decision fatigue, endless scrolling, sponsored promotions, and analysis paralysis. `eat.trinhism.com` offers:

*   🎰 **Instant Food Roulette Engine**: Rapid slot-reel animation cycles through nearby contender spots before locking onto a winner. Features session memory to ensure you never get recommended the same place twice until all candidates are exhausted.
*   🧭 **Spatial Quadrant Search (80–150+ Candidates)**: Breaks Google's default 20-place ceiling by querying the 5-mile center circle by both `POPULARITY` and `DISTANCE` alongside 4 N/S/E/W quadrant sub-circles in parallel, uncovering hidden gems across all surrounding neighborhoods.
*   📳 **Physical Shake Detection**: Shake your smartphone to spin! Uses native `devicemotion` accelerometer detection with multi-axis delta sensitivity and a 2-second debounce timer, complete with iOS Safari motion permission handling.
*   ⌨️ **Desktop Spacebar Trigger**: Sitting at your computer? Tap the Spacebar to trigger an instant spin.
*   🍽️ **18 Responsive Cuisine Categories**: Filter by auto-flex chips (`🎲 Any`, `🥩 Steakhouse`, `🍝 Italian`, `🍕 Pizza`, `🥢 Asian`, `🍔 Burgers`, `🍳 Diner`, `🍣 Sushi`, `🌮 Latin`, `🥙 Mediterranean`, `🍖 BBQ`, `🥞 Breakfast`, `🥪 American`, `🍺 Bar`, `🍷 Fine Dining`, `🍟 Fast Food`, `🦞 Seafood`, `🥗 Healthy`).
*   🥢 **Hierarchical Sub-Category Drawers & Multi-Select**: Tap umbrella cuisines to slide out regional sub-cuisine drawers with full multi-select capability:
    *   **Asian**: Vietnamese, Korean, Japanese, Ramen, Chinese, Thai, Indian.
    *   **Mediterranean**: Halal, Greek, Middle Eastern, Lebanese, Turkish.
    *   **Latin**: Mexican, Brazilian, Spanish.
    *   **Breakfast**: Diner & Brunch, Crepes & Waffles, Bakery, Coffee & Cafe.
*   ⚖️ **Balanced Equal-Odds Cuisine Selection**: When multi-selecting categories, the engine balances selection odds equally across chosen categories (1/N odds), preventing high-density cuisines from dominating the wheel.
*   🚚 **Heuristic Establishment Badges**: Automatically classifies winning spots as either `🚚 Food Truck / Stand` or `🍽️ Dine-In / Restaurant` based on Google Places types and name heuristics.
*   🚗 **1-Tap Navigation & Social Sharing**: Direct deep links to Google Maps Turn-by-Turn GPS Navigation (`Let's Go`), place overview (`View Details`), and native mobile sharing (`navigator.share()`).
*   💜 **Support Drawer & Trinhism Labs Showcase**: Collapsible support panel with scannable Venmo, PayPal, and Zelle donation QR codes, plus links to companion apps from Trinhism Labs.
*   📱 **Offline-Ready PWA**: Fully installable as an app on iOS and Android with custom maskable launcher icons, service worker shell caching, and an in-app changelog modal.

---

## 📚 Documentation Sections

*   🚀 **[Getting Started](/wiki/wheretoeat/getting-started/)**: Installing the PWA, location permissions, setting manual address overrides, cuisine filtering, sub-category drawers, and spinning via touch, shake, or Spacebar.
*   🧠 **[Features & Roulette Mechanics](/wiki/wheretoeat/features-mechanics/)**: Slot-reel animation, spatial quadrant search, session history tracking, balanced category selection, food truck heuristics, and native Google Maps deep links.
*   ⚙️ **[Architecture & Google Places API](/wiki/wheretoeat/architecture-api/)**: Zero-cost field masking strategy, Google Places (New) dual-ranking & quadrant queries, suburban query widening, Table A type mapping, Service Worker offline caching, and Cloudflare Pages deployment.

---

## ✉️ Support & Inquiries
Have feedback, cuisine requests, or questions? Contact us at **support [at] trinhism.com** or take a spin right now at [eat.trinhism.com](https://eat.trinhism.com).
