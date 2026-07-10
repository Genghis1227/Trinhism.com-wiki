+++
title = "Cash Game Bank Engine"
type = "docdock"
weight = 40
+++

<p align="center">
  <img src="/wiki/images/poker-logo.png" alt="Poker Cash Game Engine Logo" width="120" />
</p>

# Cash Game Bank Engine Hub

Welcome to the **Cash Game Bank Engine** documentation space. The Cash Game Bank Engine is a premium, client-side ledger and settlement engine designed to manage buy-ins, reloads, and end-of-session financial clearing for home cash games.

---

## 💡 What is the Cash Game Bank Engine?

The Cash Game Bank Engine is a single-page, self-contained HTML5 application that manages game states purely in-browser. It is designed around a **Zero-Cash Upfront** (IOU) ledger: instead of collecting physical cash from players at the door, the host issues chip credits digitally. At the end of the night, the engine's settlement protocol calculates the optimal transactions required to clear all debts.

---

## 🌟 Why Use the Cash Game Bank Engine?

Running a home cash game can be chaotic. Tracking who bought in for how much, who reloaded, who cashed out, and calculating the exact peer-to-peer payouts can lead to accounting errors and slow down the end of the night.

*   🔒 **100% Client-Side Privacy**: Roster, session history, and configurations are stored in your browser's local storage. Your financial details never touch a remote database.
*   💳 **Frictionless IOU Model**: Run your game on digital credit. Seated players buy in and reload instantly with a click, avoiding the need to handle cash during the session.
*   💸 **Smart Settlement Routing**: Toggle between **Peer-to-Peer** (minimizes transactions by routing losers to pay winners directly) or **Host-Centric** (all transactions clear through the host).
*   📱 **Pre-filled Payment Links & QRs**: Text copyable settlement logs that contain direct, pre-filled payment links for **Venmo** and **PayPal**, or generate scan-to-pay QR codes directly in the dashboard.
*   📊 **Real-time Discrepancy Auditing**: A live status strip continuously checks that total chips expected on the table matches cash-outs, preventing math leakage.

---

> 💡 **Tip**: Get started quickly by reading the [Getting Started](./getting-started/) guide to set up your master player pool and log your first transaction.

---

## ✉️ Support & Community
Have questions, need help troubleshooting, or want to share feedback? Email us directly at **support [at] trinhism.com**.
