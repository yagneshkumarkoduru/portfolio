# ES-FA - Event-Driven SNN Accelerator for Edge Physical Intelligence

**Author:** Yagnesh Kumar Koduru · **Repo:** [ES-FA-SNN-Accelerator](https://github.com/yagneshkumarkoduru/ES-FA-SNN-Accelerator) · **Manuscript:** IEEE TVLSI / TCAS-I draft in-repo

## Problem

Edge physical-intelligence systems (micro-drones, quadrupeds, prosthetic interfaces) need milliwatt-scale perception under <10 ms real-time latency. Dense CNNs burn MACs continuously regardless of input activity, which breaks power and thermal budgets on the edge.

## Approach

End-to-end hardware-software co-designed neuromorphic architecture in three tiers:

1. **Tier 1 - Synthesizable RTL:** Parameterizable multi-core array with 4-stage pipelined LIF processing elements, zero-bubble BRAM bank arbiters, and an on-chip STDP plasticity engine (single-cycle correlation check, Q1.7 fixed-point).
2. **Tier 2 - C99 cycle-accurate simulator:** Bit-exact engine at 59.9 GSOP/s with gate-level toggle energy telemetry (3.89 pJ/SOP).
3. **Tier 3 - .NET 9 host driver:** Lock-free DMA streaming at 26.46M packets/s with 37.8 ns dispatch latency, plus multiplier-free spike-driven FlashAttention.

Full LIF/STDP derivations and an architectural comparison guide ship in `docs/`.

## Evidence (simulation and post-synthesis analysis)

| Result | Scope |
|---|---|
| 95.70% test accuracy with zero degradation under hardware-aware regularization | Simulation, hardware-aware loss evaluation |
| 79.68% dynamic energy reduction from spike-frequency regularization | Simulation energy proxy |
| 6.3x energy-delay product reduction vs synchronous INT8 systolic arrays | Post-synthesis comparison |
| 576-cycle active-window latency | RTL simulation |

Physical board power and latency measurements remain future work. Nothing here is claimed as a measured silicon or board result.

## Why it matters

Shows hardware-software co-design end to end: PyTorch training, fixed-point simulator, synthesizable Verilog, and host driver, with theory, benchmarks, and a journal manuscript in one reproducible record.

## Next gate

Kria KV260 board measurement of power and latency against the simulated frontier.
