+++
title = "Widgets, Chores & Meal Planner"
weight = 20
+++

# Widgets, Sticky Notes, Chores & Meal Planner

Ambiently combines modular glanceable widgets, rich media frames, smart corkboard notes, and household organization engines into a cohesive kiosk interface—plus a responsive vertical companion on smartphones.

---

## 1. Smart Sticky Notes, Checklists & Shopping Lists

Each canvas maintains isolated sticky notes by default (or you can pin global reminders across every board with **📌 Pin to All Canvases**):

*   **3 Note Formats**:
    *   **Text Note**: Freeform memo pad with auto-wrapping typography.
    *   **Checklist**: Interactive to-do items with live strikethrough completion.
    *   **🛒 Shopping List**: Automatically organizes unchecked items by grocery store aisle (*🥬 Produce*, *🥩 Meat & Seafood*, *🥛 Dairy & Eggs*, *🥖 Bakery & Bread*, *🥫 Pantry & Dry Goods*, *🧊 Frozen*, *🧴 Household*, and *📦 Other*), includes an inline `+ Add grocery item...` field directly on the note face, and provides a 1-tap `Clear (X)` button for checked items.
*   **Visual Customization & Inline Editing**: Double-click (or click `✏️`) on any note to edit text, checklist rows, **6 pastel colors** (Amber Yellow, Emerald Green, Sky Blue, Rose Pink, Lavender Purple, Warm Peach), **4 font scales** (`S`, `M`, `L`, `XL`), board assignment, or expiration timers without losing canvas position or tilt angle. Notes resize smoothly from tiny `8%` label tags up to `100%` posters.
*   **Close vs. Delete & Collision-Aware Pinning**: Clicking `✕` on a floating sticky note unpins it cleanly from the corkboard while preserving it inside the **Sticky Notes Tile**. Clicking **`📌 Pin to Board`** automatically unhides notes, elevates `zIndex`, avoids covering existing widgets, and highlights the note with a 2.5-second pop-out ring.
*   **Expirations, Smart Duplication & Trash Drawer**: Schedule notes as **Permanent**, **24 Hours**, **3 Days**, or a **Custom Date/Time**. Notes within 12 hours of expiration show an amber warning border; duplicating a timed note preserves time-of-day while offering `+1d`, `+1w`, `Same`, and `Edit` time shifts; expired or deleted notes move to the **Trash / Archive Drawer** for 1-click restore or permanent removal.

---

## 2. Multi-Source Ambient Photo Frame & Animated Media

Configure photo libraries inside **Tile Configuration (`⚙️`)** so the frame itself stays clean and collision-free on the wall:

*   **4 Visual Display Styles**:
    1.  **Ken Burns**: Smooth edge-to-edge crossfades with continuous pan-and-zoom motion.
    2.  **Mosaic / Collage Grid**: 4-quadrant multi-photo showcase.
    3.  **Scattered Polaroids**: Angled photo prints with configurable density (`6`, `12`, `18`, `24`, `32` / Fill) and sizing (*Random* or *Uniform*).
    4.  **Scrolling Filmstrip**: Horizontal interactive photo ribbon.
*   **5 Photo Sources**:
    *   **Google Photos Shared Albums**: Paste any public `photos.app.goo.gl` or `photos.google.com/share` link—our `/api/gphotos` RPC paginator resolves massive shared libraries (tested with **7,500+ photos**).
    *   **Google Drive Shared Folders**: Stream high-resolution images (`=w1920-h1080`) from public `drive.google.com/drive/folders/...` links via `/api/gdrive`.
    *   **Local PC & NAS Multi-Folder Stacking**: Select multiple local or mapped network folders using the File System Access API with 8-level recursive scanning and configurable scan limits (`1k`, `2.5k`, `5k`, `10k`).
    *   **Plex Media Server**: Scan a 1-step QR code / 4-digit Plex PIN flow (`app.plex.tv/auth`) to auto-discover your server and stream local photo libraries.
    *   **Curated Scenery Presets**: 128 pre-cached photos across 8 themed collections (*National Parks*, *Coasts & Oceans*, *Deep Woods*, *NASA Cosmos*, *Classic Art*, *Urban Nights*, *Cozy Cabin*, *Zen Minimalism*).
*   **Board-Shared vs. Tile-Specific Scope & Auto-Rescan**: Each photo tile can follow the **Shared Board Library** or run independently (**This Tile Only**). Linked Google Photos, Google Drive, and Plex libraries automatically rescan on a configurable schedule (*Daily 24h* default, *Weekly 7d*, or *Manual Only*, with a 15-minute cooldown on manual **Rescan Now** actions).
*   **Animated GIFs, Stickers & Picture Tiles (`ImageWidget`)**: Pin transparent stickers, GIPHY animations, or local image uploads (`vault://local-media:*`) with full 360° tilt. Opaque GIFs play smoothly as hardware-accelerated muted MP4 loops while transparent stickers render as animated WebP—automatically suspending playback during OLED Night Mode or hidden browser tabs.

---

## 3. Glanceable Widgets & In-App Kiosk Reader

