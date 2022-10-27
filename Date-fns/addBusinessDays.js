// soma de dias úteis, não levando em consideração os feriados

const { addBusinessDays } = require("date-fns");

const result = addBusinessDays(new Date(2014, 8, 1), 10);
//=> Mon Sep 15 2014 00:00:00 (skipped weekend days)
