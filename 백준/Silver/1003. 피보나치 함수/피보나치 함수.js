const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n").map(Number);
const problem = input.slice(1);
const numMax = Math.max(...problem);

class Fibo {
  constructor() {
    this._cache = {};
  }
  memo(value) {
    if (this._cache[value] !== undefined) return this._cache[value];
    if (value < 2) return value;

    this._cache[value] = this.memo(value - 1) + this.memo(value - 2);
    return this._cache[value];
  }
}
const result = new Fibo();
result.memo(numMax);

for (let i of problem) {
  if (i === 0) console.log(1, 0);
  else console.log(result.memo(i - 1), result.memo(i));
}