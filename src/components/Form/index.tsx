import { FormEvent, useState } from "react";
import { Item } from "../../data/items";
import { newDateAdjusted } from "../../helpers/dateFilter";
import { categories } from "../../data/categories";

interface FormProps {
  handleAddItem: (item: Item) => void;
}

export function Form({ handleAddItem }: FormProps) {
  const [newDate, setNewDate] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newValue, setNewValue] = useState(0);

  let categoriesKeys: string[] = Object.keys(categories);

  function handleAddEvent(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let errors: string[] = [];

    if (isNaN(new Date(newDate).getTime())){
      errors.push("Data invalida!")
    }
    if (!categoriesKeys.includes(newCategory)) {
      errors.push("Categoria invalida!")
    }
    if (newDescription === "") {
      errors.push("Descriçao invalida!")
    }
    if (newValue <= 0) {
      errors.push("Value invalida!")
    }

    if(errors.length > 0) {
      alert(errors.join("\n"))
    } else {
      handleAddItem({
        date: newDateAdjusted(newDate),
        category: newCategory,
        description: newDescription,
        value: newValue,
      });
      clearFields()
    }     
  }

  function clearFields() {
    setNewDate('')
    setNewCategory('')
    setNewDescription('')
    setNewValue(0)
  }

  return (
    <form
      onSubmit={handleAddEvent}
      className="bg-zinc-700 max-w-[90%] xl:max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-around rounded-xl py-10 -translate-y-14 shadow-[0px_0px_5px_-1px_#d9d9d9] space-y-2 md:space-y-0"
    >
      <div className="space-y-2 text-center">
        <p className="font-bold text-lg">Data</p>
        <input
          type="date"
          value={newDate}
          onChange={(event) => setNewDate(event.target.value)}
          className="bg-transparent border-2 border-purple-500 w-64 md:w-32 lg:w-44 text-zinc-50 outline-none rounded-md py-[1px] px-5"
        />
      </div>

      <div className="space-y-2 text-center">
        <p className="font-bold text-lg">Categoria</p>
        <select
          onChange={(event) => setNewCategory(event.target.value)}
          className="bg-zinc-700 border-2 border-purple-500 text-zinc-50 outline-none rounded-md pl-1 py-[2px] w-64 md:w-32 lg:w-44"
        >
          <option value=""></option>
          {categoriesKeys.map((key, index) => (
            <option key={index} value={key}>
              {categories[key].description}
            </option>
          ))}
        </select>
      </div>
      <div className="space-y-2 text-center">
        <p className="font-bold text-lg">Descriçao</p>
        <input
          type="text"
          value={newDescription}
          onChange={(event) => setNewDescription(event.target.value)}
          className="bg-transparent border-2 border-purple-500 w-64 md:w-32 lg:w-44 text-zinc-50 outline-none rounded-md pl-1 py-[1px]"
        />
      </div>
      <div className="space-y-2 text-center">
        <p className="font-bold text-lg">Valor</p>
        <input
          type="number"
          value={newValue}
          onChange={(event) => setNewValue(parseFloat(event.target.value))}
          className="bg-transparent border-2 border-purple-500 w-64 md:w-32 lg:w-44 text-zinc-50 outline-none rounded-md pl-1 py-[1px]"
        />
      </div>
      <button
        type="submit"
        className="bg-violet-600 px-40 py-2 md:px-6 lg:px-10 md:py-1 text-lg font-semibold rounded-md hover:bg-violet-500 transition duration-300 ease-in-out self-center translate-y-4 md:translate-y-4"
      >
        Adicionar
      </button>
    </form>
  );
}
