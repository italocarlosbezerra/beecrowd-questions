var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

let funcionario = parseInt(lines.shift());
let horasTrab = parseInt(lines.shift());
let salario = parseFloat(lines.shift());

let salarioTotal = (horasTrab * salario).toFixed(2);

console.log(`NUMBER = ${funcionario}`);
console.log(`SALARY = U$ ${salarioTotal}`);
