var input = require("fs").readFileSync("C:\\Users\\conta\\repository\\beecrowd-questions\\stdin", "utf8");
var lines = input.split("\n");

for (let i = 0; i < lines.length; i++) {
  let [a, b] = lines[i].split(" ").map((item) => parseInt(item));
  if (a > b) {
    console.log("Decrescente");
  } else if (a < b) {
    console.log("Crescente");
  } else {
    break;
  }
}
