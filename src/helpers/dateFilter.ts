import { Item } from "../data/items";

export function getCurrentMonth() {
  let now = new Date();
  return `${now.getFullYear()}-${now.getMonth()+1}`;
}

export function filterListByMonth(list: Item[], date: string): Item[] {
  let newList: Item[] = [];
  let [year, month] = date.split("-");

  for (let i in list) {
    if (
        list[i].date.getFullYear() === parseInt(year) &&
        list[i].date.getMonth() + 1 === parseInt(month)
    ) {
      newList.push(list[i]);
    }
  }
  return newList;
}

export function formatDate(date: Date): string {
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()

  return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`
}

function addZeroToDate(num: number): string {
  return num < 10 ? `0${num}` : `${num}`
}

export function formatCurrentMonth(currentMonth: string): string {
  let [year, month] = currentMonth.split('-')
  let months = ['Janeiro', 'Fevereio', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
  
  return `${months[parseInt(month) - 1]} de ${year}`
} 

export function newDateAdjusted(newDate: string) {
  let [year, month,day] = newDate.split('-')
  return new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
}