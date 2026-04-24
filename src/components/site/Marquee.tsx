import type { ReactNode } from "react";

export function Marquee({ children, speed = "normal" }: { children: ReactNode; speed?: "normal" | "slow" }) {
  return (
    <div className="marquee-mask overflow-hidden">
      <div className={`flex w-max ${speed === "slow" ? "animate-marquee-slow" : "animate-marquee"}`}>
        <div className="flex shrink-0 items-center gap-16 pr-16">{children}</div>
        <div className="flex shrink-0 items-center gap-16 pr-16" aria-hidden>{children}</div>
      </div>
    </div>
  );
}
