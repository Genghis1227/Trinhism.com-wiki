+++
title = "AI Setup & Key Guide"
weight = 30
+++

# AI Integration & Architecture Guide

Trivia Arena features a flexible multi-tier AI generation pipeline designed so anyone can play with live, unlimited AI questions out of the box, while power users have full freedom to bring their own custom models.

---

## ⚡ Zero Setup Required: Trinhism Cloud AI (Google Gemini)

You do **not** need to sign up for an API key or configure anything to play with live AI questions:

* **Automatically Provided via Trinhism Cloud AI**: Trivia Arena routes requests through a dedicated backend proxy function hosted on Cloudflare Pages (`/api/trivia`).
* **Powered by Google Gemini**: The server securely maintains a managed Google Gemini API connection to generate live, context-aware multiple-choice trivia questions for any custom topic you type.
* **100% Free**: Zero cost, zero logins, and zero configuration for all players.

---

## 📦 Offline Fallback Deck (300+ Verified Questions)

If you have no internet access, are playing in an airplane cabin, or experience network drops during a game, Trivia Arena has you covered:

* **Over 300 Hand-Crafted Questions**: Built directly into the client-side bundle.
* **Diverse Category Coverage**: Spans 80s/90s Tech, Pop Culture, Sci-Fi & Cinema, World Geography, Food & Libations, Science & Nature, Disney & Pixar, Dinosaurs, and Superheroes.
* **Difficulty Tiers**: Each category includes questions partitioned across 3 difficulty tiers to match point stakes ($100 to $500).
* **Automatic Fallback**: If the AI endpoint times out or cannot be reached, the game gracefully and transparently pulls from the verified offline deck without interrupting match flow.

---

## 🛠️ Power User (BYOK - Bring Your Own Key)

While Google Gemini is automatically provided for free via Trinhism Cloud AI, hosts can optionally switch to the **Power User (BYOK)** tab in the AI drawer to connect their own provider keys or local models:

### 📊 Provider Comparison Matrix

| Provider | Model | Tier / Cost | Speed | Best For |
| :--- | :--- | :--- | :--- | :--- |
| **Trinhism Cloud AI (Default)** | `Google Gemini` | **100% Free** (Managed) | Fast (~1.2s) | **Default** - Zero configuration for all players. |
| **Groq Cloud (BYOK)** | `llama-3.1-8b-instant` | **100% Free** Developer Tier | Blazing (~0.3s) | Lowest possible latency; questions generate almost instantly. |
| **OpenAI (BYOK)** | `gpt-4o-mini` | Pay-as-you-go (~$0.001/question) | Fast (~1.5s) | High factual consistency and nuanced custom trivia categories. |
| **OpenRouter (BYOK)** | Multi-Model Routing | Variable per model | Variable | Accessing diverse open-source or commercial LLMs. |
| **Ollama (BYOK)** | `llama3` / `mistral` | **100% Free & Self-Hosted** | Hardware dependent | Running completely private on your local machine without internet. |
| **Personal Gemini (BYOK)** | `gemini-1.5-flash` / `gemini-flash` | **100% Free** (15 RPM) | Fast (~1.2s) | Using your own Google AI Studio quota and custom rate limits. |

---

## 🔑 Step-by-Step BYOK Key Instructions

If you wish to use your own API key instead of the default Trinhism Cloud AI:

### 1. Groq Cloud (Ultra-Fast Llama 3)
1. Sign in to the [Groq Console](https://console.groq.com/keys).
2. Click **Create API Key**, name it `Trivia Arena`, and copy the key string.
3. In Trivia Arena, open the AI Drawer &rarr; **Power User (BYOK)**, select **Groq Cloud**, paste your key, and select `llama-3.1-8b-instant`.

### 2. OpenAI (ChatGPT / GPT-4o-mini)
1. Visit the [OpenAI Platform API Keys](https://platform.openai.com/api-keys).
2. Generate a secret key under your personal or team account.
3. In Trivia Arena, select **OpenAI**, paste your key, and choose `gpt-4o-mini`.

### 3. Personal Google Gemini Key
1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey).
2. Click **Create API Key** and copy the string.
3. In Trivia Arena, select **Google Gemini**, paste your key, and save.

### 4. Local Ollama (100% Self-Hosted)
1. Install [Ollama](https://ollama.com/) on your host machine.
2. In your terminal, run `ollama run llama3`.
3. In Trivia Arena, select **Ollama** and specify your local endpoint (defaults to `http://localhost:11434/v1`).
4. *Tip*: If casting from a laptop or connecting across your home Wi-Fi network, launch Ollama with `OLLAMA_ORIGINS="*"` to allow browser cross-origin requests.

---

## 🔒 Privacy & Key Storage

* **Local Storage Only**: Any BYOK API keys you input are stored strictly inside your browser's `localStorage`. They are never transmitted to Trinhism servers.
* **Password Masking**: All key inputs in the settings drawer are masked by default with an eye toggle to review or update.
* **Direct Client Fetching**: When using BYOK, the browser calls the chosen provider directly via secure HTTPS requests.

---

## 📝 Custom Category Prompting Tips

When defining custom topics in the Category Manager:
* **Be Specific**: Instead of *"Movies"*, try *"Classic 80s Sci-Fi Films"* or *"Oscar Best Picture Winners 2000–2020"*.
* **Specify Audience Age / Tone**: Use topics like *"Pop Culture Trivia for Teens"* or *"Deep Cut 90s Hip Hop"*.
* **Combine Disciplines**: Try creative mashups like *"Famous Scientific Blunders"*, *"Bizarre Food Laws Around the World"*, or *"Video Game Easter Eggs"*.
