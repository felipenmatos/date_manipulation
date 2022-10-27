const jogo = new Date(2002, 5, 30, 8);

const jogoMilisegundos = +jogo;

const golmilisegundos = 1000 * 60 * 22;

const primeiroGolMilisegundos = jogoMilisegundos + golmilisegundos;

const segundoGolMilisegundos = primeiroGolMilisegundos + 1000 * 60 * 72;

const datePrimeiroGol = new Date(primeiroGolMilisegundos);

const dateSegundoGol = new Date(segundoGolMilisegundos);

console.log(datePrimeiroGol, dateSegundoGol);
