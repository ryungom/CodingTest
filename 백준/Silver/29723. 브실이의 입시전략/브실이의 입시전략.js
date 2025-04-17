let input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .split("\n")
  .map((line) => line.replace("\r", "").split(" "));
const [nums, ...rest] = input;
const subject = rest.slice(0, Number(nums[0]));
const must = rest.slice(Number(nums[0], nums[0] + nums[2]));

function solution(nums, subject, must) {
  const sort = subject.sort((a, b) => a[1] - b[1]);
  let min = 0;
  let max = 0;
  const arr = new Map();
  sort.forEach((value) => {
    arr.set(value[0], value[1]);
  });
  must.forEach((value) => {
    if (arr.has(value[0])) {
      min += Number(arr.get(value[0]));
      max += Number(arr.get(value[0]));
      arr.delete(value[0]);
    }
  });

  // 최소, 최대값 구하기
  const setArr = Array.from(arr);

  let viewNum = nums[1] - nums[2];
  for (let i = 0; i < viewNum; i++) {
    min += Number(setArr[i][1]);
  }
  for (let i = nums[0] - nums[2]; i > nums[0] - nums[2] - viewNum; i--) {
    max += Number(setArr[i - 1][1]);
  }

  return console.log(min, max);
}

solution(nums, subject, must);
