export type Project = {
  id: string;
  index: string;
  type: string;
  title: string;
  summary: string;
  story: string;
  evidence: string;
  metrics: string[];
  links?: { href: string; label: string }[];
};

export const projects: Project[] = [
  {
    id: "es-fa",
    index: "01",
    type: "Independent research",
    title: "ES-FA - Event-Driven SNN Accelerator on FPGA",
    summary: "Event-driven spiking neural network accelerator: recurrent PLIF training, synthesizable RTL with same-neuron hazard interlock, bit-exact C engine, and .NET 9 driver, verified end to end with open-source CAD flow and validation-based model selection.",
    story: "ES-FA combines quantized ALIF training with recurrent parametric neurons (RPLIF), event-driven temporal multiplexing, and synthesizable Verilog RTL with a same-neuron read-after-write interlock. Three tiers: parameterizable multi-core RTL with on-chip STDP and pipeline hazard protection, cycle-accurate C99 simulator, and .NET host driver with spike-driven FlashAttention. RTL verified without vendor tools: Icarus Verilog self-checking simulation (10/10 testbenches), Yosys mapping to 890 cells on ECP5, nextpnr-routed 132.29 MHz timing estimate. Training uses validation-based model selection (no test-set leakage) with class-stratified splits.",
    evidence: "The current v12 validation run completed 3 of 5 requested seeds before the host stopped. Validation-selected single-model test accuracy ranges from 81.32% to 87.85%; a three-member validation-selected committee reached 90.24% without TTA and 90.99% with TTA4 on one test draw. The current open-source CAD report has 10/10 supporting testbenches passing, including the directed back-to-back same-neuron hazard test.",
    metrics: [
      "90.24% three-member committee accuracy; 90.99% with TTA4 (one draw)",
      "81.32%-87.85% validation-selected single-model test accuracy (3 completed seeds)",
      "10/10 RTL testbenches passing; 890 cells; 132.29 MHz routed estimate",
      "8.97 Mpps streaming, 55.7 ns dispatch latency (.NET 9 HAL)",
      "Validation-based protocol: 3/5 requested seeds complete; test used for reporting only"
    ],
    links: [{ href: "https://github.com/yagneshkumarkoduru/ES-FA-SNN-Accelerator", label: "View on GitHub" }],
  },
  {
    id: "sgfa",
    index: "02",
    type: "Independent research",
    title: "Spike-Gated Sparse Attention - Multiplier-Free RTL",
    summary: "Temporal delta gating and two-term shift-add scoring composed in a synthesizable attention datapath.",
    story: "Spike-Gated FlashAttention combines persistent spike-mask state, XOR delta gating, signed power-of-two shift-add scoring, and deterministic winner-take-all routing with a margin output. The project consolidates the prior attention experiments into one source of truth.",
    evidence: "The current pipeline reports 4/4 Python tests, 50/50 RTL golden vectors, 3367 synthesized cells with zero multiplier cells, and 3.19x operation reduction on an SHD-derived spike raster. No board, power, timing-closure, or end-to-end accuracy claim is made.",
    metrics: [
      "50/50 RTL golden-vector conformance",
      "3367 synthesized cells with zero multiplier cells",
      "3.19x operation reduction on SHD-derived workload",
      "4/4 Python unit tests passing"
    ],
    links: [{ href: "https://github.com/yagneshkumarkoduru/SpikeGated-FlashAttention", label: "View on GitHub" }],
  },
  {
    id: "cce-qos",
    index: "03",
    type: "Independent research",
    title: "CCE-QOS - Constraint-Coupled Energy QUBO Scheduling",
    summary: "NPU compiler scheduling formulated as a QUBO with Adaptive Penalty Refinement and statistical workload sweep harness.",
    story: "This work models SRAM/DRAM bank constraints and energy as a binary quadratic program, maps operator DAGs to Ising Hamiltonians, and solves them with OR-Tools CP-SAT plus QAOA statevector simulation (p ≤ 4) under a classical APR loop. Added statistical multi-workload sweep harness for feasibility estimation across perturbed workloads. Related attention work is consolidated separately under Spike-Gated FlashAttention.",
    evidence: "Results are benchmark models and recorded solver metrics against a greedy baseline. No physical NPU or quantum hardware execution is claimed. Statistical sweep shows 70.96% +/- 9.79% CCE+APR feasibility across perturbed workload family.",
    metrics: [
      "70.96% +/- 9.79% CCE+APR feasibility (statistical sweep, perturbed workloads)",
      "25.62% scheduling energy reduction vs greedy (baseline)",
      "56.0% DRAM page-fault cut with paged KV-cache batching",
      "Statistical sweep harness: workload generator + multi-config evaluation"
    ],
    links: [{ href: "https://github.com/yagneshkumarkoduru/CCE-QOS", label: "View on GitHub" }],
  },
  {
    id: "pid",
    index: "04",
    type: "Control systems",
    title: "Precision-Drive Dynamics - Nonlinear Motor Control",
    summary: "From classical PID baselines to neural-adaptive sliding-mode control with safety filtering. Test suite and CI added.",
    story: "This project starts from classical PID, root-locus, and state-space LQR baselines, then advances to Stribeck friction modeling, a high-gain LESO disturbance observer, neural-adaptive super-twisting sliding-mode control, and a CBF voltage/current safety filter across three implementation tiers. Added pytest test suite with gpiozero/serial stubs and GitHub Actions CI workflow.",
    evidence: "All figures and metrics are simulation outputs. No physical motor measurements are included. Classical figures below are the Tier-0 baseline. Test suite passing locally with mocks for hardware dependencies.",
    metrics: [
      "88.4% reported rise-time reduction (classical baseline)",
      "1.03% reported overshoot under nominal load (classical baseline)",
      "LESO disturbance reconstruction plus CBF safety filter (advanced tiers)",
      "Test suite: pytest with hardware stubs, CI workflow added"
    ],
    links: [{ href: "https://github.com/yagneshkumarkoduru/Precision-Drive-Dynamics", label: "View on GitHub" }],
  },
  {
    id: "limen",
    index: "05",
    type: "Safety systems",
    title: "Limen - Safety Benchmark for EMG Intent Classification",
    summary: "Validation-based model selection for EMG gesture classification with temporal baseline comparison.",
    story: "Limen implements a safety-critical EMG intent classification benchmark with train/val/test splits and validation-based model selection. Compares classical LDA against temporal baselines with hysteresis. Test suite repaired with proper base class structure and CI workflow added.",
    evidence: "Synthetic benchmark dataset with configurable train/val/test splits. Validation-based selection ensures no test-set leakage. Test suite passing with proper class structure.",
    metrics: [
      "Validation-based model selection protocol",
      "Classical LDA vs Temporal baseline comparison",
      "Train/val/test split with class stratification",
      "Test suite: 21 tests passing, CI workflow added"
    ],
    links: [{ href: "https://github.com/yagneshkumarkoduru/Limen", label: "View on GitHub" }],
  },
  {
    id: "robohydro",
    index: "06",
    type: "Control systems",
    title: "Robotic-Hydro-Suspension - Hydraulic Actuator Control",
    summary: "Nonlinear hydraulic suspension control with disturbance observer and safety limits. Test suite and CI added.",
    story: "Robotic hydraulic suspension control with pressure-compensated flow control, disturbance observer for external load rejection, and position/velocity safety limits. Three tiers: classical PI, state-feedback with LESO, and nonlinear adaptive control. Test suite repaired with missing BaseSensor class and CI workflow added.",
    evidence: "All metrics are simulation outputs. No physical hydraulic measurements. Test suite passing with 17 tests, CI workflow active.",
    metrics: [
      "Pressure-compensated flow control with disturbance observer",
      "Position/velocity safety limits",
      "Three-tier control: PI, LESO, nonlinear adaptive",
      "Test suite: 17 tests passing, CI workflow added"
    ],
    links: [{ href: "https://github.com/yagneshkumarkoduru/Robotic-Hydro-Suspension", label: "View on GitHub" }],
  },
  {
    id: "evidencechain",
    index: "07",
    type: "Software systems",
    title: "EvidenceChain - Reproducible Experiment Tracking",
    summary: "Deterministic experiment tracking with validation-based model selection and stratified evaluation.",
    story: "EvidenceChain provides deterministic experiment tracking with fixed seeds, validation-based model selection, and stratified evaluation protocols. Ensures reproducible ML experiments with proper train/val/test splits and no test-set leakage. Test suite and CI added.",
    evidence: "Deterministic experiment tracking with validation-based selection. Stratified evaluation with repeated cross-validation. Test suite passing.",
    metrics: [
      "Validation-based model selection protocol",
      "Stratified repeated cross-validation",
      "Deterministic seeding and reproducibility",
      "Test suite: 52 tests passing, CI workflow added"
    ],
    links: [{ href: "https://github.com/yagneshkumarkoduru/EvidenceChain", label: "View on GitHub" }],
  },
  {
    id: "traffic-sign",
    index: "08",
    type: "Computer vision",
    title: "Autonomous-Traffic-Sign-Perception - STN + Event-RGB Fusion",
    summary: "Spatial Transformer Networks for traffic sign rectification with reproducible GTSRB training pipeline.",
    story: "Event-RGB cross-attention fusion for high-speed traffic sign perception with Spatial Transformer Networks (STN) for perspective rectification. Added reproducible GTSRB training pipeline with validation-based model selection, train/val/test splits, and STN support.",
    evidence: "GTSRB reproducible pipeline with val-based selection. STN for affine rectification. Clean protocol with no test-set leakage.",
    metrics: [
      "GTSRB reproducible pipeline with val-based selection",
      "STN for affine traffic sign rectification",
      "Train/val/test split with class stratification",
      "Reproducible training with fixed seeds"
    ],
    links: [{ href: "https://github.com/yagneshkumarkoduru/Autonomous-Traffic-Sign-Perception", label: "View on GitHub" }],
  },
];

export const projectsExtendedNote = "Spike-Gated FlashAttention is the consolidated attention research line. CCE-QOS remains the separate QUBO scheduling study with its statistical sweep harness. Physical-control research is under Precision-Drive-Dynamics and Robotic-Hydro-Suspension with test suites and CI. Safety-critical EMG classification is under Limen with validation-based selection. Event-RGB vision is under Autonomous-Traffic-Sign-Perception with a reproducible GTSRB pipeline. Deterministic experiment tracking is under EvidenceChain. Claims distinguish measured, simulated, modeled, and unverified results.";

export const skills = [
  "Python", "C/C++", "SystemVerilog", "PyTorch", "Qiskit",
  "RTL Verification", "Fixed-Point Embedded Systems", "FPGA Workflows",
  "Control Systems", "React", "Node.js", "CUDA", "Verilator", "Yosys",
  "Open-Source CAD (Icarus/Yosys/nextpnr)", "Validation-Based Model Selection",
  "Reproducible ML Protocols", "Statistical Workload Analysis", "CI/CD"
];
