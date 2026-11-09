import Image from "next/image";
import { sobre } from "@/content/site";
import { SobreTimeline } from "./sobre-timeline";

// troque para true após colocar site/public/wictor.jpg
export const HAS_PHOTO = true;

export function Sobre() {
  return (
    <section id="sobre" className="bg-papel px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="lg:sticky lg:top-24">
            {HAS_PHOTO ? (
              <Image
                src="/wictor.jpg"
                alt="Wictor Pamplona"
                width={800}
                height={1000}
                className="aspect-[4/5] w-full rounded-3xl object-cover"
              />
            ) : (
              <div className="relative flex aspect-[4/5] w-full items-center justify-center rounded-3xl bg-amarelo">
                <span className="font-display text-9xl font-extrabold text-grafite">WP</span>
                <span className="absolute bottom-6 right-6 -rotate-3 font-hand text-2xl text-grafite">
                  foto em breve
                </span>
              </div>
            )}
          </div>
          <div>
            <h2 className="font-display text-4xl font-extrabold text-grafite md:text-5xl">
              {sobre.titulo}
            </h2>
            <div className="mt-6 space-y-4 text-lg text-grafite/85">
              {sobre.paragrafos.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <p className="mt-6 font-medium text-grafite">{sobre.apoio}</p>
          </div>
        </div>
        <SobreTimeline itens={sobre.trajetoria} />
      </div>
    </section>
  );
}
