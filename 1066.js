var input = require("fs").readFileSync("C:\\Users\\conta\\repository\\beecrowd-questions\\stdin", "utf8");
var lines = input.split("\n");

let contador = 0;
let pares = 0;
let impares = 0;
let positivos = 0;
let negativos = 0;

while (contador < 5) {
  let teste = parseInt(lines.shift());

  if (teste % 2 === 0) {
    pares++;
  }

  if (teste % 2 !== 0) {
    impares++;
  }

  if (teste > 0) {
    positivos++;
  }

  if (teste < 0) {
    negativos++;
  }

  contador++;
}

console.log(`${pares} valor(es) par(es)`);
console.log(`${impares} valor(es) impar(es)`);
console.log(`${positivos} valor(es) positivo(s)`);
console.log(`${negativos} valor(es) negativo(s)`);

// let arrayNumbers = lines.map((item) => parseInt(item));

// let par = 0,
//   impar = 0,
//   positivo = 0,
//   negativo = 0;

// for (let i = 0; i < arrayNumbers.length; i++) {
//   if (arrayNumbers[i] < 0) {
//     negativo++;
//   }

//   if (arrayNumbers[i] > 0) {
//     positivo++;
//   }

//   if (Math.abs(arrayNumbers[i] % 2) === 0) {
//     par++;
//   }

//   if (Math.abs(arrayNumbers[i] % 2) !== 0) {
//     impar++;
//   }
// }

// console.log(`${par} valor(es) par(es)`);
// console.log(`${impar} valor(es) impar(es)`);
// console.log(`${positivo} valor(es) positivo(s)`);
// console.log(`${negativo} valor(es) negativo(s)`);
