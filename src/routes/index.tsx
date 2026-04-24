import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  Star,
  Quote,
  Calendar,
  CheckCircle2,
  Sparkles,
  Award,
  Users,
  Building2,
  Wrench,
  Shield,
  Lightbulb,
  Factory,
  Hospital,
  Fuel,
  Landmark,
  GraduationCap,
  Hotel,
  Truck,
  Volume2,
  MessageCircle,
  Send,
  Zap,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { Marquee } from "@/components/site/Marquee";
import { CanvasEffect } from "@/components/site/CanvasEffect";
import { FloatingNav } from "@/components/site/FloatingNav";
import { MagneticButton } from "@/components/site/MagneticButton";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Pinnacle Generators - Immersive Power Solutions" },
      {
        name: "description",
        content:
          "Experience the next generation of power backup. Pinnacle Generators: Engineering reliability from 5 KVA to 2500 KVA with immersive technology.",
      },
    ],
  }),
});

const stats = [
  { value: 15, suffix: "+", label: "Awards Won", icon: Award },
  { value: 2000000, suffix: "+", label: "Happy Customers", icon: Users, display: "2M+" },
  { value: 20, suffix: "+", label: "Years of Experience", icon: Sparkles },
  { value: 25000, suffix: "+", label: "Projects Completed", icon: Building2 },
];

const features = [
  { title: "Industry Pioneer", desc: "Leading manufacturer of stand-by gensets with cutting-edge technology", icon: Factory },
  { title: "Customer First", desc: "Over 2 million satisfied customers across India", icon: Users },
  { title: "Proven Track Record", desc: "25,000+ successful projects delivered nationwide", icon: CheckCircle2 },
  { title: "Wide Range", desc: "Complete solutions from 5 KVA to 2500 KVA", icon: Wrench },
  { title: "Quality Assured", desc: "ISO certified manufacturing with stringent quality control", icon: Shield },
  { title: "Continuous Innovation", desc: "Investing in R&D for next-generation power solutions", icon: Lightbulb },
];

const products = [
  {
    title: "Silent Generators",
    range: "5 KVA - 500 KVA",
    desc: "Ultra-quiet power solutions for residential and commercial spaces",
    image: "https://pinnaclegenerators.com/wp-content/uploads/2025/02/1.png",
    icon: Volume2,
    points: ["Low noise operation", "Fuel efficient", "Compact design"],
  },
  {
    title: "Mobile Generators",
    range: "10 KVA - 250 KVA",
    desc: "Portable power solutions for construction and field operations",
    image: "https://images.unsplash.com/photo-1700318092011-6e4666e94ab5?auto=format&fit=crop&w=1200&q=70",
    icon: Truck,
    points: ["Easy transportation", "Rugged build", "Quick deployment"],
  },
  {
    title: "Lighting Towers",
    range: "5 KVA - 20 KVA",
    desc: "High-intensity illumination for construction sites and events",
    image: "https://images.unsplash.com/photo-1700318131252-ab19c871ab60?auto=format&fit=crop&w=1200&q=70",
    icon: Lightbulb,
    points: ["360 degree coverage", "Weather resistant", "Fuel efficient"],
  },
  {
    title: "Welding Generators",
    range: "250A - 600A",
    desc: "Heavy-duty welding power with stable output",
    image: "https://images.unsplash.com/photo-1658260867231-535a1f7c98b9?auto=format&fit=crop&w=1200&q=70",
    icon: Wrench,
    points: ["Stable arc", "Dual purpose", "Industrial grade"],
  },
];

const industries = [
  { title: "Real Estate & Construction", desc: "Reliable power backup for construction sites and residential projects", icon: Building2 },
  { title: "Industrial & Manufacturing", desc: "Uninterrupted power for critical manufacturing operations", icon: Factory },
  { title: "Hospitals & Healthcare", desc: "Life-saving power solutions for medical facilities", icon: Hospital },
  { title: "Fuel Stations", desc: "24/7 power backup for fuel pumps and operations", icon: Fuel },
  { title: "Banking & Rentals", desc: "Secure power for financial institutions and ATMs", icon: Landmark },
  { title: "Schools & Education", desc: "Continuous power for educational institutions", icon: GraduationCap },
  { title: "Government Bodies", desc: "Trusted by government departments and public sector", icon: Shield },
  { title: "Hospitality & Tourism", desc: "Uninterrupted service for hotels and resorts", icon: Hotel },
];

