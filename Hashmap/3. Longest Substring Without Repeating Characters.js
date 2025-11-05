/**
 * 
 * a b c a b c b b 
 *   i
 *         j
 * map = { 
 *  a : 1, 
 *  b : 1,
 *  c : 1,
 * }
 * 
 * len = 3
 * 
 * maxLen = 3
 * 
 * 
 * -----------------above is n^2 -----------------
 * 
 */
var lengthOfLongestSubstring = function (s) {
    // let maxLen = 0;
    // for (let i = 0; i < s.length; i++) {
    //     let map = new Map();
    //     let len = 0;
    //     for (let j = i; j < s.length; j++) {
    //         if (map.has(s[j])) break;
    //         len = j - i + 1;
    //         map.set(s[j], 1);
    //     }
    //     maxLen = Math.max(maxLen, len)
    // }
    // return maxLen

    /**
     * a b c a b c b b
     *   l
     *       r
     * 
     * map = {
     *  a : 0,
     *  b : 1,
     *  c : 2,
     * }
     * 
     * maxLen = 3
     * 
     */

    let maxLen = 0;
    let map = new Map();
    let l = 0;
    let r = 0;
    while (r < s.length) {
        if (map.has(s[r]) && map.get(s[r]) >= l) {
            l = map.get(s[r]) + 1;
        }
        maxLen = Math.max(maxLen, r - l + 1);
        map.set(s[r], r);
        r++;
    }
    return maxLen;
};

// console.log(lengthOfLongestSubstring("abcabcbb"))
// console.log(lengthOfLongestSubstring("pwwkewrt"))
// console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("abba"))
// console.log(lengthOfLongestSubstring())