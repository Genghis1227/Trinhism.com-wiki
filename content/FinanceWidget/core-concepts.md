+++
title = "Core Concepts & Layouts"
type = "docdock"
weight = 20
+++

# Core Concepts & Layouts

Discover how FinanceWidget renders clean widgets and leverages Google Finance's native features to track your passive income and debt milestones.

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
Each widget you spawn runs inside an isolated Microsoft Edge WebView2 runtime process. The container loads the official Google Finance page for your target ticker (e.g., `https://www.google.com/finance/quote/SCHD:NYSEARCA`).

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

## 📈 Tracking passive Income & Debt Goals

By logging into your Google Account inside the widget container, you can leverage Google's personal portfolios to track complex compound interest metrics:

### 1. Dividend-Growth Portfolios
To track forward-looking passive income, you can create a custom Google Portfolio containing your high-yield assets (e.g. `SCHD`, `JEPQ`, `O`). 
*   **Income Calculation**: The isolated graph displays your cumulative portfolio value. You can estimate your annual passive income by multiplying the forward yield of your holdings against the total portfolio value displayed.

### 2. Debt Snowball Target Tracking
To visually track debt payoff acceleration, users can construct a custom "Liability Portfolio" within Google Finance:
*   **Progress Visualization**: By creating a custom watchlist representing your debts (mapped against matching bond yields, index hedges, or simple cash equivalents representing your payoff fund), you can track your total net equity progression.
*   **Snowball Milestone Tracking**: Setting visual widgets to track your paydown investment benchmarks (e.g. tracking high-yield savings tickers or Treasury index charts) allows you to align interest savings with index benchmarks.

---

## 📖 Glossary

*   **Dividend Yield (Forward)**: The projected annual dividend payout of a stock/ETF divided by its current share price, represented as a percentage (e.g. a $4 annual dividend on a $100 stock is a 4% yield).
*   **Debt Snowball Acceleration**: A strategy where you pay off debts in order of smallest balance to largest balance, rolling the payments of cleared debts into the remaining liabilities.
*   **Layout Container**: The visual container border in WPF that holds the WebView2 element, managed by standard sizing grip components (`ResizeMode="CanResizeWithGrip"`).
*   **Chrome Window Styling**: A WPF mechanism (`WindowStyle="None"`) that replaces standard Windows title bars and borders with transparent, borderless, custom drag handles.
