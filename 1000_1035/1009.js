var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

let nome = lines.shift();
let salario = parseFloat(lines.shift());
let vendas = 0.15 * parseFloat(lines.shift());

let total = (salario + vendas).toFixed(2);

console.log(`TOTAL = R$ ${total}`);
