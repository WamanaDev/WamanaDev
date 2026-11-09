"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import type { Passo } from "@/content/site";
import { contato, CTA_LABEL } from "@/lib/contato";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// 4 pontos equidistantes; entre cada par, o MESMO trecho ondulado (3 trechos idênticos).
const PONTOS_X = [40, 280, 520, 760];
const trecho = (x: number) =>
  `M${x} 30 C ${x + 40} 14, ${x + 80} 14, ${x + 120} 30 S ${x + 200} 46, ${x + 240} 30`;
const TRECHOS = PONTOS_X.slice(0, -1).map(trecho);

export function ComoFuncionaPalco({
  titulo,
  passos,
}: {
  titulo: string;
  passos: Passo[];
}) {
  const secao = useRef<HTMLElement>(null);
  const lista = useRef<HTMLOListElement>(null);
  const cta = useRef<HTMLDivElement>(null);
  const trilha = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const itens = gsap.utils.toArray<HTMLElement>("[data-passo]", lista.current);

      // Desktop com movimento: seção fixa, passos avançam com o scroll.
      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        const pontos = gsap.utils.toArray<SVGCircleElement>("[data-ponto]", trilha.current);
        gsap.set(itens, { gridArea: "1 / 1", opacity: 0, y: 40 });
        gsap.set(itens[0], { opacity: 1, y: 0 });
        const segmentos = gsap.utils.toArray<SVGPathElement>("[data-trecho]", trilha.current);
        gsap.set(segmentos, { strokeDasharray: 1, strokeDashoffset: 1 });
        gsap.set(cta.current, { opacity: 0, y: 20 });
        gsap.set(pontos, { fill: "#FBF7EE", scale: 1, transformOrigin: "50% 50%" });
        gsap.set(pontos[0], { fill: "#F2C230" });

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: secao.current,
            start: "top top",
            end: "+=300%",
            pin: true,
            scrub: 0.6,
            anticipatePin: 1,
          },
        });

        // Mesmo ritmo para cada passo: trecho desenha em 0.6, ponto acende quando a linha chega.
        for (let i = 1; i < itens.length; i++) {
          const t = i - 1;
          tl.to(segmentos[i - 1], { strokeDashoffset: 0, duration: 0.6 }, t + 0.2)
            .to(pontos[i], { fill: "#F2C230", duration: 0.1 }, t + 0.8)
            .to(pontos[i], { scale: 1.35, duration: 0.1, yoyo: true, repeat: 1 }, t + 0.8)
            .to(itens[i - 1], { opacity: 0, y: -40, duration: 0.3 }, t + 0.6)
            .to(itens[i], { opacity: 1, y: 0, duration: 0.4 }, t + 0.8);
        }
        tl.to(cta.current, { opacity: 1, y: 0, duration: 0.5 }, 3.1);
        tl.to({}, { duration: 0.4 }); // respiro final
      });

      // Mobile com movimento: lista simples, revelação suave.
      mm.add("(max-width: 767px) and (prefers-reduced-motion: no-preference)", () => {
        itens.forEach((el) => {
          gsap.from(el, {
            opacity: 0,
            y: 32,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          });
        });
      });

      return () => mm.revert();
    },
    { scope: secao },
  );

  return (
    <section
      ref={secao}
      id="como-funciona"
      aria-labelledby="como-funciona-titulo"
      className="flex flex-col justify-center bg-papel px-4 py-24 sm:px-8 md:min-h-screen md:py-16"
    >
      <div className="mx-auto w-full max-w-6xl">
        <h2
          id="como-funciona-titulo"
          className="max-w-3xl font-display text-4xl font-extrabold leading-[1.05] text-grafite sm:text-5xl md:text-6xl"
        >
          {titulo}
        </h2>

        {/* Trilha de progresso (decorativa, só desktop) */}
        <svg
          ref={trilha}
          viewBox="0 0 800 60"
          className="mt-10 hidden h-12 w-full md:block"
          aria-hidden="true"
          focusable="false"
        >
          {TRECHOS.map((d) => (
            <path
              key={`base-${d}`}
              d={d}
              fill="none"
              stroke="#1F1B16"
              strokeOpacity={0.12}
              strokeWidth={5}
              strokeLinecap="round"
            />
          ))}
          {TRECHOS.map((d) => (
            <path
              key={`trecho-${d}`}
              data-trecho
              d={d}
              pathLength={1}
              fill="none"
              stroke="#F2C230"
              strokeWidth={6}
              strokeLinecap="round"
            />
          ))}
          {PONTOS_X.map((x) => (
            <circle
              key={x}
              data-ponto
              cx={x}
              cy={30}
              r={10}
              fill="#F2C230"
              stroke="#1F1B16"
              strokeWidth={3}
            />
          ))}
        </svg>

        <ol
          ref={lista}
          role="list"
          className="mt-12 grid list-none gap-12 p-0 md:mt-8 md:gap-0"
        >
          {passos.map((p) => (
            <li
              key={p.numero}
              data-passo
              className="grid items-center gap-2 md:grid-cols-[12rem_1fr] md:gap-12"
            >
              <span
                aria-hidden="true"
                className="font-display text-[7rem] font-extrabold leading-none text-amarelo tabular-nums sm:text-[9rem] md:text-center md:text-[15rem]"
                style={{ WebkitTextStroke: "6px #1F1B16", paintOrder: "stroke fill" }}
              >
                {p.numero}
              </span>
              <div className="max-w-xl">
                <span className="sr-only">Passo {p.numero}: </span>
                <h3 className="font-display text-3xl font-bold leading-tight text-grafite md:text-4xl">
                  {p.titulo}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-grafite/80">
                  {p.texto}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div ref={cta} className="mt-14 md:mt-6">
          <a
            href={contato.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-amarelo px-8 py-4 text-lg font-semibold text-grafite transition-transform hover:-translate-y-0.5"
          >
            {CTA_LABEL}
          </a>
        </div>
      </div>
    </section>
  );
}
