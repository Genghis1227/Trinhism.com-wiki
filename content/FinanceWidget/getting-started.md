+++
title = "Getting Started with FinanceWidget"
type = "docdock"
weight = 10
+++

# Getting Started with FinanceWidget

**FinanceWidget** is a lightweight, borderless Windows desktop widget manager that displays clean, real-time stock, ETF, and portfolio charts powered by Google Finance. It provides a visual, at-a-glance dashboard directly on your home screen to track dividend-growth portfolios (e.g., SCHD, JEPQ), passive income metrics, and visual investment targets.

---

## 🛠️ Prerequisites

To run FinanceWidget and configure your visual trackers, ensure you have:

*   **Operating System**: Windows 10 or Windows 11 (x64 architecture).
*   **System WebView2**: [Microsoft Edge WebView2 Runtime](https://developer.microsoft.com/en-us/microsoft-edge/webview2/) installed (pre-installed on Windows 11 and up-to-date Windows 10 devices).
*   **Google Account**: Required if you wish to sync custom Google Finance watchlists and track personal dividend portfolios or investment values.
*   **Google Finance Format Tickers**: Tickers must be entered in the exchange-prepended format (e.g. `SCHD:NYSEARCA` or `JEPQ:NASDAQ`).

---

## 🚀 Quick Start Guide

Follow these four steps to deploy your first widget module onto your desktop and begin tracking your metrics:

### Step 1: Install and Launch
1.  Download the latest release ZIP from the official repository releases.
2.  Extract the archive to a local folder (e.g., `C:\Users\<Username>\FinanceWidget\`).
3.  Double-click `FinanceWidget.exe` to run it.

> [!NOTE]
> **Windows SmartScreen warning**: Since this application is a community project and is not signed with a commercial developer certificate, click **"More info"** and then **"Run anyway"** on the Windows alert dialog.

### Step 2: Access the System Tray Controller
FinanceWidget runs as a lightweight daemon in the background to keep your taskbar clean:
1.  Locate the FinanceWidget icon (a graph symbol) in your **Windows System Tray** (bottom right, near the clock).
2.  Right-click the tray icon to access the master control panel.

### Step 3: Deploy Your First Ticker Widget
1.  Right-click the system tray icon and select **Add New Widget**.
2.  An elegant ticker entry dialog will appear.
3.  Enter a ticker symbol of your choice.
    *   *Example (Dividend growth)*: `SCHD:NYSEARCA` (Schwab U.S. Dividend Equity ETF)
    *   *Example (Tech Income)*: `JEPQ:NASDAQ` (JPMorgan Nasdaq Equity Premium Income ETF)
    *   *Example (Real Estate)*: `O:NYSE` (Realty Income Corp)
4.  Click **Add** or press **Enter**. A borderless widget containing the Google Finance chart will appear on your desktop.

### Step 4: Position and Configure the View
1.  **Move**: Drag the widget by the gray top handle to place it anywhere on your home screen.
2.  **Resize**: Drag the edges or the bottom-right corner to scale the graph layout to your preferred size.
3.  **Keep on Top**: Right-click the widget and check **Keep on Top** to lock it above your other open windows, or toggle **Hide Title Bars** from the tray icon context menu to make the widget completely borderless for a clean, graphical HUD.

> [!TIP]
> All widget configurations (window position, dimensions, ticker target, and layout options) are saved automatically to your local state files.
