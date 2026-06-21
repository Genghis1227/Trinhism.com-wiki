+++
title = "Wiki Main Hub Page"
type = "docdock"
+++

# Trinhism Wiki Hub

Welcome to the central documentation hub for **Trinhism** software applications. This wiki contains comprehensive technical specifications, setup workflows, and operational guides designed to help you integrate and manage your local financial tools.

Use the sidebar navigation or the quick links below to explore the documentation.

---

## 💳 QuickCatch
**QuickCatch** is an automated Android companion application that bridges the gap between transaction swiping and budgeting. By listening to incoming push notifications and emails from major financial institutions, it parses transaction details locally and instantly updates your You Need A Budget (YNAB) ledger via the official YNAB API.

*   🚀 **[Getting Started](./QuickCatch/getting-started/)**: Prerequisites, notification access configuration, and YNAB OAuth authorization steps.
*   ⚙️ **[Core Concepts & Integrations](./QuickCatch/core-concepts/)**: The background sync workflow, Room DB design, and YNAB connectivity specifications.
*   🧠 **[Key Features & Settings](./QuickCatch/features-settings/)**: Sanitizing payee names, setting up Venmo/Zelle filters, and background battery bypass optimization.
*   🔍 **[Troubleshooting & FAQ](./QuickCatch/troubleshooting-faq/)**: Quick fixes for API authentication errors, missed notification alerts, and general FAQs.

---

## 📈 FinanceWidget
**FinanceWidget** is a lightweight, borderless Windows desktop widget runtime designed to display real-time stock, ETF, and portfolio charts. By injecting custom CSS and coordinate-based DOM cleanups into WebView2 sandboxes, it isolates stock details from Google Finance to render a clean visual overlay on your workspace.

*   🚀 **[Getting Started](./FinanceWidget/getting-started/)**: WebView2 prerequisites, system tray controller guide, and adding ticker parameters.
*   ⚙️ **[Core Concepts & Layouts](./FinanceWidget/core-concepts/)**: WebView2 DOM scripts, local state serialization (`appsettings.json`), and dividend portfolio setups.
*   🎨 **[Customization & Modules](./FinanceWidget/customization-modules/)**: Borderless HUD toggle, bulk transaction CSV importing, and debt snowball visual charts.
*   🔍 **[Troubleshooting & FAQ](./FinanceWidget/troubleshooting-faq/)**: Recovery steps for frozen charts, broken tickers, config corruption, and startup launch settings.

---

## ✉️ Support & Inquiries
For technical support, reporting bug behaviors, or requesting feature whitelists, please reach out to the appropriate contact:
*   **QuickCatch Inquiries**: **quickcatch [at] trinhism.com**
*   **FinanceWidget Inquiries**: **support [at] trinhism.com**

Alternatively, you may open an issue directly on the respective application's repository dashboard.
