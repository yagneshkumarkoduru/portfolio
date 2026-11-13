const ITEMS = [
  "94.61% SHD single model",
  "91% unsafe command reduction",
  "+16.1pp feasibility",
  "95.19% SHD committee",
  "1-2% neuron firing rate",
  "3,506 ECP5 cells",
  "132.29 MHz routed",
  "26.47% cost reduction",
  "98.8% fault-injected accuracy",
  "4.88× fewer attention ops",
  "QPU validated — IonQ Forte + QuEra Aquila",
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
