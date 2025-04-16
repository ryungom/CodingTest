let input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .split("\n")
  .map((line) => line.replace("\r", "").split(" "));

const [length, ...rest] = input;
const N = parseInt(length, 10);
const arr = rest.slice(0, N);

function solution(N, arr) {
  let sortWord = new Set();
  for (let word of arr) {
    sortWord.add(word[0]);
  }

  let result = Array.from(sortWord)
    .sort((a, b) => a.length - b.length || a.localeCompare(b))
    .join("\n");

  console.log(result);
}
solution(N, arr);
