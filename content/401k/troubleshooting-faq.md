+++
title = "Troubleshooting & FAQ"
type = "docdock"
weight = 40
+++

# Troubleshooting & Frequently Asked Questions

Find answers to common questions about payroll timing, 401(k) match rules, and mathematical adjustments.

---

## ❓ Frequently Asked Questions

### 1. Why does the last paycheck contribute a slightly different amount?
Because annual salaries, federal limits ($24,500), and pay periods (26 checks) do not divide into perfectly round cents, there is often a fractional remainder of a few dollars or cents:
*   On Check #26, the engine caps your contribution at the exact remaining amount required to reach $24,500.00 without going over.
*   If your plan paces evenly (e.g. `$942.31` per check), the 26th check adjusts by a few pennies (e.g., `$942.25`) to close the year at exactly `$24,500.00`.

---

### 2. What is a "True-Up" provision, and does it apply to me?
*   **Without True-Up (Most Common)**: Employer matching is strictly calculated per paycheck. If you contribute $0 on Checks #20–#26 because you maxed out early, your employer deposits $0 match for those checks. Those matching funds are permanently lost.
*   **With True-Up**: At the end of the calendar year (or Q1 of the following year), the employer runs a year-end audit and deposits a lump-sum match catch-up payment.
*   **Recommendation**: Unless you have confirmed in writing with your HR/Benefits department that your plan includes an unconditional annual true-up, always follow the **Calibrated Glide Plan** to protect your matching dollars on every single paycheck.

---

### 3. When is the best time to log into my 401(k) portal to change my rate?
Most corporate payroll systems (Fidelity NetBenefits, Vanguard, Empower, ADP, Paychex) operate on a **payroll cutoff window** (usually 2 to 5 business days prior to payday):
*   **Step 1**: Wait until your bonus or merit check **pays / processes** (Check #6).
*   **Step 2**: Log into your portal right after Check #6 deposits to update your deferral percentage to the **Phase 3 Post-Bonus Rate**.
*   **Step 3**: The updated rate will automatically take effect on Check #7.

---

### 4. What if my employer only allows whole integer percentages?
Select **Option 1: Whole-Integer Strategy (Match Protector)**:
*   The engine will calculate a starting rate (e.g., `15%`), drop you to a safe whole integer (e.g., `10%`) after your bonus, and recommend a whole-integer step-up (e.g., `11%`) for your final checks.
*   This completely eliminates the rounding shortfall while ensuring you never cap out early.

---

### 5. Can I contribute $0 from my bonus and keep my salary pace steady?
**Yes.** If your company allows you to set a separate bonus deferral rate, simply toggle **Annual Lump-Sum Bonus Payout** to **Disabled** (or enter `$0` bonus contribution). The engine will calculate a steady, year-round rate across your regular salary checks.

---

### 6. Where is my financial information stored?
**Nowhere on the internet.** 
*   The 401(k) Optimizer runs 100% client-side in your browser's JavaScript sandbox.
*   All values are stored only in your local browser's cache (`localStorage`).
*   You can back up or clear your data at any time using the **Export JSON** and **Reset to Defaults** buttons.

---

## ✉️ Support & Questions
If you have questions, feedback, or formula feature requests, feel free to reach out:
*   **Email**: `support [at] trinhism.com`
*   **Labs Suite**: [trinhism.com/app/](https://trinhism.com/app/)
