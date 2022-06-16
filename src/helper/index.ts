export function addMonths(numOfMonths: number, date = new Date()) {
    date.setMonth(date.getMonth() + numOfMonths);
  
    return date;
}
