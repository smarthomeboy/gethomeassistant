import { PhoneCall, Wrench, Zap, HeartHandshake } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    step: "01",
    title: "Free Consultation",
    description: "We start with a free call or home visit to understand your needs, your home layout, and what smart devices you'd like to control.",
  },
  {
    icon: Wrench,
    step: "02",
    title: "Custom Plan & Setup",
    description: "Our technicians install Home Assistant on dedicated hardware and integrate all your devices — tailored to your lifestyle.",
  },
  {
    icon: Zap,
    step: "03",
    title: "Go Live",
    description: "We demo everything, train you on the dashboard, and make sure every automation works exactly as expected before we leave.",
  },
  {
    icon: HeartHandshake,
    step: "04",
    title: "Ongoing Support",
    description: "We're always here. Updates, new device integrations, troubleshooting — our team supports you long after setup day.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            The Process
          </span>
          <h2 className="font-extrabold text-4xl md:text-5xl text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Four simple steps from first contact to a fully functioning smart home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-border" />

          {steps.map((step) => (
            <div key={step.step} className="flex flex-col items-center text-center group">
              <div className="relative mb-6">
                <div className="w-24 h-24 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:border-primary/40 transition-colors duration-300">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-background border-2 border-primary flex items-center justify-center font-bold text-xs text-primary">
                  {step.step}
                </span>
              </div>

              <h3 className="font-bold text-lg text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
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
