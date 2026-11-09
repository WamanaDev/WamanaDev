"use client";

import { useRef, type ReactNode } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import type { Projeto } from "@/content/site";
import { useReducedMotion } from "@/components/motion/use-reduced-motion";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Visual = { curto: string; motivo: ReactNode };

const S = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const motivos: Record<string, ReactNode> = {
  carro: (
    <>
      <path d="M8 56h4V44l8-16h40l8 16v12h4" />
      <path d="M12 44h64" />
      <circle cx="26" cy="58" r="6" />
      <circle cx="62" cy="58" r="6" />
      <path d="M84 20a8 8 0 1 1-6 13l-14 14" />
    </>
  ),
  tv: (
    <>
      <rect x="10" y="22" width="76" height="46" rx="6" />
      <path d="M34 80h28M48 68v12M38 10l10 12 10-12" />
      <path d="M44 38l14 7-14 7z" />
    </>
  ),
  garrafa: (
    <>
      <path d="M26 8h10v12l6 10v50H20V30l6-10z" />
      <path d="M20 48h22" />
      <rect x="54" y="40" width="34" height="40" rx="3" />
      <path d="M54 54h34M66 40v14" />
    </>
  ),
  coracao: (
    <>
      <path d="M48 82C20 62 12 46 12 34a16 16 0 0 1 36-8 16 16 0 0 1 36 8c0 12-8 28-36 48z" />
      <path d="M30 44h12l5-9 7 16 5-7h9" />
    </>
  ),
  calendario: (
    <>
      <rect x="12" y="18" width="72" height="62" rx="6" />
      <path d="M12 36h72M30 10v14M66 10v14" />
      <path d="M26 50h8M44 50h8M62 50h8M26 64h8M44 64h8" />
    </>
  ),
  livro: (
    <>
      <path d="M48 28c-8-8-22-10-36-8v52c14-2 28 0 36 8 8-8 22-10 36-8V20c-14-2-28 0-36 8z" />
      <path d="M48 28v52" />
    </>
  ),
  folha: (
    <>
      <path d="M18 78C14 44 34 18 78 16c2 40-18 62-52 62" />
      <path d="M18 78C34 58 48 44 62 32" />
      <path d="M70 66v16M62 74h16" />
    </>
  ),
  pasta: (
    <>
      <path d="M10 26a6 6 0 0 1 6-6h20l8 10h36a6 6 0 0 1 6 6v36a6 6 0 0 1-6 6H16a6 6 0 0 1-6-6z" />
      <path d="M10 42h76" />
    </>
  ),
};

const visuais: Record<string, Visual> = {
  CarFico: { curto: "CarFico", motivo: motivos.carro },
  "JP Mídia Indoor": { curto: "JP Mídia", motivo: motivos.tv },
  "PDV para adegas": { curto: "PDV", motivo: motivos.garrafa },
  "Cuidar Social": { curto: "Cuidar", motivo: motivos.coracao },
  Extrinha: { curto: "Extrinha", motivo: motivos.calendario },
  "Site Escola Sabiá-Laranjeira": { curto: "Sabiá", motivo: motivos.livro },
  "Site Clínica Kairós": { curto: "Kairós", motivo: motivos.folha },
  Pastel: { curto: "Pastel", motivo: motivos.pasta },
};

// Paleta rotativa. Contraste: grafite em amarelo/terracota OK; papel em grafite OK;
// papel em salvia somente em texto grande (o nome no painel e display grande).
const paineis = [
  "bg-amarelo text-grafite",
  "bg-grafite text-papel",
  "bg-salvia text-papel",
  "bg-terracota text-grafite",
];

const pontos: Record<Projeto["status"], string> = {
  "No ar": "bg-salvia",
  "Em andamento": "bg-amarelo",
  "Projeto pessoal": "bg-grafite",
};

