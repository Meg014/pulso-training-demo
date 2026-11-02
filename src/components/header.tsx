"use client";
import { useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/content/site";
import { CTA, Logo } from "./ui";
export function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  return (
    <header className="header" onKeyDown={(event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    }}>
      <div className="container header-inner">
        <Logo />
        <nav aria-label="Navegação principal" className="desktop-nav">
          {site.navigation.map(([label, href]) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
        </nav>
        <CTA className="header-cta">Viva a experiência</CTA>
        <button
          ref={toggle}
          type="button"
          className="menu-toggle"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <nav
        id="mobile-nav"
        aria-label="Navegação móvel"
        hidden={!open}
        className="mobile-nav"
      >
        {[...site.navigation, ["Aula experimental", "#contato"]].map(
          ([label, href]) => (
            <a href={href} key={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ),
        )}
      </nav>
    </header>
  );
}
