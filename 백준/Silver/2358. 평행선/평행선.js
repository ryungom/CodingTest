const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const n = parseInt(input[0]);
const points = input.slice(1).map(line => {
    const [x, y] = line.split(' ').map(Number);
    return [x, y];
});

function solution(n, points) {
    const xMap = new Map();
    const yMap = new Map();

    for (const [x, y] of points) {
        xMap.set(x, (xMap.get(x) || 0) + 1);
        yMap.set(y, (yMap.get(y) || 0) + 1);
    }

    let count = 0;

    for (const c of xMap.values()) {
        if (c >= 2) count++;
    }
    for (const c of yMap.values()) {
        if (c >= 2) count++;
    }

    return count;
}

console.log(solution(n, points));
