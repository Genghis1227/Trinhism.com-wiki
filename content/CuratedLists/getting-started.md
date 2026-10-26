+++
title = "Getting Started"
weight = 10
+++

# Getting Started with CuratedLists

This guide walks you through setting up your profile handle, selecting the right roster archetype, defining custom evaluation criteria, and ingesting your first artisanal items.

---

## 1. Setting Up Your Profile & Vanity Handle

CuratedLists utilizes Supabase Authentication for secure, passwordless magic link logins and social OAuth providers.

1. Navigate to [curatedlists.app/login](https://curatedlists.app/login).
2. Sign in using your email address or preferred OAuth provider.
3. Upon first sign-in, head to **Settings &rarr; Profile**:
   * **Choose a Vanity Handle**: Reserve your clean public username (e.g., `@tony`). All your public rosters and collections will be accessible at `curatedlists.app/@username`.
   * **Upload an Avatar**: Profile pictures are automatically resized and compressed client-side to a crisp 512×512 WebP image via HTML5 Canvas before uploading to secure storage.
   * **Add a Tasting Philosophy / Bio**: Define your personal palate, tasting philosophy, or curation focus (up to 280 characters).

---

## 2. Choosing Your Roster Archetype

When creating a new list (**New Roster** button in the dashboard), choose between two distinct curation archetypes:

| Feature / Archetype | 🗂️ Curated Showcase | 🏆 Ranked Tier Board |
| :--- | :--- | :--- |
| **Primary Purpose** | Personal curated collections, EDC kits, gift guides, top-10 countdowns | Comparative benchmark tasting, artisanal reviews, category rankings |
| **Ordering Mechanism** | Curator drag-and-drop `#` reordering or alphabetical sort | Automated composite score calculation (**S / A / B / C / D**) or manual tier drag |
| **Scoring / Radar** | Optional / Disabled (Zero-pressure) | Fully calibrated multi-axis radar geometry with custom weights |
| **Audience Nominations** | **Strictly Disabled** (100% curator exclusivity) | Enabled via community contender suggestion banners |
| **Best For** | "My Favorite Pourover Gear", "Top 10 Austin Tacos" | "Single Malt Scotch Rankings", "Hot Sauce Scoville & Flavor Flight" |

---

## 3. Configuring Sensory Criteria & Scoring Scales

If you select a **Ranked Tier Board**, you can configure custom sensory axes to evaluate contenders objectively:

1. **Select Scoring Scale**:
   * **1 to 5 Scale**: Fast, high-level evaluation with `0.5` or `0.25` step precision.
   * **1 to 10 Scale**: Professional-grade granular sensory scoring with `0.25` or `0.5` step intervals.
2. **Define Sensory Attributes & Weights**:
   * Click **+ Add Attribute** to configure custom evaluation dimensions.
   * *Examples for Specialty Coffee*: **Aroma** (weight 20%), **Acidity** (weight 25%), **Body** (weight 20%), **Flavor Clarity** (weight 25%), **Aftertaste** (weight 10%).
   * *Examples for Hot Sauces*: **Heat Balance** (weight 30%), **Flavor Complexity** (weight 35%), **Vinegar/Acidity** (weight 15%), **Versatility** (weight 20%).
3. **Set Privacy**:
   * **Public**: Accessible to the world via your vanity URL and eligible for community leaderboards.
   * **Private**: Encrypted to your user account, ideal for private personal tasting diaries.

---

## 4. Ingesting & Adding Contenders

CuratedLists provides three frictionless methods to add items to your roster:

### Method A: Camera Barcode Scanner
1. Tap the **📷 Scan Barcode** icon on mobile or desktop.
2. Align the camera with any standard UPC or EAN product barcode.
3. The app queries its 3-tier distributed cache (Upstash Redis L1 &rarr; Supabase DB L2 &rarr; Open Food Facts L3) and auto-populates the product title, brand/maker, category tags, and packaging art.

### Method B: Smart URL Ingestion & OpenGraph Scraper
1. Paste a product or reference link into the item URL input.
2. The server-side edge scraper fetches OpenGraph and Twitter card metadata with built-in SSRF protection:
   * **Steam**: Automatically extracts game title, publisher, and high-resolution capsule art.
   * **Google & Apple Maps**: Automatically extracts venue names and coordinates while stripping tracking parameters.
   * **YouTube & Spotify**: Extracts channel/artist titles and thumbnail artwork.

### Method C: Manual Entry & Image Upload
* Type the name, maker/roaster/distillery, and upload custom photo snapshots from your device.

---

## 5. Tasting, Scoring, and the "To Try" Backlog

* **📌 "To Try" Backlog**: Discovered a product you haven't tasted yet? Mark it as **"Add to Backlog"**. It will sit in your roster's dedicated `/backlog` queue.
* **Scoring Flight**: When you're ready to taste, open the contender's rating card, adjust the slider handles for each sensory attribute, and watch the multi-axis spider radar polygon update live.
* **Tier Assignment**: The system calculates the normalized composite index (0–100) and automatically sorts the item into its appropriate tier (**S**, **A**, **B**, **C**, or **D**).
