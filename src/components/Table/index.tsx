import { Trash2 } from "lucide-react";
import { Item } from "../../data/items";
import { categories } from "../../data/categories";
import { formatDate } from "../../helpers/dateFilter";

interface Props {
  filteredList: Item[];
}

export function Table({ filteredList }: Props) {
  return (
    <div className="bg-zinc-700 max-w-[90%] xl:max-w-7xl mx-auto flex flex-col rounded-xl py-7 sm:pl-10 -translate-y-14 space-y-6 shadow-[0px_0px_5px_-1px_#d9d9d9]">
      <div className="flex space-x-6 pl-2 sm:pl-0 ssl:justify-start ssl2:justify-around sm:justify-between  sm:pr-20">
        <div className="flex space-x-8 sm:space-x-20">
          <div className="flex flex-col text-center space-y-6">
            <p className="font-bold  text-lg sm:text-xl">Data</p>
            {filteredList.map((item, index) => (
              <div key={index}>
                <span>{formatDate(item.date)}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col text-center space-y-6">
            <p className="font-bold  text-lg sm:text-xl">Categoria</p>
            {filteredList.map((item, index) => (
              <div key={index}>
                <span 
                  className={`${categories[item.category].color} font-semibold`} 
                >{categories[item.category].description}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col text-center space-y-6">
            <p className="font-bold  text-lg sm:text-xl">Descriçao</p>
            {filteredList.map((item, index) => (
              <div key={index}>
                <span>{item.description}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col text-center space-y-6">
          <p className="font-bold text-lg sm:text-xl">Valor</p>
          <div className="flex flex-col  space-y-6">
            {filteredList.map((item, index) => (
              <div key={index}>
                <div className="relative flex items-center">
                  <span className={`${categories[item.category].expense ? `text-redB` : `text-green-500`} font-semibold`}>R$ {item.value}</span>
                  <Trash2 className="absolute ssl:-right-[18px] sm:-right-8 ssl:size-4 sm:size-5 text-zinc-300 hover:text-red-600 transition duration-200 ease-in cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}