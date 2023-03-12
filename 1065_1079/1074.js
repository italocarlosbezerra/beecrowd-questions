var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const qtdValores = parseInt(lines.shift());

for (let i = 0; i < qtdValores; i++) {
  let valores = parseInt(lines.shift());

  if (valores % 2 === 0 && valores > 0) console.log("EVEN POSITIVE");

  if (valores % 2 !== 0 && valores > 0) console.log("ODD POSITIVE");

  if (valores === 0) console.log("NULL");

  if (valores % 2 === 0 && valores < 0) console.log("EVEN NEGATIVE");

  if (valores % 2 !== 0 && valores < 0) console.log("ODD NEGATIVE");
}

// const qtdValores = parseInt(lines.shift());
// console.log(qtdValores);

// let resposta = "";

// for (let i = 0; i < qtdValores; i++) {
//   let valor = parseInt(lines.shift());

//   if (valor % 2 === 0) {
//     resposta += "EVEN";
//   }

//   if (valor % 2 !== 0) {
//     resposta += "ODD";
//   }

//   if (valor === 0) {
//     resposta = "NULL";
//   }

//   if (valor > 0) {
//     resposta += " POSITIVE";
//   }

//   if (valor < 0) {
//     resposta += " NEGATIVE";
//   }

//   console.log(resposta);
//   resposta = "";
// }
