export type Category = {
  [tag: string]: {
    description: string
    color: string
    expense: boolean
  }
}

export const categories: Category = {
  food: { description: 'Alimentaçao', color: 'text-sky-400', expense: true },
  rent: { description: 'Aluguel', color: 'text-redB', expense: true },
  salary: { description: 'Salario', color: 'text-green-500', expense: false },
}