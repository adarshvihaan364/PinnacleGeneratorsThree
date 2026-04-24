import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Zap, Building2, Briefcase, MessageSquare, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "Products", href: "#products", icon: Zap },
  { label: "Industries", href: "#industries", icon: Building2 },
  { label: "Projects", href: "#projects", icon: Briefcase },
  { label: "Contact", href: "#contact", icon: MessageSquare },
];

export function FloatingNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed right-6 top-1/2 z-50 -translate-y-1/2 lg:right-10">
      <div className="flex flex-col items-center gap-4">
        <AnimatePresence>
          {isScrolled && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="flex flex-col gap-3 rounded-full border border-white/10 bg-black/40 p-2 backdrop-blur-xl shadow-ink"
            >
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group relative flex h-12 w-12 items-center justify-center rounded-full text-muted-foreground transition-all hover:bg-brand hover:text-brand-foreground"
                >
                  <item.icon className="h-5 w-5" />
                  <span className="absolute right-full mr-4 rounded-md border border-white/10 bg-black/80 px-2 py-1 text-xs font-semibold opacity-0 transition-opacity group-hover:opacity-100">
                    {item.label}
                  </span>
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
