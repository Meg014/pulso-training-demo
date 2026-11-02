export const site = {
  name: "PULSO Training Club",
  description:
    "Supere seus limites. Um conceito de training club para quem encontra no movimento a sua melhor versão. Projeto de portfólio da VortexVision.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://pulso.example",
  contact: { email: "", whatsapp: "" },
  navigation: [
    ["O clube", "#sobre"],
    ["Modalidades", "#modalidades"],
    ["Estrutura", "#estrutura"],
    ["Planos", "#planos"],
  ] as const,
  modalities: [
    {
      number: "01",
      name: "Musculação",
      tag: "FORÇA COM PROPÓSITO",
      description:
        "Da primeira repetição ao próximo desafio. Um espaço pensado para construir força, com técnica e consistência.",
    },
    {
      number: "02",
      name: "Funcional",
      tag: "MOVIMENTO SEM ROTINA",
      description:
        "Mobilidade, resistência e intensidade na medida certa. Treinos dinâmicos para levar mais energia para a vida.",
    },
    {
      number: "03",
      name: "Personal",
      tag: "O SEU RITMO. O SEU FOCO.",
      description:
        "Atenção individual e um caminho alinhado aos seus objetivos. Cada movimento tem uma intenção.",
    },
  ],
  plans: [
    {
      name: "Essencial",
      subtitle: "Construa sua base.",
      items: [
        "Conceito focado em musculação",
        "Autonomia para a rotina de treino",
        "Orientação para começar",
      ],
    },
    {
      name: "Movimento",
      subtitle: "Amplie suas possibilidades.",
      items: [
        "Musculação e treinamento funcional",
        "Uma rotina com mais variedade",
        "Experiência integrada de treino",
      ],
    },
    {
      name: "Individual",
      subtitle: "Direção em cada etapa.",
      items: [
        "Proposta de acompanhamento personal",
        "Treino orientado a objetivos",
        "Atenção à execução e evolução",
      ],
    },
  ],
  faq: [
    [
      "A PULSO é uma academia real?",
      "Não. A PULSO Training Club é uma marca fictícia, criada para demonstrar design e desenvolvimento web no portfólio da VortexVision. Não existe unidade física ou serviço disponível para contratação.",
    ],
    [
      "Posso agendar uma aula experimental?",
      "O botão apresenta o fluxo visual de um agendamento e direciona para a explicação deste projeto. Nenhuma reserva é realizada e nenhum dado pessoal é coletado.",
    ],
    [
      "Os planos estão disponíveis para contratação?",
      "Não. Os nomes e benefícios são exemplos de organização de conteúdo. Não representam uma oferta comercial, preços ou condições reais.",
    ],
    [
      "As fotos mostram uma unidade da PULSO?",
      "Não. São fotografias ilustrativas de banco de imagens, utilizadas sob licença e documentadas no projeto.",
    ],
  ],
};
export const photos = {
  hero: {
    src: "/images/strength.jpg",
    alt: "Atleta se preparando para um levantamento com barra em uma academia",
  },
  gym: {
    src: "/images/club.jpg",
    alt: "Espaço de musculação com equipamentos e luz natural",
  },
  weights: {
    src: "/images/weights.jpg",
    alt: "Área de treino com esteiras e equipamentos de força junto a grandes janelas",
  },
};
export const galleryPhotos = [
  { ...photos.gym, caption: "01 / ÁREA DE FORÇA" },
  { ...photos.weights, caption: "02 / CADA DETALHE CONTA" },
];
