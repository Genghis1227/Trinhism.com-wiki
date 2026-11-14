+++
title = "Docker & Raspberry Pi Kiosk"
weight = 30
+++

# Docker Self-Hosting & Raspberry Pi Kiosk Guide

Ambiently ships a single-command multi-architecture Docker container (`linux/amd64` + `linux/arm64`) alongside an automated **Raspberry Pi 4 / 5 Wall Kiosk** installer. Self-hosting runs the entire PWA and all 7 `/api/*` feed and photo proxies locally on your residential network with zero cloud dependency.

---

## Part 1: Docker & Home Server Self-Hosting (`amd64` & `arm64`)

The official image (`ghcr.io/genghis1227/ambiently:latest`) weighs ~55 MB on `node:22-alpine` and supports x86_64 PCs/NAS boxes as well as ARM64 Raspberry Pi boards and Apple Silicon Macs.

### 1.1 Quick Start with Docker / Docker Compose

**Prerequisites:** Docker Engine `24+` and Docker Compose `v2+`.

```bash
# Option A: Instant 1-liner using pre-built GHCR multi-arch image
docker run -d --name ambiently --restart unless-stopped -p 8080:8080 ghcr.io/genghis1227/ambiently:latest

# Option B: Docker Compose with .env customization
git clone https://github.com/Genghis1227/ambiently.git
cd ambiently
cp .env.example .env
docker compose up -d

# Verify server health
curl http://localhost:8080/api/health
```

Once running, open **`http://localhost:8080`** (or `http://<your-server-ip>:8080` from any tablet or display on your LAN).

**Updating Your Container:**
```bash
cd ambiently
docker compose pull && docker compose up -d
```

### 1.2 Portainer, Synology Container Manager & Unraid Stack

Because pre-built multi-arch images live on GitHub Container Registry, you do not need to clone the repository to deploy on Portainer, Synology, or Unraid:

```yaml
services:
  ambiently:
    image: ghcr.io/genghis1227/ambiently:latest
    container_name: ambiently
    restart: unless-stopped
    ports:
      - "${AMBIENTLY_PORT:-8080}:8080"
    environment:
      - NODE_ENV=production
      - PORT=8080
      - TZ=${TZ:-America/Chicago}
      - SUPABASE_URL=${SUPABASE_URL:-}
      - SUPABASE_ANON_KEY=${SUPABASE_ANON_KEY:-}
      - AMBIENTLY_ALLOW_PRIVATE_FEEDS=${AMBIENTLY_ALLOW_PRIVATE_FEEDS:-false}
    security_opt:
      - no-new-privileges:true
```

### 1.3 Running Bare Node.js (Without Docker)

With Node.js `20.x+` installed, you can compile and run the zero-dependency ESM server bundle directly (e.g., via `systemd` or `pm2`):

```bash
git clone https://github.com/Genghis1227/ambiently.git
cd ambiently
npm ci
npm run build
npm run build:server
PORT=8080 npm start
```

### 1.4 Runtime Environment Variables Reference (`.env`)

All Docker variables inject dynamically at startup via `/config.js`—**no image rebuild required**:

| Variable | Default | Description |
| :--- | :--- | :--- |
| `AMBIENTLY_PORT` | `8080` | Host port mapped to container port `8080` in `compose.yaml`. |
| `PORT` | `8080` | Internal listening port for `server/index.ts`. |
| `HOST` | `0.0.0.0` | Network bind address inside the container or host. |
| `TZ` | `America/Chicago` | Container timezone for logs and date fallbacks. |
| `SUPABASE_URL` | *(empty)* | Optional Supabase project URL injected dynamically into `/config.js` for multi-device Realtime cloud sync. |
| `SUPABASE_ANON_KEY` | *(empty)* | Optional Supabase publishable `anon` key (never expose `service_role`). |
| `AMBIENTLY_ALLOW_PRIVATE_FEEDS` | `false` | Set to `true` **only on trusted home networks** to permit `http://`, RFC1918 LAN (`192.168.x.x`, `10.x.x.x`, `172.16-31.x.x`), Tailscale (`100.64.0.0/10`), and `.local`/`.lan` `.ics`/RSS feeds (Nextcloud, Radicale, FreshRSS, Home Assistant). Loopback (`127.0.0.1`/`localhost`) and cloud metadata (`169.254.169.254`) remain blocked at all times. |

### 1.5 Reverse Proxy & HTTPS (`Secure Context`)

Browser features like **Screen Wake Lock**, **Service Workers (PWA install)**, and the **File System Access API** require a Secure Context (`https://` or `http://localhost`):
* On a Standalone Raspberry Pi opened via `http://localhost:8080`, Chromium treats `localhost` as a Secure Context out of the box.
* For remote tablets connecting across your home LAN (`192.168.x.x`), terminate HTTPS using **Caddy**, **Nginx Proxy Manager**, **Tailscale Serve**, or **Cloudflare Tunnel**:

```caddyfile
dashboard.yourdomain.com {
    reverse_proxy ambiently:8080
}
```

