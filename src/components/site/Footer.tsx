import { Mail, MapPin, Phone, Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-ink text-ink-foreground grain">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-white/6 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1600px] px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="https://pinnaclegenerators.com/wp-content/uploads/2022/08/Logo-6.png"
                alt="Pinnacle Generators"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="mt-5 max-w-sm text-sm opacity-70">
              Powering India since 2005 with reliable generator solutions from 5 KVA to 2500 KVA, trusted by 2M+ customers nationwide.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-ink-foreground/70 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />
              Built for non-stop operations
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider opacity-90">EXPLORE</h4>
            <ul className="space-y-2 text-sm opacity-70">
              {["About", "Products", "Industries", "Projects", "Blog", "Contact"].map((label) => (
                <li key={label}>
                  <a href={`#${label.toLowerCase()}`} className="hover-shift inline-flex transition-colors hover:text-brand">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider opacity-90">PRODUCTS</h4>
            <ul className="space-y-2 text-sm opacity-70">
              {["Silent Generators", "Mobile Generators", "Lighting Towers", "Welding Generators"].map((item) => (
                <li key={item} className="hover-shift inline-flex cursor-default transition-colors hover:text-brand">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider opacity-90">CONTACT</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-brand" /> +91 92463 36611
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-brand" /> info@pinnaclegenerators.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-brand" /> Nacharam, Secunderabad, TS - 500076
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs opacity-60 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Pinnacle Generators. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="transition-colors hover:text-brand">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-brand">
              Terms
            </a>
            <a href="#" className="transition-colors hover:text-brand">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
