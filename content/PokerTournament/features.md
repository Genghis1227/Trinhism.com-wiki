+++
title = "Features & Capabilities"
weight = 20
+++

# Features & Capabilities

The Poker Tournament Director is designed to replace clunky spreadsheets and outdated poker clock apps with a single, modern, neon-themed dashboard. 

Here is a breakdown of the core features that make managing your home game effortless.

## 🕒 Precision Tournament Clock
- **Dynamic Blind Updates:** Automatically pulls the duration and blind amounts from your configured schedule.
- **Audio Announcements:** Utilizes the Web Speech API to provide verbal announcements when blind levels increase or breaks occur (e.g., *"Blinds are now 100 and 200"*).
- **Time Warnings:** Plays a distinctive audio chime when there is 1 minute remaining in the current round.
- **Manual Adjustments:** Easily pause, resume, skip rounds, go back a round, or manually inject/remove minutes from the active timer if you need to adjust for unexpected delays.

## 💰 Automated Financial Ledgers
- **Pot Calculation:** Calculates the total pot dynamically in real-time based on the number of initial buy-ins, rebuys, and addons logged in the roster.
- **Rake Management:** Supports configuring a House Rake either as a fixed flat fee or a percentage of the total pot.
- **Dynamic Payouts:** Enter your desired payout structure (e.g., 1st: 50%, 2nd: 30%, 3rd: 20%). The dashboard automatically calculates the exact dollar amount each position wins based on the live prize pool minus the rake.

## 👥 Roster & Player Tracking
- **One-Click Transactions:** Add a player to the roster, and easily log rebuys, addons, or eliminations with dedicated quick-action buttons.
- **Live Averages:** Tracks how many players are remaining vs total entries, and calculates the Average Chip Stack dynamically.
- **Paid Status:** Mark players as "Paid" to keep track of who has settled their buy-ins with the house.

## 🛠️ Flexible Blind & Chip Configuration
- **Custom Schedules:** Build your blind schedule from scratch or edit the default layout. Mix and match blind rounds, standard breaks, and specific "Color Up" breaks.
- **Chip Distribution Builder:** Define the total starting stack size and precisely configure how many chips of each denomination (e.g., $5, $25, $100) equal the starting stack. The dashboard validates the math for you.

## 📤 Save, Export, and Share
- **Portable JSON Configurations:** Once you design the perfect tournament structure for your group, you can click **Export Settings** to save a lightweight JSON file to your computer. 
- **Quick Import:** Before your next game, simply click **Import Settings** and load your JSON file. The dashboard will instantly apply your custom blinds, chip values, payouts, and roster.

## 🎬 Theater Mode & UI
- **Distraction-Free Display:** Theater Mode hides the settings sidebars and configuration panels, maximizing the clock, current/next blinds, and the prize pool. Ideal for casting to a secondary monitor or TV.
- **Premium Glassmorphism Aesthetic:** Designed with a stunning dark mode, glass UI elements, and neon accents to give your home game a professional casino feel.
- **Support & Donation Integration:** Built-in QR codes allow players or users to easily scan and donate via Zelle, Venmo, or PayPal directly from the UI.
