"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { hero } from "@/content/site";
import { contato, CTA_LABEL } from "@/lib/contato";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const ALVO = "que importa.";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const q = gsap.utils.selector(root);
        const split = SplitText.create(q("[data-h1]"), {
          type: "words",
          mask: "words",
        });
        gsap.set(split.words, { yPercent: 110 });
        gsap.set(q("[data-fade]"), { autoAlpha: 0, y: 24 });
        gsap.set(q("[data-draw]"), { strokeDasharray: 1, strokeDashoffset: 1 });
        gsap.set(q("[data-nota]"), { autoAlpha: 0 });
        gsap.set(q("[data-nota-texto]"), { clipPath: "inset(0 100% 0 0)" });

        const tl = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.15 });
        tl.to(split.words, { yPercent: 0, duration: 1, stagger: 0.09 })
          .to(q("[data-underline]"), { strokeDashoffset: 0, duration: 0.9, ease: "power2.inOut" }, "-=0.2")
          .to(q("[data-fade]"), { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.12 }, "-=0.5")
          .to(q("[data-nota]"), { autoAlpha: 1, duration: 0.1 })
          .to(q("[data-nota-texto]"), { clipPath: "inset(0 0% 0 0)", duration: 1, ease: "power1.inOut" }, "<")
          .to(q("[data-arrow]"), { strokeDashoffset: 0, duration: 0.7, ease: "power2.inOut" }, "-=0.2");

        gsap.utils.toArray<HTMLElement>(q("[data-parallax]")).forEach((el) => {
          gsap.to(el, {
            yPercent: Number(el.dataset.parallax),
            ease: "none",
            scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: 0.8 },
          });
        });

        return () => split.revert();
      });
    },
    { scope: root },
  );

  const temAlvo = hero.headline.includes(ALVO);
  const antes = hero.headline.replace(ALVO, "").trimEnd();

  return (
    <section
      ref={root}
      id="inicio"
      className="relative flex min-h-dvh items-center overflow-hidden bg-papel pb-20 pt-32 md:pt-36"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none">
        <div
          data-parallax="-18"
          className="absolute -right-24 top-10 h-[26rem] w-[26rem] rounded-full bg-amarelo/25 blur-2xl md:h-[34rem] md:w-[34rem]"
        />
        <div
          data-parallax="12"
          className="absolute -left-32 bottom-0 h-72 w-72 rounded-[45%_55%_60%_40%] bg-amarelo/20 blur-xl"
        />
        <span
          data-parallax="-30"
          className="absolute -right-6 bottom-6 font-display text-[22rem] font-extrabold leading-none text-grafite/[0.04] md:text-[34rem]"
        >
          WP
        </span>
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 md:px-8">
        <h1 data-h1 className="font-display text-[clamp(3rem,10vw,8rem)] font-extrabold leading-[1.05] text-grafite">
          {temAlvo ? (
            <>
              {antes}{" "}
              <span className="relative inline-block whitespace-nowrap">
                {ALVO}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 400 24"
                  preserveAspectRatio="none"
                  className="pointer-events-none absolute -bottom-[0.1em] left-0 h-[0.2em] w-full overflow-visible"
                >
                  <path
                    data-draw
                    data-underline
                    pathLength={1}
                    d="M4 14 C 50 6, 90 20, 140 12 S 230 4, 280 14 S 350 18, 396 9"
                    fill="none"
                    stroke="var(--color-amarelo)"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </>
          ) : (
            hero.headline
          )}
        </h1>

        <p data-fade className="mt-12 max-w-2xl text-lg leading-relaxed text-grafite/85 md:text-xl">
          {hero.sub}
        </p>

        <div data-fade className="mt-8 flex flex-col items-start">
          <div data-nota className="pointer-events-none ml-2 flex items-end gap-1" aria-hidden="false">
            <span data-nota-texto className="-rotate-2 whitespace-nowrap font-hand text-2xl text-grafite">
              {hero.anotacao}
            </span>
            <svg viewBox="0 0 50 44" className="mb-[-14px] h-10 w-12 shrink-0 text-grafite" fill="none" aria-hidden="true">
              <path
                data-draw
                data-arrow
                pathLength={1}
                d="M4 4 C 10 22, 22 32, 40 34 M30 26 L 41 34 L 31 41"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <a
            href={contato.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center rounded-full bg-amarelo px-8 py-4 text-lg font-semibold text-grafite transition-transform hover:scale-[1.04] active:scale-95"
          >
            {CTA_LABEL}
          </a>
          <p className="mt-4 max-w-md text-sm text-grafite/70">{hero.microcopy}</p>
        </div>
      </div>
    </section>
  );
}
