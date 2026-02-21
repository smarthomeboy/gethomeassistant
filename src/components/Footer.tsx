import { Twitter, Linkedin, Instagram } from "lucide-react";
import HALogo from "./HALogo";

const Footer = () => {
  return (
    <footer className="bg-foreground">
      <div className="container mx-auto py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <HALogo className="w-9 h-9" color="hsl(193 100% 50%)" />
              <div>
                <div className="font-bold text-background text-sm">Home Assistant</div>
                <div className="text-[10px] text-primary font-semibold tracking-widest uppercase">as a Service</div>
              </div>
            </div>
            <p className="text-sm text-background/50 leading-relaxed max-w-xs">
              Making smart home technology accessible for everyone — professional setup, zero hassle.
            </p>
            <p className="text-xs text-primary/70 mt-3 tracking-wide italic">"Make Technology Accessible"</p>

            <div className="flex gap-3 mt-5">
              {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg border border-background/15 flex items-center justify-center text-background/50 hover:text-primary hover:border-primary/50 transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-background mb-4">Services</h4>
            <ul className="flex flex-col gap-2.5">
              {["Smart Lighting", "Climate Control", "Security Setup", "Entertainment", "Network Setup", "Automations"].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-background/50 hover:text-primary transition-colors duration-200">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-background mb-4">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {["About Us", "How It Works", "Pricing", "Blog", "Contact", "Privacy Policy"].map((s) => (
                <li key={s}>
                  <a href="#" className="text-sm text-background/50 hover:text-primary transition-colors duration-200">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-background/35">
            © {new Date().getFullYear()} Home Assistant as a Service (HAAS). All rights reserved.
          </p>
          <p className="text-xs text-background/35">
            Not affiliated with Home Assistant / Nabu Casa.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
