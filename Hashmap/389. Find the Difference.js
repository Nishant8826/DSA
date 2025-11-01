/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    let map = new Map();
    let i = 0;
    while (i < t.length) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }
        i++
    }
    let j = 0;
    while (j < t.length) {
        if (!map.has(t[j]) || map.get(t[j]) == 0) {
            return t[j];
        } else {
            map.set(t[j], map.get(t[j]) - 1);
        }
        j++
    }
};