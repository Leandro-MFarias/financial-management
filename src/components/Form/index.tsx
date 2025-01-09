export function Form() {
  return (
    <form className="bg-zinc-700 max-w-[90%] xl:max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-around rounded-xl py-10 -translate-y-14 shadow-[0px_0px_5px_-1px_#d9d9d9] space-y-2 md:space-y-0">
      <div className="space-y-2 text-center">
        <p className="font-bold text-lg">Data</p>
        <input
          type="date"
          name="data"
          className="bg-transparent border-2 border-purple-500 w-64 md:w-32 lg:w-44 text-zinc-50 outline-none rounded-md py-[1px] px-5"
        />
      </div>

      <div className="space-y-2 text-center">
        <p className="font-bold text-lg">Categoria</p>
        <select className="bg-zinc-700 border-2 border-purple-500 text-zinc-50 outline-none rounded-md pl-1 py-[2px] w-64 md:w-32 lg:w-44">
          <option value=""></option>
          <option value="salario">Salario</option>
          <option value="alimentacao">Alimentaçao</option>
          <option value="aluguel">Aluguel</option>
          <option value="contas">Contas</option>
          <option value="lazer">Lazer</option>
        </select>
      </div>
      <div className="space-y-2 text-center">
        <p className="font-bold text-lg">Descriçao</p>
        <input
          type="text"
          name="descricao"
          className="bg-transparent border-2 border-purple-500 w-64 md:w-32 lg:w-44 text-zinc-50 outline-none rounded-md pl-1 py-[1px]"
        />
      </div>
      <div className="space-y-2 text-center">
        <p className="font-bold text-lg">Valor</p>
        <input
          type="number"
          name="valor"
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
