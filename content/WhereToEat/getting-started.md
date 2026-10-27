+++
title = "Getting Started"
weight = 10
+++

# Getting Started with `eat.trinhism.com`

This guide covers accessing the app, installing it as a mobile PWA, managing location permissions, setting search overrides, filtering by cuisines and regional sub-categories, and spinning the roulette.

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
* Your approximate street address or neighborhood is resolved and displayed at the top of the interface (e.g., *"Austin, TX"* or *"Pflugerville, TX"*).

### Manual Address / City Override
Planning ahead for dinner across town or traveling to another city?
1. Tap the **📍 Current Location** pill in the top header to expand the location drawer.
2. Enter any city, neighborhood, zip code, or specific address (e.g., *"Austin, TX"*, *"78701"*, or *"Downtown Chicago"*).
3. Tap **Search Address**. The Google Geocoder updates your active coordinates and refreshes the candidate pool.
4. To return to your device's physical coordinates, click the **🎯 Reset to GPS** button.

---

## 3. Selecting Cuisine Categories

Below the location display, you will find 18 responsive auto-flex cuisine chips:

* **🎲 Any (Default)**: Searches across all dining establishments (excluding fast food, coffee shops, bakeries, and bars) with a balanced multi-cuisine query.
* **Filtering by Craving**: Tap one or more chips to focus your candidates:
  * 🥩 **Steakhouse**
  * 🍝 **Italian**
  * 🍕 **Pizza**
  * 🥢 **Asian ▾**
  * 🍔 **Burgers**
  * 🍳 **Diner**
  * 🍣 **Sushi**
  * 🌮 **Latin ▾**
  * 🥙 **Mediterranean ▾**
  * 🍖 **BBQ**
  * 🥞 **Breakfast ▾**
  * 🥪 **American**
  * 🍺 **Bar**
  * 🍷 **Fine Dining**
  * 🍟 **Fast Food**
  * 🦞 **Seafood**
  * 🥗 **Healthy**

---

## 3.1. Hierarchical Sub-Categories & Multi-Select

Categories marked with a dropdown arrow (`▾`) feature an interactive, animated **Sub-Category Drawer** allowing you to filter down to specific regional culinary styles:

### 🥢 Asian Sub-Categories
* **🥢 All Asian**: Searches all regional Asian styles.
* **🍜 Vietnamese**: Specifically targets pho, banh mi, vermicelli, and Vietnamese kitchens.
* **🥩 Korean**: Specifically targets Korean BBQ, bulgogi, kimchi, and bibimbap.
* **🍱 Japanese**: Specifically targets izakaya, teriyaki, udon, and Japanese fare.
* **🍜 Ramen**: Specifically targets dedicated ramen shops and noodle bars.
* **🥟 Chinese**: Specifically targets dim sum, dumplings, and Szechuan/Cantonese spots.
* **🍛 Thai**: Specifically targets pad thai, curries, and tom yum.
* **🥘 Indian**: Specifically targets tandoori, curries, naan, and biryani.

### 🥙 Mediterranean Sub-Categories
* **🥙 All Med**: Searches all Mediterranean, Greek, and Levantine spots.
* **🌙 Halal**: Specifically targets halal-certified kitchens, shawarma, gyros, and kebabs.
* **🇬🇷 Greek**: Specifically targets souvlaki, gyros, spanakopita, and Greek tavernas.
* **🧆 Middle Eastern**: Specifically targets falafel, shawarma, hummus, and tabbouleh.
* **🇱🇧 Lebanese**: Specifically targets Lebanese grills, kafta, and mezza.
* **🍢 Turkish**: Specifically targets doner, kebabs, pide, and Turkish delights.

### 🌮 Latin Sub-Categories
* **🌮 All Latin**: Searches all Latin, Mexican, Brazilian, and Spanish kitchens.
* **🌮 Mexican**: Specifically targets taquerias, burritos, and enchiladas.
* **🥩 Brazilian**: Specifically targets churrascarias and picanha steakhouses.
* **🥘 Spanish**: Specifically targets tapas, paella, and Iberian fare.

### 🥞 Breakfast Sub-Categories
* **🥞 All Breakfast**: Searches all breakfast and brunch spots.
* **🍳 Diner & Brunch**: Specifically targets classic breakfast diners, benedicts, and omelets.
* **🥞 Crepes & Waffles**: Specifically targets creperies, waffle houses, and croffles.
* **🥐 Bakery**: Specifically targets artisan bakeries, bagels, pastries, and donuts.
* **☕ Coffee & Cafe**: Specifically targets espresso bars, cafes, and coffee shops.

### Multi-Select Capability
You can select and combine multiple sub-categories within an umbrella cuisine (e.g., selecting both **Vietnamese + Ramen**, or **Greek + Halal**). The parent chip updates dynamically to display your active selections (e.g. `🥢 Asian (Viet., Ramen)`), and the candidate pool filters strictly to places matching your selected criteria.

---

## 4. Spinning the Roulette

You have three ways to trigger the spin:

1. **Tap the Big Spin Button**: Tap the glowing **🎰 Shake or Tap to Spin** button.
2. **Shake Your Phone**: Give your mobile phone a firm shake! The built-in accelerometer detects the motion and initiates the spin automatically.
   * *iOS Note*: On iOS devices, tapping anywhere on the screen (such as selecting a chip or the shake status pill) activates sensor permissions.
3. **Desktop Spacebar**: If you are using a laptop or desktop computer, simply press the **Spacebar** on your keyboard.

The wheel will rapidly cycle through candidates before locking onto a winner, displaying the restaurant name, establishment badge, formatted address, distance from your coordinates, and an interactive dark map.

---

## 5. Support & Feedback Panel

At the bottom of the interface, the collapsible **💜 Enjoying Where to eat?** panel offers:
* **Direct Support QR Codes**: Scannable QR codes and links for Venmo (`@TonyLTrinh`), PayPal (`paypal.me/Genghis1227`), and Zelle.
* **Trinhism Labs Showcase**: Companion web apps including QuickCatch, FinanceWidget, 401(k) Optimizer, Tournament Director, Cash Game Director, and CuratedLists.
* **Support & Feedback Contact**: Direct email support at **support [at] trinhism.com** and documentation links to the [Trinhism Wiki](https://trinhism.com/wiki/wheretoeat/).
