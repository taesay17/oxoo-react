export const ARTIFACTS = [
  {
    id: "a1",
    title: "Традиционная люлька (бешик)",
    image: `${process.env.PUBLIC_URL}/images/beshik.jpg`, // fix path for GitHub Pages
    description: "Деревянная люлька, использующаяся в кыргызских семьях поколениями.",
    region: "Нарын",
    category: "family",
    period: "XIX–XX век",
    type: "вещь",
    coords: [41.4287, 76.0001],
    relatedStories: ["s1"],
  },
  {
    id: "a2",
    title: "Кузнечный молот",
    image: `${process.env.PUBLIC_URL}/images/hammer.jpg`,
    description: "Инструмент мастера-кузнеца, символ ремесленного труда.",
    region: "Ош",
    category: "labor",
    period: "XX век",
    type: "вещь",
    coords: [40.5134, 72.8161],
    relatedStories: ["s2"],
  },
  {
    id: "a3",
    title: "Диплом учителя",
    image: `${process.env.PUBLIC_URL}/images/diploma.jpg`,
    description: "Документ, подтверждающий профессию, меняющую жизни людей.",
    region: "Бишкек",
    category: "professions",
    period: "1990–2000",
    type: "документ",
    coords: [42.8746, 74.5698],
    relatedStories: ["s3"],
  }
];
