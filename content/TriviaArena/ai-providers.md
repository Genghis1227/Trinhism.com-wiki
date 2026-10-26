+++
title = "AI Setup & Key Guide"
weight = 30
+++

# AI Provider Setup & API Key Guide

Trivia Arena supports dynamic, real-time question generation powered by large language models. This guide explains how to acquire free or paid API keys, configure custom category prompts, and run fully offline.

---

## ⚡ No API Key Required to Play!

Before configuring any external services, remember that **Trivia Arena includes a built-in offline deck of 36 verified trivia questions**. You can play full matches immediately without entering an API key. 

An API key is only needed if you want:
* Unlimited, never-repeated question generation.
* Niche custom categories (e.g., *"Star Wars Lore"*, *"90s Saturday Morning Cartoons"*, *"World History 1900–1950"*).
* Dynamic difficulty scaling tailored to your audience.

---

## 📊 Provider Comparison Matrix

| Provider | Cost / Tier | Generation Speed | Default Model | Best For |
| :--- | :--- | :--- | :--- | :--- |
| **Google Gemini** | **100% Free Tier** (15 RPM) | Fast (~1.2s) | `gemini-1.5-flash` | **(Recommended)** Best balance of speed, accuracy, and free tier limits. |
| **Groq Cloud** | **100% Free Developer Tier** | Blazing (~0.3s) | `llama-3.1-8b-instant` | Instantaneous question generation with near-zero latency. |
| **OpenAI** | Pay-as-you-go (~$0.001/question) | Fast (~1.5s) | `gpt-4o-mini` | Highest factual consistency and nuanced trivia questions. |
| **OpenRouter** | Pay-as-you-go | Variable | Multi-model routing | Accessing diverse open-source and proprietary models. |
| **Ollama** | **100% Free & Self-Hosted** | Depends on hardware | `llama3` / `mistral` | Running completely private on your local machine without internet. |

---

## 🔑 Step-by-Step API Key Instructions

### 1. Google Gemini (Recommended Free Tier)
1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey).
2. Sign in with any standard Google account.
3. Click **Create API Key** and copy the key string.
4. In Trivia Arena, open the **AI Settings** modal, select **Google Gemini**, paste your key, and click **Save Key**.

### 2. Groq Cloud (Free Ultra-Fast Tier)
1. Visit the [Groq Console](https://console.groq.com/keys).
2. Sign in with GitHub or email.
3. Click **Create API Key**, name it `Trivia Arena`, and copy the key.
4. In Trivia Arena, select **Groq Cloud**, paste your key, and select `llama-3.1-8b-instant`.

### 3. OpenAI (ChatGPT)
1. Visit the [OpenAI Platform](https://platform.openai.com/api-keys).
2. Create a secret key under your organization or personal account.
3. In Trivia Arena, select **OpenAI**, paste your key, and choose `gpt-4o-mini`.

### 4. Ollama (Local Self-Hosted)
1. Download and run [Ollama](https://ollama.com/) on your machine.
2. In your terminal, run `ollama run llama3`.
3. In Trivia Arena, select **Ollama** and specify your local endpoint (defaults to `http://localhost:11434/v1`).
4. Note: If playing on a remote TV or across devices, ensure `OLLAMA_ORIGINS="*"` is enabled in your environment.

---

## 🔒 Privacy & API Key Security

* **Local Storage Only**: Your API keys are stored strictly inside your browser's local storage (`localStorage`). They are never transmitted to any Trinhism servers or third-party loggers.
* **Direct Client Fetching**: The browser calls the provider API directly from your client machine using secure HTTPS headers.
* **Password Masking**: All key inputs in the settings screen are masked by default with an eye toggle to review or update.

---

## 📝 Custom Category Prompting Tips

When defining custom topics in the Category Manager:
* **Be Specific**: Instead of *"Movies"*, try *"Classic 80s Sci-Fi Films"* or *"Oscar Best Picture Winners 2000–2020"*.
* **Specify Audience Age / Tone**: Use topics like *"Pop Culture Trivia for Teens"* or *"Deep Cut 90s Hip Hop"*.
* **Combine Disciplines**: Try creative mashups like *"Famous Scientific Blunders"*, *"Bizarre Food Laws Around the World"*, or *"Video Game Easter Eggs"*.
