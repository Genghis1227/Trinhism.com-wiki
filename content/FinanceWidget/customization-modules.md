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

## 🔄 Google Sign-In & Beta Site Layout Optimization

By combining **Google Account Sign-In** with FinanceWidget's WebView2 sandbox, you can authenticate your Google session to enable a much better layout rendering on the Google Finance Beta Site.

### Connecting Your Google Account
1.  Right-click any open widget and select **Login to Google**.
2.  Follow the standard prompts to log in securely.
3.  Once authenticated, right-click the widget again and select **Return to Finance**. The widget will resume rendering the chart using your logged-in Google session cookies.
4.  Your sign-in status and cookies persist across application restarts, ensuring a stable layout representation.

---

## 📊 Adding Ticker Symbols & Data Sources

FinanceWidget allows you to deploy independent stock, ETF, index, or cryptocurrency trackers.

### Manual Ticker Formatting
When adding a new widget from the system tray or widget context menu, type the symbol in the exchange-prepended format: `TICKER:EXCHANGE`.
*   *U.S. Stocks*: `AAPL:NASDAQ` or `MSFT:NASDAQ`
*   *ETFs*: `SPY:NYSEARCA` or `QQQ:NASDAQ`
*   *Cryptocurrency*: `BTC-USD` or `ETH-USD`
*   *Mutual Funds*: `VFIAX:MUTF`
*   *Market Indices*: `.INX:INDEXSP` (S&P 500) or `.DJI:INDEXDJX` (Dow Jones)

> [!TIP]
> To find the exact ticker symbol syntax, open [Google Finance](https://www.google.com/finance/) in your web browser, search for the asset, and copy the final path segment from the URL (e.g. `https://www.google.com/finance/quote/NVDA:NASDAQ` -> use `NVDA:NASDAQ`).

