"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import type { Trajetoria } from "@/content/site";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const marca = "rounded bg-amarelo px-1.5 py-0.5 [box-decoration-break:clone]";

export function SobreTimeline({ itens }: { itens: Trajetoria[] }) {
  const ref = useRef<HTMLOListElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          "[data-linha]",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            transformOrigin: "top",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 70%",
              end: "bottom 70%",
              scrub: true,
            },
          },
        );
        gsap.utils.toArray<HTMLElement>("[data-item]").forEach((el) => {
          gsap.from(el, {
            opacity: 0,
            y: 24,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 75%", once: true },
          });
        });
      });
    },
    { scope: ref },
  );

  return (
    <ol ref={ref} className="relative mx-auto mt-20 max-w-2xl list-none pl-10">
      <span
        aria-hidden="true"
        data-linha
        className="absolute bottom-2 left-[9px] top-2 w-0.5 origin-top bg-grafite"
      />
      {itens.map((t, i) => {
        const ultimo = i === itens.length - 1;
        return (
          <li key={t.quando} data-item className="relative pb-8 last:pb-0">
            <span
              aria-hidden="true"
              className={`absolute -left-10 top-1.5 size-5 rounded-full border-2 border-grafite ${ultimo ? "bg-amarelo" : "bg-papel"}`}
            />
            <p className="text-lg text-grafite">
              <strong className={`font-display font-bold ${ultimo ? marca : ""}`}>{t.quando}</strong>{" "}
              <span className={`text-grafite/85 ${ultimo ? marca : ""}`}>{t.oque}</span>
            </p>
          </li>
        );
      })}
    </ol>
  );
}
