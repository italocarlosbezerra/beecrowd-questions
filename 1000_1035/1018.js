var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

let valor = lines.shift();
let array = [100, 50, 20, 10, 5, 2, 1];

console.log(valor);

for (i = 0; i < array.length; i++) {
  console.log(`${Math.trunc(valor / array[i])} nota(s) de R$ ${array[i]},00`);
  valor = Math.trunc(valor % array[i]);
}

// console.log(`${Math.trunc(valor / 100)} nota(s) de R$ 100,00`);
// valor = Math.trunc(valor % 100);

// console.log(`${Math.trunc(valor / 50)} nota(s) de R$ 50,00`);
// valor = Math.trunc(valor % 50);

// console.log(`${Math.trunc(valor / 20)} nota(s) de R$ 20,00`);
// valor = Math.trunc(valor % 20);

// console.log(`${Math.trunc(valor / 10)} nota(s) de R$ 10,00`);
// valor = Math.trunc(valor % 10);

// console.log(`${Math.trunc(valor / 5)} nota(s) de R$ 5,00`);
// valor = Math.trunc(valor % 5);

// console.log(`${Math.trunc(valor / 2)} nota(s) de R$ 2,00`);
// valor = Math.trunc(valor % 2);

// console.log(`${Math.trunc(valor / 1)} nota(s) de R$ 1,00`);
// valor = Math.trunc(valor % 1);
