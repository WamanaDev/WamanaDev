"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { contato, CTA_LABEL } from "@/lib/contato";
import { useReducedMotion } from "@/components/motion/use-reduced-motion";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#projetos", label: "Projetos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#faq", label: "Dúvidas" },
];

const botao =
  "items-center justify-center rounded-full bg-amarelo px-5 py-2.5 text-sm font-semibold text-grafite transition-transform hover:scale-[1.04] active:scale-95";

export function Header() {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const firstLink = useRef<HTMLAnchorElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 80);
    setHidden(y > prev && y > 200);
  });

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLink.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const dur = reduced ? 0 : 0.35;

  return (
    <motion.header
      animate={{ y: hidden && !open ? "-110%" : 0 }}
      transition={{ duration: dur, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled || open
          ? "bg-papel/90 shadow-[0_1px_0_rgba(31,27,22,0.08),0_8px_24px_-12px_rgba(31,27,22,0.15)] backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 md:h-20 md:px-8">
        <a href="#inicio" aria-label="Wictor Pamplona, início" className="relative z-[60] shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/logo-horizontal.svg" alt="Wictor Pamplona" className="h-8 w-auto md:h-9" />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="link-marca text-[15px] font-medium">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={contato.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className={`${botao} hidden md:inline-flex`}
        >
          {CTA_LABEL}
        </a>

        <button
          ref={toggle}
          type="button"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
          className="relative z-[60] flex h-11 w-11 items-center justify-center rounded-full md:hidden"
        >
          <span className="relative block h-3 w-6" aria-hidden="true">
            <span
              className={`absolute left-0 h-0.5 w-6 rounded bg-grafite transition-all duration-300 ${
                open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-6 rounded bg-grafite transition-all duration-300 ${
                open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
              }`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            initial={{ opacity: 0, clipPath: "circle(0% at 90% 5%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 90% 5%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 90% 5%)" }}
            transition={{ duration: dur * 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[55] flex h-dvh flex-col justify-center bg-papel px-8 md:hidden"
          >
            <nav aria-label="Menu mobile" className="flex flex-col gap-2">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  ref={i === 0 ? firstLink : undefined}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: reduced ? 0 : 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: reduced ? 0 : 0.1 + i * 0.06, duration: dur }}
                  className="font-display text-4xl font-bold text-grafite"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <a
              href={contato.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className={`${botao} mt-10 inline-flex self-start !px-7 !py-3.5 !text-base`}
            >
              {CTA_LABEL}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
