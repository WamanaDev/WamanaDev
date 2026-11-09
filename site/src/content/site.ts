export type Hero = {
  headline: string;
  sub: string;
  microcopy: string;
  anotacao: string;
};

export type Servico = {
  titulo: string;
  texto: string;
  destaque?: boolean;
};

export type Servicos = {
  titulo: string;
  intro: string;
  itens: Servico[];
};

export type Passo = {
  numero: number;
  titulo: string;
  texto: string;
};

export type ComoFunciona = {
  titulo: string;
  passos: Passo[];
};

export type Projeto = {
  nome: string;
  status: "No ar" | "Em andamento" | "Projeto pessoal";
  descricao: string;
  link?: string;
  thumb?: string;
  github?: { label: string; href: string }[];
};

export type Projetos = {
  titulo: string;
  intro: string;
  itens: Projeto[];
};

export type Trajetoria = {
  quando: string;
  oque: string;
};

export type Sobre = {
  titulo: string;
  paragrafos: string[];
  apoio: string;
  trajetoria: Trajetoria[];
};

export type Pergunta = {
  pergunta: string;
  resposta: string;
};

export type Faq = {
  titulo: string;
  itens: Pergunta[];
};

export type Fechamento = {
  titulo: string;
  texto: string;
  rodape: string;
};

export const hero: Hero = {
  headline: "Mais tempo pro que importa.",
  sub: "Eu troco o retrabalho de caderno, planilha e WhatsApp por um sistema simples, feito do jeito que o seu negócio já trabalha. Sem jargão, com preço fechado na proposta e 60 dias de ajustes depois da entrega.",
  microcopy: "Conversa sem compromisso. Você me conta como funciona hoje, eu digo se dá pra melhorar.",
  anotacao: "começa por uma conversa →",
};

export const servicos: Servicos = {
  titulo: "O que dá pra tirar das suas costas",
  intro: "Cada negócio tem aquele processo que come a semana. Eu começo por ele.",
  itens: [
    {
      titulo: "Agenda e atendimento",
      texto: "Horários, confirmações e histórico de clientes em um lugar só. Menos falta, menos mensagem perdida, menos noite conferindo caderno.",
    },
    {
      titulo: "Pedidos e encomendas",
      texto: "Tudo que chega pelo WhatsApp, balcão ou telefone vira uma lista clara: o que entra, o que está em produção e o que sai hoje.",
    },
    {
      titulo: "Estoque",
      texto: "Saber o que tem, o que acabou e o que precisa comprar, sem abrir três planilhas e sem depender da memória de ninguém.",
    },
    {
      titulo: "Financeiro do dia a dia",
      texto: "Quanto entrou, quanto saiu e quanto falta receber, sem fazer conta no fim do mês.",
    },
    {
      titulo: "Sua planilha, sem os erros",
      texto: "Já tem uma planilha que funciona? Ótimo. Eu transformo ela em um sistema de verdade: mesma lógica, sem fórmula quebrada e acessível pelo celular.",
      destaque: true,
    },
    {
      titulo: "Acompanhamento e evolução",
      texto: "Depois da entrega, eu continuo por perto: 60 dias de ajustes já incluídos. Depois disso, se quiser, a manutenção mensal mantém o sistema evoluindo conforme o negócio cresce.",
    },
  ],
};

export const comoFunciona: ComoFunciona = {
  titulo: "Do caderno ao sistema em 4 passos",
  passos: [
    {
      numero: 1,
      titulo: "A gente conversa",
      texto: "Você me conta como o negócio funciona hoje, pelo WhatsApp ou por vídeo. Sem formulário complicado e sem precisar saber nome técnico de nada.",
    },
    {
      numero: 2,
      titulo: "Eu entendo e proponho",
      texto: "Mapeio o processo que mais te custa tempo e mando uma proposta em português claro: o que vou fazer, quanto custa e quando fica pronto. Preço fechado, sem surpresa.",
    },
    {
      numero: 3,
      titulo: "Eu construo, você acompanha",
      texto: "Você vê o sistema tomando forma e opina no caminho. Nada de sumir por meses e aparecer com algo que ninguém pediu.",
    },
    {
      numero: 4,
      titulo: "Você usa, eu fico por perto",
      texto: "Treino você e a equipe e, nos 60 dias seguintes, ajusto o que for preciso sem custo. O objetivo é simples: o sistema ser usado de verdade.",
    },
  ],
};

