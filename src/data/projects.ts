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
    title: "Atlas and ACEK",
    summary: "Simulation-backed safety work for sensor-driven physical systems.",
    story: "Atlas tests how sensor-driven decisions behave when signals degrade, disappear, or become unsafe. The latest simulation compares a model-only baseline with an Atlas-supervised path, then keeps the next gate clear: real traces, physical HIL, and measured board runs.",
    evidence: "Current public numbers are synthetic simulation and workstation replay results. They show safety and efficiency behavior, not physical hardware, clinical, or customer validation.",
    metrics: ["12.7x lower flatline commands", "92.1% command-rate reduction", "8.0x feature-stage parallelization", "0.946 ms p95 replay"],
    links: [{ href: "https://www.esthien.com/", label: "Explore Esthien" }],
  },
  {
    id: "es-fa",
    index: "02",
    type: "Independent research",
    title: "ES-FA SNN Accelerator",
    summary: "An SNN accelerator research workflow for the Xilinx Kria KV260.",
    story: "This project connects SNN training, quantized weights, hardware-aware optimization, Verilog RTL, and KV260 validation tooling.",
    evidence: "Reported results are project evaluation outputs. Energy is an estimated proxy, not measured board power.",
    metrics: ["95.70% validation accuracy", "79.68% energy-proxy reduction", "576-cycle recorded flow"],
    links: [{ href: "https://github.com/yagneshkumarkoduru/EE-SNA", label: "Read the project" }],
  },
  {
    id: "cce-qos",
    index: "03",
    type: "Independent research",
    title: "CCE-QOS Scheduling",
    summary: "NPU scheduling with QUBO-style energy optimization.",
    story: "This project treats scheduling as the main problem: placement, memory, bandwidth, DVFS states, and feasibility constraints become measurable optimization targets.",
    evidence: "Results are model-driven benchmarks against a greedy baseline. No physical NPU or quantum hardware claim.",
    metrics: ["58.06% feasibility with Quantum + APR", "25.62% cost reduction vs greedy", "Classical and QAOA-oriented paths"],
    links: [{ href: "https://github.com/yagneshkumarkoduru/CCE-QOS", label: "Read the project" }],
  },
  {
    id: "pid",
    index: "04",
    type: "Control systems",
    title: "DC Motor PID Design",
    summary: "A Python model and PID controller for a DC motor.",
    story: "This project studies response behavior, stability margins, root locus, and disturbance rejection through simulation.",
    evidence: "All figures are simulation outputs. No physical motor measurements are claimed.",
    metrics: ["88.4% reported rise-time reduction", "1.03% reported overshoot", "20% load-disturbance analysis"],
    links: [{ href: "https://github.com/yagneshkumarkoduru/DC-Motor-PID-Control-System-Design-and-Analysis", label: "Read the project" }],
  },
  {
    id: "noemek",
    index: "05",
    type: "Software systems",
    title: "Noemek",
    summary: "A governed AI workforce system with policy and human control.",
    story: "Noemek is built around employee authority, tenant context, approval flows, and auditable work.",
    evidence: "The current path is a controlled dry-run, not unrestricted customer automation.",
    metrics: ["Policy-first planning", "Auditable work lifecycle", "43-case release evaluation"],
  },
  {
    id: "product",
    index: "06",
    type: "Product contributions",
    title: "Fluidity and Vyntt",
    summary: "Product, communication, and launch work.",
    story: "At Fluidity and Vyntt, I contributed across product, brand, campaign, and launch work.",
    evidence: "Contributor work. Not presented as solely owned projects.",
    metrics: ["Product and interface work", "Early sales and marketing", "Brand and campaign launches"],
    links: [
      { href: "https://www.fluidity.site/", label: "Visit Fluidity" },
      { href: "https://vyntt.com/", label: "Visit Vyntt" },
    ],
  },
];

export const skills = ["Python", "C/C++", "SystemVerilog", "PyTorch", "Qiskit", "RTL verification", "Fixed-point systems", "FPGA workflows", "Embedded systems", "Control systems", "React", "Node.js"];
