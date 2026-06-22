+++
title = "Core Concepts & Integrations"
type = "docdock"
weight = 20
+++

# Core Concepts & Integrations

Understanding how QuickCatch intercepts notifications and securely interfaces with the YNAB API will help you maximize your real-time budget tracking efficiency.

---

## ⚙️ How It Works

QuickCatch operates as a background system integration tool. Instead of waiting for bank clears, it acts immediately on transaction events:

```
[Transaction Event] ──> [Android System Notification] OR [Gmail Alert]
                                    │
                                    ▼
                          [QuickCatch Listener]
                                    │ (Trust Verification & DNA Check)
                                    ▼
                         [Local Parsing Engine]
                                    │ (Extract: Merchant, Amount, Account)
                                    ▼
                         [Hybrid Payee Matching]
                                    │ (Map Payee & Category)
                                    ▼
                         [YNAB API Transmission]
```

1.  **Intercept**: When a transaction occurs, your banking app creates a system notification, or your bank sends a notification email to your Gmail account.
2.  **Verify & Parse**: QuickCatch's `StandardNotificationParser` or `EmailParserAggregator` reads the payload. It applies a **DNA Check** to confirm it is a financial transaction (preventing spam or social notifications from triggering runs) and extracts the numeric value, currency, merchant name, and timestamp.
3.  **Local Sync**: The details are stored in your local **Room Database** and matched against your custom rules.
4.  **Forward**: QuickCatch initiates a background sync request via `WorkManager` to push the transaction to YNAB's `transactions` API endpoint using secure **HTTPS/TLS**.

---

## 📖 Glossary

*   **Notification Listener Service**: A native Android system utility that permits QuickCatch to read incoming push notifications from designated white-listed packages (e.g. `com.chase.sig.android`).
*   **Verified Source System**: A multi-tiered security layer that determines whether a source is trusted to trigger transaction parses.
    *   *Tier 1 (Out-of-the-Box Whitelist)*: Pre-configured, verified packages like Venmo (`com.venmo`) or Citi (`com.citi.citimobile`).
    *   *Tier 2 (DNA Check)*: Unknown applications analyzed for transaction keywords (e.g. `charged`, `spent`, `withdrawn`, currency symbols).
    *   *Tier 3 (User Whitelist)*: Custom apps that you have manually verified and trusted.

<div style="display: flex; flex-wrap: wrap; gap: 16px; justify-content: center; margin: 20px 0;">
  <div style="flex: 1; min-width: 200px; max-width: 260px; text-align: center;">
    <img src="/wiki/images/QuickCatch/MainScreen/VerifySourceButton.JPEG" alt="Verify Source Notification Banner" style="width: 100%; border-radius: 8px; border: 1px solid var(--border-color); box-shadow: 0 4px 10px rgba(0,0,0,0.15);" />
    <p style="font-size: 0.85em; color: var(--text-muted); margin-top: 8px;">1. Verify Source Option</p>
  </div>
  <div style="flex: 1; min-width: 200px; max-width: 260px; text-align: center;">
    <img src="/wiki/images/QuickCatch/MainScreen/TrustSource.JPEG" alt="Trust Source Confirmation Dialog" style="width: 100%; border-radius: 8px; border: 1px solid var(--border-color); box-shadow: 0 4px 10px rgba(0,0,0,0.15);" />
    <p style="font-size: 0.85em; color: var(--text-muted); margin-top: 8px;">2. Trust Source Settings Dialog</p>
  </div>
</div>
*   **Target Budget**: The specific YNAB budget file (UUID) selected inside QuickCatch settings where caught transactions will be created.
*   **Token Authentication**: The secure process of validating YNAB API access using an **OAuth 2.0 Access Token** without requiring you to share your primary YNAB login credentials.

---

## 🔑 YNAB Connection Guide

QuickCatch uses the official [YNAB API](https://api.ynab.com/) to sync transactions. Follow these steps to secure and authenticate the connection:

1.  Open the QuickCatch application and navigate to **Settings** > **YNAB Connection**.
2.  Tap **Connect to YNAB**.
3.  A secure browser window will open, redirecting to the official YNAB login portal.
4.  Enter your YNAB login credentials and review the requested permissions (Access to budgets, accounts, and transactions).
5.  Tap **Authorize**. You will be automatically redirected back to QuickCatch via the custom protocol scheme `quickcatch://`.
6.  The app will automatically retrieve and safely store the encrypted **Access Token** and **Refresh Token** in your device's secure local storage.

---

## 🔒 Security & Privacy Practices

> [!IMPORTANT]
> **No External Server Logging**: QuickCatch is a local-first application. It communicates directly with YNAB and Google endpoints over HTTPS. Your banking credentials, notifications, tokens, and budget details are *never* sent to third-party servers.