export const projetos: Projetos = {
  titulo: "Coisas que eu já construí",
  intro: "Alguns sistemas que eu idealizei e construí do zero. Uns já estão no ar com clientes, outros ainda estão saindo do forno.",
  itens: [
    {
      nome: "CarFico",
      status: "No ar",
      descricao: "Um aplicativo para a oficina mecânica controlar clientes, carros, orçamentos aprovados pelo WhatsApp, vistoria com fotos e recebimentos, mesmo sem internet.",
      link: "https://carfico.com.br",
      thumb: "/projetos/carfico.webp",
    },
    {
      nome: "JP Mídia Indoor",
      status: "No ar",
      descricao: "Permite que uma loja, clínica ou restaurante troque, de um só lugar, as propagandas e vídeos que passam nas TVs do estabelecimento, e todas as telas se atualizam sozinhas.",
      link: "https://jpdash20.vercel.app",
      thumb: "/projetos/jp-midia.webp",
      github: [
        { label: "Painel", href: "https://github.com/WamanaDev/JP-Midia-Indoor" },
        { label: "App da TV", href: "https://github.com/WamanaDev/Midia-Indoor-APP" },
      ],
    },
    {
      nome: "PDV para adegas",
      status: "Em andamento",
      descricao: "Um sistema de caixa para adegas que vende no balcão e online, emite nota fiscal e controla o caixa, mesmo quando a internet cai.",
      link: "https://pdv-gamma-nine.vercel.app",
      thumb: "/projetos/pdv.webp",
    },
    {
      nome: "Cuidar Social",
      status: "Em andamento",
      descricao: "Um sistema no celular para casas de repouso controlarem remédios, sinais vitais, agenda e troca de plantão de cada idoso, com tudo registrado.",
    },
    {
      nome: "Extrinha",
      status: "Em andamento",
      descricao: "Monta a escala de trabalho 12x36 da equipe e distribui os plantões extras de forma justa entre os funcionários.",
      link: "https://extras-ivory.vercel.app",
      github: [{ label: "Código", href: "https://github.com/WamanaDev/extras" }],
    },
    {
      nome: "Site Escola Sabiá-Laranjeira",
      status: "No ar",
      descricao: "Site de apresentação de uma escola de educação infantil, para atrair famílias e facilitar o contato.",
      link: "https://escola-eta-three.vercel.app",
      thumb: "/projetos/escola.webp",
    },
    {
      nome: "Site Clínica Kairós",
      status: "No ar",
      descricao: "Site de uma clínica de fonoaudiologia e psicologia infantil, com agendamento pelo WhatsApp.",
    },
    {
      nome: "Pastel",
      status: "Projeto pessoal",
      descricao: "Um programa gratuito que organiza os atalhos da área de trabalho do computador em pastinhas, igual às pastas do celular.",
      link: "https://wamanadev.github.io/pastel/",
      thumb: "/projetos/pastel.webp",
      github: [{ label: "Código", href: "https://github.com/WamanaDev/pastel" }],
    },
  ],
};

