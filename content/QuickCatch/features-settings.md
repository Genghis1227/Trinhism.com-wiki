+++
title = "Key Features & Settings"
type = "docdock"
weight = 30
+++

# Key Features & Settings

QuickCatch is equipped with advanced parsing, matching, and system configuration tools. This page details how to configure payee mapping, manage battery optimizations, and customize category intelligence behavior.

---

## 🏷️ Customizing Payee & Category Matching

To prevent bank abbreviations and random transaction codes from cluttering your YNAB budget, QuickCatch utilizes a hybrid matching system.

### Hybrid Payee Matching Engine
When a notification is intercepted, the text undergoes cleaning before it is sent to YNAB:
1.  **Sanitization**: Cleans common merchant prefixes and suffixes such as `SQ *`, `DNH*`, `SP *`, or order tracking codes like `#1234`.
2.  **Acronym & Boundary Matching**: Gracefully handles shortened merchant names like `QuikTrip (QT)` or spaces in names like `Jersey Mikes` to match your existing YNAB payee names.
3.  **Generic Blacklist Check**: A built-in security checklist prevents common verbs (like `Pending`, `Withdrawal`, `Direct Deposit`) from causing false positives or matching to actual payees.
4.  **Fallback to Server-Side Rules**: If no local match exists in the Room Database, the cleaned name is sent to YNAB's `payee_name` field, where your custom YNAB Web App **Renaming Rules** will automatically categorize it on the server.

### Category Intelligence (3-Month Lookback)
QuickCatch remembers how you've categorized transactions.
*   **Auto-Categorization**: When a transaction is parsed, the app queries the local database for matching transactions from the last **3 months**. If it finds that you categorized `QT` under the `Gas` budget category, it will pre-select `Gas` automatically.
*   **Auto-Correction Sync**: If you manually change a category in the QuickCatch transaction review drawer, the app updates its mapping algorithm so subsequent alerts inherit the updated category instantly.

---

## 💸 Venmo & Zelle Settings

Peer-to-peer payment apps often bundle the payee name as the person you sent money to, making budget categorization difficult. QuickCatch provides specific rules for these tools:

1.  **Service-as-Payee Mapping**: 
    *   *Enabled (Recommended)*: Sets the YNAB payee to **"Venmo"** or **"Zelle"** and moves the recipient's name and payment description to the YNAB **Memo** field (e.g. `Memo: Sent $25 to John Doe for Dinner`).
    *   *Disabled*: Sets the payee directly to the recipient's name (e.g. `Payee: John Doe`).
2.  **Account Mapping Rules**: In **Settings** > **Account Rules**, you can route all Venmo or Zelle payments to land in your default Checking Account or a specific Venmo/Zelle Cash account inside YNAB automatically.

---

## 🔋 Managing Sync & Android Settings

Because QuickCatch relies on persistent background listening, Android's system battery savers can sometimes interfere with performance. Follow these guidelines to secure reliable sync:

### 1. Battery Optimization Bypass
Android is aggressive about putting background processes to sleep. To keep QuickCatch active:
1.  Navigate to **Settings** > **System Settings** > **Battery Optimization**.
2.  Change the dropdown filter from "Not optimized" to **All apps**.
3.  Locate **QuickCatch** in the list.
4.  Select it, choose **Don't Optimize** (or **Unrestricted** on Android 12+), and tap **Done**.

> [!IMPORTANT]
> Failure to disable battery optimization will result in delayed syncs, where notifications are only processed when the screen is turned on.

### 2. Adjusting background WorkManager Settings
Under **Settings** > **Sync Frequencies**, you can customize how background tasks are scheduled:
*   **Instant Triggers**: If enabled, QuickCatch uses a high-priority system channel to instantly wake up the sync engine the second a notification is caught.
*   **Periodic Fallback Sync**: A safety valve that runs every **15 minutes** (Android's minimum interval) to catch any transactions that failed to upload during network outages.

### 3. Log Retention Toggles
For security and privacy, you can control what data is stored locally:
*   **Log Retention Policy**: Toggle between *Do Not Log*, *Store for 24 Hours* (default), or *Store for 7 Days*.
*   **Clear Log Data**: Instantly clears all parsed notification payloads and API transmission logs from the Room Database.
*   **Full App Reset**: A diagnostic tool in the maintenance panel that wipes all local configurations, database tables, and YNAB access tokens for a clean start.
