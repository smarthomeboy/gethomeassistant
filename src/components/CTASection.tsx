import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const CTASection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-navy-deep relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy-mid to-navy-deep" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <span className="inline-block font-inter text-sm font-semibold uppercase tracking-widest text-amber mb-4">
              Get In Touch
            </span>
            <h2 className="font-sora font-bold text-4xl md:text-5xl text-primary-foreground mb-6 leading-tight">
              Ready to Make Your Home Smarter?
            </h2>
            <p className="font-inter text-primary-foreground/60 text-lg leading-relaxed mb-10">
              Book your free consultation today. No obligations — just an honest conversation about what's possible for your home.
            </p>

            <div className="flex flex-col gap-5">
              {[
                { icon: Phone, label: "+1 (555) 123-4567" },
                { icon: Mail, label: "hello@haas.home" },
                { icon: MapPin, label: "Serving nationwide, USA" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl gradient-amber flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-amber-foreground" />
                  </div>
                  <span className="font-inter text-primary-foreground/80">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-card rounded-3xl p-8 shadow-hero-custom border border-border">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-64 text-center gap-4">
                <div className="w-16 h-16 rounded-full gradient-amber flex items-center justify-center shadow-amber">
                  <ArrowRight className="w-8 h-8 text-amber-foreground" />
                </div>
                <h3 className="font-sora font-bold text-xl text-foreground">Thanks, we'll be in touch!</h3>
                <p className="font-inter text-muted-foreground">Expect a response within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="font-sora font-bold text-xl text-foreground mb-2">Free Consultation Request</h3>

                <div>
                  <label className="block font-inter text-sm font-medium text-muted-foreground mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Smith"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background font-inter text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                  />
                </div>

                <div>
                  <label className="block font-inter text-sm font-medium text-muted-foreground mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background font-inter text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                  />
                </div>

                <div>
                  <label className="block font-inter text-sm font-medium text-muted-foreground mb-1.5">
                    Tell Us About Your Home
                  </label>
                  <textarea
                    rows={4}
                    placeholder="How many rooms? What devices do you have? What would you like to automate?"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background font-inter text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 font-sora font-bold text-sm py-4 rounded-xl gradient-amber text-amber-foreground shadow-amber hover:opacity-90 hover:scale-[1.01] transition-all duration-200"
                >
                  Book Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="font-inter text-xs text-muted-foreground text-center">
                  No spam. No obligations. We'll reach out within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
