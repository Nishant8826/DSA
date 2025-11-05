/**
 * 
 * cotxazilut
 * 
 * nahrrmcchxwrieqqdwdpneitkxgnt
 *    i
 * 
 * map {
 *  c:1,
 *  o:1
 *  t:1
 *  x:1
 *  z:1
 *  i:1
 *  l:1
 *  u:1
 *  t:1
 *  n:1
 *  h:2
 *  r:3
 *  m:1
 *  x:1
 *  w:1
 * }
 * 
 * 
 */
var minSteps = function (s, t) {
    let sMap = new Map();
    for (let i = 0; i < s.length; i++) {
        sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
    }

    for (let i = 0; i < t.length; i++) {
        if (sMap.has(t[i])) {
            sMap.set(t[i], sMap.get(t[i]) - 1);
        } else {
            sMap.set(t[i], (sMap.get(t[i]) || 0) - 1);
        }
    }

    let count = 0;
    for (let [k, v] of sMap) {
        count += Math.abs(v)
    }

    return count
};


console.log(minSteps("leetcode", "coats"))
console.log(minSteps("night", "thing"))
console.log(minSteps("cotxazilut", "nahrrmcchxwrieqqdwdpneitkxgnt"))
// console.log(minSteps())