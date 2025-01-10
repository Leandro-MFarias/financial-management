import { useEffect, useState } from "react";
import { items, Item } from "./data/items";
import { categories } from "./data/categories";
import { filterListByMonth, getCurrentMonth } from "./helpers/dateFilter";
import { Table } from "./components/Table";
import { ResumeMonth } from "./components/ResumeMonth";
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

  function handleAddItem(item: Item) {
    let newList = [...list]
    newList.push(item)
    setList(newList)
  }

  function handleRemoveItem(itemToRemove: Item) {
    const newList = list.filter(item => item !== itemToRemove)
    setList(newList)
  }

  return (
    <div>
      <header className="flex items-center justify-center h-52 bg-purple-600">
        <h1 className="text-4xl font-semibold mb-6">Sistema Financeiro</h1>
      </header>

      <div className="space-y-14">
        {/* Information Month */}
        <ResumeMonth 
          setCurrentMonth={setCurrentMonth} 
          currentMonth={currentMonth}
          income={income}
          expense={expense}
        />

        {/* Insert Form */}
        <Form handleAddItem={handleAddItem} />

        {/* Results */}
        <Table filteredList={filteredList} handleRemoveItem={handleRemoveItem} />
      </div>
    </div>
  );
}