*   **Clocks, World Timezone & Weather**: Switch between **Digital**, **Minimalist**, and **Analog Dial** faces with a universal **Display Seconds** toggle. Add a city-lookup **World Timezone Clock** (single-city hero view or multi-city board with day/night indicators and hour offsets). Weather tiles use the **Open-Meteo API** (zero API key needed) with city geocoding lookup and `°F`/`°C` switching.
*   **Multi-Source Calendar**: Switch between **Chronological Agenda** and **Monthly Calendar Grid**. Combine multiple color-tagged `.ics` and `webcal://` feeds (Google Calendar, Apple iCloud, Outlook, Nextcloud) parsed via `/api/ical`, with a built-in US Holidays fallback.
*   **RSS News Ticker & Distraction-Free Kiosk Reader**: Pick from **26 live-verified curated feeds** across 6 categories (*Featured*, *News*, *Tech*, *Science*, *Lifestyle*, *Sports & Finance*) or paste any RSS 2.0 / Atom URL. Tapping a headline opens the clean **In-App Article Reader (`/api/reader`)** powered by Mozilla Readability and Linkedom, with 1-click toggle to **Web Preview (`/api/web-proxy`)** so users never get stuck outside kiosk mode.
*   **Ambient Streams, Countdowns, Quotes & Text Banners**: Embed presets (*Lofi Hip Hop Radio*, *4K Cozy Fireplace*, *NASA ISS Live Earth View*, *Windy Weather Radar*) or custom YouTube/web embeds with quick mute/reload controls; count down to trips and birthdays; rotate custom family affirmations or curated quotes (`30s` to `Daily`); or pin custom **Text Banners**.

---

## 4. Family Chore & Reward Engine

Run chores seamlessly from a compact Bento tile or click **Maximize (`⛶`)** (or enable *Full-Screen Hub on Canvas*) to open the 3-column **Full-Screen Chore & Reward Hub**:

*   **7 Scheduling Cadences**: *Daily*, *Weekdays (Mon–Fri)*, *Weekends (Sat–Sun)*, *Weekly — Any Day (1× / Week)*, *Weekly (Specific Days)*, *Interval (Every N Days)*, and *One-Off Bounty*.
*   **Multi-Member Assignment & Shared Splits**: Assign chores to multiple children or parents (parent-only completions auto-approve immediately), duplicate existing tasks with `Copy`, or open shared tasks for interactive whole-number point splitting.
*   **Same-Day Skip, 24-Hour Grace Rollover & Vacation Mode**: Tap **Skip** on non-applicable recurring tasks (e.g., *Homework* on a school break) to clear them with a **Skipped • 0 pts** badge and same-day **Undo** until midnight without touching point balances. Unfinished tasks roll over for 24 hours with configurable overdue point policies (`100%`, `50%`, `0%`, or custom %), manual dismiss, and automatic 24-hour expiration. Enable **Vacation Mode** to freeze rollovers and penalties while traveling.
*   **Immutable Audit Ledger, Wishlist Store & Trophy Case**: Spendable balances and lifetime totals are calculated strictly from an append-only ledger (`chore_completion`, `reward_redemption`, `manual_adjustment`, `reversion`). Kids propose wishlist items (auto-scraping product title, image, and price via `/api/metadata`), filter requests in the **Proposals Tray**, and redeem prizes priced behind the 4-digit Parent PIN (via a configurable `Points per $1.00` ratio)—archiving fulfilled prizes into each child's permanent **Trophy Case**.

---

## 5. Family Meal Planner, Recipe Scraper & Cooking Mode

*   **Flexible Calendar Scopes & 1-Tap Cook Picker**: View **Tomorrow**, **3-Day**, or **Full Week (7-Day)** schedules across *Breakfast*, *Lunch*, *Dinner*, and *Snack* slots. Jump to any date via the **Month Calendar Popover**, assign household cooks in 1 tap from the **Household Profile Strip**, and rely on automatic 21-day pruning of past calendar entries (while preserving your saved **Recipe Book**).
*   **Quick-Meal Autocomplete & Recipe URL Scraper**: Pick from recent autocomplete pills or paste any recipe blog URL to extract Schema.org `Recipe` JSON-LD ingredients, directions, prep/cook times, servings, and photos via `/api/metadata`.
*   **Hands-Free Kitchen Cooking Mode**: Open any recipe for a high-contrast, touch-friendly cooking view with interactive ingredient checkboxes, step progress tracking, and automatic **Screen Wake Lock**.
*   **Smart Grocery Aggregator**: Automatically combines and converts compatible units (`tbsp`, `tsp`, `cup`) across your active meal window, groups items by grocery store aisle, exports to **Google Keep**, or pushes directly into a **`🛒 Shopping List`** sticky note on your board.

---

## 6. Mobile Companion Mode (`< 768px`)

When accessed from a smartphone screen (`< 768px`), Ambiently automatically switches to the **Mobile Companion** vertical stream:
*   Renders live preview cards for every widget on the selected board with smooth `100dvh` momentum touch scrolling (`touch-action: pan-y`).
*   Includes persistent filter pills (**`All Tiles` | `Widgets` | `Notes & Tasks`**), remote board tab switching, inline note/checklist editing (`✏️`, `+ Add item`), `+ Add Tile`, and independent **`▲` / `▼` mobile ordering** (`mobileOrder`) that never rearranges your desktop or wall display layout.
