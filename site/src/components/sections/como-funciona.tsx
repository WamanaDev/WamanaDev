import { comoFunciona } from "@/content/site";
import { ComoFuncionaPalco } from "./como-funciona-palco";

export function ComoFunciona() {
  return (
    <ComoFuncionaPalco titulo={comoFunciona.titulo} passos={comoFunciona.passos} />
  );
}
