"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "motion/react";
import type { Servico } from "@/content/site";
import { useReducedMotion } from "@/components/motion/use-reduced-motion";

/* Ícones de linha, 24x24, traço 1.75, pontas arredondadas. Só <path> para o traço poder "desenhar". */
const ICONES: string[][] = [
  // agenda
  ["M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z", "M4 10h16", "M8 3v4", "M16 3v4", "M8.5 14.5l2 2 4-4"],
  // pedidos
  ["M6 4h12v16l-2-1.5-2 1.5-2-1.5-2 1.5-2-1.5L6 20z", "M9 9h6", "M9 13h4"],
  // estoque
  ["M3.5 8L12 4l8.5 4v8L12 20l-8.5-4z", "M3.5 8L12 12l8.5-4", "M12 12v8"],
  // financeiro
  ["M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17z", "M14.5 9.2c-.5-.7-1.4-1.1-2.5-1.1-1.4 0-2.4.7-2.4 1.8 0 2.5 5 1.1 5 3.7 0 1.1-1.1 1.9-2.6 1.9-1.1 0-2.1-.4-2.7-1.2", "M12 6.5v1.6", "M12 15.8v1.7"],
  // planilha
  ["M4.5 4.5h15a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1v-13a1 1 0 0 1 1-1z", "M3.5 9.5h17", "M3.5 14.5h17", "M9.5 9.5v10", "M15.5 4.5v15"],
  // acompanhamento
  ["M3.5 17.5l5-5 3.5 3.5 8-8.5", "M15 7.5h5v5", "M4 20.5h16"],
];

const iconeVar: Variants = {
  hover: { rotate: [0, -9, 7, -3, 0], transition: { duration: 0.6 } },
};
const tracoVar: Variants = {
  hover: { pathLength: [0.05, 1], transition: { duration: 0.7, ease: "easeOut" } },
};

function Icone({ indice }: { indice: number }): ReactNode {
  return (
    <motion.svg
      variants={iconeVar}
      viewBox="0 0 24 24"
      width="44"
      height="44"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {ICONES[indice].map((d) => (
        <motion.path key={d} d={d} variants={tracoVar} />
      ))}
    </motion.svg>
  );
}

export function ServicosGrid({ itens }: { itens: Servico[] }) {
  const reduzido = useReducedMotion();

  return (
    <>
      {/* Sem JS: o estado inicial inline (opacity 0) é anulado. */}
      <noscript>
        <style>{`.reveal-js{opacity:1!important;transform:none!important}`}</style>
      </noscript>
      <ul className="mt-14 grid list-none grid-cols-1 gap-6 p-0 md:grid-cols-2 lg:grid-cols-3">
        {itens.map((item, i) => {
          const tilt = i % 2 === 0 ? -2.5 : 2.5;
          return (
            <motion.li
              key={item.titulo}
              className={
                "reveal-js flex flex-col rounded-3xl p-7 sm:p-8 " +
                (item.destaque
                  ? "bg-amarelo text-grafite shadow-[0_18px_40px_-18px_rgba(31,27,22,0.45)]"
                  : "border border-grafite/10 bg-white/60 text-grafite")
              }
              initial={reduzido ? { opacity: 1, y: 0, rotate: 0 } : { opacity: 0, y: 36, rotate: tilt }}
              animate={reduzido ? { opacity: 1, y: 0, rotate: 0 } : undefined}
              whileInView={reduzido ? undefined : { opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.7,
                delay: (i % 3) * 0.1,
                type: "spring",
                bounce: 0.3,
              }}
              whileHover={reduzido ? undefined : "hover"}
            >
              <motion.div
                className="flex flex-col"
                whileHover={reduzido ? undefined : { y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span
                  className={
                    "mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl " +
                    (item.destaque ? "bg-papel/70" : "bg-amarelo/30")
                  }
                >
                  <Icone indice={i} />
                </span>
                <h3 className="font-display text-2xl font-bold leading-tight">
                  {item.titulo}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-grafite/80">
                  {item.texto}
                </p>
              </motion.div>
            </motion.li>
          );
        })}
      </ul>
    </>
  );
}
