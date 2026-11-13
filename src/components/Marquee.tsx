const ITEMS = [
  "93.95% SHD single model",
  "41% unsafe command reduction",
  "+16.1pp feasibility",
  "95.27% SHD committee",
  "1-2% neuron firing rate",
  "3,506 ECP5 cells",
  "132.29 MHz routed",
  "26.47% cost reduction vs greedy",
  "98.8% fault-injected accuracy",
  "97.71% attention ops bypassed",
  "QPU validated: IonQ Forte + QuEra Aquila",
  "0.0% false activation",
];

export function Marquee() {
  const track = [...ITEMS, ...ITEMS].map((item, i) => (
    <span key={i}>{item}<em aria-hidden="true"> ·</em> </span>
  ));

  return (
    <div className="marquee-outer" aria-hidden="true">
      <div className="marquee-inner">{track}</div>
    </div>
  );
}
