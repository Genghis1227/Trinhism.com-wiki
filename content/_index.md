+++
title = "Wiki Main Hub Page"
type = "docdock"
+++

# Trinhism Wiki Hub

Welcome to the central documentation hub for **Trinhism** software applications. This wiki contains comprehensive technical specifications, setup workflows, and operational guides designed to help you configure, integrate, and master your financial utilities, lifestyle platforms, and interactive applications.

Use the sidebar navigation or the quick links below to explore the documentation.

---

<p align="center">
  <img src="/wiki/images/quickcatch-logo.png" alt="QuickCatch Logo" width="100" />
</p>

## QuickCatch
**QuickCatch** is an automated Android companion application that bridges the gap between transaction swiping and budgeting. By listening to incoming push notifications and emails from major financial institutions, it parses transaction details locally and instantly updates your You Need A Budget (YNAB) ledger via the official YNAB API.

*   🚀 **[Getting Started](/wiki/quickcatch/getting-started/)**: Prerequisites, notification access configuration, and YNAB OAuth authorization steps.
*   ⚙️ **[Core Concepts & Integrations](/wiki/quickcatch/core-concepts/)**: The background sync workflow, Room DB design, and YNAB connectivity specifications.
*   🧠 **[Key Features & Settings](/wiki/quickcatch/features-settings/)**: Sanitizing payee names, setting up Venmo/Zelle filters, and background battery bypass optimization.
*   🔍 **[Troubleshooting & FAQ](/wiki/quickcatch/troubleshooting-faq/)**: Quick fixes for API authentication errors, missed notification alerts, and general FAQs.

---

<p align="center">
  <img src="/wiki/images/financewidget-logo.png" alt="FinanceWidget Logo" width="100" />
</p>

## FinanceWidget
**FinanceWidget** is a lightweight, borderless Windows desktop widget runtime designed to display real-time stock, ETF, and portfolio charts. By injecting custom CSS and coordinate-based DOM cleanups into WebView2 sandboxes, it isolates stock details from Google Finance to render a clean visual overlay on your workspace.

*   🚀 **[Getting Started](/wiki/financewidget/getting-started/)**: WebView2 prerequisites, system tray controller guide, and adding ticker parameters.
*   ⚙️ **[Core Concepts & Layouts](/wiki/financewidget/core-concepts/)**: WebView2 DOM scripts, local state serialization (`appsettings.json`), and dividend portfolio setups.
*   🎨 **[Customization & Modules](/wiki/financewidget/customization-modules/)**: Borderless HUD toggle, bulk transaction CSV importing, and debt snowball visual charts.
*   🔍 **[Troubleshooting & FAQ](/wiki/financewidget/troubleshooting-faq/)**: Recovery steps for frozen charts, broken tickers, config corruption, and startup launch settings.

---

## 401(k) Optimizer
**401(k) Optimizer** is a high-precision, client-side financial calibration engine designed to help employees max out their annual IRS elective deferral limits without forfeiting per-paycheck company match under non-true-up employer plans.

*   🚀 **[Getting Started](/wiki/401k/getting-started/)**: Parameter setup, IRS federal limits, SECURE 2.0 catch-ups, and running calibrations.
*   ⚙️ **[Core Mathematical Concepts](/wiki/401k/core-concepts/)**: Match forfeiture mechanics, the 4-Phase Strategy, and zero-shortfall whole-integer step-up math.
*   🧠 **[Features & Strategy Options](/wiki/401k/features-strategies/)**: Option 1 Match Protector vs Option 2 Exact Decimal Glide, Custom Pace benchmarks, and JSON export/import.
*   🔍 **[Troubleshooting & FAQ](/wiki/401k/troubleshooting-faq/)**: Handling mid-year raises, bonus timing windows, true-up rules, and data privacy.

---

<p align="center">
  <img src="/wiki/images/curatedlists-logo.png" alt="CuratedLists Logo" width="100" />
</p>

## CuratedLists
**CuratedLists** is an opinionated, high-performance web platform designed for connoisseurs to methodically evaluate, rank, and archive artisanal items—from specialty coffee and single-malt whiskies to craft hot sauces, wines, and EDC gear.

*   🚀 **[Getting Started](/wiki/curatedlists/getting-started/)**: Account setup, vanity handles (`@username`), choosing roster archetypes (Curated Showcases vs Ranked Tier Boards), and item ingestion.
*   🧠 **[Features & Sensory Capabilities](/wiki/curatedlists/features-rosters/)**: Sensory spider radar geometry, real-time collaborative blind tasting rooms, crowdsourced community commons, barcode scanner, and URL scrapers.
*   ⚙️ **[Architecture & Technology Stack](/wiki/curatedlists/architecture-tech/)**: Next.js 15 App Router, React 19, Cloudflare Pages Edge Runtime, Supabase PostgreSQL, Upstash Redis caching, and Tailwind CSS 4 dual themes.

---

## 🎮 Trivia Arena
**Trivia Arena** is a premium, broadcast-grade, self-contained Trivia Gameshow Arena for living-room TV casting, corporate events, and competitive game nights. Live questions are generated automatically via Trinhism Cloud AI powered by **Google Gemini** (no API key required), backed by an extensive **300+ question verified offline deck** and a dynamic game duration estimator.

*   🚀 **[Getting Started](/wiki/triviaarena/getting-started/)**: Setup walkthrough, configuring 2–6 team rosters, selecting board modes (Jeopardy Grid vs Gauntlet), and calibrating match duration.
*   🧠 **[Gameplay Mechanics & Host Guide](/wiki/triviaarena/gameplay-mechanics/)**: Board selection, turn countdowns, the 50% steal mechanic, streak multipliers, synthesized Web Audio FX, keyboard hotkeys, and podium analytics.
*   🤖 **[AI Integration & Architecture](/wiki/triviaarena/ai-providers/)**: How Trinhism Cloud AI automatically powers Gemini out of the box, the 300+ question offline deck, and optional BYOK key setup (Groq, OpenAI, Ollama).

---

## ✉️ Support & Inquiries
For technical support, reporting bug behaviors, or requesting feature whitelists, please reach out to the appropriate contact:
*   **QuickCatch Inquiries**: contact **quickcatch [at] trinhism.com** or join the [QuickCatch Google Group](https://groups.google.com/g/quickcatch) for discussions and support.
*   **General Support & Inquiries**: **support [at] trinhism.com**
