import HALogo from "./HALogo";
import { Wifi, Camera, Radio, Lightbulb, Lock, Thermometer } from "lucide-react";

const integrations = [
  { label: "Smart Life / Tuya", icon: Lightbulb, angle: 0, color: "hsl(39 100% 50%)" },
  { label: "KNX", icon: Radio, angle: 60, color: "hsl(145 60% 45%)" },
  { label: "Zigbee", icon: Wifi, angle: 120, color: "hsl(35 90% 55%)" },
  { label: "Cameras", icon: Camera, angle: 180, color: "hsl(0 70% 55%)" },
  { label: "Z-Wave", icon: Lock, angle: 240, color: "hsl(260 60% 55%)" },
  { label: "Matter / Thread", icon: Thermometer, angle: 300, color: "hsl(210 70% 55%)" },
];

const IntegrationsSection = () => {
  const radius = 200;

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
        <div className="relative mx-auto mt-16 mb-12" style={{ width: "min(100%, 560px)", height: 560 }}>
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
                  opacity="0.35"
                />
              );
            })}
          </svg>

          {/* Center hub */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-32 h-32 rounded-full bg-primary flex items-center justify-center shadow-button relative">
              <HALogo className="w-16 h-16" color="white" />
              {/* Pulse ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/40 animate-ping" style={{ animationDuration: "3s" }} />
            </div>
            <p className="text-center text-sm font-bold text-foreground mt-3">Home Assistant</p>
          </div>

          {/* Orbiting integration nodes */}
          {integrations.map((item) => {
            const rad = (item.angle - 90) * (Math.PI / 180);
            const x = 280 + radius * Math.cos(rad);
            const y = 280 + radius * Math.sin(rad);
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 group"
                style={{ left: `${(x / 560) * 100}%`, top: `${(y / 560) * 100}%` }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-card border border-border bg-card group-hover:scale-110 transition-transform duration-300"
                >
                  <Icon className="w-7 h-7" style={{ color: item.color }} />
                </div>
                <span className="text-xs font-semibold text-foreground whitespace-nowrap">{item.label}</span>
              </div>
            );
          })}
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
