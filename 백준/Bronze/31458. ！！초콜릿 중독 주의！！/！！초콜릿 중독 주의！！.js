let input = require("fs")
  .readFileSync(0, 'utf-8')
  .toString()
  .split("\n")
  .map((line) => line.replace("\r", ""));

function solution(input) {
  const regex = /[01]/g;
  for (let i = 1; i <= input[0]; i++) {
    const match = [...input[i].matchAll(regex)];
    let numIndex = match[0].index;
    let baseNumCk = false;
    let result = 0;

    if (input[i][numIndex] === "1" || input[i][numIndex + 1] === "!") {
      baseNumCk = true;
    } else baseNumCk = false;

    let frontNum = 0;
    for (let j = 0; j < numIndex; j++) {
      frontNum++;
    }
    if (frontNum % 2 !== 0) baseNumCk = !baseNumCk;

    if (baseNumCk) result = 1;
    else result = 0;
    console.log(result);
  }
}
solution(input);
