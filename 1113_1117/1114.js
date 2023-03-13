var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

while (true) {
  let senha = parseInt(lines.shift());
  if (senha === 2002) {
    console.log("Acesso Permitido");
    break;
  } else {
    console.log("Senha Invalida");
  }
}

// for (let i = 0; i < lines.length; i++) {
//   let senha = parseInt(lines[i]);
//   if (senha === 2002) {
//     console.log("Acesso Permitido");
//   } else {
//     console.log("Senha Invalida");
//   }
// }
