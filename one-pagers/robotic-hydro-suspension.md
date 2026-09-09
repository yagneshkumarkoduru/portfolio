# Robotic Hydro-Suspension - Active MRHP Suspension with Safety-Filtered Preview Control

**Author:** Yagnesh Kumar Koduru · **Repo:** [Robotic-Hydro-Suspension](https://github.com/yagneshkumarkoduru/Robotic-Hydro-Suspension) · **Manuscript:** IEEE TCST draft in-repo

## Problem

Off-road autonomy forces a trade-off between payload ride stability (protecting LiDAR, cameras, IMU stacks from high-G shocks) and road traction (preserving tire contact within rattlespace limits). Passive springs pick one side and lose the other - soft damping bottoms out, stiff damping shakes the payload and loses grip.

## Approach

Active magnetorheological hydro-pneumatic (MRHP) suspension with multi-horizon control:

1. **Smart-fluid medium:** LORD MRF-132DG magnetorheological fluid (32 vol% carbonyl iron) with a 3.2 MPa nitrogen hydropneumatic accumulator, modeled by Bingham-Papanastasiou rheology with Arrhenius thermal tracking to 60 C.
2. **Preview control:** 2-DOF quarter-car model with physics-informed preview NMPC on a 120 ms LiDAR lookahead, plus a 1 kHz high-order control barrier function (HOCBF) safety filter guaranteeing the stroke envelope.
3. **Three implementation tiers:** STM32 FreeRTOS / Raspberry Pi 4 over SocketCAN with CRC-15 (Tier 1), 10 kHz PWM current regulation with back-EMF decoupling (Tier 2), edge PINN cavitation observer with differentiable QP safety filter (Tier 3).

## Evidence (simulation benchmarks)

| Result | Scope |
|---|---|
| Bump benchmark: 0.785 m/s² RMS vs 2.184 passive, peak 2.104 vs 6.421, stroke 31.00 vs 41.21 mm - strictly verified safe | 45 mm cosine-bump simulation |
| MR-damper benchmark: 56.9% vibration attenuation, <1.2 ms actuation lag, 55.8% rattlespace margin | Multi-frequency excitation simulation |
| Stroke envelope forward invariance | HOCBF theorem plus simulation |

Results are simulation benchmarks with a stated manuscript proof, not physical vehicle measurements. Bench and road validation remain future work.

## Why it matters

Fuses non-Newtonian rheology, thermodynamics, nonlinear control, and embedded telemetry (CAN, IMU) into one vehicle program with three runnable tiers - the mechatronics counterpart to the chip-level portfolio.

## Next gate

Instrumented bench test of the MR damper loop, then a logged bump-course run against the simulated table.
