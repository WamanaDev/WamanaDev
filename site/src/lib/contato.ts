const WHATSAPP_NUMERO = "5511990005014";
const WHATSAPP_MENSAGEM = "Oi Wictor! Vim pelo site e queria conversar sobre o meu negócio.";

export const contato = {
  whatsapp: `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(WHATSAPP_MENSAGEM)}`,
  email: "contato@wamanadev.com.br",
  instagram: "https://www.instagram.com/wictor.pamplona",
  linkedin: "https://www.linkedin.com/in/wictor-pamplona",
  github: "https://github.com/WamanaDev",
} as const;

export const CTA_LABEL = "Conversar no WhatsApp";
