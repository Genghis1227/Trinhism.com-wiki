+++
title = "Core Mathematical Concepts"
type = "docdock"
weight = 20
+++

# Core Mathematical Concepts

Understanding the underlying mathematics of payroll pacing and employer match allocation ensures you never accidentally leave free company matching funds on the table.

---

## ⚠️ The Non-True-Up Match Forfeiture Dilemma

Most employer 401(k) plans calculate and deposit matching funds **on a per-paycheck basis**:

$$\text{Employer Match Check } p = \min(\text{Employee Deferral Rate } p, \text{Match Cap \%}) \times \text{Gross Pay } p$$

### Why Front-Loading Causes Financial Loss
If an employee aggressively front-loads contributions (or receives a large bonus with 401(k) deductions) and reaches the IRS limit by Check #18:
1.  On Checks #19 through #26, the payroll system enforces the federal maximum and automatically sets employee contributions to **$0.00**.
2.  Because the employee's contribution for Checks #19–#26 is $0.00, the employer's match for those 8 paychecks is also **$0.00**.
3.  **Result**: Unless the employer has an explicit **True-Up Provision** calculated at year-end, the matching dollars for those final 8 paychecks are permanently forfeited.

```
Front-Loaded Pacing (Early Cap-Out):
Check:   #1  #2  ...  #18  |  #19  #20  ...  #26
Contrib: $$$ $$$      $$$  |  $0   $0        $0   ➔ HIT $24,500 CAP EARLY
Match:   $$  $$       $$   |  $0   $0        $0   ➔ FORFEITED MATCH (-$3,200)

Optimized Calibrated Glide:
Check:   #1  #2  ...  #18  |  #19  #20  ...  #26
Contrib: $$  $$       $$   |  $$   $$        $$   ➔ HITS EXACT $24,500 ON #26
Match:   $$  $$       $$   |  $$   $$        $$   ➔ 100% MATCH SECURED ($0 LOST)
```

---

## 📐 Mathematical Calibration Architecture

To guarantee the employee contributes across all $N$ pay periods while hitting the federal limit $L$, the engine calculates the required deferral rate dynamically in multiple phases:

### 1. Target Baseline Rate (Unadjusted)
$$\text{Target Rate \%} = \frac{L / N}{\text{Base Gross Per Check}} \times 100$$

### 2. Recalibrated Post-Bonus Glide Rate
When a bonus of gross amount $B_{\text{gross}}$ with contribution $B_{\text{contrib}}$ occurs on period $P_{\text{bonus}}$:

$$\text{Pre-Bonus Contributed} = \sum_{p=1}^{P_{\text{bonus}}-1} (\text{Gross}_p \times R_{\text{pre}}) + (\text{Gross}_{P_{\text{bonus}}} \times R_{\text{pre}} + B_{\text{contrib}})$$

$$\text{Remaining Balance Needed} = L - \text{Pre-Bonus Contributed}$$

$$\text{Remaining Pay Periods} = N - P_{\text{bonus}}$$

$$\text{Calibrated Glide Rate \%} = \frac{\text{Remaining Balance Needed} / \text{Remaining Pay Periods}}{\text{Average Post-Bonus Check Gross}} \times 100$$

---

## ⚡ The Whole-Integer Zero-Shortfall Step-Up Solution

Many brokerage portals (e.g., Fidelity, Vanguard, ADP) do not accept fractional percentages (such as `10.11%`). Users are forced to choose between:
*   **Rounding Up (`11%`)**: Caps out early, forfeiting employer matching on final checks.
*   **Rounding Down (`10%`)**: Protects match on all 26 checks, but results in a contribution shortfall (e.g., falling `$840` short of the `$24,500` limit).

### How the Engine Solves This:
The 401(k) Optimizer implements an optimal **Whole-Integer Step-Up Algorithm**:

1.  **Phase 1**: Round up initial rate to integer $R_{\text{pre}} = \lceil \text{Target Rate} \rceil$ (e.g., `15%`).
2.  **Phase 3**: After bonus, drop to safe floor rate $R_{\text{floor}} = \lfloor \text{Glide Rate} \rfloor$ (e.g., `10%`).
3.  **Shortfall Calculation**:
    $$\text{Shortfall} = \text{Remaining Balance Needed} - (\text{Remaining Periods} \times \text{Gross} \times R_{\text{floor}})$$
4.  **Step-Up Checks Count**:
    $$\text{Dollars Per 1\% Increase Per Check} = \text{Gross} \times 0.01$$
    $$\text{Step-Up Check Count } K = \text{round}\left(\frac{\text{Shortfall}}{\text{Dollars Per 1\%}}\right)$$
5.  **Phase 4**: Switch rate to $R_{\text{ceil}} = R_{\text{floor}} + 1$ (e.g., `11%`) for the final $K$ paychecks (Checks $N - K + 1$ to $N$).

**Outcome**: You contribute on all 26 paychecks, receive 100% employer match, and max out the federal limit down to the exact dollar!

---

## 👴 Catch-Up Contributions & SECURE 2.0

Under IRS regulations and the SECURE 2.0 Act, retirement savers aged 50 and older can contribute beyond the standard limit:

| Catch-Up Tier | Age Requirement | Standard Limit | Catch-Up Amount | Total Federal Limit |
| :--- | :--- | :--- | :--- | :--- |
| **Standard** | Under 50 | `$24,500` | `$0` | **`$24,500`** |
| **Age 50–59** | Ages 50 through 59 | `$24,500` | `+$8,000` | **`$32,500`** |
| **Age 60–63 Enhanced** | Ages 60, 61, 62, 63 | `$24,500` | `+$11,500` | **`$36,000`** |
