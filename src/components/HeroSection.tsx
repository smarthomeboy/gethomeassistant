import { ArrowRight, CheckCircle2 } from "lucide-react";
import HALogo from "./HALogo";

const perks = [
  "Professional installation included",
  "Full setup & customization",
  "Ongoing support & maintenance",
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden gradient-hero">
      {/* Subtle lighter blobs */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-white/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto relative z-10 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <h1 className="font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-primary-foreground mb-6 animate-fade-up">
              Your Smart Home,{" "}
              <span className="opacity-80">Set Up For You.</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/75 mb-8 max-w-xl leading-relaxed animate-fade-up" style={{ animationDelay: "0.15s" }}>
              We install, configure, and maintain Home Assistant in your home — so you enjoy cutting-edge automation without the complexity.
            </p>

            <ul className="flex flex-col gap-2.5 mb-10 animate-fade-up" style={{ animationDelay: "0.25s" }}>
              {perks.map((perk) => (
                <li key={perk} className="flex items-center gap-3 text-primary-foreground/85">
                  <CheckCircle2 className="w-5 h-5 text-primary-foreground flex-shrink-0" />
                  {perk}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.35s" }}>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 font-bold text-base px-8 py-4 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all duration-200 uppercase tracking-wide text-sm"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 font-semibold text-base px-8 py-4 rounded-full border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-200"
              >
                How It Works
              </a>
            </div>

            {/* Stats */}
            <div className="mt-16 flex gap-10 animate-fade-up" style={{ animationDelay: "0.45s" }}>
              {[
                { value: "500+", label: "Homes Set Up" },
                { value: "98%", label: "Satisfaction" },
                { value: "24/7", label: "Support" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-extrabold text-3xl text-primary-foreground">{stat.value}</div>
                  <div className="text-sm text-primary-foreground/60 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: HA-style phone mockup */}
          <div className="hidden lg:flex items-center justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Phone frame */}
              <div className="w-72 h-[520px] rounded-[2.5rem] border-[3px] border-primary-foreground/20 bg-primary-foreground/5 backdrop-blur-sm flex items-center justify-center">
                <HALogo className="w-28 h-28 animate-float" color="hsl(0 0% 100% / 0.3)" />
              </div>
              {/* Glow behind */}
              <div className="absolute inset-0 -z-10 w-72 h-[520px] rounded-[2.5rem] bg-white/10 blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
