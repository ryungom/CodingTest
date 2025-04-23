let input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .split("\n")
  .map((line) => line.replace("\r", "").split(" "));

const [ysic, ...bus] = input;
const [_, T] = ysic.map(Number);

function solution(T, bus) {
  let arr = [];
  for (let [S, I, C] of bus) {
    const start = Number(S);
    const Interval = Number(I);
    const count = Number(C);

    for (let j = 0; j < count; j++) {
      let sum = start + Interval * j;
      let lastTime = start + Interval * (count - 1);
      if (T > lastTime) {
        continue;
      } else if (sum >= T) {
        arr.push(sum - T);
        break;
      }
    }
  }
  if (arr.length > 0) {
    const result = Math.min(...arr);
    return result;
  } else {
    return -1;
  }
}

console.log(solution(T, bus));