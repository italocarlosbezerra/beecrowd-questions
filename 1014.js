var input = require("fs").readFileSync("C:\\Users\\conta\\repository\\beecrowd-questions\\stdin", "utf8");
var lines = input.split("\n");

const distanciaPercorrida = parseInt(lines.shift());
const combustivelGasto = parseFloat(lines.shift());

const resultado = (distanciaPercorrida / combustivelGasto).toFixed(3);

console.log(`${resultado} km/l`);
