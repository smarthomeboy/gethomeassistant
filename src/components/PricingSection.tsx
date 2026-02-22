import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    subtitle: "Single Room Setup",
    price: "₹14,999",
    period: "one-time",
    features: [
      "1 room automation",
      "Up to 5 devices",
      "Home Assistant installation",
      "Basic dashboard setup",
      "Smart lighting control",
      "30-day support",
    ],
    highlighted: false,
  },
  {
    name: "Home",
    subtitle: "Full Home Setup",
    price: "₹49,999",
    period: "one-time",
    features: [
      "Up to 5 rooms",
      "Up to 25 devices",
      "Custom dashboards",
      "Climate & lighting automation",
      "Security camera integration",
      "Voice assistant setup",
      "90-day support",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    subtitle: "Enterprise & Villas",
    price: "₹1,49,999",
    period: "one-time",
    features: [
      "Unlimited rooms",
      "Unlimited devices",
      "KNX / Zigbee / Z-Wave integration",
      "Full home cinema & audio",
      "Advanced automations & scenes",
      "Network infrastructure setup",
      "1-year priority support",
      "Dedicated account manager",
    ],
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Pricing
          </span>
          <h2 className="font-extrabold text-4xl md:text-5xl text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Professional smart home setup at every scale. No hidden fees, no subscriptions required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-8 flex flex-col transition-transform duration-300 hover:-translate-y-1 ${
                plan.highlighted
                  ? "bg-primary text-primary-foreground shadow-button ring-2 ring-primary scale-[1.03]"
                  : "bg-card border border-border shadow-card"
              }`}
            >
              <div className="mb-6">
                <p className={`text-sm font-semibold uppercase tracking-wide mb-1 ${
                  plan.highlighted ? "text-primary-foreground/70" : "text-primary"
                }`}>
                  {plan.subtitle}
                </p>
                <h3 className={`font-extrabold text-2xl ${
                  plan.highlighted ? "text-primary-foreground" : "text-foreground"
                }`}>
                  {plan.name}
                </h3>
              </div>

              <div className="mb-6">
                <span className={`font-extrabold text-4xl ${
                  plan.highlighted ? "text-primary-foreground" : "text-foreground"
                }`}>
                  {plan.price}
                </span>
                <span className={`text-sm ml-1 ${
                  plan.highlighted ? "text-primary-foreground/60" : "text-muted-foreground"
                }`}>
                  {plan.period}
                </span>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                      plan.highlighted ? "text-primary-foreground" : "text-primary"
                    }`} />
                    <span className={`text-sm ${
                      plan.highlighted ? "text-primary-foreground/85" : "text-muted-foreground"
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full flex items-center justify-center gap-2 font-bold text-sm py-4 rounded-full transition-all duration-200 ${
                  plan.highlighted
                    ? "bg-white text-foreground hover:bg-white/90"
                    : "bg-primary text-primary-foreground shadow-button hover:opacity-90"
                }`}
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10">
          All prices are indicative. Final quote based on site survey. GST extra.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
