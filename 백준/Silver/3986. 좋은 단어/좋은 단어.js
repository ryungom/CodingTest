let input = require("fs")
  .readFileSync(0, 'utf-8')
  .toString()
  .split("\n")
  .map((line) => line.replace("\r", ""));

let [len, ...arr] = input;

function solution(len, arr) {
  let result = 0;
  for (let i = 0; i < Number(len); i++) {
    const stack = [];
    for (let j = 0; j < arr[i].length; j++) {
      let stackTop = stack[stack.length - 1];
      if (stackTop !== arr[i][j]) {
        stack.push(arr[i][j]);
      } else {
        stack.pop();
      }
    }
    if (stack.length === 0) {
      result++;
    } else {
      result;
    }
  }
  return result;
}
console.log(solution(len, arr));
