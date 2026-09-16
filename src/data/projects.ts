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
    summary: "Hardware-aware spiking neural network acceleration on reconfigurable FPGA fabric.",
    story: "ES-FA combines quantized LIF-based training, event-driven temporal multiplexing, and synthesizable Verilog RTL across three tiers: parameterizable multi-core RTL with on-chip STDP, a C99 cycle-accurate simulator, and a .NET host driver with spike-driven FlashAttention. The design was validated through post-synthesis timing simulation and hardware-aware accuracy evaluation.",
    evidence: "Reported accuracy and energy-proxy figures are from simulation and post-synthesis analysis. Physical board power and latency measurements remain future work.",
    metrics: [
      "95.70% validation accuracy preserved",
      "79.68% estimated hardware-energy reduction",
      "576-cycle active-window latency",
      "6.3x modeled energy-delay product reduction vs INT8 systolic baseline"
    ],
    links: [{ href: "https://github.com/yagneshkumarkoduru/ES-FA-SNN-Accelerator", label: "View on GitHub" }],
  },
  {
    id: "cce-qos",
    index: "02",
    type: "Independent research",
    title: "CCE-QOS - Constraint-Coupled Energy QUBO Scheduling",
    summary: "NPU compiler scheduling formulated as a QUBO with Adaptive Penalty Refinement.",
    story: "This work models SRAM/DRAM bank constraints and energy as a binary quadratic program, maps operator DAGs to Ising Hamiltonians, and solves them with OR-Tools CP-SAT plus QAOA statevector simulation (p ≤ 4) under a classical APR loop. A separate NPU-Optimization-Suite repo consolidates the memory-hierarchy, polyhedral-fusion, and solver studies into one three-tier compiler pipeline; CCE-QOS remains the scheduling-formulation and KV-cache-paging record.",
    evidence: "Results are benchmark models and recorded solver metrics against a greedy baseline. No physical NPU or quantum hardware execution is claimed. The 25.62% figure is the scheduling-level energy reduction in this repo.",
    metrics: [
      "58.06% feasible schedules with Quantum + APR",
      "25.62% scheduling energy reduction vs greedy",
      "56.0% DRAM page-fault cut with paged KV-cache batching"
    ],
    links: [{ href: "https://github.com/yagneshkumarkoduru/CCE-QOS", label: "View on GitHub" }],
  },
  {
    id: "pid",
    index: "03",
    type: "Control systems",
    title: "Precision-Drive Dynamics - Nonlinear Motor Control",
    summary: "From classical PID baselines to neural-adaptive sliding-mode control with safety filtering.",
    story: "This project starts from classical PID, root-locus, and state-space LQR baselines, then advances to Stribeck friction modeling, a high-gain LESO disturbance observer, neural-adaptive super-twisting sliding-mode control, and a CBF voltage/current safety filter across three implementation tiers.",
    evidence: "All figures and metrics are simulation outputs. No physical motor measurements are included. Classical figures below are the Tier-0 baseline, not the advanced-tier result.",
    metrics: [
      "88.4% reported rise-time reduction (classical baseline)",
      "1.03% reported overshoot under nominal load (classical baseline)",
      "LESO disturbance reconstruction plus CBF safety filter (advanced tiers)"
    ],
    links: [{ href: "https://github.com/yagneshkumarkoduru/Precision-Drive-Dynamics", label: "View on GitHub" }],
  },
  {
    id: "noemek",
    index: "04",
    type: "Software systems",
    title: "Noemek - Governed AI Workforce OS",
    summary: "Policy-first, auditable work orchestration for multi-channel AI employees.",
    story: "Noemek enforces employee authority boundaries, tenant context, human approval gates, and durable audit trails. The current execution path is a governed dry-run.",
    evidence: "The system is designed for controlled, auditable execution rather than unrestricted automation.",
    metrics: [
      "Policy-first planning engine",
      "43-case release evaluation suite",
      "Durable job queue with retry and dead-letter handling"
    ],
  },
  {
    id: "product",
    index: "05",
    type: "Product contributions",
    title: "Fluidity & Vyntt - Product & Launch Work",
    summary: "Frontend, product, and early go-to-market contributions.",
    story: "Contributed to responsive interfaces, product positioning, and launch campaigns at Fluidity and Vyntt.",
    evidence: "Contributor-level work. Not presented as solely owned projects.",
    metrics: [
      "Product and interface development",
      "Early sales and marketing support",
      "Brand and campaign execution"
    ],
    links: [
      { href: "https://www.fluidity.site/", label: "Visit Fluidity" },
      { href: "https://vyntt.com/", label: "Visit Vyntt" },
    ],
  },
];

export const projectsExtendedNote = "Related work consolidated under NPU-Optimization-Suite (three-tier compiler pipeline unifying the memory-hierarchy, polyhedral-fusion, and solver studies) alongside CCE-QOS (scheduling formulation plus KV-cache paging). Physical-control research continues under Precision-Drive-Dynamics and Robotic-Hydro-Suspension. See GitHub yagneshkumarkoduru for latest pushes.";

export const skills = [
  "Python", "C/C++", "SystemVerilog", "PyTorch", "Qiskit",
  "RTL Verification", "Fixed-Point Embedded Systems", "FPGA Workflows",
  "Control Systems", "React", "Node.js", "CUDA", "Verilator", "Yosys"
];