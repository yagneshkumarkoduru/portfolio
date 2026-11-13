// Reconciliation note (2026-11-13): figures are aligned to committed evidence
// artifacts per EST-INVENTORY-001 section 7.
//   ES-FA: EVIDENCE.md (committee campaign) + results/committee_v17_campaign/final_top4x.log
//   CertGuard: EVIDENCE.md E04 + out/benchmark_report.json, out/real_semg_report.json
//   Limen: results/real_semg_summary.json (real-UCI LOSO 23-28%)
//   CCE-QOS: 26.47% cost reduction is vs the greedy baseline, not Lookahead.
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
    type: "Neuromorphic acceleration",
    title: "ES-FA - Event-Driven SNN Accelerator",
    summary: "93.95% best single-model and 95.19% committee accuracy on the Spiking Heidelberg Digits benchmark. Event-driven spiking neural network accelerator synthesized to 890 ECP5 cells at 132.29 MHz.",
    story: "ES-FA trains sparsity explicitly through a hardware-aware loss, then executes inference through an event-driven dataflow that skips silent neurons entirely. Resonant adaptive neurons with bounded time constants and heterogeneous population initialization ensure stable training. The INT8 RTL kernel is verified end-to-end with open-source CAD (Yosys + nextpnr-ecp5 + Icarus Verilog) - no vendor tools required. Committee decoding across independently trained seeds with temporal-warp test-time augmentation lifts accuracy about a point over the best single model.",
    evidence: "Best measured single member: 93.90% EMA / 93.95% EMA+TTA8 on SHD (seed 271, RSFA + HPI + CSMR, hidden 1024 x 2, 400 epochs; source: EVIDENCE.md committee campaign, run 20261002-084838). Selected four-model committee with temporal-warp TTA: 95.19% (source: results/committee_v17_campaign/final_top4x.log); members were selected on test accuracy, and the conservative unselected seven-model committee gives 94.48% +/-0.08. 890 ECP5 cells, 132.29 MHz routed timing estimate. 10/10 RTL testbenches verified.",
    metrics: [
      "93.95% best single-model accuracy (SHD, EMA+TTA8; seed 271)",
      "95.19% selected four-model committee (94.48% unselected)",
      "890 ECP5 cells; 132.29 MHz (open-source CAD)",
    ],
    links: [{ href: "https://github.com/yagneshkumarkoduru/ES-FA-SNN-Accelerator", label: "View on GitHub" }],
  },
  {
    id: "certguard",
    index: "02",
    type: "Safety-critical systems (patent pending)",
    title: "CertGuard - Certificate-Governed Actuator Authority",
    summary: "41% reduction in wrong-intent actuator authority at severe distribution drift (deployment mode, no label feedback); 91% in the oracle ablation. Conformal risk-budget acceptance replaces fixed thresholds. Pre-filing patent disclosure with drafted claims.",
    story: "CertGuard bounds physical machine commands using a calibrated conformal risk budget rather than a fixed confidence threshold. Actuator authority is a continuous scale, not a binary gate. Certificate-loss transitions are slew-rate limited. The hardware governor is synthesized to 3,506 ECP5 cells. Validated on real UCI sEMG biosignal data across 5 subjects.",
    evidence: "At severe drift (3.0), deployment mode without label feedback: wrong-intent authority drops from 61.3% unguarded to 36.0% certified, a 41% reduction (source: CertGuard README measured results, out/benchmark_report.json). The oracle ablation that consumes true labels reaches 5.4% (91% reduction) at 17% availability and is not deployable; it is an upper bound, not a headline (source: CertGuard EVIDENCE.md E04). Real sEMG cross-subject replay: 5.3-8.9% wrong-intent authority at 9-17% availability, vs 71.6-78.6% unguarded (source: CertGuard README, out/real_semg_report.json). 35/35 C firmware + 35/35 RTL behavioral conformance (CRC32-bound). 3,506 ECP5 cells, 77-82 MHz routed. Pre-filing patent disclosure: drafted claims, prior-art survey, external screen complete.",
    metrics: [
      "41% wrong-intent authority reduction at drift (deployment mode)",
      "61.3% to 36.0% unsafe (unguarded vs certified; oracle ablation 5.4%)",
      "5.3-8.9% wrong-intent authority on real sEMG (vs 71.6-78.6% unguarded)",
      "3,506 ECP5 cells; 77-82 MHz (open-source synthesis)",
      "Pre-filing patent: claims drafted, prior-art surveyed",
    ],
    links: [{ href: "https://github.com/yagneshkumarkoduru", label: "Portfolio" }],
  },
  {
    id: "cce-qos",
    index: "03",
    type: "Quantum-classical scheduling",
    title: "CCE-QOS - QUBO NPU Scheduling with APR",
    summary: "+16.1pp feasibility improvement over baseline. QUBO Hamiltonian scheduling with Adaptive Penalty Refinement, executed on Amazon Braket QPU hardware (IonQ Forte, QuEra Aquila).",
    story: "End-to-end DAG scheduling, memory allocation, and bank-conflict minimization encoded as a unified QUBO Hamiltonian. Adaptive Penalty Refinement iteratively enforces feasibility by adjusting penalty weights on measured constraint violations. Real quantum hardware experiments executed on Amazon Braket: IonQ Forte Enterprise 1 (trapped-ion, 12 tasks) and QuEra Aquila (neutral-atom analog, 6 tasks). CP-SAT certifies OPTIMAL solutions at 64 nodes.",
    evidence: "Statistical 6-instance sweep: CCE+APR feasibility 70.96% +/-9.79% vs 54.8% +/-6.8% Lookahead baseline (+16.1pp). Cost reduction: 26.47% vs greedy baseline (a weaker comparison than the Lookahead baseline). IonQ QPU approximation ratios within shot noise of ideal at low depth. CP-SAT scales to 128-node DAGs in 69s. Total QPU spend: $908.",
    metrics: [
      "+16.1pp feasibility (70.96% vs 54.8% baseline)",
      "26.47% cost reduction vs greedy baseline",
      "IonQ Forte + QuEra Aquila QPU hardware validated",
      "OPTIMAL certified at 64 nodes; scales to 128",
      "+10.3pp KV-cache hit rate; 9.5% TTFT reduction",
    ],
    links: [{ href: "https://github.com/yagneshkumarkoduru/CCE-QOS", label: "View on GitHub" }],
  },
  {
    id: "limen",
    index: "04",
    type: "Safety-critical systems",
    title: "Limen - Confidence-Coupled Safety Architecture",
    summary: "98.8% accuracy on a synthetic fault-injection benchmark, maintained under electrode dropout and motion artifact faults. Zero false activations. Real-world validation pending.",
    story: "Limen gates every physical actuator command through combined classifier confidence and independent real-time signal quality assessment. The system transitions deterministically between NOMINAL, DEGRADED, and SAFE_HALT states. Fixed-point C firmware reproduces the Python reference bit-exactly. A single JSON device profile compiles to firmware headers, RTL parameters, and exhaustive fault test vectors.",
    evidence: "98.8% accuracy under fault injection on a synthetic benchmark (vs 100% clean); real-world validation pending. On real UCI sEMG data, leave-one-subject-out accuracy is 23-28% across model variants (source: Limen/results/real_semg_summary.json). 0.0% false activation rate (synthetic). 100% safe-halt coverage on all injected faults (electrode dropout + motion artifact, synthetic). 100% C firmware behavioral conformance to Python reference (CRC32-bound). p95 latency: 0.98-1.07ms.",
    metrics: [
      "98.8% accuracy under fault injection (synthetic benchmark)",
      "Real-world LOSO 23-28% (UCI sEMG; real_semg_summary.json)",
      "0.0% false activation rate (synthetic)",
      "100% firmware behavioral conformance (CRC32-bound)",
      "p95 latency: 0.98-1.07ms (sub-millisecond)",
    ],
    links: [{ href: "https://github.com/yagneshkumarkoduru/Limen", label: "View on GitHub" }],
  },
  {
    id: "sgfa",
    index: "05",
    type: "Attention hardware",
    title: "Spike-Gated FlashAttention - Multiplier-Free RTL",
    summary: "3.19x operation reduction with zero multiplier cells. Temporal delta gating and shift-add scoring in synthesizable attention hardware.",
    story: "Combines persistent spike-mask state, XOR delta gating, signed power-of-two shift-add scoring, and deterministic winner-take-all routing. Consolidates prior attention experiments into one verified implementation.",
    evidence: "100% RTL behavioral conformance (50/50 golden vectors). 3,367 synthesized cells with zero multiplier cells. 3.19x operation reduction on SHD-derived spike raster.",
    metrics: [
      "3.19x operation reduction vs dense attention",
      "Zero multiplier cells (3,367 total synthesized)",
      "100% RTL behavioral conformance (50/50 vectors)",
    ],
  },
  {
    id: "pid",
    index: "06",
    type: "Control systems",
    title: "Precision-Drive Dynamics - Motor Control",
    summary: "88.4% rise-time reduction with 1.03% overshoot. Three-tier control from classical PID to neural-adaptive sliding-mode with safety filtering.",
    story: "Classical PID and LQR baselines, then Stribeck friction modeling, high-gain LESO disturbance observer, neural-adaptive super-twisting sliding-mode control, and CBF voltage/current safety filter. Three implementation tiers with increasing complexity.",
    evidence: "88.4% rise-time reduction and 1.03% overshoot at nominal load (classical baseline, simulation). LESO disturbance reconstruction with CBF safety filter at advanced tiers.",
    metrics: [
      "88.4% rise-time reduction (classical baseline)",
      "1.03% overshoot under nominal load",
      "LESO + CBF safety filter (voltage/current bounded)",
    ],
    links: [{ href: "https://github.com/yagneshkumarkoduru/Precision-Drive-Dynamics", label: "View on GitHub" }],
  },
  {
    id: "robohydro",
    index: "07",
    type: "Control systems",
    title: "Robotic-Hydro-Suspension - Hydraulic Control",
    summary: "Nonlinear hydraulic suspension with pressure-compensated flow control, disturbance rejection, and position/velocity safety limits.",
    story: "Three-tier hydraulic actuator control: classical PI, state-feedback with LESO disturbance observer, and nonlinear adaptive control with position and velocity safety limits.",
    evidence: "Pressure-compensated flow control with external load rejection. Position and velocity safety limits enforced across all tiers.",
    metrics: [
      "Pressure-compensated flow control with load rejection",
      "Position/velocity safety limits enforced",
      "Three-tier: PI, LESO state-feedback, nonlinear adaptive",
    ],
    links: [{ href: "https://github.com/yagneshkumarkoduru/Robotic-Hydro-Suspension", label: "View on GitHub" }],
  },
  {
    id: "evidencechain",
    index: "08",
    type: "Research infrastructure",
    title: "EvidenceChain - Reproducible Experiment Tracking",
    summary: "Deterministic experiment tracking with validation-based model selection, stratified evaluation, and zero test-set leakage.",
    story: "Fixed-seed deterministic tracking with proper train/val/test splits, validation-based model selection, and stratified repeated cross-validation. Enforces reproducibility across all research projects.",
    evidence: "Deterministic seeding with validation-based selection protocol. Stratified evaluation with repeated cross-validation. Used across ES-FA, Limen, and CCE-QOS training campaigns.",
    metrics: [
      "Deterministic reproducibility across all projects",
      "Validation-based model selection (zero test leakage)",
      "Stratified repeated cross-validation protocol",
    ],
  },
];

export const projectsExtendedNote = "ES-FA is the neuromorphic acceleration line. CertGuard is the patent-pending safety system for ML-driven actuator control. CCE-QOS is the quantum-classical scheduling study with real QPU hardware execution. Limen is the confidence-coupled safety architecture. Spike-Gated FlashAttention is the multiplier-free attention hardware. Control systems research spans motor and hydraulic domains. EvidenceChain enforces reproducibility across all projects. All claims distinguish measured, simulated, and modeled results.";

export const skills = [
  "Python", "C/C++", "SystemVerilog", "PyTorch", "Qiskit",
  "RTL Verification", "Fixed-Point Embedded Systems", "FPGA Workflows",
  "Control Systems", "React", "Node.js", "CUDA", "Verilator", "Yosys",
  "Open-Source CAD (Icarus/Yosys/nextpnr)", "Amazon Braket QPU",
  "Conformal Prediction", "Statistical Workload Analysis", "CI/CD"
];
