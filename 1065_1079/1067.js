var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split(" ");

let entrada = parseInt(lines.shift());

for (let i = 1; i <= entrada; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
