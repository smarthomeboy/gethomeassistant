import { PhoneCall, Wrench, Zap, HeartHandshake } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    step: "01",
    title: "Free Consultation",
    description:
      "We start with a free call or home visit to understand your needs, your home layout, and what smart devices you'd like to control.",
  },
  {
    icon: Wrench,
    step: "02",
    title: "Custom Plan & Setup",
    description:
      "Our technicians install Home Assistant on dedicated hardware and integrate all your devices — tailored to your lifestyle.",
  },
  {
    icon: Zap,
    step: "03",
    title: "Go Live",
    description:
      "We demo everything, train you on the dashboard, and make sure every automation works exactly as expected before we leave.",
  },
  {
    icon: HeartHandshake,
    step: "04",
    title: "Ongoing Support",
    description:
      "We're always here. Updates, new device integrations, troubleshooting — our team supports you long after setup day.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-navy-deep relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-amber/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-blue-400/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block font-inter text-sm font-semibold uppercase tracking-widest text-amber mb-3">
            The Process
          </span>
          <h2 className="font-sora font-bold text-4xl md:text-5xl text-primary-foreground mb-4">
            How It Works
          </h2>
          <p className="font-inter text-primary-foreground/60 text-lg leading-relaxed">
            Four simple steps from first contact to a fully functioning smart home.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-amber/30 to-transparent" />

          {steps.map((step) => (
            <div key={step.step} className="flex flex-col items-center text-center group">
              {/* Icon circle */}
              <div className="relative mb-6">
                <div className="w-24 h-24 rounded-full bg-primary/40 border border-primary/30 flex items-center justify-center group-hover:border-amber/50 transition-colors duration-300">
                  <div className="w-16 h-16 rounded-full gradient-amber flex items-center justify-center shadow-amber group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-amber-foreground" />
                  </div>
                </div>
                <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-navy-mid border border-amber/40 flex items-center justify-center font-sora font-bold text-xs text-amber">
                  {step.step}
                </span>
              </div>

              <h3 className="font-sora font-bold text-lg text-primary-foreground mb-3">
                {step.title}
              </h3>
              <p className="font-inter text-sm text-primary-foreground/55 leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
