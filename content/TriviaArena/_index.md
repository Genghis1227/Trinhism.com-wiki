+++
title = "Trivia Arena"
type = "docdock"
weight = 60
+++

# 🎮 Trivia Arena Documentation Hub

Welcome to the **Trivia Arena** documentation space. Trivia Arena is a premium, broadcast-grade, self-contained Trivia Gameshow Arena designed for living-room TV casting, corporate events, and competitive game nights.

---

## 💡 What is Trivia Arena?

Hosted in Trinhism Labs at [`/app/trivia/`](https://trinhism.com/app/trivia/), Trivia Arena transforms your web browser into an interactive gameshow studio. It combines real-time turn pacing for 2 to 6 teams, classic 6×5 Jeopardy-style matrix grid boards, a dynamic game duration estimator, procedural sound effects, and live AI question generation.

Crucially, Trivia Arena operates on a **100% Client-Side / Zero Database Architecture**: all game states, team rosters, categories, and match history run in-memory and persist seamlessly to your browser's `localStorage`. You can jump in and play immediately without setting up accounts or remote databases.

---

## 🌟 Why Use Trivia Arena? (Value Proposition)

Most web-based trivia tools are either locked behind monthly subscriptions, require every player to install a dedicated mobile app, or feature stale static question decks. Trivia Arena offers:

*   🤖 **Automatically Provided Google Gemini AI**: Live, infinite trivia question generation is powered automatically out-of-the-box via Trinhism's dedicated Cloud AI backend (`/api/trivia` on Cloudflare Pages) using **Google Gemini**. **No API key, signup, or configuration is required**—it works instantly for all players 100% free!
*   ⚡ **Extensive Offline Deck (300+ Verified Questions)**: Includes a built-in offline bank of **over 300 verified trivia questions** spanning tech history, pop culture, cinema, world geography, culinary arts, science, and family/kids packs. You can launch full matches without an internet connection or external API dependency.
*   🛠️ **Power User BYOK (Bring Your Own Key)**: While Gemini is automatically provided for free, power users can optionally connect their own keys for alternative models, including **Groq Cloud** (blazing fast Llama 3), **OpenAI** (GPT-4o-mini), **OpenRouter**, or self-hosted local **Ollama** instances.
*   ⏱️ **Dynamic Game Duration Estimator**: Never run out of time at a game night. As you adjust team counts, questions per round, turn timers, and steal windows, the engine calculates and displays the exact projected match duration in real-time.
*   👥 **Multi-Team Turn Rotations**: Supports up to 6 custom teams with distinct neon color themes (Cyan, Rose, Amber, Emerald, Violet, Orange), active streak trackers, and buzzer reflex records.
*   🎯 **50% Steal Mechanic**: If the active team misses a question, an urgent Steal Window opens for opposing teams to steal half the points, keeping all players engaged on every turn.
*   🔊 **Synthesized Web Audio Engine**: Generates procedurally synthesized sound effects (clock ticks, buzzers, victory chimes, fanfare) directly using the browser's Web Audio API—no audio files to download or stream.
*   ⌨️ **Full Keyboard Shortcuts**: Play like a professional game show host using single-key hotkeys (1–4, A–D, Space, S to pass steal, M to mute).
*   💾 **Portable JSON Roster Export/Import**: Save and share custom categories, team configurations, and entire match archives with one-click JSON backups.

---

## 📚 Documentation Sections

*   🚀 **[Getting Started](/wiki/triviaarena/getting-started/)**: Accessing the arena, team configuration, board modes (Jeopardy Grid vs Gauntlet), duration calibration, and TV casting setup.
*   🧠 **[Gameplay Mechanics & Features](/wiki/triviaarena/gameplay-mechanics/)**: Board selection, countdown timers, the 50% steal window, streak multipliers, keyboard controls, audio engine, and end-of-game podium awards.
*   🤖 **[AI Provider Setup & Prompting](/wiki/triviaarena/ai-providers/)**: How Trinhism Cloud AI automatically powers Gemini, plus instructions for BYOK providers (Groq, OpenAI, Ollama) and custom category prompting.

---

## ✉️ Support & Community
Have feedback, feature requests, or custom categories to share? Contact us at **support [at] trinhism.com** or jump directly into the game at [trinhism.com/app/trivia/](https://trinhism.com/app/trivia/).