const projects = [
  {
    title: "Hospital Power Backup - 500 KVA",
    desc: "Complete power backup solution for critical medical equipment",
    client: "Metro General Hospital",
    location: "Hyderabad",
    image: "https://images.unsplash.com/photo-1636867900334-025210ac78a0?auto=format&fit=crop&w=1600&q=70",
  },
  {
    title: "Construction Site - Multiple Units",
    desc: "Deployed 15 mobile generators for large construction project",
    client: "Prestige Constructions",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1636887584784-954392022b75?auto=format&fit=crop&w=1600&q=70",
  },
  {
    title: "Industrial Manufacturing - 2500 KVA",
    desc: "High-capacity power solution for 24/7 manufacturing operations",
    client: "Sunrise Industries",
    location: "Chennai",
    image: "https://images.unsplash.com/photo-1705051278299-7e64ba21437a?auto=format&fit=crop&w=1600&q=70",
  },
  {
    title: "Government Infrastructure",
    desc: "Power backup for critical government infrastructure",
    client: "TSTRANSCO",
    location: "Telangana",
    image: "https://images.unsplash.com/photo-1509390144018-eeaf65052242?auto=format&fit=crop&w=1600&q=70",
  },
];

const partners = [
  "Raymond", "SBI", "Bharat Petroleum", "BSNL", "HP Petroleum", "Indian Oil",
  "More Retail", "Fortune", "VLCC", "HDFC", "OYO", "TSTRANSCO",
];

const testimonials = [
  {
    quote: "Pinnacle Generators has been our trusted partner for over 5 years. Their generators are reliable and their service support is excellent.",
    name: "Rajesh Kumar",
    role: "ABC Construction Ltd.",
  },
  {
    quote: "We rely on Pinnacle's silent generators for our critical medical equipment. Fast-growing company with quality products and the best service support.",
    name: "Priya Sharma",
    role: "Metro Hospital",
  },
  {
    quote: "Timely response from this service provider. Their wide range of generators from 5 KVA to 2500 KVA meets all our industrial needs.",
    name: "Amit Patel",
    role: "Sunrise Industries",
  },
];

function Initials({ name }: { name: string }) {
  const i = name.split(" ").map((p) => p[0]).slice(0, 2).join("");
  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-brand text-sm font-bold text-brand-foreground shadow-glow">
      {i}
    </span>
  );
}

function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-xs tracking-widest text-brand">{index}</span>
      <span className="h-px w-10 bg-brand" />
      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">{label}</span>
    </div>
  );
}

