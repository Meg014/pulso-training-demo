import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
export function Logo() {
  return (
    <a
      href="#inicio"
      className="logo"
      aria-label="PULSO Training Club — início"
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M3 26 13 9h9L12 26H3Zm15 5L28 14h9L27 31h-9Z"
          fill="currentColor"
        />
      </svg>
      <span>
        PULSO<small>TRAINING CLUB</small>
      </span>
    </a>
  );
}
export function CTA({
  children = "Agende sua aula experimental",
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <a className={`button ${className}`} href="#contato">
      {children}
      <ArrowUpRight size={19} aria-hidden="true" />
    </a>
  );
}
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow">
      <span aria-hidden="true" />
      {children}
    </p>
  );
}
