interface Props {
  title: string
  value: number
  color?: string
}

export function PaymentAndExpenses({title, value, color}: Props) {
  return (
    <div className="">
      <div>
        <p className="text-zinc-300 sm:text-lg">{title}</p>
        <span className={`font-bold text-sm sm:text-base ${color}`}>R$ {value}</span>
      </div>
    </div>
  );
}
