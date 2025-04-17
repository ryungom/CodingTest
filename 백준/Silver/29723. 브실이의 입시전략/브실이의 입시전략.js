let input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .split("\n")
  .map((line) => line.replace("\r", "").split(" "));

// input 들어오는거 싹 정리
const [nums, ...rest] = input;
const [K, M, N] = nums.map(Number);
const subject = rest.slice(0, K);
const must = rest.slice(Number(K, K + N));

function solution(K, M, N, subject, must) {
  const sort = subject.sort((a, b) => Number(a[1]) - Number(b[1]));
  let min = 0;
  let max = 0;

  // 맵 할당해서 현 기준 필수과목 점수에 넣어두고, 필수과목 항목 제외
  const arr = new Map();
  sort.forEach((value) => {
    arr.set(value[0], Number(value[1]));
  });
  must.forEach((value) => {
    if (arr.has(value[0])) {
      min += arr.get(value[0]);
      max += arr.get(value[0]);
      arr.delete(value[0]);
    }
  });

  // 최소, 최대값 구하기
  const setArr = Array.from(arr);
  let viewNum = M - N;
  for (let i = 0; i < viewNum; i++) {
    min += setArr[i][1];
  }
  for (let i = K - N; i > K - N - viewNum; i--) {
    max += setArr[i - 1][1];
  }
  return console.log(min, max);
}

solution(K, M, N, subject, must);
