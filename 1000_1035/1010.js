var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

let acumulador = 0;

for (let i = 0; i < 2; i++) {
  let [CODIGO, idPeca, valorUnit] = lines[i].split(" ").map((item) => parseFloat(item));

  acumulador += idPeca * valorUnit;
}

console.log(`VALOR A PAGAR: R$ ${acumulador.toFixed(2)}`);
