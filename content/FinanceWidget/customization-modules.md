+++
title = "Customization & Modules"
type = "docdock"
weight = 30
+++

# Customization & Modules

Configure your desktop layout, switch between tracking views, and integrate external Google Finance data sources to create a personalized financial dashboard.

---

## 🎨 Configuring Widget Layouts & Views

Because FinanceWidget strips away all unnecessary page styling, you can configure your widgets to display different investment perspectives depending on their dimensions and settings.

### Desktop HUD Mode (Borderless Overlay)
For a minimalist look that sits quietly on your desktop background:
1.  Right-click the **System Tray Icon** and check **Hide Title Bars**.
2.  The top gray title bars will collapse instantly. The charts will look like they are floating directly on your desktop.
3.  *To move widgets in this mode*: Left-click and drag the very top edge of the widget (the top 20px area remains interactive).
4.  *To resize widgets*: Hover your cursor over the bottom-right corner until the resize grip cursor appears, then click and drag.

---

## 🔄 Switching Between Dividend and Debt Tracking Views

By combining **Google Account Sign-In** with Google Finance’s native portfolio feature, you can toggle your desktop widgets between dividend-growth tracking and debt-reduction progress bars.

### 1. Setting up the Dividend Income View
To track your passive income assets:
1.  Open your browser and navigate to [Google Finance Portfolios](https://www.google.com/finance/portfolios).
2.  Create a portfolio named **"Dividend Income"**. Add your high-yield holdings (e.g. `SCHD`, `O`, `JEPQ`, `VYM`).
3.  Open FinanceWidget, right-click any widget, and select **Login to Google**. Follow the prompts to authenticate.
4.  Once logged in, right-click and click **Return to Finance**. Navigate to your custom "Dividend Income" portfolio.
5.  The widget will automatically strip the headers and render your portfolio's total valuation chart, daily dividend-asset growth, and individual ticker performance.

### 2. Setting up the Debt Snowball Progress Bar
To visualize your debt payoff progress:
1.  In Google Finance, create a portfolio named **"Debt Snowball"**.
2.  To track a debt paydown progress bar visually, add custom "short" positions or negative equity values representing your remaining loans (e.g., tracking a baseline index representing the principal balance).
3.  Link your cash payoff accounts as "holdings" to represent your cash reserves.
4.  Load this custom "Debt Snowball" portfolio inside a dedicated widget. The chart will visually reflect your progress: as your cash reserves grow and your liabilities decrease, the overall portfolio line will rise, illustrating your snowball acceleration.

---

## 📊 Integrating Data Sources & Portfolios

Google Finance serves as the primary data aggregator for FinanceWidget. You can configure your data inputs in two ways:

### Method A: Manual Ticker Formatting (Standard API)
Add standalone asset tracking widgets directly from the app interface:
1.  Right-click the widget context menu and click **Add New Widget** (or select **Add New Widget** from the system tray).
2.  Enter the ticker following the syntax: `TICKER:EXCHANGE`.
    *   *U.S. Stocks*: `AAPL:NASDAQ` or `MSFT:NASDAQ`
    *   *Cryptocurrency*: `BTC-USD` or `ETH-USD`
    *   *Mutual Funds/Index Funds*: `VFIAX:MUTF`
    *   *Global Indices*: `.INX:INDEXSP` (S&P 500) or `.DJI:INDEXDJX` (Dow Jones)

### Method B: Google Finance Portfolio Import (CSV Sync)
To import large quantities of historical dividend data or debt payoffs:
1.  Go to the [Google Finance Web Portal](https://www.google.com/finance/) in your primary browser.
2.  Under your custom Portfolio, click the **Three Dots Menu** next to the portfolio title.
3.  Select **Bulk Edit Holdings** or **Import Transactions**.
4.  Upload your transaction spreadsheet in CSV format containing the column headers: `Ticker, Exchange, Shares, Purchase Price, Date`.
5.  Once imported, log into Google inside FinanceWidget. The changes will populate across all synced widgets instantly.
