export function PortraitLens() {
  return <div className="portrait-stage" aria-label="Portrait of Yagnesh Kumar Koduru">
    <div className="portrait-index">01 / BUILDING THE RECORD</div>
    <div className="portrait-frame">
      <img className="portrait-image portrait-image-clean" src="/yagnesh-clean.png" alt="Yagnesh Kumar Koduru" />
      <img className="portrait-image portrait-image-cobalt" src="/yagnesh-cobalt.png" alt="" aria-hidden="true" />
      <span className="portrait-scanline" aria-hidden="true" />
      <span className="portrait-state" aria-hidden="true"><i /> EVIDENCE MODE</span>
    </div>
    <p className="portrait-note">Start early.<br />Build upward.<br />Keep the proof visible.</p>
  </div>;
}
