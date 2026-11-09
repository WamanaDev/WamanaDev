import { servicos } from "@/content/site";
import { ServicosGrid } from "./servicos-grid";

export function Servicos() {
  return (
    <section
      id="servicos"
      aria-labelledby="servicos-titulo"
      className="bg-papel px-4 py-24 sm:px-8 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="servicos-titulo"
          className="max-w-3xl font-display text-4xl font-extrabold leading-[1.05] text-grafite sm:text-5xl md:text-6xl"
        >
          {servicos.titulo}
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-grafite/80">
          {servicos.intro}
        </p>
        <ServicosGrid itens={servicos.itens} />
      </div>
    </section>
  );
}
