const yearsBetweenDates = (beginningDate, endDate) => {
  const d = new Date( "01 " + beginningDate);
  const first = d.getFullYear();

  const s = new Date( "01 " + endDate);
  const second = s.getFullYear();
  let yearsArray = [];

 for(let i = first; i <= second; i++) yearsArray.push(i);

 return yearsArray;
}

export { yearsBetweenDates };