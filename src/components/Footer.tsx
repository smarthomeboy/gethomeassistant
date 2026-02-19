import { Home, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-deep border-t border-primary/20">
      <div className="container mx-auto py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl gradient-amber flex items-center justify-center shadow-amber">
                <Home className="w-5 h-5 text-navy-deep" />
              </div>
              <div>
                <div className="font-sora font-bold text-primary-foreground text-sm">HAAS</div>
                <div className="font-inter text-[10px] text-amber font-medium tracking-widest uppercase">Home Assistant as a Service</div>
              </div>
            </div>
            <p className="font-inter text-sm text-primary-foreground/50 leading-relaxed max-w-xs">
              Making smart home technology accessible for everyone — professional setup, zero hassle.
            </p>
            <p className="font-inter text-xs text-amber/70 mt-3 tracking-wide italic">"Make Technology Accessible"</p>

            {/* Social */}
            <div className="flex gap-3 mt-5">
              {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg border border-primary/25 flex items-center justify-center text-primary-foreground/50 hover:text-amber hover:border-amber/50 transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sora font-semibold text-sm text-primary-foreground mb-4">Services</h4>
            <ul className="flex flex-col gap-2.5">
              {["Smart Lighting", "Climate Control", "Security Setup", "Entertainment", "Network Setup", "Automations"].map((s) => (
                <li key={s}>
                  <a href="#services" className="font-inter text-sm text-primary-foreground/50 hover:text-amber transition-colors duration-200">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sora font-semibold text-sm text-primary-foreground mb-4">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {["About Us", "How It Works", "Pricing", "Blog", "Contact", "Privacy Policy"].map((s) => (
                <li key={s}>
                  <a href="#" className="font-inter text-sm text-primary-foreground/50 hover:text-amber transition-colors duration-200">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-inter text-xs text-primary-foreground/35">
            © {new Date().getFullYear()} Home Assistant as a Service (HAAS). All rights reserved.
          </p>
          <p className="font-inter text-xs text-primary-foreground/35">
            Not affiliated with Home Assistant / Nabu Casa.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
