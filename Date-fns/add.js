// ele adiciona valores nas datas definidas, ou seja, soma com o dia, mês, ano... que você passar para somar. Ex:

const { add } = require("date-fns");

const result = add(new Date(2014, 8, 1, 10, 19, 50), {
  years: 2,
  months: 9,
  weeks: 1,
  days: 7,
  hours: 5,
  minutes: 9,
  seconds: 30,
});
//=> Thu Jun 15 2017 15:29:20

console.lod(result);
