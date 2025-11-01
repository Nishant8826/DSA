var maxNumberOfBalloons = function (text) {
    let map = new Map();
    for (let i = 0; i < text.length; i++) {
        map.set(text[i], (map.get(text[i]) || 0) + 1);
    }
    const b = map.get("b") || 0;
    const a = map.get("a") || 0;
    const l = Math.floor(map.get("l") / 2) || 0;
    const o = Math.floor(map.get("o") / 2) || 0;
    const n = map.get("n") || 0;
    return Math.min(b, a, l, o, n);
};


// console.log(maxNumberOfBalloons("nlaebolko"));
// console.log(maxNumberOfBalloons("loonbalxballpoon"));
// console.log(maxNumberOfBalloons("leetcode"));
console.log(maxNumberOfBalloons("balon"));