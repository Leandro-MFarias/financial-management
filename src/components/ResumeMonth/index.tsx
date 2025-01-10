import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { formatCurrentMonth } from "../../helpers/dateFilter";
import { PaymentAndExpenses } from "../PaymentAndExpenses";

interface ResumeMonthProps {
  currentMonth: string
  setCurrentMonth: (newMonth: string) => void
  income: number
  expense: number
}

export function ResumeMonth({ currentMonth, setCurrentMonth, income, expense }: ResumeMonthProps) {

  function handlePrevMonth() {
    let [year, month] = currentMonth.split('-')
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)
    currentDate.setMonth( currentDate.getMonth() - 1 )

    handleMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
  }
  function handleNextMonth() {
    let [year, month] = currentMonth.split('-');
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth( currentDate.getMonth() + 1 );
    
    handleMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  }

  function handleMonthChange(newMonth: string) {
    setCurrentMonth(newMonth)
  }

  return (
    <div className="bg-zinc-700 max-w-[90%] xl:max-w-7xl mx-auto flex items-center justify-around rounded-xl py-7 -translate-y-14 text-center shadow-[0px_0px_5px_-1px_#d9d9d9]">
      <div className="flex items-center space-x-1 sm:space-x-7">
        <button onClick={handlePrevMonth}>
          <ArrowBigLeft className="cursor-pointer hover:scale-125 transition duration-300 ease-in-out" />
        </button>
        <p className="font-semibold sm:text-lg">
          {formatCurrentMonth(currentMonth)}
        </p>
        <button onClick={handleNextMonth}>
          <ArrowBigRight className="cursor-pointer hover:scale-125 transition duration-300 ease-in-out" />
        </button>
      </div>

      <PaymentAndExpenses title="Receitas" value={income} />
      <PaymentAndExpenses title='Despesas'value={expense} />
      <PaymentAndExpenses 
        title='Balanço' 
        value={income - expense} 
        color={(income - expense) > 0 ? 'text-green-500' : 'text-redB'} 
      />
    </div>
  );
}
