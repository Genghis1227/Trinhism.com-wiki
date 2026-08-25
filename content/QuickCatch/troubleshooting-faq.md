+++
title = "Troubleshooting & FAQ"
type = "docdock"
weight = 40
+++

# Troubleshooting & FAQ

Refer to this page to diagnose API communication issues, understand application limits, and find answers to common questions about QuickCatch.

---

## 🔍 Troubleshooting Matrix

| Error/Symptom | Likely Cause | Exact Steps to Fix |
| :--- | :--- | :--- |
| **Missed Notifications** (No transaction recorded in local app ledger) | 1. Android Notification Access has been revoked.<br>2. App notification permission for banking app is disabled. | 1. Go to **Android Settings** > **Apps** > **Special App Access** > **Device & App Notifications**.<br>2. Verify **QuickCatch** is enabled.<br>3. Ensure your bank app is configured to show "Alerting" notifications, not "Silent" ones. |
| **API 401 Unauthorized** (Sync requests fail with authorization errors) | The YNAB Access Token has expired or been revoked from developer settings. | 1. Open QuickCatch and navigate to **Settings** > **YNAB Connection**.<br>2. Tap **Disconnect YNAB** to clear the cache.<br>3. Select **Connect via OAuth** to re-authenticate and acquire a fresh token. |
| **Background Sync Sleep** (Transactions only upload when the app is active) | Android's Battery Optimization is putting the background worker to sleep. | 1. Navigate to **Android Settings** > **Apps** > **QuickCatch**.<br>2. Tap **Battery**.<br>3. Select **Unrestricted** (or **Don't Optimize** on older Android versions) to prevent system sleep hooks. |
| **Missing Amount/Merchant** (Captured transaction has blank fields) | Non-standard notification format or multi-line email layout changes. | 1. Open the QuickCatch log screen and locate the raw payload.<br>2. Report the format to the developer, or manually tap **Instant Repair** inside the transaction review drawer to fill missing parameters using the local ruleset. |

---

## ⚠️ Known Limitations

QuickCatch is designed as a real-time parsing agent and has some intentional design boundaries:

*   **Active Notifications Only**: QuickCatch can only capture transactions that trigger a physical notification on your Android status bar. If you disable notifications for a specific credit card or bank, QuickCatch cannot capture its transactions.
*   **No Historical Scraping**: The app does *not* scan your historical emails or scrape your banking ledger retrospectively. It only listens for events that happen *after* the service is configured.
*   **Device-Specific Caches**: Your payee mapping and custom whitelist rules are stored in a local **Room Database** on your specific phone. Whitelists do not sync across different physical devices unless you export/import database backups manually.

---

## ❓ Frequently Asked Questions

### Does QuickCatch store my bank login details?
**No.** QuickCatch never asks for, has access to, or stores your banking username, password, or security questions. It only parses the plain-text information displayed in notifications sent by your banking application. All YNAB API integrations are handled using secure, restricted OAuth 2.0 access tokens.

### Does the background service drain my battery?
**No.** QuickCatch is highly optimized. It uses Android's native **NotificationListenerService**, which is an event-driven system hook. The app only runs when a notification is actually received and immediately returns to an idle state. Under typical usage, it accounts for less than **0.5%** of daily battery consumption.

### Can I track multiple YNAB budgets?
QuickCatch connects to your YNAB profile and can access any budget files shared with it. However, the app must be linked to **one target budget** at a time to prevent transaction routing conflicts. You can switch target budgets in the **Settings** menu.

### What happens if I make a transaction while offline?
If you are in airplane mode or have no internet connection, QuickCatch will still capture the notification and store the parsed transaction locally in its SQLite database. A background task managed by Android's **WorkManager** will automatically retry uploading the pending transaction once network connectivity is restored.

### Is QuickCatch compatible with GrapheneOS or custom uncertified ROMs?
**Yes.** QuickCatch has been engineered to run reliably on custom, security-hardened ROMs like **GrapheneOS**. The manifest includes specific hardware feature overrides to prevent incorrect filter blocking in alternative app stores, and the `BillingManager` has robust error fallback logic to gracefully handle systems without standard Google Play Services billing infrastructure.

### What is the "Syncs Remaining" counter in Settings?
For free tier users, a reactive **Syncs Remaining** countdown indicator is displayed directly in the Settings menu. This allows users to easily track their remaining transaction sync limit for the current cycle. (For testing and validation purposes, debug builds also expose a hidden "Force Free Mode" toggle inside Maintenance Tools).

### Why is Gmail sync gated under "Experimental Labs" as a Private Beta?
Google requires any application requesting access to the Gmail API to undergo a rigorous and expensive annual security audit called the **Cloud Application Security Assessment (CASA)**. Because the cost of this assessment is prohibitive for independent developers, QuickCatch cannot release Gmail email parsing as a standard, out-of-the-box production feature. 

To work around this limitation for testing, Gmail sync is restricted to a **Private Beta** accessible only by unlocking the hidden **Experimental Labs** menu (by tapping the app version 7 times in Settings) and entering a developer-provided passcode. If you would like to be considered for beta testing the Gmail parsing functionality, please reach out to support at **quickcatch [at] trinhism.com**.
