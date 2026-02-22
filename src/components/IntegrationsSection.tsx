import HALogo from "./HALogo";

// Clean SVG brand icons for each integration
const SmartLifeIcon = () => (
  <img src="https://play-lh.googleusercontent.com/TQ5yl6bZFgmsP7_SIr0V2F2cVw9LbsC1Xf0JhQhLqEQBnM8F1I6FJnGEIhM0eFvH5g=w240-h480-rw" alt="Smart Life" className="w-8 h-8 rounded-lg" />
);

const KNXIcon = () => (
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/KNX_logo.svg/200px-KNX_logo.svg.png" alt="KNX" className="w-8 h-8 object-contain" />
);

const ZigbeeIcon = () => (
  <svg viewBox="0 0 48 48" className="w-8 h-8">
    <circle cx="24" cy="24" r="20" fill="#EB0443" />
    <path d="M14 16h20l-16 16h20" stroke="white" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CameraIcon = () => (
  <svg viewBox="0 0 48 48" className="w-8 h-8">
    <rect x="4" y="12" width="40" height="24" rx="4" fill="#333" />
    <circle cx="24" cy="24" r="8" fill="#555" stroke="#888" strokeWidth="2" />
    <circle cx="24" cy="24" r="4" fill="#4FC3F7" />
    <circle cx="36" cy="16" r="2" fill="#F44336" />
  </svg>
);

const ZWaveIcon = () => (
  <svg viewBox="0 0 48 48" className="w-8 h-8">
    <circle cx="24" cy="24" r="20" fill="#0089CF" />
    <path d="M14 17h20l-16 14h20" stroke="white" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MatterIcon = () => (
  <svg viewBox="0 0 48 48" className="w-8 h-8">
    <rect x="4" y="10" width="40" height="28" rx="14" fill="#000" />
    <circle cx="18" cy="24" r="5" fill="none" stroke="white" strokeWidth="2.5" />
    <circle cx="30" cy="24" r="5" fill="none" stroke="white" strokeWidth="2.5" />
    <path d="M23 24h2" stroke="white" strokeWidth="2.5" />
  </svg>
);

const integrations = [
  { label: "Smart Life / Tuya", Icon: SmartLifeIcon, angle: 0 },
  { label: "KNX", Icon: KNXIcon, angle: 60 },
  { label: "Zigbee", Icon: ZigbeeIcon, angle: 120 },
  { label: "IP Cameras", Icon: CameraIcon, angle: 180 },
  { label: "Z-Wave", Icon: ZWaveIcon, angle: 240 },
  { label: "Matter / Thread", Icon: MatterIcon, angle: 300 },
];

const IntegrationsSection = () => {
  const radius = 190;

  return (
    <section id="services" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Why Home Assistant
          </span>
          <h2 className="font-extrabold text-4xl md:text-5xl text-foreground mb-4">
            One Hub. Every Protocol.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Unlike Control4 or Crestron, Home Assistant connects <strong className="text-foreground">everything</strong> — even the ecosystems others won't touch.
          </p>
        </div>

        {/* Hub diagram */}
        <div className="relative mx-auto mt-16 mb-12 hidden md:block" style={{ width: 560, height: 560 }}>
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 560 560">
            {integrations.map((item) => {
              const rad = (item.angle - 90) * (Math.PI / 180);
              const x = 280 + radius * Math.cos(rad);
              const y = 280 + radius * Math.sin(rad);
              return (
                <line
                  key={item.label}
                  x1="280" y1="280"
                  x2={x} y2={y}
                  stroke="hsl(193 100% 50%)"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                  opacity="0.4"
                />
              );
            })}
          </svg>

          {/* Center hub */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-36 h-36 rounded-full bg-primary flex items-center justify-center shadow-button relative">
              <HALogo className="w-20 h-20" color="white" />
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping" style={{ animationDuration: "3s" }} />
            </div>
            <p className="text-center text-sm font-bold text-foreground mt-3">Home Assistant</p>
          </div>

          {/* Orbiting integration nodes */}
          {integrations.map((item) => {
            const rad = (item.angle - 90) * (Math.PI / 180);
            const x = 280 + radius * Math.cos(rad);
            const y = 280 + radius * Math.sin(rad);

            return (
              <div
                key={item.label}
                className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 group"
                style={{ left: `${(x / 560) * 100}%`, top: `${(y / 560) * 100}%` }}
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-card border border-border bg-card group-hover:scale-110 transition-transform duration-300">
                  <item.Icon />
                </div>
                <span className="text-xs font-semibold text-foreground whitespace-nowrap">{item.label}</span>
              </div>
            );
          })}
        </div>

        {/* Mobile: simple grid */}
        <div className="md:hidden mt-12 mb-12">
          <div className="flex justify-center mb-8">
            <div className="w-28 h-28 rounded-full bg-primary flex items-center justify-center shadow-button">
              <HALogo className="w-16 h-16" color="white" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {integrations.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-card border border-border bg-card">
                  <item.Icon />
                </div>
                <span className="text-[11px] font-semibold text-foreground text-center">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison callout */}
        <div className="max-w-2xl mx-auto bg-secondary rounded-2xl p-8 text-center border border-border">
          <p className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Control4, Crestron, and Savant</strong> lock you into proprietary ecosystems.
            With Home Assistant, we integrate <strong className="text-primary">3,400+ devices</strong> across
            Tuya, Zigbee, Z-Wave, KNX, Matter, and more — all locally controlled, no cloud dependency.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
