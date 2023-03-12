var input = require("fs").readFileSync("C:\\Users\\conta\\repository\\beecrowd-questions\\stdin", "utf8");
var lines = input.split("\n");

let inteiro = parseInt(lines);

for (let i = 1; i <= inteiro; i++) {
  if (i % 2 === 0) {
    console.log(`${i}^2 = ${i ** 2}`);
  }
}
