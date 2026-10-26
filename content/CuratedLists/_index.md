+++
title = "CuratedLists"
type = "docdock"
weight = 50
+++

<p align="center">
  <img src="/wiki/images/curatedlists-logo.png" alt="CuratedLists Logo" width="120" />
</p>

# CuratedLists Documentation Hub

Welcome to the **CuratedLists** documentation space. CuratedLists is an opinionated, high-performance web platform designed to help connoisseurs methodically evaluate, rank, and archive artisanal items—from specialty coffee and single-malt whiskies to craft hot sauces, wines, and everyday carry (EDC) gear.

---

## 💡 What is CuratedLists?

CuratedLists bridges the gap between casual personal wishlists and professional sensory evaluation. Hosted at [curatedlists.app](https://curatedlists.app) (and featured in Trinhism Labs at [`/app/curatedlists/`](https://trinhism.com/app/curatedlists/)), it provides enthusiasts with two distinct curation superpowers:

1. **Curated Showcases (Zero-Pressure Collections & Countdowns)**: Pure curator-authored collections (EDC gear kits, travel packing lists, coffee roaster selections, developer toolsets, or numbered top-10 countdowns) with live `#` numbering, drag-and-drop reordering, and editorial layouts. Showcases are strictly curator-exclusive: visitor contender suggestions are permanently disabled to preserve the author's distinct taste without crowd dilution.
2. **Ranked Tier Boards (S / A / B / C / D Precision Benchmarking)**: Methodical comparative ranking grids partitioning items into classic S–D tiers based on composite scores or manual placement. Supports multi-axis sensory spider radar geometry, calibrated scoring scales, and community-driven contender suggestions.

---

## 🌟 Why Use CuratedLists? (Value Proposition)

Standard note-taking apps and generic spreadsheets lack sensory rigor, while mainstream review platforms are plagued by advertising noise and uncalibrated 5-star ratings. CuratedLists provides:

*   🍷 **Calibrated Sensory Rosters**: Define custom weighted criteria (e.g., Aroma, Acidity, Finish, Body) with flexible 1–5 or 1–10 scoring scales (with 0.25, 0.5, or 1.0 step granularity) and automatic composite scoring.
*   👥 **Real-Time Collaborative Tasting Rooms**: Host live sensory flights with collision-resistant 6-character room codes (`/tasting/[code]`). Features **Blind Tasting Mode** to mask brand names/photos, multi-judge radar polygon overlays, and automated Group Consensus Index calculation.
*   📷 **Universal Barcode Scanner & 3-Tier Edge Cache**: Instant camera-based UPC/EAN barcode scanning backed by an ultra-fast 3-tier distributed cache (Upstash Redis L1 &rarr; Supabase PostgreSQL L2 &rarr; Open Food Facts L3).
*   🌐 **SSRF-Guarded OpenGraph Scraper**: Automatic URL metadata ingestion with domain-specific archetype enhancements for Steam games, Google/Apple Maps places, and YouTube/Spotify media.
*   🥇 **Multi-Dimensional Leaderboards**: Upstash Redis-cached leaderboards ranking top curators across 6 competitive dimensions and rosters across 4 performance dimensions.
*   🌟 **Crowdsourced Community Commons**: Dedicated community boards (`/community/[slug]`) with live upvote counters, dynamic consensus tier boards, and an interactive personal sandbox with a *"My Taste vs The Community"* alignment engine.
*   🔗 **Vanity URLs**: Clean, shareable public handles (`curatedlists.app/@username` and `curatedlists.app/@username/roster-slug`).

---

## 📚 Documentation Sections

*   🚀 **[Getting Started](/wiki/curatedlists/getting-started/)**: Account setup, vanity handles, choosing roster archetypes, scoring criteria configuration, item ingestion, and managing your "Want to Try" backlog.
*   🧠 **[Features & Sensory Capabilities](/wiki/curatedlists/features-rosters/)**: Spider radar geometry, normalized scoring, real-time blind tasting rooms, crowdsourced community commons, barcode scanner, and URL scrapers.
*   ⚙️ **[Architecture & Technology Stack](/wiki/curatedlists/architecture-tech/)**: Next.js 15 App Router, React 19, Cloudflare Pages Edge Runtime, Supabase PostgreSQL with RLS, Upstash Redis caching, and Tailwind CSS 4 dual themes.

---

## ✉️ Support & Community
Have questions, suggestions, or want to share a public roster? Reach out to **support [at] trinhism.com** or explore the live platform directly at [curatedlists.app](https://curatedlists.app).