export const sobre: Sobre = {
  titulo: "Eu já estive do seu lado do balcão.",
  paragrafos: [
    "Comecei a programar aos 11 anos. Mas antes de viver de tecnologia, vivi do outro lado: fui balconista no Fórum João Mendes, atendente na Rede Natura, vendedor para o Banco Safra, eletricista, encarregado da reforma elétrica do SESC Florêncio de Abreu e sócio de uma empresa de elétrica com 11 pessoas.",
    "Em todo lugar, eu tinha a mesma mania: achava a tarefa que se repetia todo dia e dava um jeito de ela se fazer sozinha. Planilha que escrevia o e-mail. Controle de estoque da obra. Diário de obra que se preenchia quase sozinho.",
    "Sei o que é fechar o mês no caderno e controlar estoque de cabeça, porque já fiz isso como funcionário e como dono. Hoje faço por você o que sempre fiz por mim: tiro o trabalho repetitivo do caminho pra sobrar tempo pro que importa.",
  ],
  apoio: "Atendo todo o Brasil, por WhatsApp e vídeo.",
  trajetoria: [
    { quando: "11 anos", oque: "primeiras linhas de código" },
    { quando: "Fórum João Mendes Jr.", oque: "balcão e arquivo (aprendiz CIEE)" },
    { quando: "2018 · Rede Natura (CSU)", oque: "atendimento backoffice. Planilhas que automatizavam scripts e e-mails" },
    { quando: "2019 · Banco Safra (Fidelizza+)", oque: "vendas e retenção" },
    { quando: "Luminae", oque: "eletricista. Medição de consumo e automação para economia de energia" },
    { quando: "Empresa própria de elétrica", oque: "3 sócios, 11 colaboradores. Sistemas de estoque e diário de obra" },
    { quando: "2022 · Citycon", oque: "encarregado da reforma elétrica do SESC Florêncio de Abreu" },
    { quando: "2023 · Prefeitura de Barueri", oque: "cuidador social. Nasceram o Extrinha e o Cuidar Social" },
    { quando: "Hoje", oque: "consultoria que devolve tempo a pequenos negócios" },
  ],
};

export const faq: Faq = {
  titulo: "Perguntas que sempre aparecem",
  itens: [
    {
      pergunta: "Quanto custa?",
      resposta: "Você não vai ficar no escuro. Primeiro eu entendo o seu problema; depois mando uma proposta por escrito, com preço fechado e sem letra miúda. E eu sempre começo pela menor solução que resolve: muitas vezes é um projeto bem mais enxuto do que você imagina.",
    },
    {
      pergunta: "Não entendo nada de tecnologia.",
      resposta: "Nem precisa. Você entende do seu negócio, e é isso que eu preciso. Eu cuido da parte técnica e explico tudo com as palavras que você usa no dia a dia. Se alguma coisa não ficou clara, a culpa é da minha explicação, não sua.",
    },
    {
      pergunta: "Já tentei um sistema e ninguém usou.",
      resposta: "Isso é mais comum do que parece, e quase sempre acontece porque o sistema foi feito para um negócio genérico, não para o seu. Aqui é o contrário: o sistema nasce da rotina que vocês já têm, a equipe é treinada na entrega e eu fico 60 dias ajustando o que não encaixou.",
    },
    {
      pergunta: "Por que não assinar um sistema pronto?",
      resposta: "Às vezes um sistema pronto resolve, e se for o seu caso eu te falo isso na primeira conversa. Mas quando o seu jeito de trabalhar não cabe no modelo pronto, você acaba pagando por recursos que não usa e adaptando o negócio ao software. Sob medida, você tem só o que precisa, do jeito que já funciona, com uma pessoa de verdade para chamar quando precisar.",
    },
    {
      pergunta: "Quanto tempo demora?",
      resposta: "O prazo vem definido na proposta, junto com o preço e o que está incluído. Eu começo pelo processo que mais rouba o seu tempo, pra você usar algo útil o quanto antes e evoluir depois.",
    },
    {
      pergunta: "E se eu precisar mudar alguma coisa depois?",
      resposta: "Vai precisar, e tudo bem. Negócio muda. Os primeiros 60 dias de ajustes depois da entrega já estão incluídos. Depois disso, se quiser, tem a manutenção mensal opcional.",
    },
  ],
};

export const fechamento: Fechamento = {
  titulo: "Qual tarefa você não aguenta mais fazer na mão?",
  texto: "Me conta. Em uma conversa rápida eu te digo se dá pra automatizar e como. Depois, te mando a proposta com preço e prazo fechados.",
  rodape: "Wictor Pamplona · Mais tempo pro que importa.",
};