export function GithubMark({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`${className} shrink-0`} fill="currentColor" aria-hidden="true">
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

function Seta() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-4 shrink-0 transition-transform duration-300 group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5"
      {...S}
      aria-hidden="true"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function Card({ projeto, i }: { projeto: Projeto; i: number }) {
  const reduzido = useReducedMotion();
  const v = visuais[projeto.nome] ?? { curto: projeto.nome, motivo: motivos.pasta };
  const grande = i < 2;
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 200, damping: 20 });
  const sy = useSpring(my, { stiffness: 200, damping: 20 });
  const rotY = useTransform(sx, [-0.5, 0.5], [-3, 3]);
  const rotX = useTransform(sy, [-0.5, 0.5], [3, -3]);
  const span = grande ? "lg:col-span-3" : "lg:col-span-2";

  return (
    <motion.article
      data-card
      className={`group/card relative flex flex-col overflow-hidden rounded-3xl border border-grafite/10 bg-white/60 ${span}`}
      style={reduzido ? undefined : { rotateX: rotX, rotateY: rotY, transformPerspective: 900 }}
      onPointerMove={(e) => {
        if (reduzido || e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onPointerLeave={() => {
        mx.set(0);
        my.set(0);
      }}
    >
      <div className="m-3 mb-0 overflow-hidden rounded-t-2xl border border-grafite/10 bg-grafite/5">
        <div className="flex items-center gap-1.5 border-b border-grafite/10 bg-papel px-3 py-2" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-grafite/20" />
          <span className="size-2.5 rounded-full bg-grafite/20" />
          <span className="size-2.5 rounded-full bg-grafite/20" />
        </div>
        {projeto.thumb ? (
          <div className="relative aspect-16/10 overflow-hidden">
            <Image
              src={projeto.thumb}
              alt={`Página do ${projeto.nome}`}
              width={1200}
              height={750}
              sizes={grande ? "(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw" : "(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw"}
              className="size-full object-cover object-top transition-[object-position] duration-2500 ease-out group-hover/card:object-bottom motion-reduce:transition-none"
            />
          </div>
        ) : (
          <div
            className={`relative flex aspect-16/10 items-end overflow-hidden p-6 ${paineis[i % paineis.length]}`}
          >
            <span className="font-display text-5xl font-extrabold leading-none md:text-6xl">
              {v.curto}
            </span>
            <svg
              viewBox="0 0 96 96"
              className="absolute right-5 top-5 size-16 opacity-80 md:size-20"
              {...S}
              aria-hidden="true"
            >
              {v.motivo}
            </svg>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-display text-xl font-bold text-grafite">{projeto.nome}</h3>
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-grafite/20 px-3 py-1 text-sm font-medium text-grafite">
          <span className={`size-2.5 rounded-full ${pontos[projeto.status]}`} aria-hidden="true" />
          {projeto.status}
        </span>
        <p className="text-grafite/80">{projeto.descricao}</p>
        {projeto.link || projeto.github?.length ? (
          <ul className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-2 text-sm font-semibold">
            {projeto.link ? (
              <li>
                <a
                  href={projeto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver site do ${projeto.nome} (abre em nova aba)`}
                  className="link-marca inline-flex items-center gap-1"
                >
                  Ver site <Seta />
                </a>
              </li>
            ) : null}
            {projeto.github?.map((g) => (
              <li key={g.href}>
                <a
                  href={g.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Código do ${projeto.nome} no GitHub: ${g.label} (abre em nova aba)`}
                  className="link-marca inline-flex items-center gap-1.5"
                >
                  <GithubMark />
                  GitHub · {g.label}
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </motion.article>
  );
}

export function ProjetosGrid({ itens }: { itens: Projeto[] }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const cards = gsap.utils.toArray<HTMLElement>("[data-card]");
        gsap.set(cards, { clipPath: "inset(12% 12% 12% 12% round 24px)", opacity: 0, scale: 0.94 });
        ScrollTrigger.batch(cards, {
          start: "top 88%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              clipPath: "inset(0% 0% 0% 0% round 24px)",
              opacity: 1,
              scale: 1,
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.12,
              clearProps: "clipPath,scale,opacity",
            }),
        });
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6">
      {itens.map((p, i) => (
        <Card key={p.nome} projeto={p} i={i} />
      ))}
    </div>
  );
}
