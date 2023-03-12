var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split(" ");

const [A, B, C] = lines.map((i) => parseInt(i));

const maiorAB = (A + B + Math.abs(A - B)) / 2;
const maiorValor = (C + maiorAB + Math.abs(C - maiorAB)) / 2;

console.log(`${maiorValor} eh o maior`);
