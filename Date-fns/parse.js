// tranforma um modelo de data pré-estabelecida em outra data formatada. EX:

const { parse } = require("date-fns");

var result = parse("02/11/2014", "MM/dd/yyyy", new Date());

// resultado = "11/02/2014..."
