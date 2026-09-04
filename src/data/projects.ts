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
    id: "atlas",
    index: "01",
    type: "Physical intelligence / Current work",
    title: "Atlas — Safety-Supervised Control Architecture",
    summary: "A simulation-first, verification-led control layer for sensor-driven physical systems.",
    story: "Atlas is designed to keep physical commands bounded even when sensor signals degrade, disappear, or become unsafe. The current implementation compares a model-only baseline against an Atlas-supervised path using replay, fault injection, and deterministic state machines. The immediate next gate is measured hardware-in-the-loop evidence on MCU and FPGA targets.",
    evidence: "All published metrics are from versioned synthetic replay and workstation simulation. Physical board timing, power, and fault containment results are in progress.",
    metrics: [
      "12.7× lower nonzero commands under flatline fault",
      "92.1% reduction in unsafe command rate",
      "8.0× feature-stage parallelization",
      "0.946 ms p95 end-to-end replay latency"
    ],
    links: [{ href: "https://www.esthien.com/", label: "Explore Esthien" }],
  },
  {
    id: "es-fa",
    index: "02",
    type: "Independent research",
    title: "ES-FA — Event-Driven SNN Accelerator on FPGA",
    summary: "Hardware-aware spiking neural network acceleration targeting the Xilinx Kria KV260.",
    story: "ES-FA combines quantized LIF-based training, event-driven temporal multiplexing, and synthesizable Verilog RTL. The design was validated through post-synthesis timing simulation and hardware-aware accuracy evaluation.",
    evidence: "Reported accuracy and energy-proxy figures are from simulation and post-synthesis analysis. Physical board power and latency measurements remain future work.",
    metrics: [
      "95.70% validation accuracy preserved",
      "79.68% estimated hardware-energy reduction",
      "576-cycle active-window latency"
    ],
    links: [{ href: "https://github.com/yagneshkumarkoduru/EE-SNA", label: "View on GitHub" }],
  },
  {
    id: "cce-qos",
    index: "03",
    type: "Independent research",
    title: "CCE-QOS — Constraint-Coupled Energy QUBO Scheduling",
    summary: "NPU compiler scheduling formulated as a QUBO with Adaptive Penalty Refinement.",
    story: "This work models SRAM/DRAM bank constraints and energy as a binary quadratic program, maps operator DAGs to Ising Hamiltonians, and solves them with QAOA (p ≤ 4) plus a classical APR loop.",
    evidence: "All results are benchmark-driven against a greedy baseline. No physical NPU or quantum hardware execution is claimed.",
    metrics: [
      "58.06% feasible schedules with Quantum + APR",
      "25.62% scheduling cost reduction vs greedy",
      "Classical and QAOA-oriented solver paths"
    ],
    links: [{ href: "https://github.com/yagneshkumarkoduru/CCE-QOS", label: "View on GitHub" }],
  },
  {
    id: "pid",
    index: "04",
    type: "Control systems",
    title: "DC Motor PID — Design and Analysis",
    summary: "Python-based PID controller design with root-locus and disturbance analysis.",
    story: "This project studies rise time, overshoot, and load disturbance rejection through simulation and classical control techniques.",
    evidence: "All figures and metrics are simulation outputs. No physical motor measurements are included.",
    metrics: [
      "88.4% reported rise-time reduction",
      "1.03% reported overshoot under nominal load",
      "20% load-disturbance rejection analysis"
    ],
    links: [{ href: "https://github.com/yagneshkumarkoduru/DC-Motor-PID-Control-System-Design-and-Analysis", label: "View on GitHub" }],
  },
  {
    id: "noemek",
    index: "05",
    type: "Software systems",
    title: "Noemek — Governed AI Workforce OS",
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
    index: "06",
    type: "Product contributions",
    title: "Fluidity & Vyntt — Product & Launch Work",
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

export const projectsExtendedNote = "Additional verified research under C:\\Research includes NPU-Memory-Aware-Scheduling, NPU-Operator-Fusion-APR, Quantum-QUBO-NPU-Optimization, and Precision-Drive-Dynamics / Robotic-Hydro-Suspension for physical control. See GitHub yagneshkumarkoduru for latest pushes.";

export const skills = [
  "Python", "C/C++", "SystemVerilog", "PyTorch", "Qiskit",
  "RTL Verification", "Fixed-Point Embedded Systems", "FPGA Workflows",
  "Control Systems", "React", "Node.js", "CUDA", "Verilator", "Yosys"
];