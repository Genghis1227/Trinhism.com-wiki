+++
title = "Ambiently"
type = "docdock"
weight = 80
+++

<p align="center">
  <img src="/wiki/images/ambiently-logo.png" alt="Ambiently Logo" width="120" />
</p>

# Ambiently (`dashboard.trinhism.com`) Documentation Hub

Welcome to the **Ambiently** documentation space. Ambiently is a modern, open-source, self-hosted smart-display and family command center Progressive Web App (PWA) under the Trinhism ecosystem, designed as a privacy-first alternative to commercial display services (DAKboard, Skylight Calendar, and Mango Display).

---

## 💡 What is Ambiently?

Hosted at [dashboard.trinhism.com](https://dashboard.trinhism.com) (and showcased in Trinhism Labs at [`/app/ambiently/`](https://trinhism.com/app/ambiently/)), Ambiently transforms idle tablets, Raspberry Pi monitors, smart TVs, and desktop browsers into an interactive, zero-clutter family hub and personal dashboard. Its complete source code is licensed under **AGPLv3** at [github.com/Genghis1227/ambiently](https://github.com/Genghis1227/ambiently).

Unlike commercial wall displays that lock basic calendars or layouts behind monthly paywalls and go blank whenever Wi-Fi blips, Ambiently runs directly out of client-side IndexedDB storage (`Dexie.js`) with **0ms offline-first boot** and full self-hosting parity via Docker and Raspberry Pi.

---

## 🌟 Why Use Ambiently? (Value Proposition)

*   ⚡ **0ms Offline-First Boot & 3-Tier Persistence**: Boots instantaneously from browser IndexedDB (`AmbientlyDB`), mirrors live snapshots to a local `ambiently-data.json` file via the Chromium File System Access API (ideal inside Dropbox, Google Drive, OneDrive, Nextcloud, or Synology Drive folders), and supports optional Supabase Realtime multi-device sync.
*   📌 **Multi-Canvas Freeform Corkboard**: Create up to **10 independent boards** (*Family Board*, *Photo Gallery*, *Morning Briefing*, etc.) with 30 Lucide icons, freeform drag, bottom-right corner resizing (`↘`), 360° rotation (`↻`), frameless **Sticker / No Outline Mode**, 1-click **Auto-Organize** (*Smart Bento Grid*, *Keep Sizes & Pack*, *Split Zones*), and 3 smart sticky note formats (*Text Note*, *Checklist*, and aisle-grouped *🛒 Shopping List*).
*   🏆 **Family Chore & Reward Engine**: Global `Parent` and `Kid` household profiles (with client-side iOS `.HEIC`/`.HEIF` photo decoding and circular `256×256` WebP avatar cropping), flexible cadences, same-day skip & 24-hour overdue grace policies, an append-only point audit ledger, PIN-locked Wishlist Store with URL price scraping, and a permanent Trophy Case.
*   🍽️ **Family Meal Planner, Recipe Scraper & Cooking Mode**: Switch between *Tomorrow*, *3-Day*, and *Full Week (7-Day)* meal views, assign cooks in 1 tap, scrape Schema.org `Recipe` JSON-LD data from recipe URLs, cook hands-free in Screen Wake-Lock **Cooking Mode**, and aggregate normalized grocery lists straight to Google Keep or a canvas `🛒 Shopping List` sticky note.
*   🖼️ **Multi-Source Ambient Photo Frames, Calendars & Kiosk Reader**: Stream *Ken Burns*, *Mosaic Collage*, *Scattered Polaroids*, or *Filmstrip* slideshows from **Google Photos shared albums** (tested with 7,500+ photos), **Google Drive shared folders**, **Plex Media Server** (QR PIN auth), local/NAS folders, or 128 curated presets—alongside multi-`webcal://`/`.ics` calendars, Open-Meteo weather, world timezone clocks, and a Mozilla Readability in-app article reader.
*   🐳 **1-Command Docker & 🍓 Raspberry Pi Wall Kiosk**: Self-host the complete PWA and all 7 `/api/*` proxies inside a ~55 MB multi-arch (`linux/amd64` + `linux/arm64`) container (`ghcr.io/genghis1227/ambiently:latest`), or automate an auto-booting Raspberry Pi 4/5 wall kiosk with Scheduled Pixel-Shifting OLED Night Mode, a 4-digit Kid-Proof PIN lock, and a vertical Mobile Companion view.

---

## 📚 Documentation Sections

*   🚀 **[Getting Started](/wiki/ambiently/getting-started/)**: Launching the PWA, navigating and customizing up to 10 corkboard canvases, configuring household profiles, Kid-Proof PIN security, OLED Night Mode, and 3-tier local/cloud persistence.
*   🧠 **[Widgets, Chores & Meal Planner](/wiki/ambiently/widgets-household/)**: Smart sticky notes & shopping lists, multi-source photo frames & animated GIFs, calendars, Open-Meteo weather, Readability RSS reader, family chores & rewards, 7-day meal planner, and Mobile Companion mode.
*   🐳 **[Docker & Raspberry Pi Kiosk](/wiki/ambiently/docker-raspberry-pi/)**: Self-hosting the multi-arch container via Docker Compose, Portainer/Synology/Unraid, `.env` runtime configuration, HTTPS reverse proxies, and building a headless Raspberry Pi kiosk.
*   ⚙️ **[Architecture & Tech Stack](/wiki/ambiently/architecture-tech/)**: Local-first Dexie.js IndexedDB stores, unified Cloudflare Pages & Node 22 proxy endpoints, SSRF protections, 24/7 kiosk rendering optimizations, and AGPLv3 attribution policy.

---

## ✉️ Support & Community
Have questions, feedback, or self-hosting tips? Contact us at **support [at] trinhism.com**, launch the hosted web app at [dashboard.trinhism.com](https://dashboard.trinhism.com), or inspect the source repository at [github.com/Genghis1227/ambiently](https://github.com/Genghis1227/ambiently).
