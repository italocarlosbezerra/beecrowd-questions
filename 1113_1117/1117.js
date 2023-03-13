var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

let notasValidas = 0;
let somarNotas = 0;

while (notasValidas < 2) {
  const nota = parseFloat(lines.shift());

  if (nota < 0 || nota > 10) {
    console.log("nota invalida");
  } else {
    notasValidas++;
    somarNotas += nota;
  }
}

const media = (somarNotas / notasValidas).toFixed(2);
console.log(`media = ${media}`);

// let notasValida = 0;
// let somarNotas = 0;
// let resultado;

// for (let i = 0; i < lines.length; i++) {
//   let nota = parseFloat(lines[i]);

//   if (nota < 0 || nota > 10) {
//     console.log("nota invalida");
//   } else {
//     notasValida++;
//     somarNotas += nota;
//   }
// }

// resultado = (somarNotas / notasValida).toFixed(2);
// console.log(`media = ${resultado}`);
