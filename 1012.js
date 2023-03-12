var input = require("fs").readFileSync("C:\\Users\\conta\\repository\\beecrowd-questions\\stdin", "utf8");
var lines = input.split(" ");

const A = parseFloat(lines.shift());
const B = parseFloat(lines.shift());
const C = parseFloat(lines.shift());
const PI = 3.14159;

const triangulo = ((A * C) / 2).toFixed(3);

const circulo = (PI * C ** 2).toFixed(3);

const trapezio = (((A + B) / 2) * C).toFixed(3);

const quadrado = (B ** 2).toFixed(3);

const retangulo = (A * B).toFixed(3);

console.log(`TRIANGULO: ${triangulo}`);
console.log(`CIRCULO: ${circulo}`);
console.log(`TRAPEZIO: ${trapezio}`);
console.log(`QUADRADO: ${quadrado}`);
console.log(`RETANGULO: ${retangulo}`);
