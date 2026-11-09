import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree, Caveat } from "next/font/google";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import "./globals.css";

const bricolage = Bricolage_Grotesque({ variable: "--font-bricolage", subsets: ["latin"] });
const figtree = Figtree({ variable: "--font-figtree", subsets: ["latin"] });
const caveat = Caveat({ variable: "--font-caveat", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://wamanadev.com.br"),
  title: "Wictor Pamplona — Mais tempo pro que importa.",
  description:
    "Eu transformo o trabalho manual do seu negócio em sistemas simples, feitos sob medida e explicados sem jargão. Atendo todo o Brasil.",
  openGraph: {
    title: "Wictor Pamplona — Mais tempo pro que importa.",
    description:
      "Sistemas simples e sob medida para pequenos negócios. Preço fechado na proposta e 60 dias de ajustes.",
    url: "https://wamanadev.com.br",
    siteName: "Wictor Pamplona",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${bricolage.variable} ${figtree.variable} ${caveat.variable} antialiased`}
    >
      <body className="min-h-dvh">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
