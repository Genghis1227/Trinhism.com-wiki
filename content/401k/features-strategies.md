+++
title = "Features & Strategy Options"
type = "docdock"
weight = 30
+++

# Features & Strategy Options

The **401(k) Max & Bonus Calibration Engine** is equipped with interactive features and algorithmic strategy presets tailored to your employer's portal capabilities.

---

## 🧭 Strategy Recommendation Presets

The engine compares your parameters against two primary strategy presets:

### Option 1: Whole-Integer Strategy (Match Protector)
*   **Best For**: Employees whose 401(k) brokerage or payroll portals only permit **whole integer percentages** (e.g. `10%`, `11%`).
*   **How it Works**: Sets an initial integer rate for early checks, drops to a safe floor rate after the bonus, and automatically steps up to an integer rate for the final $K$ checks.
*   **Result**: 100% company match secured, zero early capping risk, and zero contribution shortfall.

### Option 2: Exact Portal Rate (Exact Decimal Glide)
*   **Best For**: Employees whose portals support **fractional decimal percentages** (e.g. `10.11%`, `14.26%`).
*   **How it Works**: Calculates the exact continuous mathematical rate required across remaining pay periods.
*   **Result**: Single mid-year rate adjustment with no final step-up needed.

---

## 📋 Interactive 4-Phase Action Plan

The action plan translates complex mathematical models into four clear, sequential instructions:

```
[ Phase 1: Start of Year ] ➔ [ Phase 2: Portal Change Window ] ➔ [ Phase 3: Calibrated Glide ] ➔ [ Phase 4: Step-Up to Max ]
```

1.  **Phase 1 (Start of Year)**:
    *   *Action*: Enter the initial recommended deferral rate into your 401(k) portal at the start of January.
    *   *Editable Input*: Adjust the starting percentage directly if you prefer a different pace.
2.  **Phase 2 (Portal Change Window)**:
    *   *Action*: Highlights the exact calendar timing to log into your brokerage portal (immediately after your bonus or merit paycheck pays, and before the payroll cutoff for the subsequent check).
3.  **Phase 3 (Calibrated Glide)**:
    *   *Action*: Switch your portal rate to the calibrated glide rate for your mid-year checks.
    *   *Editable Input*: Customize the post-bonus rate on the fly.
4.  **Phase 4 (Final Step-Up to Max)**:
    *   *Action*: Step up your rate for the final designated paychecks to hit the exact federal limit without rounding shortfall.
    *   *Editable Inputs*: Customize both the **Step-Up Rate (%)** and the **Starting Check #** dynamically.

---

## 🧪 Benchmark Comparison Sandbox (Custom Pace)

Want to see what happens under an alternative savings rate?
1.  Toggle **Custom Benchmark Pace** to **Enabled**.
2.  Set any custom deferral rate (e.g., `25.00%` aggressive pace).
3.  *(Optional)* Toggle **Include Bonus in Custom Pace** to test how bonus withholding impacts your early cap date.
4.  The schedule table adds dedicated **Custom Pace** and **Custom Cumulative** columns, highlighting early cap dates in rose badges and calculating exact forfeited match dollars.

---

## 🔒 100% Client-Side Privacy & Local Storage

*   **Zero Cloud Storage**: No salary, bonus, or retirement data is ever sent across the network or stored in cloud databases.
*   **Browser Cache (`localStorage`)**: All input values, catch-up tiers, and toggle states are saved locally in your browser so your plan persists across refreshes.
*   **Portable JSON Backups**:
    *   💾 **Export JSON**: Download your full plan configuration to a lightweight `.json` file for offline storage or comparison between multiple salary scenarios.
    *   📂 **Import JSON**: Upload your saved `.json` file at any time to instantly restore all settings.

---

## 🖨️ Print & PDF Plan Export

Click the **Print / PDF** button in the header to generate a clean, printer-optimized one-page summary report:
*   Automatically hides interactive sliders, navigation drawers, and screen-only elements.
*   Formats the 26-period schedule table, totals footer, and action timeline into a clean executive document ready for archiving or sharing with a financial advisor.
