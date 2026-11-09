"use client";

import { useSyncExternalStore } from "react";

const ANO_BUILD = 2026;

/** Ano atual no navegador; no servidor usa o ano do build (evita new Date() no prerender). */
export function AnoAtual() {
  const ano = useSyncExternalStore(
    () => () => {},
    () => new Date().getFullYear(),
    () => ANO_BUILD,
  );
  return <>{ano}</>;
}
