+++
title = "Getting Started"
weight = 10
+++

# Getting Started with Ambiently

This guide covers launching Ambiently as an instant Progressive Web App (PWA), customizing your multi-canvas corkboard workspace, configuring household profiles and kiosk security, and setting up reliable local or cloud backups.

---

## 1. Launching or Installing Ambiently

Choose whichever setup model fits your hardware:

### Option A: Instant Web PWA (Zero Setup)
1. Open **[https://dashboard.trinhism.com](https://dashboard.trinhism.com)** on an iPad, Android tablet, Fire HD, smart display, or desktop browser.
2. Select **Install App** or **Add to Home Screen** in your browser menu.
3. Ambiently launches in fullscreen kiosk mode and boots in `0ms` directly from browser storage (`IndexedDB`)—even if home Wi-Fi temporarily drops.

### Option B: Self-Hosted Docker or Raspberry Pi Kiosk
Prefer hosting everything on your home server, Synology/Unraid NAS, or a wall-mounted Raspberry Pi 4/5?
* Pull `ghcr.io/genghis1227/ambiently:latest` (`linux/amd64` and `linux/arm64`) or run `scripts/pi-kiosk-setup.sh`.
* Follow the full setup manual in **[Docker & Raspberry Pi Kiosk](/wiki/ambiently/docker-raspberry-pi/)**.

---

## 2. Navigating & Customizing Your Corkboard Canvases

Every board in Ambiently operates as a freeform interactive corkboard where Live Widgets and Sticky Notes share normalized coordinates.

### Multi-Tab Navigation Dock & Carousel
*   **4-Edge Dock Placement**: Anchor the glassmorphic Navigation Dock to the **Left, Right, Top, or Bottom** edge of your display in Settings.
*   **Keyboard Shortcuts**: Press **`1`–`9`** or **`0`** to jump directly to Canvases 1–10, and press **`\`** (Backslash) to toggle hiding or showing the toolbar.
*   **Compact Horizontal Pop-Out Panels**: Secondary actions stay uncluttered inside expandable horizontal pop-out bars so controls never clip on smaller screens:
    *   **`+` Add Menu**: Create a **New Sticky Note**, **Add Widget Tile**, or **Create New Canvas**.
    *   **Auto-Organize (`Wand2`)**: Arrange tiles cleanly with one click (with **Undo Layout** support).
    *   **Quick Utilities**: Access **Night Mode**, **Fullscreen**, **Refresh / Apply Update**, **Hide Toolbar**, and the **Quick Start Tour** right next to the **Settings / Lock** button.
*   **Automated Tab Carousel**: Configure automatic canvas rotation intervals (`15s`, `30s`, `45s`, `1m`, `2m`) for passive wall displays. Touching or clicking anywhere on the screen temporarily pauses the carousel for 20 seconds.

### Creating Boards & Per-Canvas Themes
*   Create up to **10 independent boards** (e.g., *Morning Briefing*, *Family Board*, *Photo Gallery*) with **30 selectable Lucide icons**, `▲`/`▼` tab reordering, and a selectable **Default Home Board** badge.
*   Customize each board independently with presets—**Midnight Slate Dots**, **Warm Tactile Cork**, **OLED Pitch Black**, **Nordic Aurora**, or **Architect Blueprint Grid**—or upload a **Custom 4K Local Wallpaper** (`3840×2160`) stored offline in IndexedDB and tune its dark contrast veil from **`0%` to `90%`**.

### Freeform Pinboard Controls & Auto-Organize
*   **Move, Resize & Rotate**: Drag any tile freely, resize via its bottom-right grip handle (`↘`), rotate smoothly via the top-center handle (`↻`, with a live degree readout, magnetic snap to `0°` within `±2.5°`, and double-click to straighten), or click **Maximize (`⛶`)** to expand a tile to 100% of the canvas.
*   **Blank-Canvas Context Menu**: Right-click any open canvas area to quickly **Add Single Photo / GIF**, create a **New Sticky Note**, or **Add Widget Tile**.
*   **Frameless Sticker Mode**: Toggle **Sticker / No Outline Mode** per widget (across *Clock*, *World Clock*, *Clock & Weather*, *Weather*, *Countdown*, *Daily Quotes*, *Photo Frame*, and *Text Box*), or set a global **Default Widget Style** (*Auto*, *Sticker / No Outline*, or *With Borders*) in **Settings → Display & Kiosk**.
*   **3 Auto-Organize Modes**: Click the **Auto-Organize** wand to reflow overlapping items using **Smart Bento Grid**, **Keep Sizes & Pack**, or **Split Zones** (Live Widgets on the left 63%, Sticky Notes neatly columned on the right 31%), or use **Undo** to revert to your manual layout.

---

## 3. Household Profiles, Kiosk Security & Night Mode

### Global Household Profiles
Under **Settings → Household**, add `Parent` and `Kid` profiles shared across the Chore Engine and Meal Planner:
*   Assign calm low-arousal profile colors and preset Lucide icons or custom keyboard emojis.
*   **Universal Avatar Uploads**: Upload device photos—including iOS 17/18 **`.HEIC` / `.HEIF`** photos decoded client-side via `libheif-js`—and frame them using the interactive circular cropper (pan, `1×`–`3×` zoom, `90°` rotation), automatically exported as crisp `256×256` WebP avatars.

### Kid-Proof 4-Digit PIN Lock
*   Protect wall tablets from accidental edits by enabling a **SHA-256 hashed 4-digit PIN** (requiring double-entry confirmation when setting or changing so masked digits cannot be mistyped).
*   When active, dragging/editing widgets is locked and opening **Settings**, **Household Sharing**, **Parent Chore Drawer**, or **Plex Pairing** prompts for the PIN (re-locking automatically upon exit).
*   Device-local PINs stay isolated from Cloud Sync payloads. If signed into Cloud Sync and a PIN is forgotten, use **Forgot PIN?** to recover access via a verification code emailed to your signed-in account.

### Hardware Polish: Wake Lock, Density Scaling & Night Mode
*   **Screen Wake Lock API**: Keeps dedicated tablets and wall screens awake continuously.
*   **Canvas Display Density**: Scale board tiles independently (`75%`, `100%`, `125%`, `150%`) to fit 1080p tablets, 1440p monitors, or 4K TVs while keeping the Navigation Dock and Settings modals at sharp 100% viewport scale.
*   **Scheduled Night Mode**: Configure automatic evening dim and morning wake schedules (e.g., `22:00` – `07:00`), or disable **Automatic Night Schedule** to trigger Night Mode manually:
    *   **OLED Clock Mode**: Pitch-black `#000000` background with a subtle dim red clock that shifts position (`±15px`) every 60 seconds to prevent OLED/LCD image retention while suspending background photo timers and animated media loops.
    *   **Dim Overlay Mode**: Adjustable contrast veil (`40%`–`95%`). Tap anywhere on the display to wake immediately.

---

## 4. 3-Tier Persistence, PC Auto-Sync & Cloud Sync

Ambiently guarantees you never lose layouts, notes, chores, or meal plans:

1.  **Tier 1 — Primary Browser Storage (`IndexedDB` via Dexie.js)**: Every change saves immediately to `AmbientlyDB` inside your browser. Zero network connection or external account is required.
2.  **Tier 2 — Real-Time PC Auto-Sync & `.json` Snapshots**:
    *   On Chromium desktop browsers, click **PC Auto-Sync** in **Settings → Backup & System** to bind an `ambiently-data.json` file on your local drive via the File System Access API.
    *   Ambiently stores the handle in IndexedDB, writes debounced snapshots whenever your board changes, and silently re-verifies permissions on reload (or offers 1-click **Reconnect Auto-Sync**).
    *   Saving `ambiently-data.json` inside **Dropbox, Google Drive, OneDrive, Nextcloud, or Synology Drive** automatically replicates your dashboard across computers via your desktop sync client.
    *   On Safari, Firefox, iOS, and Android, use 1-click **Export Backup** and **Restore from File** for portable `.json` archives.
3.  **Tier 3 — Optional Cloud Sync (`Supabase`)**: Sign in via passwordless email code/magic link in **Settings → Backup & System** to enable live multi-device WebSocket sync and **Household Email Invitations**.
