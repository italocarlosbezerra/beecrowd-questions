var input = require("fs").readFileSync("C:\\Users\\conta\\repository\\beecrowd-questions\\stdin", "utf8");
var lines = input.split(" ");

const valor = lines.shift();

const minutos = valor * 2;

console.log(`${minutos} minutos`);
