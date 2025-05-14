const fs = require("fs");
const input = fs.readFileSync(0,"utf-8").toString().trim().split("\n").map(Number);

const num = input[0];
const arr = input
  .slice(1, input.length)
  .sort((a, b) => a - b)
  .join("\n");
console.log(arr)
