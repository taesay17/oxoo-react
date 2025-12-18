const STORIES = [
  {
    id: 1,
    name: "Айша С.",
    region: "Ош",
    category: "family",
    quote: "Семья — это сила, которая всегда рядом.",
    fullText:
      "Полный текст истории Айши. Здесь может быть длинный рассказ — до 2000 символов.",
    images: [
      `${process.env.PUBLIC_URL}/images/story1_1.jpg`,
      `${process.env.PUBLIC_URL}/images/story2_1.jpg`,
      `${process.env.PUBLIC_URL}/images/story3_1.jpg`,
    ],
  },
  {
    id: 2,
    name: "Марат Б.",
    region: "Нарын",
    category: "labor",
    quote: "Труд делает человека свободным.",
    fullText: "История Марата — о ремёслах, миграции и работе.",
    images: [`${process.env.PUBLIC_URL}/images/story2_1.jpg`],
  },
  {
    id: 3,
    name: "Жылдыз А.",
    region: "Ысык-Көл",
    category: "professions",
    quote: "Профессия — это то, что ты оставляешь после себя.",
    fullText: "История Жылдыз о карьере и развитии.",
    images: [`${process.env.PUBLIC_URL}/images/story3_1.jpg`],
  },
];

export default STORIES;
