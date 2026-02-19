import heroImg from "@/assets/hero-home.jpg";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const perks = [
  "Professional installation included",
  "Full setup & customization",
  "Ongoing support & maintenance",
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Smart home interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-85" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-deep/60" />
      </div>

      {/* Decorative glow orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-amber/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber/30 bg-amber/10 backdrop-blur-sm mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
            <span className="font-inter text-sm text-amber font-medium tracking-wide">
              Make Technology Accessible
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-sora font-extrabold text-5xl md:text-6xl lg:text-7xl leading-tight text-primary-foreground mb-6 animate-fade-up">
            Your Smart Home,{" "}
            <span className="text-gradient-amber">Set Up For You.</span>
          </h1>

          {/* Sub */}
          <p className="font-inter text-lg md:text-xl text-primary-foreground/75 mb-8 max-w-xl leading-relaxed animate-fade-up" style={{ animationDelay: "0.15s" }}>
            We install, configure, and maintain Home Assistant in your home — so you can enjoy cutting-edge smart home technology without the complexity.
          </p>

          {/* Perks */}
          <ul className="flex flex-col gap-2 mb-10 animate-fade-up" style={{ animationDelay: "0.25s" }}>
            {perks.map((perk) => (
              <li key={perk} className="flex items-center gap-3 font-inter text-primary-foreground/80">
                <CheckCircle2 className="w-5 h-5 text-amber flex-shrink-0" />
                {perk}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.35s" }}>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 font-sora font-bold text-base px-8 py-4 rounded-2xl gradient-amber text-amber-foreground shadow-amber hover:opacity-90 hover:scale-105 transition-all duration-200"
            >
              Get a Free Consultation
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 font-sora font-semibold text-base px-8 py-4 rounded-2xl border border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-200"
            >
              How It Works
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-3 gap-6 max-w-lg animate-fade-up" style={{ animationDelay: "0.45s" }}>
          {[
            { value: "500+", label: "Homes Set Up" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "24/7", label: "Support" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-sora font-bold text-3xl text-amber">{stat.value}</div>
              <div className="font-inter text-sm text-primary-foreground/60 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
