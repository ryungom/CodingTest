let input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

const [nums, q_nums] = input[0].split(" ").map(Number);
const arrA = input.slice(1, nums + 1).map(Number);
const arrB = input.slice(nums + 1, nums + q_nums + 1).map(Number);

function solution(nums, q_nums, arrA, arrB) {
  const map = new Map();

  arrA.sort((a, b) => a - b);

  for (let i = 0; i < arrA.length; i++) {
    if (!map.has(arrA[i])) {
      map.set(arrA[i], i);
    }
  }

  arrB.forEach((value) => {
    console.log(map.has(value) ? map.get(value) : -1);
  });
}

solution(nums, q_nums, arrA, arrB);
