const agora = new Date(2002, 5, 30, 8, 0, 0, 0);

//transformar em milisegundos com o sinal de + ou passando o getTime()

const milisegundos = +agora;

//somando com mais 1 hora, lembrando em transformar antes em milisegundos

const soma = milisegundos + 1000 * 60 * 60;

console.log(soma, milisegundos);
