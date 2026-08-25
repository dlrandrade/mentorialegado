/**
 * Configuração central da Mentoria Legado.
 * Edite aqui — nenhum destes valores está repetido dentro dos componentes.
 */

export const site = {
  name: "Mentoria Legado",
  url: "https://mentoria.legadopsi.com.br",

  professional: {
    fullName: "Moisés Barbosa Oliveira",
    shortName: "Moisés Barbosa",
    title: "Psicólogo",
    crp: "CRP 13/11227",
    roles: "Psicólogo · Neuropsicólogo · Professor",
    credentials: [
      "Formação em Neuropsicologia no Einstein",
      "Aperfeiçoamento em Neuromodulação em Harvard",
    ],
  },

  /** Isca de topo de funil — todo CTA da página aponta para cá. */
  diagnosticUrl: "https://diagnostico.legadopsi.com.br",

  /**
   * Deixe como string vazia para o link simplesmente não aparecer no rodapé.
   * Preencha quando tiver a URL/endereço definitivo.
   */
  links: {
    instagram: "",
    contactEmail: "",
    whatsapp: "",
  },

  signature: "Transformar pessoas é o começo. Desenvolver profissionais é o legado.",
} as const;

export const CTA_PRIMARY = "Quero fazer meu diagnóstico profissional";
export const CTA_SHORT = "Fazer meu diagnóstico profissional";
export const CTA_MICRO = "Gratuito";
