//calcula a diferença. Exemplo de calculo em milisegundos

const { differenceInMilliseconds } = require("date-fns");

const result = differenceInMilliseconds(
  new Date(2014, 6, 2, 12, 30, 21, 700),
  new Date(2014, 6, 2, 12, 30, 20, 600)
);
//=> 1100
