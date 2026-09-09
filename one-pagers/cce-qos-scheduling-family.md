# CCE-QOS Family - Hardware-Aware NPU Scheduling and Compilation

**Author:** Yagnesh Kumar Koduru · **Lead repo:** [CCE-QOS](https://github.com/yagneshkumarkoduru/CCE-QOS) · **Consolidated pipeline:** [NPU-Optimization-Suite](https://github.com/yagneshkumarkoduru/NPU-Optimization-Suite)

## Problem

Global multi-operator scheduling across multi-bank SRAM hierarchies is dominated by greedy heuristics that cause bank conflicts and DRAM page faults. Kernel compilers (TVM, XLA, MLIR) optimize local loops; the global schedule is the gap. DRAM costs 100-200 pJ/Byte vs 1-2 pJ/Byte for on-chip SRAM, so schedule quality is energy quality.

## Approach

Two complementary records, not two independent wins:

1. **CCE-QOS (scheduling formulation):** Constraint-Coupled Energy QUBO Hamiltonian for DAG scheduling, memory allocation, and bank-conflict minimization, solved by Adaptive Penalty Refinement (APR: zero-violation convergence proof) over OR-Tools CP-SAT plus QAOA statevector simulation. Extended to LLM KV-cache paging with continuous batching.
2. **NPU-Optimization-Suite (consolidated pipeline):** Three-tier compiler absorbing the memory-hierarchy, polyhedral-fusion, and solver studies - Tier 1 polyhedral loop tiling with TVM-TIR emission, Tier 2 Roofline analysis with ping-pong DMA double-buffering, Tier 3 QAP chiplet placement with speculative tree verification.

## Evidence (benchmark-driven, greedy baselines)

| Result | Source repo | Scope |
|---|---|---|
| 25.62% scheduling energy cut, 0 violations, 79.5% fewer pipeline stalls | CCE-QOS | Benchmark simulation |
| 58.06% feasible schedules, Quantum + APR path | CCE-QOS | Benchmark metrics |
| 56.0% DRAM page-fault cut, 3.54x token-generation speedup | CCE-QOS KV-cache | Benchmark simulation |
| 60.29x DRAM traffic relief, 99.17% L1 hit rate | Suite Tier 1 | Benchmark simulation |
| 1.82x throughput, 45.10% memory latency hidden | Suite Tier 2 | Benchmark simulation |
| 1.91x LLM verification speedup, 37.81% interconnect energy cut | Suite Tier 3 | Benchmark simulation |

Note: both repos report a 25.62% energy figure - the scheduling-level result and the pipeline total respectively, per their own READMEs. Treat as one lineage, not two independent victories. No physical NPU or quantum hardware execution is claimed.

## Why it matters

Connects optimization theory (QUBO, APR convergence proof, Roofline, polyhedral geometry) to a runnable compiler pipeline with exact tables, plots, and CI, plus TCAD manuscript material.

## Next gate

Matched measurement on a named NPU target and a fixed greedy baseline under one evidence ledger.
