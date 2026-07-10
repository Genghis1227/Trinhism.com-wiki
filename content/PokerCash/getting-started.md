+++
title = "Getting Started"
weight = 10
+++

# Getting Started with the Cash Game Bank Engine

This guide will walk you through launching the Cash Game dashboard, building your player pool, managing active sessions, and settling up at the end of the night.

---

## 1. Accessing the Dashboard

Because the Cash Game Bank Engine is a standalone, client-side web application, you do not need to install any software or configure databases. Simply open the **Trinhism Labs Poker Suite** in your browser and select the **Cash Game Engine** tab.

> 💡 **Tip:** We recommend using a desktop browser (like Chrome or Edge) for the best layout spacing when managing roster transactions and viewing settlement logs.

---

## 2. Managing the Master Roster

Before you start seating players, you must add them to your permanent pool.

1. Navigate to the **Master Roster** tab.
2. Under **Add New Player**, enter the player's name.
3. Select their preferred **Payment Platform** (Venmo, Zelle, PayPal, or Cash).
4. Enter their payment **Handle / Email / Phone** (e.g. `@TonyLTrinh` for Venmo, or email/phone for Zelle).
5. Click **Add Player**. 
6. Once added, their payment handles automatically format as clickable profile links in your roster table for easy reference. You can edit player details at any time by clicking the **pencil icon** next to their row.

---

## 3. Configuring Chip Settings

Make sure the engine's default chip values match your physical chip set.

1. Go to the **Settings** tab.
2. Under **Chip Value Matrix**, customize the denominations assigned to each color (e.g., White=$0.01, Red=$0.05, Green=$0.25, Blue=$0.50, etc.).
3. **Add Custom Chips**: Click **+ Add Custom Chip** to configure any unique colors and values (a color picker is built-in!).
4. Click **Save Matrix** to commit the settings.

---

## 4. Seating & Game Ledger

When players arrive at the table, seat them to open their credit ledger.

1. On the **Active Game** tab, click **Seat Player** next to a player from your Master Roster.
2. Type in their initial buy-in amount (e.g. `$20`) and click **Confirm**.
3. **Reloads**: If a player needs more chips, click the **+ Reload** button on their card, type in the custom reload amount (e.g. `$5`), and confirm. 
4. Every buy-in and reload is logged chronologically in the **Audit Log** tab. Use the manual **Settled** checkbox next to logs to keep track of real money transfers during the session.

---

## 5. End of Night Cash-Out & Settlement

When the game ends, calculate cash-outs to resolve debts.

1. For each player at the table, click **Cash Out** on their active card.
2. Enter the quantities of physical chips they are returning. The cash-out calculator will automatically sum the total value. Click **Confirm**.
3. Navigate to the **Settlement** tab.
4. Select your preferred settlement routing:
   *   **Peer-to-Peer**: Minimizes transactions by matching players who lost money directly to the players who won.
   *   **Host-Centric**: Routes all transactions through the host (losers pay the host, host pays winners).
5. Click **Run Calculation**.
6. **Copy & Text**: Click **Copy Settlement** to copy a copyable ledger. It generates direct, pre-filled payment links next to each instruction (e.g., `-> Pay: https://venmo.com/TonyLTrinh?txn=pay&amount=10.00`). Text this text block directly to your players so they can tap the links and pay instantly!
7. **QR Codes**: Scan-to-pay QR codes for Venmo and PayPal are also rendered dynamically on-screen for any player who needs to pay at the table.
