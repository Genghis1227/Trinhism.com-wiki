+++
title = "Getting Started with QuickCatch"
type = "docdock"
weight = 10
+++

# Getting Started with QuickCatch

**QuickCatch** is an automated companion app for Android that instantly captures transaction notifications and matches/syncs them to your [YNAB (You Need A Budget)](https://www.ynab.com) accounts in real-time. By bridging the gap between card swipes and bank imports, QuickCatch ensures your budget categories are updated *seconds* after you spend money.

---

## 🛠️ Prerequisites

Before installing and setting up QuickCatch, ensure you meet the following requirements:

*   **Android Device**: Android 7.0 (API Level 24) or higher.
*   **Active YNAB Account**: A configured budget with at least one active checking, cash, or credit card account.
*   **Notification Access**: A device configured to show financial transaction alerts in the system tray (alerts from apps like Chase, Citi, Venmo, Zelle, Cash App, etc.).
*   **Gmail Integration (Optional)**: Access to the Google Account linked to your bank emails if you wish to run instant background parsing for email notifications.
*   **YNAB OAuth Sign-In**: Used to securely connect the app to the official YNAB API.

---

## 🚀 Quick Start Guide

Follow these steps to get QuickCatch fully configured and integrated on your Android device:

### Step 1: Install & Onboarding
1. Download and install the **QuickCatch** package (`com.trinhism.quickcatch`) from the [Google Play Store](https://play.google.com/store/apps/details?id=com.trinhism.quickcatch) onto your Android device.
2. Upon launching the application for the first time, read and accept the **Terms of Service (TOS)**.
3. You will be greeted by the **Welcome Screen** introducing you to the real-time syncing flow.
4. Follow the initial **Getting Started Checklist** that guides you through establishing permissions and connecting account integrations.

<div style="display: flex; flex-wrap: wrap; gap: 16px; justify-content: center; margin: 20px 0;">
  <div style="flex: 1; min-width: 200px; max-width: 260px; text-align: center;">
    <img src="/wiki/images/QuickCatch/GettingStarted/01-TOS.JPEG" alt="Terms of Service" style="width: 100%; border-radius: 8px; border: 1px solid var(--border-color); box-shadow: 0 4px 10px rgba(0,0,0,0.15);" />
    <p style="font-size: 0.85em; color: var(--text-muted); margin-top: 8px;">1. Terms of Service</p>
  </div>
  <div style="flex: 1; min-width: 200px; max-width: 260px; text-align: center;">
    <img src="/wiki/images/QuickCatch/GettingStarted/02-WelcomeScreen.JPEG" alt="Welcome Screen" style="width: 100%; border-radius: 8px; border: 1px solid var(--border-color); box-shadow: 0 4px 10px rgba(0,0,0,0.15);" />
    <p style="font-size: 0.85em; color: var(--text-muted); margin-top: 8px;">2. Welcome Screen</p>
  </div>
  <div style="flex: 1; min-width: 200px; max-width: 260px; text-align: center;">
    <img src="/wiki/images/QuickCatch/GettingStarted/03-GettingStarted.JPEG" alt="Getting Started Checklist" style="width: 100%; border-radius: 8px; border: 1px solid var(--border-color); box-shadow: 0 4px 10px rgba(0,0,0,0.15);" />
    <p style="font-size: 0.85em; color: var(--text-muted); margin-top: 8px;">3. Onboarding Checklist</p>
  </div>
</div>

---

### Step 2: Grant Permissions & Notification Access
QuickCatch runs in the background to capture transaction alerts. For this, it requires two system-level configurations:

1. **Setup Connectivity**: View your connectivity status via the onboarding list and tap **Grant Permissions**.
2. **Notification Listener Authorization**: Follow the system settings redirection:
   * Select **QuickCatch** from the Device & App Notifications list.
   * Toggle **Allow notification access** to **ON**.
   * Confirm the system prompt by tapping **Allow** to enable reading notification payloads.
3. **Battery Optimization Bypass**: Grant permission to run unrestricted in the background so Android does not put the listener service to sleep.

<div style="display: flex; justify-content: center; margin: 20px 0;">
  <div style="max-width: 260px; text-align: center;">
    <img src="/wiki/images/QuickCatch/GettingStarted/04-SetupConnectivity.JPEG" alt="Setup Connectivity Checklist" style="width: 100%; border-radius: 8px; border: 1px solid var(--border-color); box-shadow: 0 4px 10px rgba(0,0,0,0.15);" />
    <p style="font-size: 0.85em; color: var(--text-muted); margin-top: 8px;">Connectivity Setup List</p>
  </div>
</div>

<div style="display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; margin: 20px 0;">
  <div style="flex: 1; min-width: 160px; max-width: 200px; text-align: center;">
    <img src="/wiki/images/QuickCatch/GettingStarted/07-NotifiicationAccessScreen.JPEG" alt="Notification Access List" style="width: 100%; border-radius: 8px; border: 1px solid var(--border-color); box-shadow: 0 4px 10px rgba(0,0,0,0.15);" />
    <p style="font-size: 0.8em; color: var(--text-muted); margin-top: 6px;">1. Settings List</p>
  </div>
  <div style="flex: 1; min-width: 160px; max-width: 200px; text-align: center;">
    <img src="/wiki/images/QuickCatch/GettingStarted/08-NotificationSetting.JPEG" alt="Device Settings" style="width: 100%; border-radius: 8px; border: 1px solid var(--border-color); box-shadow: 0 4px 10px rgba(0,0,0,0.15);" />
    <p style="font-size: 0.8em; color: var(--text-muted); margin-top: 6px;">2. Notification Settings</p>
  </div>
  <div style="flex: 1; min-width: 160px; max-width: 200px; text-align: center;">
    <img src="/wiki/images/QuickCatch/GettingStarted/09-FindQuickCatchNotificationBottom.JPEG" alt="Locate QuickCatch" style="width: 100%; border-radius: 8px; border: 1px solid var(--border-color); box-shadow: 0 4px 10px rgba(0,0,0,0.15);" />
    <p style="font-size: 0.8em; color: var(--text-muted); margin-top: 6px;">3. Scroll to QuickCatch</p>
  </div>
  <div style="flex: 1; min-width: 160px; max-width: 200px; text-align: center;">
    <img src="/wiki/images/QuickCatch/GettingStarted/10-ToggleNotifiicationAccess.JPEG" alt="Toggle On" style="width: 100%; border-radius: 8px; border: 1px solid var(--border-color); box-shadow: 0 4px 10px rgba(0,0,0,0.15);" />
    <p style="font-size: 0.8em; color: var(--text-muted); margin-top: 6px;">4. Toggle Access ON</p>
  </div>
  <div style="flex: 1; min-width: 160px; max-width: 200px; text-align: center;">
    <img src="/wiki/images/QuickCatch/GettingStarted/11-NotificationAllowAccessScreen.JPEG" alt="Allow Access" style="width: 100%; border-radius: 8px; border: 1px solid var(--border-color); box-shadow: 0 4px 10px rgba(0,0,0,0.15);" />
    <p style="font-size: 0.8em; color: var(--text-muted); margin-top: 6px;">5. Allow Permissions</p>
  </div>
</div>

---

### Step 3: Connect to YNAB
QuickCatch secure-syncs transactions directly to the official YNAB API.
1. Navigate to **Settings** > **YNAB Connection** in the app.
2. Tap **Authorize YNAB Account** to open the secure authorization browser page.
3. Log in with your YNAB credentials and click **Authorize**. QuickCatch will automatically store the secure credentials and redirect back.
4. Select your **Target Budget** and map your local parsed bank alerts to their corresponding YNAB checking or card accounts.

<div style="display: flex; flex-wrap: wrap; gap: 16px; justify-content: center; margin: 20px 0;">
  <div style="flex: 1; min-width: 200px; max-width: 260px; text-align: center;">
    <img src="/wiki/images/QuickCatch/GettingStarted/05-YNABLoginScreen.JPEG" alt="YNAB Login Authorization" style="width: 100%; border-radius: 8px; border: 1px solid var(--border-color); box-shadow: 0 4px 10px rgba(0,0,0,0.15);" />
    <p style="font-size: 0.85em; color: var(--text-muted); margin-top: 8px;">YNAB Authorization Portal</p>
  </div>
  <div style="flex: 1; min-width: 200px; max-width: 260px; text-align: center;">
    <img src="/wiki/images/QuickCatch/GettingStarted/12-AccountMapping.JPEG" alt="YNAB Account Mapping" style="width: 100%; border-radius: 8px; border: 1px solid var(--border-color); box-shadow: 0 4px 10px rgba(0,0,0,0.15);" />
    <p style="font-size: 0.85em; color: var(--text-muted); margin-top: 8px;">Budget Account Mapping</p>
  </div>
</div>

---

### Step 3b (Optional): Connect Gmail Parser
If you wish to capture transaction alerts sent directly via email:
1. Under settings, select **Google Account Login**.
2. Perform Google OAuth login to authorize read-only access to transaction emails.
3. The email parser will scan incoming mail from verified banks in real-time.

<div style="display: flex; justify-content: center; margin: 20px 0;">
  <div style="max-width: 260px; text-align: center;">
    <img src="/wiki/images/QuickCatch/GettingStarted/06-GmailLogin.JPEG" alt="Gmail / Google OAuth Login" style="width: 100%; border-radius: 8px; border: 1px solid var(--border-color); box-shadow: 0 4px 10px rgba(0,0,0,0.15);" />
    <p style="font-size: 0.85em; color: var(--text-muted); margin-top: 8px;">Gmail Account Integration</p>
  </div>
</div>

---

### Step 4: Capture & Verify Your First Transaction
To test your setup:
1. Make a small purchase or trigger a notification from a payments app.
2. Tap the push notification generated by QuickCatch to review the transaction details in the list.
3. In the transaction list, you can edit the **Payee name**, adjust **Category mapping**, and select the **Account** before uploading to YNAB.
4. Tap upload to instantly sync the cleared entry into your budget ledger!

<div style="display: flex; flex-wrap: wrap; gap: 16px; justify-content: center; margin: 20px 0;">
  <div style="flex: 1; min-width: 200px; max-width: 260px; text-align: center;">
    <img src="/wiki/images/QuickCatch/MainScreen/MainScreen.JPEG" alt="QuickCatch Main Screen" style="width: 100%; border-radius: 8px; border: 1px solid var(--border-color); box-shadow: 0 4px 10px rgba(0,0,0,0.15);" />
    <p style="font-size: 0.85em; color: var(--text-muted); margin-top: 8px;">Pending Transactions List</p>
  </div>
  <div style="flex: 1; min-width: 200px; max-width: 260px; text-align: center;">
    <img src="/wiki/images/QuickCatch/MainScreen/EditPayee.JPEG" alt="Editing Payee Details" style="width: 100%; border-radius: 8px; border: 1px solid var(--border-color); box-shadow: 0 4px 10px rgba(0,0,0,0.15);" />
    <p style="font-size: 0.85em; color: var(--text-muted); margin-top: 8px;">Editing Payee Info</p>
  </div>
  <div style="flex: 1; min-width: 200px; max-width: 260px; text-align: center;">
    <img src="/wiki/images/QuickCatch/MainScreen/SelectCategory.JPEG" alt="Selecting YNAB Category" style="width: 100%; border-radius: 8px; border: 1px solid var(--border-color); box-shadow: 0 4px 10px rgba(0,0,0,0.15);" />
    <p style="font-size: 0.85em; color: var(--text-muted); margin-top: 8px;">Selecting Budget Category</p>
  </div>
</div>

---

## 💡 Practical Example: Accurate Transaction Entry in a Single Click

To see the power of QuickCatch, consider this common everyday use case at a gas station pump:

### Phase 1: The Temporary Pump Hold ($1.00)
1. **The Swipe**: You swipe your credit card at the pump to buy fuel.
2. **The Hold**: The gas station issues a temporary pre-authorization hold (typically **$1.00** or **$100.00**), which triggers an instant email alert from your card provider.
3. **The Interception**: QuickCatch catches the email. It parses the merchant (e.g. `Shell Oil`) and the temporary amount of `$1.00`.
4. **The User Choice**: Since you know this is just a hold, you click the notification to dismiss it directly from your status bar. This action automatically archives the source email alert in your Gmail account, clearing your inbox without you ever having to open the Gmail app.

### Phase 2: The Completed Transaction (One-Click YNAB Send)
1. **The Final Settlement**: After you finish fueling, the pump finishes and the final transaction (e.g. **$34.50**) settles, triggering a final notification or email confirmation.
2. **The Auto-Fill Match**: QuickCatch intercepts the final transaction. Instead of forcing you to type the details:
   * **Payee**: Automatically cleaned from `SHELL OIL #481729` to `Shell`.
   * **Account**: Automatically routed to your mapped Credit Card account via your account rules.
   * **Category**: Pre-filled to **"Gas/Fuel"** using Category Intelligence (based on your recent 3-month history).
3. **The One-Click Send**: A notification banner appears on your phone showing the pre-filled transaction parameters. You tap the **Send to YNAB** button directly on the push notification shade.

**One-click... caught, verified, and sent.** The transaction is logged in YNAB immediately, keeping your budget accurate without ever requiring you to open the QuickCatch app or manually type a single field.

---

> [!TIP]
> To test the notification parser and simulate transaction alerts safely without real credentials, perform a **Full App Reset** in the maintenance tools panel, launch the app in **Demo Mode**, and tap the **Simulate Bank Alert** button.
