import { useEffect, useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MagneticButton } from "./MagneticButton";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Industries", href: "#industries" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[60] py-6 transition-all duration-500">
      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-6">
        <a href="#home" className="group flex items-center gap-3">
          <img
            src="https://pinnaclegenerators.com/wp-content/uploads/2022/08/Logo-6.png"
            alt="Pinnacle Generators"
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        <nav className={`hidden items-center gap-2 rounded-full border border-white/5 bg-black/40 p-1 backdrop-blur-2xl transition-all duration-500 lg:flex ${scrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-6 py-2 text-xs font-bold uppercase tracking-widest text-white/70 transition-all hover:bg-white/10 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <MagneticButton href="#contact" className="hidden h-12 rounded-full bg-brand px-6 text-[10px] font-bold uppercase tracking-widest text-brand-foreground shadow-glow sm:inline-flex">
            Get Started
          </MagneticButton>
          
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white backdrop-blur-xl lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-black/95 backdrop-blur-3xl lg:hidden"
          >
            <nav className="flex flex-col gap-2 p-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl border border-white/5 p-4 text-lg font-bold text-white transition-colors hover:bg-brand"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
