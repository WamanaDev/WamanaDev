"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { faq } from "@/content/site";
import { useReducedMotion } from "@/components/motion/use-reduced-motion";

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.itens.map((i) => ({
    "@type": "Question",
    name: i.pergunta,
    acceptedAnswer: { "@type": "Answer", text: i.resposta },
  })),
}).replace(/</g, "\\u003c");

export function Faq() {
  const base = useId();
  const reduzido = useReducedMotion();
  const [aberto, setAberto] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-papel px-4 py-20 sm:px-6 md:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-4xl font-extrabold text-grafite md:text-5xl">
          {faq.titulo}
        </h2>
        <div className="mt-10 divide-y divide-grafite/15 border-y border-grafite/15">
          {faq.itens.map((item, i) => {
            const open = aberto === i;
            const btnId = `${base}-b${i}`;
            const panelId = `${base}-p${i}`;
            return (
              <div key={item.pergunta}>
                <h3>
                  <button
                    id={btnId}
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setAberto(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left font-display text-xl font-bold text-grafite md:text-2xl"
                  >
                    {item.pergunta}
                    <motion.svg
                      viewBox="0 0 24 24"
                      className="size-6 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      animate={{ rotate: open ? 135 : 0 }}
                      transition={{ duration: reduzido ? 0 : 0.3 }}
                      aria-hidden="true"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </motion.svg>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {open ? (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={btnId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: reduzido ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-10 text-lg text-grafite/85">{item.resposta}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
