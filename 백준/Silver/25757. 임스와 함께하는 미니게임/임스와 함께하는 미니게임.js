let input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .split("\n")
  .map((line) => line.replace("\r", "").split(" "));

const [terms, ...rest] = input;
const N = parseInt(terms[0], 10);
const arr = rest.slice(0, N);

function solution(terms, arr) {
  const [, type] = terms;
  let gamePeople = new Set();
  for (let word of arr) {
    gamePeople.add(word[0]);
  }

  let required;
  switch (type) {
    case "Y":
      required = 1;
      break;
    case "F":
      required = 2;
      break;
    case "O":
      required = 3;
      break;
    default:
      return 0;
  }
  return Math.floor(gamePeople.size / required);
}

console.log(solution(terms, arr));