---

## Part 2: Raspberry Pi Wall Kiosk Installer

Turn a **Raspberry Pi 5** or **Raspberry Pi 4** (`2GB+` RAM) running **Raspberry Pi OS (64-bit with Desktop)** into an appliance-grade wall display using [`scripts/pi-kiosk-setup.sh`](https://github.com/Genghis1227/ambiently/blob/main/scripts/pi-kiosk-setup.sh).

### 2.1 Recommended Hardware & OS Preparation
1. **Board Selection**: Use a **Raspberry Pi 5** or **Pi 4 (2GB+)** for **Standalone Mode**, or a **Pi 3B+ / Pi Zero 2 W** in **Kiosk Display Mode** pointing to `dashboard.trinhism.com` or your NAS server. Pair with an `A2`-rated microSD card (or NVMe HAT) and the official USB-C PSU (`27W` for Pi 5, `15W` for Pi 4).
2. **Flash OS**: Using [Raspberry Pi Imager](https://www.raspberrypi.com/software/), select **Raspberry Pi OS (64-bit) with Desktop** *(do not pick Lite—Chromium requires a desktop compositor)*.
3. Configure OS Customisation (Wi-Fi, hostname e.g. `ambiently.local`, timezone, and **Enable SSH**) and ensure **Desktop Auto-Login** is enabled.

### 2.2 Running the Automated Installer

SSH into the Pi (`ssh pi@ambiently.local`) or open a desktop terminal as your regular user (do **not** invoke the script itself with `sudo`):

```bash
git clone https://github.com/Genghis1227/ambiently.git ~/ambiently
cd ~/ambiently

# Interactive setup wizard
bash scripts/pi-kiosk-setup.sh
```

Or deploy directly via CLI flags:

```bash
# Mode A: All-in-One Standalone Pi (installs Docker ARM64, runs server on 8080 + HDMI Kiosk)
bash scripts/pi-kiosk-setup.sh --mode standalone --port 8080

# Mode B: Kiosk Display Only (connects to hosted Ambiently or your home NAS Docker IP)
bash scripts/pi-kiosk-setup.sh --mode kiosk --url https://dashboard.trinhism.com

# Portrait wall-mounted monitor (0, 90, 180, or 270 degrees)
bash scripts/pi-kiosk-setup.sh --mode standalone --rotate 90
```

Reboot (`sudo reboot`) to launch directly into fullscreen Chromium Kiosk.

### 2.3 Installer Modes, Flags & Kiosk Protections

| Flag | Values | Default | Behavior |
| :--- | :--- | :--- | :--- |
| `--mode` | `kiosk` \| `standalone` | *(Interactive)* | `kiosk` connects fullscreen Chromium to an external/LAN URL; `standalone` installs Docker Engine, starts the local ARM64 container (reachable across your LAN at `http://ambiently.local:8080`), waits for `/api/health`, and launches Chromium. |
| `--url` | Any `http://` or `https://` URL | `https://dashboard.trinhism.com` | Target URL when using `--mode kiosk`. |
| `--port` | `1024`–`65535` | `8080` | Local HTTP port for `--mode standalone`. |
| `--rotate` | `0` \| `90` \| `180` \| `270` | `0` | Applies Wayland (`wlr-randr`) or X11 (`xrandr`) display rotation at boot. |
| `--uninstall` | *(None)* | — | Cleanly removes autostart desktop entries and kiosk launcher scripts. |

**Built-in Kiosk Safeguards:**
* Supports Raspberry Pi OS Bookworm **Wayland (`labwc` / `wayfire`)** and **X11 (`LXDE-pi`)** autostart.
* Clears Chromium's `exited_cleanly` and `exit_type` flags before launch so unexpected power outages never leave yellow *"Restore pages?"* popups on screen.
* Disables touchscreen pinch-zoom (`--disable-pinch`) and edge swipe history navigation (`--overscroll-history-navigation=0`), hides the idle mouse cursor (`unclutter`), and turns off OS DPMS screen blanking so Ambiently's OLED Night Mode stays in full control.
* Press **`Alt + F4`** on an attached keyboard to exit kiosk mode back to the Raspberry Pi desktop.

---

## Part 3: Self-Hosting FAQ & Troubleshooting

*   **Why did Google Calendar `HTTP 429` errors stop after switching to Docker?**
    Public serverless hosts share outbound IPs across thousands of sites, occasionally triggering upstream calendar rate limits. Self-hosting fetches `.ics` feeds directly from your residential ISP IP paired with Ambiently's 15-minute SHA-256 cache and `ETag` `304` revalidation.
*   **My Raspberry Pi screen still turns black after 10 minutes on Wayland.**
    Confirm OS screen blanking is disabled in `sudo raspi-config` (**Display Options → Screen Blanking → No**) and reboot.
*   **How do I view Docker server logs or update a Standalone Pi?**
    Check logs with `docker compose logs -f ambiently`, or update in place with `cd ~/ambiently && git pull && sudo docker compose up -d --build`.
