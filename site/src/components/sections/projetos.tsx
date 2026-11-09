import { projetos } from "@/content/site";
import { ProjetosGrid } from "./projetos-grid";

export function Projetos() {
  return (
    <section id="projetos" className="bg-papel px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-3xl font-display text-4xl font-extrabold text-grafite md:text-5xl">
          {projetos.titulo}
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-grafite/80">{projetos.intro}</p>
        <ProjetosGrid itens={projetos.itens} />
      </div>
    </section>
  );
}
