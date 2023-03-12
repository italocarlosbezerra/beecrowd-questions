var input = require("fs").readFileSync("C:\\Users\\conta\\repository\\beecrowd-questions\\stdin", "utf8");
var lines = input.split("\n");

let pi = 3.14159;
let R = parseInt(lines.shift()); // 3
let formula = ((4 / 3) * pi * R ** 3).toFixed(3);

console.log(`VOLUME = ${formula}`);