function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-clip bg-background text-foreground selection:bg-brand selection:text-brand-foreground">
      <CanvasEffect />
      <FloatingNav />
      <Header />

      <section id="home" className="relative flex min-h-screen flex-col justify-center pt-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-glow opacity-50" />
        <div className="relative mx-auto w-full max-w-[1600px] px-6 py-12">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Reveal>
              <div className="inline-flex items-center gap-3 rounded-full border border-brand/30 bg-brand/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-brand shadow-glow backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />
                Engineering the Future of Power
              </div>
            </Reveal>

            <div className="mt-10 max-w-6xl">
              <Reveal delay={100}>
                <h1 className="font-display text-5xl font-bold leading-[0.9] tracking-tighter sm:text-6xl lg:text-[80px] xl:text-[100px]">
                  UNLEASHING
                  <span className="block text-stroke opacity-60">RAW ENERGY</span>
                  <span className="bg-gradient-brand bg-clip-text text-transparent">AT SCALE.</span>
                </h1>
              </Reveal>
            </div>

            <div className="mt-12 grid w-full gap-10 lg:grid-cols-[1fr_0.4fr]">
              <Reveal delay={200}>
                <div className="space-y-8">
                  <div className="max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
                    <p>Pinnacle Generators is a pioneer in manufacturing stand-by gensets, offering a wide range of specifications available in the market.</p>
                    <p>Pinnacle Generators an Organization based in Hyderabad with standing experience for <strong className="text-foreground">20 years plus</strong> in the Power Generators sector, involved themselves in more than <strong className="text-foreground">25,000 projects</strong> with over <strong className="text-foreground">2 Million</strong> happy customers.</p>
                    <p>Pinnacle is specialized in the field of manufacturing, installation, commissioning, preventive maintenance, servicing of Diesel Generating Sets.</p>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-6">
                    <MagneticButton href="#contact" className="group h-20 w-56 rounded-full bg-gradient-brand text-sm font-bold shadow-glow">
                      <span className="flex items-center gap-3">
                        Request Quote
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </MagneticButton>
                    
                    <MagneticButton href="#products" className="group h-20 w-56 rounded-full border border-white/10 bg-white/5 text-sm font-bold backdrop-blur-xl">
                      <span className="flex items-center gap-3">
                        View Products
                        <Zap className="h-5 w-5 transition-transform group-hover:rotate-12" />
                      </span>
                    </MagneticButton>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={300}>
                <div className="flex flex-col justify-end gap-6 border-l border-white/10 pl-10 lg:pl-12">
                  {stats.slice(0, 2).map((s) => (
                    <div key={s.label}>
                      <div className="font-display text-5xl font-bold text-brand">
                        {s.display ?? <Counter to={s.value} suffix={s.suffix} />}
                      </div>
                      <div className="mt-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">{s.label}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <Reveal delay={500}>
            <div className="flex flex-col items-center gap-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground">Scroll to explore</span>
              <div className="h-12 w-px bg-gradient-to-b from-brand to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>


      <section id="about" className="relative py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-6 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <Reveal>
              <div className="section-frame rounded-[32px] p-6">
                <SectionLabel index="01" label="About Us" />
                <h2 className="mt-5 font-display text-4xl font-bold leading-[1.02] sm:text-5xl lg:text-6xl">
                  A manufacturer with the range and discipline to serve critical power needs.
                </h2>
                <p className="mt-6 text-base leading-8 text-muted-foreground">
                  Pinnacle Generators operates at the intersection of industrial performance, responsive service and long-term dependability.
                </p>
                <div className="mt-8 grid gap-3">
                  {[
                    "20+ years in generator manufacturing",
                    "25,000+ projects delivered nationwide",
                    "2M+ customers and end users served",
                  ].map((line) => (
                    <div key={line} className="flex items-center gap-3 rounded-2xl bg-secondary px-4 py-3 text-sm font-medium">
                      <CheckCircle2 className="h-4 w-4 text-brand" />
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-6">
            <Reveal>
              <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
                <div className="section-frame rounded-[32px] p-0">
                  <div className="relative overflow-hidden rounded-[32px]">
                    <img
                      src="https://images.unsplash.com/photo-1636867900334-025210ac78a0?auto=format&fit=crop&w=1200&q=80"
                      alt="Pinnacle Generators Facility"
                      className="aspect-[4/5] w-full object-cover transition-transform duration-[1500ms] hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-5 rounded-2xl bg-background/92 p-4 shadow-soft backdrop-blur-md">
                      <div className="font-display text-4xl font-bold text-brand">20+</div>
                      <div className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Years of Excellence</div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-6">
                  <div className="spotlight-card rounded-[32px] border border-border bg-card p-6 shadow-soft">
                    <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      <MapPin className="h-4 w-4 text-brand" />
                      Hyderabad, Telangana
                    </div>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                      Headquartered in Hyderabad, our teams support projects across real estate, healthcare, government, industrial manufacturing and enterprise installations.
                    </p>
                  </div>
                  <div className="spotlight-card rounded-[32px] border border-brand/15 bg-brand-soft p-6 shadow-soft">
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">Our promise</div>
                    <p className="mt-4 font-display text-3xl font-bold leading-tight">
                      Reliable equipment, responsive service and a configuration-first approach.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {features.map((feature, index) => (
                <Reveal key={feature.title} delay={index * 70}>
                  <article className="spotlight-card group rounded-[28px] border border-border bg-card p-6 shadow-soft">
                    <feature.icon className="h-6 w-6 text-brand" />
                    <h3 className="mt-4 font-display text-xl font-bold">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">{feature.desc}</p>
                    <ArrowUpRight className="mt-5 h-4 w-4 text-brand transition-transform duration-300 group-hover:rotate-45" />
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="relative overflow-hidden py-24 lg:py-40">
        <div className="mx-auto max-w-[1600px] px-6">
          <Reveal>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <SectionLabel index="02" label="Engineering Mastery" />
                <h2 className="mt-6 font-display text-5xl font-bold leading-none tracking-tighter sm:text-7xl lg:text-8xl">
                  THE <span className="text-brand">CORE</span> RANGE.
                </h2>
              </div>
              <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
                Industrial power systems re-engineered for absolute silence, maximum portability, and extreme durability.
              </p>
            </div>
          </Reveal>

          <div className="mt-20 grid gap-12">
            {products.map((product, index) => (
              <Reveal key={product.title} delay={index * 100}>
                <div className="group relative grid items-center gap-12 lg:grid-cols-2">
                  <div className={`relative aspect-video overflow-hidden rounded-[40px] bg-secondary shadow-ink transition-transform duration-700 group-hover:scale-[1.02] ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <img src={product.image} alt={product.title} className="h-full w-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-8 left-8 flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-brand-foreground shadow-glow">
                        <product.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">Power Output</div>
                        <div className="text-xl font-bold text-white">{product.range}</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="font-display text-4xl font-bold tracking-tight lg:text-6xl">{product.title}</h3>
                      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{product.desc}</p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                      {product.points.map((point) => (
                        <div key={point} className="flex flex-col gap-3 rounded-3xl border border-white/5 bg-white/5 p-6 backdrop-blur-md transition-colors hover:border-brand/30">
                          <CheckCircle2 className="h-5 w-5 text-brand" />
                          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{point}</span>
                        </div>
                      ))}
                    </div>

                    <MagneticButton className="group h-16 w-full rounded-full border border-brand/30 bg-brand/5 text-xs font-bold uppercase tracking-widest text-brand transition-colors hover:bg-brand hover:text-brand-foreground">
                      Technical Specifications
                    </MagneticButton>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="industries" className="relative py-24 lg:py-40">
        <div className="mx-auto max-w-[1600px] px-6">
          <div className="grid gap-12 lg:grid-cols-[0.4fr_1fr]">
            <Reveal>
              <div className="lg:sticky lg:top-40">
                <SectionLabel index="03" label="Mission Critical" />
                <h2 className="mt-8 font-display text-5xl font-bold leading-tight tracking-tight lg:text-7xl">
                  BEYOND <span className="text-brand">BACKUP</span>.
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                  We don't just ship hardware. We engineer fail-safe environments for the sectors that power the nation.
                </p>
                <div className="mt-12 h-px w-full bg-gradient-to-r from-brand to-transparent" />
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {industries.map((industry, index) => (
                <Reveal key={industry.title} delay={index * 50}>
                  <div className="group relative h-[320px] overflow-hidden rounded-[32px] border border-white/5 bg-secondary transition-all duration-500 hover:border-brand/50 hover:shadow-glow">
                    <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-700 group-hover:opacity-20">
                      <div className="h-full w-full bg-gradient-brand" />
                    </div>
                    <div className="relative z-10 flex h-full flex-col justify-between p-8">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-brand transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:bg-brand group-hover:text-brand-foreground">
                        <industry.icon className="h-8 w-8" />
                      </div>
                      <div>
                        <h3 className="font-display text-2xl font-bold leading-tight">{industry.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-white/80">{industry.desc}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="relative bg-ink py-24 lg:py-40">
        <div className="mx-auto max-w-[1600px] px-6">
          <Reveal>
            <div className="flex flex-col items-center text-center">
              <SectionLabel index="04" label="Deployment History" />
              <h2 className="mt-8 font-display text-5xl font-bold leading-tight tracking-tight sm:text-7xl lg:text-8xl">
                PROVEN IN THE <span className="text-brand">FIELD</span>.
              </h2>
            </div>
          </Reveal>

          <div className="mt-20 grid gap-8 lg:grid-cols-2">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 100}>
                <div className="group relative aspect-video overflow-hidden rounded-[40px] shadow-ink">
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                  <div className="absolute inset-0 flex flex-col justify-end p-10">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-[0.3em] text-brand">Featured Project</div>
                        <h3 className="mt-3 font-display text-3xl font-bold lg:text-4xl">{project.title}</h3>
                        <p className="mt-4 max-w-md text-sm text-white/60">{project.desc}</p>
                      </div>
                      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-all group-hover:bg-brand group-hover:border-brand">
                        <ArrowUpRight className="h-6 w-6" />
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-18">
            <Reveal>
              <div className="mb-8 flex items-center justify-between gap-4">
                <h3 className="font-display text-2xl font-bold lg:text-3xl text-white">Trusted by leading organizations</h3>
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Partners</div>
              </div>
            </Reveal>
            <Marquee speed="slow">
              {partners.map((partner) => (
                <div key={partner} className="flex h-20 w-48 shrink-0 items-center justify-center rounded-[24px] border border-white/5 bg-white/5 px-6 font-display text-base font-bold text-muted-foreground transition-all duration-300 hover:border-brand hover:text-brand">
                  {partner}
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>

      <section className="relative py-24 lg:py-40">
        <div className="mx-auto max-w-[1600px] px-6">
          <div className="grid gap-20 lg:grid-cols-2">
            <Reveal>
              <div className="space-y-12">
                <div>
                  <SectionLabel index="05" label="Voices of Trust" />
                  <h2 className="mt-8 font-display text-5xl font-bold leading-tight tracking-tight sm:text-7xl lg:text-8xl">
                    WHAT THEY <br /> <span className="text-brand">SAY</span>.
                  </h2>
                </div>
                
                <div className="rounded-[40px] border border-white/5 bg-secondary p-12">
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-6 w-6 fill-brand text-brand" />
                    ))}
                  </div>
                  <div className="mt-6 font-display text-6xl font-bold text-white">4.9/5</div>
                  <p className="mt-4 text-lg text-muted-foreground">Average rating across 2,000+ industrial installations.</p>
                </div>
              </div>
            </Reveal>

            <div className="space-y-8">
              {testimonials.map((t, i) => (
                <Reveal key={t.name} delay={i * 100}>
                  <div className="group relative rounded-[40px] border border-white/5 bg-white/5 p-10 transition-colors hover:border-brand/30">
                    <Quote className="absolute right-10 top-10 h-12 w-12 text-brand opacity-10" />
                    <p className="text-xl leading-relaxed italic text-white/90">"{t.quote}"</p>
                    <div className="mt-10 flex items-center gap-5">
                      <Initials name={t.name} />
                      <div>
                        <div className="font-bold text-lg text-white">{t.name}</div>
                        <div className="text-sm text-brand font-bold uppercase tracking-widest">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative bg-ink py-24 lg:py-40">
        <div className="mx-auto max-w-[1600px] px-6">
          <div className="rounded-[60px] bg-gradient-brand p-0.5 shadow-glow">
            <div className="rounded-[59px] bg-ink p-12 lg:p-20">
              <div className="grid gap-20 lg:grid-cols-2">
                <Reveal>
                  <div className="space-y-10">
                    <div>
                      <SectionLabel index="06" label="Get in Touch" />
                      <h2 className="mt-8 font-display text-5xl font-bold leading-tight tracking-tight sm:text-7xl lg:text-8xl">
                        START THE <br /> <span className="text-brand">POWER</span>.
                      </h2>
                    </div>
                    
                    <div className="grid gap-6">
                      {[
                        { icon: Phone, label: "Call Us", value: "+91 92463 36611" },
                        { icon: Mail, label: "Email", value: "info@pinnaclegenerators.com" },
                        { icon: MapPin, label: "Visit", value: "Nacharam, Hyderabad" },
                      ].map((item) => (
                        <div key={item.label} className="flex items-center gap-6 group cursor-pointer">
                          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-brand transition-all group-hover:bg-brand group-hover:text-brand-foreground">
                            <item.icon className="h-7 w-7" />
                          </div>
                          <div>
                            <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{item.label}</div>
                            <div className="text-xl font-bold text-white">{item.value}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={200}>
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <Field label="Full Name" placeholder="Your name" />
                      <Field label="Phone Number" placeholder="+91 ..." />
                    </div>
                    <Field label="Requirements (KVA)" placeholder="e.g. 500 KVA" />
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Message</label>
                      <textarea rows={4} className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white focus:border-brand focus:outline-none" placeholder="How can we help?" />
                    </div>
                    <MagneticButton className="w-full h-20 rounded-2xl bg-gradient-brand text-sm font-bold shadow-glow text-white">
                      Submit Request
                    </MagneticButton>
                  </form>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Field({ label, placeholder }: { label: string; placeholder?: string }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white transition-colors focus:border-brand focus:outline-none"
      />
    </div>
  );
}
