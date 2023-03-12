var input = require("fs").readFileSync("./stdin", "utf8");

var lines = input.split(" ");

let raio = lines.shift();

let n = 3.14159;

let formula = (n * raio ** 2).toFixed(4);

console.log(`A=${formula}`);
