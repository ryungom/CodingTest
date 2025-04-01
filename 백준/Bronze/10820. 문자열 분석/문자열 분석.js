let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
function solution(input) {
  for (let i in input) {
    if(input[i] === '') continue;
    const result = [0, 0, 0, 0];
    for (let j of input[i]) {
      if (/[a-z]/.test(j)) result[0]++;
      else if (/[A-Z]/.test(j)) result[1]++;
      else if (/[0-9]/.test(j)) result[2]++;
      else if (/[ ]/.test(j)) result[3]++;
    }
    console.log(result.join(" "));
  }
}
solution(input);
