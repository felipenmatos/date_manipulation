// função para formatar datas. EX:

const { format } = require("date-fns");

const result = format(new Date(2014, 1, 11), "MM/dd/yyyy");
//=> '02/11/2014'

console.log(result);
