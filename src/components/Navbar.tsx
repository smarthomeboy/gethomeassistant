import { useState, useEffect } from "react";
import { Menu, X, Home } from "lucide-react";

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
          ? "bg-navy-deep/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl gradient-amber flex items-center justify-center shadow-amber animate-glow">
            <Home className="w-5 h-5 text-navy-deep" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-sora font-bold text-primary-foreground text-sm tracking-wide">HAAS</span>
            <span className="font-inter text-[10px] text-amber font-medium tracking-widest uppercase">Home Assistant</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-inter text-sm text-primary-foreground/80 hover:text-amber transition-colors duration-200 font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="font-sora font-semibold text-sm px-5 py-2.5 rounded-xl gradient-amber text-amber-foreground shadow-amber hover:opacity-90 transition-opacity duration-200"
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy-deep/98 backdrop-blur-md border-t border-primary/20 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-inter text-primary-foreground/80 hover:text-amber transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-sora font-semibold text-sm px-5 py-2.5 rounded-xl gradient-amber text-amber-foreground shadow-amber text-center"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
