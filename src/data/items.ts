export type Item = {
  date: Date
  category: string
  description: string
  value: number
}

export const items: Item[] = [
  {
    date: new Date(2025, 0, 1),
    category: "food",
    description: "Ifood",
    value: 32.12,
  },
  {
    date: new Date(2025, 0, 6),
    category: "food",
    description: "Restaurante",
    value: 120,
  },
  {
    date: new Date(2025, 0, 7),
    category: "rent",
    description: "Aluguel",
    value: 1250,
  },
  {
    date: new Date(2025, 1, 14),
    category: "salary",
    description: "Freela",
    value: 2500,
  },
];
