+++
title = "Wiki Main Hub Page"
type = "docdock"
+++

# Trinhism Wiki Hub

Welcome to the central documentation hub for **Trinhism** software applications. This wiki contains comprehensive technical specifications, setup workflows, and operational guides designed to help you integrate and manage your local financial tools.

Use the sidebar navigation or the quick links below to explore the documentation.

---

<p align="center">
  <img src="/wiki/images/quickcatch-logo.png" alt="QuickCatch Logo" width="100" />
</p>

## QuickCatch
**QuickCatch** is an automated Android companion application that bridges the gap between transaction swiping and budgeting. By listening to incoming push notifications and emails from major financial institutions, it parses transaction details locally and instantly updates your You Need A Budget (YNAB) ledger via the official YNAB API.

*   🚀 **[Getting Started](/wiki/quickcatch/getting-started/)**: Prerequisites, notification access configuration, and YNAB OAuth authorization steps.
*   ⚙️ **[Core Concepts & Integrations](/wiki/quickcatch/core-concepts/)**: The background sync workflow, Room DB design, and YNAB connectivity specifications.
*   🧠 **[Key Features & Settings](/wiki/quickcatch/features-settings/)**: Sanitizing payee names, setting up Venmo/Zelle filters, and background battery bypass optimization.
*   🔍 **[Troubleshooting & FAQ](/wiki/quickcatch/troubleshooting-faq/)**: Quick fixes for API authentication errors, missed notification alerts, and general FAQs.

---

<p align="center">
  <img src="/wiki/images/financewidget-logo.png" alt="FinanceWidget Logo" width="100" />
</p>

## FinanceWidget
**FinanceWidget** is a lightweight, borderless Windows desktop widget runtime designed to display real-time stock, ETF, and portfolio charts. By injecting custom CSS and coordinate-based DOM cleanups into WebView2 sandboxes, it isolates stock details from Google Finance to render a clean visual overlay on your workspace.

*   🚀 **[Getting Started](/wiki/financewidget/getting-started/)**: WebView2 prerequisites, system tray controller guide, and adding ticker parameters.
*   ⚙️ **[Core Concepts & Layouts](/wiki/financewidget/core-concepts/)**: WebView2 DOM scripts, local state serialization (`appsettings.json`), and dividend portfolio setups.
*   🎨 **[Customization & Modules](/wiki/financewidget/customization-modules/)**: Borderless HUD toggle, bulk transaction CSV importing, and debt snowball visual charts.
*   🔍 **[Troubleshooting & FAQ](/wiki/financewidget/troubleshooting-faq/)**: Recovery steps for frozen charts, broken tickers, config corruption, and startup launch settings.

---

## 401(k) Optimizer
**401(k) Optimizer** is a high-precision, client-side financial calibration engine designed to help employees max out their annual IRS elective deferral limits without forfeiting per-paycheck company match under non-true-up employer plans.

*   🚀 **[Getting Started](/wiki/401k/getting-started/)**: Parameter setup, IRS federal limits, SECURE 2.0 catch-ups, and running calibrations.
*   ⚙️ **[Core Mathematical Concepts](/wiki/401k/core-concepts/)**: Match forfeiture mechanics, the 4-Phase Strategy, and zero-shortfall whole-integer step-up math.
*   🧠 **[Features & Strategy Options](/wiki/401k/features-strategies/)**: Option 1 Match Protector vs Option 2 Exact Decimal Glide, Custom Pace benchmarks, and JSON export/import.
*   🔍 **[Troubleshooting & FAQ](/wiki/401k/troubleshooting-faq/)**: Handling mid-year raises, bonus timing windows, true-up rules, and data privacy.

---

## ✉️ Support & Inquiries
For technical support, reporting bug behaviors, or requesting feature whitelists, please reach out to the appropriate contact:
*   **QuickCatch Inquiries**: contact **quickcatch [at] trinhism.com** or join the [QuickCatch Google Group](https://groups.google.com/g/quickcatch) for discussions and support.
*   **FinanceWidget & 401(k) Optimizer Inquiries**: **support [at] trinhism.com**

