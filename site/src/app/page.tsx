import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Servicos } from "@/components/sections/servicos";
import { ComoFunciona } from "@/components/sections/como-funciona";
import { Projetos } from "@/components/sections/projetos";
import { Sobre } from "@/components/sections/sobre";
import { Faq } from "@/components/sections/faq";
import { Fechamento } from "@/components/sections/fechamento";
import { Footer } from "@/components/sections/footer";

// Prova social: seção oculta até existir caso real com autorização do cliente
// (ver .agents/brand-messaging.md §08).

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Servicos />
        <ComoFunciona />
        <Projetos />
        <Sobre />
        <Faq />
        <Fechamento />
      </main>
      <Footer />
    </>
  );
}
