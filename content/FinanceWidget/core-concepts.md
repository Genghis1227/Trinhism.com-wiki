+++
title = "Core Concepts & Layouts"
type = "docdock"
weight = 20
+++

# Core Concepts & Layouts

Discover how FinanceWidget renders clean widgets and leverages Google Finance's native layout structure.

---

## ⚙️ How It Works

FinanceWidget uses an optimized rendering cycle to display borderless, overlay-free stock charts on your Windows desktop:

```
[FinanceWidget EXE] ──> [WebView2 Runtime Container]
                                 │
                                 ▼
                     [Loads Google Finance URL]
                                 │
                                 ▼
                   [Injects Cleanup CSS & JS DOM Script]
                                 │ (Removes Headers, Sidebars, AI overlays)
                                 ▼
                 [Isolates Chart, Price, and Tabs]
                                 │
                                 ▼
               [Renders Transparent Borderless HUD]
```

### 1. WebView2 Sandbox Environment
Each widget you spawn runs inside an isolated Microsoft Edge WebView2 runtime process. The container loads the official Google Finance page for your target ticker (e.g., `https://www.google.com/finance/quote/AAPL:NASDAQ`).

### 2. DOM Injection & UI Cleanup
Once page navigation completes, FinanceWidget executes a highly optimized cleanup script (`GetClassicCleanupScript` or `GetBetaCleanupScript`):
*   **Hides Structural Elements**: Strips Google's search boxes, headers (`#gb`), navigation bars, footer bars, watchlist follow buttons, and comparison elements.
*   **Suppresses Sidebars & Popups**: Hides "Overview", "Financials", AI insights, and dismisses persistent Google login overlays on startup.
*   **Isolates essential nodes**: Pinpoints the company name header (`h1`), current share price (`.YMlKec.fxKbKc`), timeframe tabs (1D, 5D, 1M, 6M, YTD, 1Y, 5Y, MAX), and the chart canvas.
*   **Theme Matching**: Checks the current Google site theme and aligns the widget container's background (Classic White or Google Dark Mode `#131314`).

### 3. Data Refresh Intervals
*   **Active Graph Pushing**: When the widget is in focus and the stock market is open, Google Finance feeds real-time price updates directly to the canvas.
*   **Manual Trigger**: Right-click the widget and click **Refresh** (or double-click the System Tray icon to reload all widgets) to force WebView2 to perform a clean refresh and re-evaluate injected styles.
*   **Automatic Cache Sync**: State properties (window width/height, desktop coordinates, and widget targets) are written instantly to `appsettings.json` at:
    `%AppData%\FinanceWidget\appsettings.json`

---

## 📖 Glossary

*   **Layout Container**: The visual container border in WPF that holds the WebView2 element, managed by standard sizing grip components (`ResizeMode="CanResizeWithGrip"`).
*   **Chrome Window Styling**: A WPF mechanism (`WindowStyle="None"`) that replaces standard Windows title bars and borders with transparent, borderless, custom drag handles.
*   **Edge WebView2**: A developer control that allows embedding web technologies (HTML, CSS, and JavaScript) into native applications using the Microsoft Edge Chromium rendering engine.
