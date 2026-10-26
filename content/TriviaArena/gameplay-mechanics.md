+++
title = "Gameplay & Mechanics"
weight = 20
+++

# Gameplay Mechanics & Host Guide

Trivia Arena is engineered for maximum energy, tight competition, and effortless host moderation. This guide details the game loop, scoring rules, steal mechanics, hotkeys, and podium analytics.

---

## 🎯 The Active Board Loop

When playing in **Grid Board** mode:

1. **Board Navigation**: The board displays your categories across columns and point tiles ($100, $200, $300, $400, $500) down each row.
2. **Current Turn Indicator**: The team whose turn it is to pick is illuminated with a prominent glowing badge and audio prompt.
3. **Tile Selection**: The active team picks any unclaimed tile. Higher point values trigger harder question prompts with steeper difficulty curves.
4. **Question Modal Reveal**: The board dims, opening a broadcast-grade question card displaying:
   * The active Category & Point Stake.
   * The question stem in high-legibility bold typography.
   * Four multiple-choice options (`A`, `B`, `C`, `D`).
   * A visual shrinking countdown progress bar.

---

## ⏱️ Turn Timer & Deliberation

* **Countdown Pacing**: A configurable timer (default: 20 seconds) counts down with rhythmic synthesized audio clicks.
* **Warning Urgency**: When the timer reaches the final 5 seconds, the progress bar pulses amber and red, and audio ticks accelerate to signal impending expiration.
* **Answering**: The host or active team clicks the desired option, or taps the corresponding keyboard number (`1`–`4`) or letter (`A`–`D`).

---

## ⚡ The 50% Steal Mechanic

If the active team selects the incorrect option or runs out of time:

1. **Steal Window Activation**: The question card transitions into **STEAL MODE**.
2. **Half-Value Stakes**: Opposing teams can claim **50% of the original question value** (e.g., $150 on a $300 tile).
3. **Turn Rotation or Free-For-All**: The host can call upon the team that buzzed in first, or follow the natural turn order rotation.
4. **Passing the Steal**: If no opposing team wishes to risk an answer, press **`S`** on the keyboard (or click **Pass Steal**) to dismiss the question and return to the main board with zero point penalty.

---

## 📈 Streaks & MVP Metrics

Trivia Arena rewards consistent accuracy through real-time streak multipliers and tracking:

* **Answer Streaks**: Consecutive correct answers build a team's multiplier streak badge (e.g., `🔥 3 Streak`).
* **Fastest Reflex Tracker**: Measures response speed in milliseconds from the moment the question finishes rendering to the moment a selection is submitted.
* **Steal Count**: Tracks how many times each team successfully intercepted points from opposing misses.

---

## 🔊 Synthesized Web Audio Engine

Trivia Arena does not rely on external MP3 audio files that can fail to load or buffer over slow Wi-Fi. Instead, it utilizes the native browser **Web Audio API** to procedurally synthesize rich waveforms:

* **Clock Ticks**: Micro-frequency percussion blips during the countdown.
* **Correct Ding**: Multi-tone harmonic chime when submitting a winning answer.
* **Buzzer Buzz**: Low-frequency sawtooth wave on incorrect answers or timeouts.
* **Steal Klaxon**: Rapid dual-tone warning when a question becomes available for steal.
* **Podium Fanfare**: Arpeggiated victory theme celebrating the champion team.
* **Audio Mute Hotkey**: Press **`M`** at any point to instantly mute or restore sound effects.

---

## ⌨️ Game Show Host Hotkey Reference

Hosts can run the entire show effortlessly from their keyboard:

| Key | Action | Context |
| :--- | :--- | :--- |
| **`1`** or **`A`** | Select Option A | Active Question / Steal Mode |
| **`2`** or **`B`** | Select Option B | Active Question / Steal Mode |
| **`3`** or **`C`** | Select Option C | Active Question / Steal Mode |
| **`4`** or **`D`** | Select Option D | Active Question / Steal Mode |
| **`S`** | Pass / Dismiss Steal Window | Active Steal Mode |
| **`M`** | Toggle Sound On / Off | Everywhere |
| **`Space`** | Advance / Dismiss Summary Modal | Post-Question Result |
| **`Escape`** | Close current modal / Exit to Board | Modals |
| **`F11`** | Toggle Fullscreen Mode | Everywhere |

---

## 🏆 End-of-Game Podium & Comprehensive Audit Log

When the final tile on the board is cleared:

1. **Podium Reveal**: Confetti particles explode as the 1st, 2nd, and 3rd place teams take the Gold, Silver, and Bronze pedestal steps with their final scores.
2. **Superlative MVP Awards**:
   * 🔥 **Highest Streak**: The team with the longest unbroken streak of correct answers.
   * 🥷 **Master Thief**: The team that executed the most successful steals.
   * ⚡ **Quickest Reflex**: The team with the fastest recorded single-question response time (e.g., `1,420 ms`).
3. **Full Question Audit Ledger**: A transparent, searchable history table documenting every question asked, the category, the answering team, whether it was a steal, and points awarded.
