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
    description: "McDonalds",
    value: 32.12,
  },
  {
    date: new Date(2025, 0, 6),
    category: "food",
    description: "Burguer",
    value: 28,
  },
  {
    date: new Date(2025, 0, 7),
    category: "rent",
    description: "Aluguel Apt",
    value: 2300,
  },
  {
    date: new Date(2025, 1, 4),
    category: "salary",
    description: "Trampo",
    value: 4500,
  },
];
