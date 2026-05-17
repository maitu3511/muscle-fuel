import { Toaster } from "@/components/ui/sonner";
import { WHATSAPP_FLOAT_URL, openWhatsApp } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Benefits", href: "#benefits" },
  { label: "Ingredients", href: "#ingredients" },
  { label: "Reviews", href: "#reviews" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
      data-ocid="header"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-display font-black tracking-tighter">
            <span className="gradient-text">MUSCLE</span>
            <span className="text-foreground"> FUEL</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" data-ocid="nav">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => scrollTo(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"
              data-ocid={`nav.${link.label.toLowerCase()}_link`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => scrollTo("#buy")}
          className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-smooth"
          data-ocid="header.shop_now_button"
        >
          Shop Now
        </button>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          data-ocid="header.mobile_menu_toggle"
        >
          <span
            className={`w-6 h-0.5 bg-foreground transition-smooth ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`w-6 h-0.5 bg-foreground transition-smooth ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-6 h-0.5 bg-foreground transition-smooth ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div
          className="md:hidden bg-card border-b border-border px-4 pb-4 animate-slideDown"
          data-ocid="header.mobile_nav"
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => scrollTo(link.href)}
              className="block w-full text-left py-3 text-muted-foreground hover:text-foreground border-b border-border last:border-0 transition-smooth"
              data-ocid={`header.mobile.${link.label.toLowerCase()}_link`}
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => scrollTo("#buy")}
            className="mt-3 w-full bg-primary text-primary-foreground py-3 rounded-full font-semibold transition-smooth"
            data-ocid="header.mobile.shop_now_button"
          >
            Shop Now
          </button>
        </div>
      )}
    </header>
  );
}

function WhatsAppFloat() {
  return (
    <button
      type="button"
      onClick={() => openWhatsApp(WHATSAPP_FLOAT_URL)}
      className="fixed bottom-24 left-4 z-50 h-14 px-4 rounded-full flex items-center justify-center gap-2 shadow-xl hover:scale-110 transition-smooth md:bottom-6"
      style={{ backgroundColor: "#25D366" }}
      aria-label="Order on WhatsApp"
      data-ocid="whatsapp.float_button"
    >
      <MessageCircle className="w-6 h-6 text-white fill-white" />
      <span className="text-white font-bold text-sm">WhatsApp</span>
    </button>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>{children}</main>
      <footer className="bg-card border-t border-border py-8 text-center">
        <p className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} Muscle Fuel. Built with love using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
      <WhatsAppFloat />
      <Toaster richColors position="top-center" />
    </div>
  );
}
