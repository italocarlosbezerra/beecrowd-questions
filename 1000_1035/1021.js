var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split(" ");

let valor = parseFloat(lines.shift());

const notas100 = Math.trunc(valor / 100);
valor = (valor % 100).toFixed(2);

const notas50 = Math.trunc(valor / 50);
valor = (valor % 50).toFixed(2);

const notas20 = Math.trunc(valor / 20);
valor = (valor % 20).toFixed(2);

const notas10 = Math.trunc(valor / 10);
valor = (valor % 10).toFixed(2);

const notas5 = Math.trunc(valor / 5);
valor = (valor % 5).toFixed(2);

const notas2 = Math.trunc(valor / 2);
valor = (valor % 2).toFixed(2);

const moeda1real = Math.trunc(valor / 1);
valor = (valor % 1).toFixed(2);

const moeda50cent = Math.trunc(valor / 0.5);
valor = (valor % 0.5).toFixed(2);

const moeda25cent = Math.trunc(valor / 0.25);
valor = (valor % 0.25).toFixed(2);

const moeda10cent = Math.trunc(valor / 0.1);
valor = (valor % 0.1).toFixed(2);

const moeda05cent = Math.trunc(valor / 0.05);
valor = (valor % 0.05).toFixed(2);

const moeda01cent = Math.trunc(valor / 0.01);
valor = (valor % 0.01).toFixed(2);

console.log("NOTAS:");
console.log(`${notas100} nota(s) de R$ 100.00`);
console.log(`${notas50} nota(s) de R$ 50.00`);
console.log(`${notas20} nota(s) de R$ 20.00`);
console.log(`${notas10} nota(s) de R$ 10.00`);
console.log(`${notas5} nota(s) de R$ 5.00`);
console.log(`${notas2} nota(s) de R$ 2.00`);
console.log("MOEDAS:");
console.log(`${moeda1real} moeda(s) de R$ 1.00`);
console.log(`${moeda50cent} moeda(s) de R$ 0.50`);
console.log(`${moeda25cent} moeda(s) de R$ 0.25`);
console.log(`${moeda10cent} moeda(s) de R$ 0.10`);
console.log(`${moeda05cent} moeda(s) de R$ 0.05`);
console.log(`${moeda01cent} moeda(s) de R$ 0.01`);
