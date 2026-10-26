+++
title = "Architecture & Tech Stack"
weight = 30
+++

# Architecture & Technology Stack

CuratedLists is built on modern web standards with an edge-first, cloud-native architecture prioritizing sub-millisecond response times, robust edge security, and responsive sensory graphics.

---

## 🛠️ Technology Stack Overview

| Layer | Technology | Role & Implementation |
| :--- | :--- | :--- |
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router) + [React 19](https://react.dev/) | React Server Components (RSC), Server Actions for mutation workflows, and dynamic client islands for sensory radars. |
| **Hosting & Runtime** | [Cloudflare Pages](https://pages.cloudflare.com/) (`@cloudflare/next-on-pages`) | 100% global Edge Runtime deployment (`export const runtime = 'edge'`). Zero cold-starts and sub-30ms TTFB worldwide. |
| **Database & Auth** | [Supabase](https://supabase.com/) | Managed PostgreSQL with Row-Level Security (RLS) policies, `@supabase/ssr` authentication, and Supabase Storage buckets for avatar & contender photos. |
| **Distributed Caching** | [Upstash Redis](https://upstash.com/) | Serverless Redis over HTTP REST API. Powers L1 barcode resolution cache, OpenGraph URL caches, and sub-millisecond leaderboard aggregations. |
| **Styling & Design System** | [Tailwind CSS 4](https://tailwindcss.com/) + `next-themes` | Semantic CSS token architecture supporting dual themes: **Editorial Light** (warm Michelin parchment) and **Sommelier Dark** (warm espresso charcoal + amber honey). |
| **Platform Bridges** | Custom Web APIs | Universal HTML5 camera barcode scanner (`BarcodeDetector` API with polyfill), canvas image compression, and device vibration haptics bridge. |

---

## 🛡️ Security & Edge Resilience

### 1. SSRF Mitigation Pipeline
When scraping external metadata URLs, the backend edge function executes rigorous IP boundary checks:
* Rejects hostnames resolving to private IP ranges (`10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`).
* Disallows loopback targets (`127.0.0.1`, `::1`) and link-local addresses.
* Blocks Cloud metadata endpoints (`169.254.169.254`).

### 2. Client-Side Image Pre-Processing
Contender and profile avatar uploads never send raw multi-megabyte JPEG/PNG files to the cloud:
* Images are drawn onto an offscreen HTML5 `<canvas>`.
* Resized and compressed down to max 512×512 WebP directly in the user's browser.
* Preserves cloud storage bandwidth and eliminates server-side processing overhead.

### 3. Row-Level Security (RLS)
PostgreSQL tables enforce strict database-level isolation:
* Public rosters and community tier boards are globally readable.
* Private tasting diaries and draft evaluations can only be selected, inserted, or updated by the verified `auth.uid()` of the roster owner.

---

## 📂 Source Code Repository Structure

The full source repository is maintained at [`github.com/Genghis1227/curatedlists`](https://github.com/Genghis1227/curatedlists):

```text
curatedlists/
├── src/
│   ├── app/
│   │   ├── (dashboard)/
│   │   │   ├── roster/               # Roster management & rating views
│   │   │   ├── settings/profile/     # User profile customization & email settings
│   │   │   └── u/[username]/         # Vanity profile & roster routes (@username)
│   │   ├── api/barcode/[code]/       # 3-tier barcode resolution endpoint
│   │   ├── api/metadata/parse-url/   # SSRF-guarded OpenGraph scraper
│   │   ├── api/leaderboard/          # Redis-cached leaderboard aggregations
│   │   ├── tasting/[code]/           # Collaborative tasting room & blind reveal arena
│   │   ├── community/[slug]/         # Crowdsourced Community Commons boards
│   │   ├── auth/callback/            # Supabase OAuth & magic link callback handler
│   │   ├── login/                    # Authentication page
│   │   └── page.tsx                  # Public landing showcase
│   ├── components/
│   │   ├── items/                    # Contender drawers, radar polygons, & rating cards
│   │   ├── navigation/               # Top header, branding, and UserNav menu
│   │   ├── profile/                  # Avatar upload & canvas compression
│   │   ├── rosters/                  # Roster creation modals & tier boards
│   │   └── scanner/                  # Camera barcode scanner & resolution modals
│   ├── lib/
│   │   ├── actions/                  # Server Actions (items, rosters, profile)
│   │   ├── supabase/                 # Supabase client, server, and middleware helpers
│   │   └── upstash/                  # Redis client connection
│   └── platform/
│       ├── haptics/                  # Device vibration & haptics bridge
│       └── scanner/                  # Universal barcode camera controller
```
