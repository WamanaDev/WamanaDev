import type { ReactNode } from "react";
import { fechamento } from "@/content/site";
import { contato } from "@/lib/contato";
import { AnoAtual } from "@/components/ano-atual";

const linha = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const icones: Record<string, ReactNode> = {
  email: (
    <svg viewBox="0 0 24 24" {...linha}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" {...linha}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.83v1.54h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.67 4.8 6.13V21h-4v-4.98c0-1.19-.02-2.72-1.66-2.72-1.66 0-1.91 1.3-1.91 2.63V21h-4V9.75Z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" {...linha}>
      <path d="M3.5 20.5 4.8 16A8.5 8.5 0 1 1 8 19.2l-4.5 1.3Z" />
      <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.6-2-1-1 1c-1.2-.5-2.3-1.6-2.9-2.9l1-1-1-2L9 8.5Z" fill="currentColor" stroke="none" />
    </svg>
  ),
};

const links = [
  { id: "whatsapp", label: "WhatsApp", href: contato.whatsapp, externo: true },
  { id: "instagram", label: "Instagram", href: contato.instagram, externo: true },
  { id: "linkedin", label: "LinkedIn", href: contato.linkedin, externo: true },
  { id: "github", label: "GitHub", href: contato.github, externo: true },
  { id: "email", label: contato.email, href: `mailto:${contato.email}`, externo: false },
];

export function Footer() {
  return (
    <footer className="bg-grafite text-papel">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <p className="font-display text-2xl font-bold md:text-4xl">{fechamento.rodape}</p>
        <p className="mt-3 text-papel/70">Atendo todo o Brasil</p>

        <ul className="mt-10 flex flex-wrap gap-3">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={l.href}
                {...(l.externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group inline-flex items-center gap-2.5 rounded-full border border-papel/15 px-4 py-2.5 font-medium text-papel transition-colors hover:border-amarelo hover:bg-papel/5"
              >
                <span className="size-5 shrink-0 transition-colors group-hover:text-amarelo" aria-hidden="true">
                  {icones[l.id]}
                </span>
                <span className="underline decoration-transparent decoration-2 underline-offset-4 transition-colors group-hover:decoration-amarelo">
                  {l.label}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-14 text-sm text-papel/60">
          &copy; <AnoAtual /> Wictor Pamplona. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
