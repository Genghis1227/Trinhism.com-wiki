+++
title = "Getting Started"
weight = 10
+++

# Getting Started with `eat.trinhism.com`

This guide covers accessing the app, installing it as a mobile PWA, managing location permissions, setting search overrides, and spinning the roulette.

---

## 1. Accessing & Installing the App

`eat.trinhism.com` is a modern Progressive Web App (PWA) that runs instantly in any modern mobile or desktop browser without requiring an app store download.

1. Open your browser and navigate to [`https://eat.trinhism.com`](https://eat.trinhism.com).
2. **Install to Home Screen**:
   * **iOS (Safari)**: Tap the **Share** button in the bottom navigation bar, scroll down, and select **Add to Home Screen** (`➕`).
   * **Android (Chrome)**: Tap the browser menu (`⋮`) or the prompt banner and select **Install App** or **Add to Home Screen**.
   * **Desktop (Chrome/Edge)**: Click the install icon in the URL address bar to install it as a standalone borderless window.

Once installed, the app launches full-screen with custom maskable launcher icons and no browser address bar chrome.

---

## 2. Location & Search Radius

The roulette engine searches a fixed **5-mile radius (8,046 meters)** around your active coordinates:

### GPS Auto-Detection (Default)
* When prompted by your browser, tap **Allow** to grant location access.
* The app initiates a high-accuracy GPS fix (`{ enableHighAccuracy: true, timeout: 8000, maximumAge: 30000 }`).
* Your approximate street address or neighborhood is resolved and displayed at the top of the interface.

### Manual Address / City Override
Planning ahead for dinner across town or traveling to another city?
1. Tap the **📍 Current Location** pill in the top header to expand the location drawer.
2. Enter any city, neighborhood, zip code, or specific address (e.g., *"Austin, TX"*, *"78701"*, or *"Downtown Chicago"*).
3. Tap **Search Address**. The Google Geocoder updates your active coordinates and refreshes the candidate pool.
4. To return to your device's physical coordinates, click the **🎯 Reset to GPS** button.

---

## 3. Selecting Cuisine Categories

Below the location display, you will find 17 curated cuisine chips:

* **All Cuisines (Default)**: If no chips are selected, the roulette searches across all nearby restaurants and food establishments.
* **Filtering by Craving**: Tap one or more cuisine chips to narrow your candidates:
  * 🍔 **Burgers**
  * 🍕 **Pizza**
  * 🌮 **Tacos / Mexican**
  * 🍖 **BBQ**
  * 🍜 **Asian / Noodles**
  * 🍣 **Sushi / Japanese**
  * 🍲 **Thai**
  * 🥣 **Pho / Vietnamese**
  * 🫓 **Mediterranean**
  * 🍝 **Italian**
  * 🦞 **Seafood**
  * 🥞 **Breakfast & Brunch**
  * ☕ **Coffee & Bakery**
  * 🥪 **Sandwiches & Deli**
  * 🍗 **Wings**
  * 🍦 **Desserts / Sweets**
* To clear all selections, tap **Clear Filters**.

---

## 4. Spinning the Roulette

You have three ways to trigger the spin:

1. **Tap the Big Spin Button**: Tap the large glowing **🎰 Spin the Wheel** button.
2. **Shake Your Phone**: Give your mobile phone a firm shake! The built-in accelerometer detects the motion and initiates the spin automatically.
   * *iOS Note*: On iOS devices, motion permissions require a single user tap anywhere on the screen before sensor events are received.
3. **Desktop Spacebar**: If you are using a laptop or desktop computer, simply press the **Spacebar** on your keyboard.

The wheel will rapidly cycle through candidates before locking onto a winner, displaying the restaurant name, establishment badge, formatted address, and interactive map.
