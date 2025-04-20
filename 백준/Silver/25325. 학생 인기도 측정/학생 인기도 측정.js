let input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .split("\n")
  .map((line) => line.replace("\r", "").split(" "));

// input 들어오는거 싹 정리
const [, kindStu, ...lovers] = input;

function solution(kindStu, lovers) {
  const result = new Map();
  kindStu.forEach((value) => result.set(value, 0));

  for (let value of result.keys()) {
    let sum = 0;
    lovers.forEach((value2) => {
      if (value2.includes(value)) {
        sum++;
        result.set(value, sum);
      }
    });
  }

  const sort = Array.from(result)
    .sort((a, b) => b[1] - a[1])
    .map((item) => console.log(item[0], item[1]));

  return sort;
}

solution(kindStu, lovers);