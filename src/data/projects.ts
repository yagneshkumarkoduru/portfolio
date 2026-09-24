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
    summary: "Event-driven spiking neural network accelerator: bounded ALIF training, synthesizable RTL with same-neuron hazard interlock, bit-exact C engine, and .NET 9 driver, verified end to end with open-source CAD flow and validation-based model selection.",
    story: "ES-FA combines quantized bounded ALIF training with recurrent parametric neurons, event-driven temporal multiplexing, and synthesizable Verilog RTL with a same-neuron read-after-write interlock. Three tiers: parameterizable multi-core RTL with on-chip STDP and pipeline hazard protection, cycle-accurate C99 simulator (4.43 pJ/SOP energy model), and .NET host driver with spike-driven FlashAttention. RTL verified without vendor tools: Icarus Verilog self-checking simulation (10/10 testbenches), Yosys mapping to 890 cells on ECP5, nextpnr-routed 132.29 MHz timing estimate. Training uses validation-based model selection (no test-set leakage) with class-stratified splits.",
    evidence: "The v12 campaign completed on SHD benchmark. Best single seed: 97.03%. 7-member committee: 92.73% ±0.14% accuracy. Direct baseline: +4.24pp over snntorch Leaky with identical architecture. PLIF variant achieves 91.6%/71.9% hidden sparsity with 92.9% SOP reduction vs dense baseline. Open-source CAD: 10/10 testbenches passing, 890 cells, 132.29 MHz routed.",
    metrics: [
      "97.03% best single-seed accuracy (SHD benchmark)",
      "92.73% ±0.14% committee accuracy (7-seed ensemble)",
      "+4.24pp over snntorch Leaky baseline (identical architecture)",
      "91.6%/71.9% hidden sparsity; 92.9% SOP reduction vs dense",
      "890 ECP5 cells; 132.29 MHz routed (open-source CAD verified)",
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
    summary: "NPU compiler scheduling formulated as a QUBO with Adaptive Penalty Refinement, validated on Amazon Braket QPU hardware (IonQ Forte, QuEra Aquila).",
    story: "This work models SRAM/DRAM bank constraints and energy as a binary quadratic program, maps operator DAGs to Ising Hamiltonians, and solves them with OR-Tools CP-SAT plus QAOA statevector simulation (p <= 4) under a classical APR loop. Executed real quantum hardware runs on Amazon Braket: IonQ Forte Enterprise 1 (trapped-ion) and QuEra Aquila (neutral-atom analog). CP-SAT certifies OPTIMAL at 64 nodes. Statistical multi-workload sweep harness validates feasibility across perturbed workloads.",
    evidence: "Results include Amazon Braket QPU execution (IonQ chain3 p=1: 0.6954 ratio vs 0.6956 ideal - within shot noise). Statistical sweep: 70.96% +/- 9.79% CCE+APR feasibility vs 54.8% +/- 6.8% Lookahead baseline (+16.1pp improvement). Cost reduction: 26.47% (Lookahead vs greedy). CP-SAT scales to 128 nodes with 69s wall time. Total QPU spend: ~$908.",
    metrics: [
      "+16.1pp feasibility over baseline (70.96% vs 54.8%, statistical sweep)",
      "26.47% cost reduction (Lookahead vs greedy baseline)",
      "Amazon Braket QPU validated: IonQ Forte + QuEra Aquila",
      "CP-SAT certifies OPTIMAL at 64 nodes (5.6-109.3s solve time)",
      "+10.3pp KV-cache hit rate; 9.5% TTFT reduction (prefix-locality)"
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
    summary: "Confidence-coupled safety envelope for EMG intent classification with C firmware golden-vector conformance and sub-millisecond latency.",
    story: "Limen implements a deterministic safety layer for biosignal-driven actuator control. The envelope monitors confidence and signal quality, transitioning between NOMINAL/DEGRADED/SAFE_HALT states. Fixed-point C firmware reproduces Python simulation exactly (30/30 golden vectors, CRC32 verified). Profile compiler generates firmware headers, RTL parameters, and test vectors from a single JSON spec.",
    evidence: "20/20 Python tests (6 envelope + 4 scheduler + 5 profile + 5 negotiation). 30/30 C firmware golden-vector conformance (model CRC32: 0x5D9CA66A). Safety performance under fault injection: 98.8% accuracy vs 100% clean (electrode dropout + motion artifact), 0.0% false activation rate, 300 safe-halt events correctly triggered. p95 end-to-end latency: 0.98-1.07ms on workstation. Synthetic benchmark only - no real EMG or embedded hardware yet.",
    metrics: [
      "98.8% accuracy under fault injection (0.0% false activation rate)",
      "300/300 safe-halt events triggered correctly on injected faults",
      "30/30 C firmware golden-vector conformance (CRC32 verified)",
      "p95 end-to-end latency: 0.98-1.07ms (workstation, simulated)"
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
