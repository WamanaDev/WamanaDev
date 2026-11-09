"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { fechamento } from "@/content/site";
import { contato, CTA_LABEL } from "@/lib/contato";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function Fechamento() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const trigger = { trigger: root.current, start: "top 80%", once: true };
        gsap.from(root.current, {
          clipPath: "inset(12% 8% 12% 8% round 3rem)",
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: trigger,
        });
        gsap.from("[data-rev]", {
          y: 40,
          autoAlpha: 0,
          duration: 0.8,
          stagger: 0.14,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: trigger,
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="contato" className="relative bg-amarelo py-28 md:py-40">
      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        <h2 data-rev className="font-display text-4xl font-extrabold leading-[1.08] text-grafite md:text-6xl lg:text-7xl">
          {fechamento.titulo}
        </h2>
        <p data-rev className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-grafite/90 md:text-xl">
          {fechamento.texto}
        </p>
        <a
          data-rev
          href={contato.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-flex items-center justify-center rounded-full bg-grafite px-9 py-4 text-lg font-semibold text-papel transition-transform hover:scale-[1.04] active:scale-95"
        >
          {CTA_LABEL}
        </a>
      </div>
    </section>
  );
}
