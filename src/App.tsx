import { useEffect, useState } from "react";
import { items, Item } from "./data/items";
import { categories, Category } from "./data/categories";
import { filterListByMonth, getCurrentMonth } from "./helpers/dateFilter";
import { Table } from "./components/Table";
import { MonthInfo } from "./components/MonthInfo";
import { Form } from "./components/Form";

export function App() {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0
    let expenseCount = 0

    for(let i in filteredList) {
      categories[filteredList[i].category].expense ? expenseCount += filteredList[i].value : incomeCount += filteredList[i].value

      setIncome(incomeCount)
      setExpense(expenseCount)
    }

  }, [filteredList])

  return (
    <div>
      <header className="flex items-center justify-center h-52 bg-purple-600">
        <h1 className="text-4xl font-semibold mb-6">Sistema Financeiro</h1>
      </header>

      <div className="space-y-14">
        {/* Information Month */}
        <MonthInfo 
          setCurrentMonth={setCurrentMonth} 
          currentMonth={currentMonth}
          income={income}
          expense={expense}
        />

        {/* Insert Form */}
        <Form />

        {/* Results */}
        <Table filteredList={filteredList} />
      </div>
    </div>
  );
}
