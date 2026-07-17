+++
title = "Features & Capabilities"
weight = 20
+++

# Features & Capabilities

The Cash Game Bank Engine provides a robust suite of tools to manage home poker games without handling cash or tracking chips manually. 

Here is a technical overview of the engine's core capabilities.

---

## 💳 Zero-Cash Credit Ledger

The engine operates on a local credit balance model, eliminating the need to take cash buy-ins upfront.
*   **Initial Buy-in & Reloads**: Players are issued chips on credit at the table. The app logs every credit transaction dynamically.
*   **Custom Amounts**: Accommodate any arbitrary buy-in value. If a player buys in for $20 and later needs exactly $5.75, you can input that directly rather than restricting them to fixed starting stacks.
*   **Roster Persistence**: Seated players are selected from your Master Roster, saving you from re-typing player names and handles every game.

---

## 🧮 Smart Settlement Routing

The engine includes a custom settlement engine that automatically matches debtors and creditors at the end of the session.
*   **P2P Routing (Greedy Matching)**: Matches players directly to reduce the total number of transactions. The algorithm sorts debtors (most debt first) and creditors (most owed first) and routes payments between them, ensuring clearing occurs in the fewest possible transfers.
*   **Host-Centric Routing**: Consolidates all clearing through the host. Losers pay the host, and the host distributes payments to the winners, making it easy to track clearing in one place.
*   **Floating-point Protection**: Core calculations run with floating-point tolerance fixes, preventing rounding errors at cash-out.

---

## 📱 Prefilled Mobile Payment Integrations

Clear debts instantly using built-in URL builders, QR overlays, and pre-filled copy ledgers.
*   **Pre-filled URL Copy Ledger**: The copyable settlement text generates and appends pre-filled mobile payment URLs (with txn type, amount, and notes) directly next to each debtor instruction, allowing players to pay in one tap.
*   **Player Profile QR Modal**: Hosts can click a QR code icon on any player card in the active game view or master roster to instantly generate and overlay a QR code canvas pointing directly to their Venmo or PayPal profile page, making table-side profile discovery extremely fast.
*   **Dynamic Settlement QR Codes**: End-of-session settlement screens generate HTML canvas-rendered QR codes using `QRious` based on the calculated settlement amounts, letting players scan and clear up directly from the host's screen.
*   **Clickable Roster Links**: Venmo and PayPal handles in the Master Roster are formatted as clickable links, allowing hosts to verify profile details with a single click.

---

## 📊 Live Bank Auditing

To ensure the bank math remains leak-proof, the engine features a persistent auditing strip.
*   **expected vs total cashouts**: The engine continuously checks if `Total Credit Issued` equals `Total Cashed Out` + `Expected Chips on Table`. 
*   **Discrepancy warnings**: If a chip stack is entered incorrectly or players walk away with unaccounted chips, the status strip displays a red warning detailing the exact discrepancy amount.

---

## 💾 Portable Configuration & Local Storage

*   **LocalStorage Syncing**: State mutations auto-save to browser local storage, preventing data loss in the event of an accidental refresh.
*   **Master Backups**: Click **Export Master Data** to download a unified JSON file containing your Master Roster, chip color configurations, and settings. Import this JSON to quickly restore your setup on any other machine.
