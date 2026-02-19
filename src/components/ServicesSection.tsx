import { Lightbulb, Shield, Thermometer, Tv, Wifi, Bell } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Smart Lighting",
    description:
      "Automate your entire home's lighting — schedules, scenes, motion-triggered, and voice-controlled.",
  },
  {
    icon: Thermometer,
    title: "Climate Control",
    description:
      "Intelligent heating and cooling that learns your schedule and keeps you comfortable while saving energy.",
  },
  {
    icon: Shield,
    title: "Security & Cameras",
    description:
      "Integrated security cameras, door locks, and alarm systems all managed from one dashboard.",
  },
  {
    icon: Tv,
    title: "Entertainment",
    description:
      "Seamlessly integrate your TV, speakers, and media players into one unified smart experience.",
  },
  {
    icon: Wifi,
    title: "Network & Devices",
    description:
      "We connect all your smart devices to a robust local network, ensuring reliability and speed.",
  },
  {
    icon: Bell,
    title: "Alerts & Automations",
    description:
      "Custom automations and real-time alerts that respond to your life — not the other way around.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 gradient-section">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block font-inter text-sm font-semibold uppercase tracking-widest text-amber mb-3">
            What We Do
          </span>
          <h2 className="font-sora font-bold text-4xl md:text-5xl text-foreground mb-4">
            Everything Your Smart Home Needs
          </h2>
          <p className="font-inter text-muted-foreground text-lg leading-relaxed">
            We handle the full setup across every aspect of your home — from day one to ongoing support.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="group relative rounded-2xl p-7 bg-card border border-border shadow-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Subtle amber glow on hover */}
              <div className="absolute inset-0 gradient-amber opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl" />

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl gradient-amber flex items-center justify-center mb-5 shadow-amber group-hover:scale-110 transition-transform duration-200">
                <service.icon className="w-6 h-6 text-amber-foreground" />
              </div>

              <h3 className="font-sora font-bold text-lg text-foreground mb-2">
                {service.title}
              </h3>
              <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Card number */}
              <div className="absolute top-5 right-5 font-sora font-bold text-4xl text-muted/60 select-none">
                0{idx + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
