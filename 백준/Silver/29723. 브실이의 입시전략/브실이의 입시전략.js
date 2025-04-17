let input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .split("\n")
  .map((line) => line.replace("\r", "").split(" "));

const [nums, ...rest] = input;
const [N, M, K] = nums.map(Number);
const subjects = rest.slice(0, N);
const must = rest.slice(N, N + K).flat();

// 과목을 점수 기준으로 정렬
const sortedSubjects = subjects.sort((a, b) => Number(a[1]) - Number(b[1]));
const subjectMap = new Map(sortedSubjects.map((sub) => [sub[0], Number(sub[1])]));

let minScore = 0;
let maxScore = 0;
const remainingSubjects = [];

// 필수 과목 처리
must.forEach((subject) => {
  if (subjectMap.has(subject)) {
    const score = subjectMap.get(subject);
    minScore += score;
    maxScore += score;
    subjectMap.delete(subject);
  }
});

// 남은 과목 분리 및 정렬
subjectMap.forEach((value, key) => remainingSubjects.push(value));
remainingSubjects.sort((a, b) => a - b);

const viewNum = M - K;
if (viewNum > 0) {
  // 최소값 계산 (가장 낮은 점수 선택)
  minScore += remainingSubjects.slice(0, viewNum).reduce((a, b) => a + b, 0);

  // 최대값 계산 (가장 높은 점수 선택)
  maxScore += remainingSubjects.slice(-viewNum).reduce((a, b) => a + b, 0);
}

console.log(minScore, maxScore);
