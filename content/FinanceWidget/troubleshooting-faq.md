+++
title = "Troubleshooting & FAQ"
type = "docdock"
weight = 40
+++

# Troubleshooting & FAQ

Refer to this page to diagnose layout rendering anomalies, resolve Google Finance connection issues, and read answers to common user questions.

---

## 🔍 Troubleshooting Matrix

| Error/Symptom | Likely Cause | Exact Steps to Fix |
| :--- | :--- | :--- |
| **Frozen Widget Layout** (The chart is empty, or the browser shows a white page) | 1. WebView2 runtime process has crashed.<br>2. Local network firewall is blocking google.com/finance. | 1. Right-click the widget and select **Refresh**.<br>2. If it remains frozen, right-click the system tray icon and select **Refresh All**.<br>3. Check your internet connection and verify that Microsoft Edge WebView2 is up to date. |
| **Broken Ticker Feed** (Widget loads Google Finance homepage instead of the chart) | Invalid ticker symbol format or exchange suffix. | 1. Verify you entered the correct symbol in the `TICKER:EXCHANGE` format.<br>2. Open Google Finance in a web browser, search for the asset, and copy the exact suffix from the end of the URL (e.g., use `SCHD:NYSEARCA`, not just `SCHD`).<br>3. Right-click the widget, select **Add New Widget**, and paste the verified ticker string. |
| **Corrupted Config State** (Widgets load in wrong positions or disappear upon relaunch) | The local `appsettings.json` file is corrupted or locked by another process. | 1. Close all running widget instances by right-clicking the tray icon and selecting **Exit All**.<br>2. Press `Win + R`, type `%AppData%\FinanceWidget`, and press Enter.<br>3. Delete the file named [appsettings.json](file:///C:/Users/Tony/AppData/Roaming/FinanceWidget/appsettings.json).<br>4. Restart `FinanceWidget.exe` to automatically generate a clean, default configuration file. |
| **Title Bars stuck hidden** (Can't access widget drag handles or title bars) | Borderless toggle is active but widgets are not selectable. | 1. Right-click the **FinanceWidget System Tray Icon**.<br>2. Locate **Hide Title Bars** in the context menu and uncheck it.<br>3. Drag handles will reappear instantly across all widgets, allowing you to move or resize them. |

---

## ⚠️ Known Limitations

FinanceWidget is designed as a lightweight client and has some structural boundaries:

*   **Delayed Ticker Data**: Stock and ETF price feeds are subject to Google Finance's standard exchange delays (typically 15 minutes for minor exchanges, though major indices like NASDAQ, NYSE, and Forex remain real-time).
*   **Manual Google Login Requirement**: Because security cookies are sandboxed locally inside the WebView2 folder, you must manually log in to Google on at least one widget instance when setting up the app for the first time.
*   **No Custom Calculations**: The app only displays stock prices and charts directly from Google Finance. It does not perform custom calculation overlays, compound interest projections, or portfolio yield analytics.
*   **No Multi-Monitor Auto-Scaling**: High-DPI scaling conflicts can sometimes occur if widgets are moved between monitors with highly mismatched scaling factors (e.g., a 100% 1080p screen and a 200% 4K screen). If a graph becomes blurry, reload the widget to force scaling recalculation.

---

## ❓ Frequently Asked Questions

### How do I force a manual layout refresh?
You can refresh an individual widget by clicking the custom refresh icon (rotating arrow) on the top right of the gray title bar. To reload all active widgets simultaneously, right-click the system tray icon and select **Refresh All** or double-click the tray icon to bring all active widgets to the foreground and reload their caches.

### Is my financial data sent to any third-party servers?
**No.** FinanceWidget runs locally on your PC. It reads settings from a local configuration file and interacts directly with Google Finance servers inside the secure WebView2 container. None of your portfolio details, credentials, or stock selections are transmitted to external servers.

### Can I run this application on startup?
Yes. To configure FinanceWidget to launch automatically when you turn on your PC:
1.  Press `Win + R`, type `shell:startup`, and click **OK** to open the Windows Startup folder.
2.  Right-click your `FinanceWidget.exe` file and select **Create shortcut**.
3.  Cut and paste the new shortcut file directly into the Startup folder.

### Where is my login information stored?
Your Google account authentication cookies are managed and secured by Edge WebView2's native local cache, located in your system's temporary application folder. FinanceWidget itself does not capture, read, or export these credentials.
