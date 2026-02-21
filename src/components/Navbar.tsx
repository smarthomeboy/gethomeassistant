import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import HALogo from "./HALogo";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-card border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-2.5 group">
          <HALogo className="w-9 h-9" color="hsl(193 100% 50%)" />
          <div className="flex flex-col leading-none">
            <span className="font-bold text-foreground text-[15px] tracking-tight">Home Assistant</span>
            <span className="text-[10px] text-primary font-semibold tracking-widest uppercase">as a Service</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-foreground/70 hover:text-primary transition-colors duration-200 font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="font-semibold text-sm px-6 py-2.5 rounded-full bg-primary text-primary-foreground shadow-button hover:opacity-90 transition-all duration-200"
          >
            Get Started
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-foreground/70 hover:text-primary transition-colors py-1 font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-semibold text-sm px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-center"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
