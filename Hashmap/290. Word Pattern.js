/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    words = s.split(" ");
    if (pattern.length !== words.length) return false;

    let map = new Map();
    let set = new Set();
    for (let i = 0; i < pattern.length; i++) {
        if ((map.has(pattern[i]) || set.has(words[i])) && map.get(pattern[i]) !== words[i]) {
            return false;
        }
        map.set(pattern[i], words[i]);
        set.add(words[i]);
    }
    return true;

};


console.log(wordPattern("abba", "dog cat cat dog"))
console.log(wordPattern("abba", "dog cat cat fish"))
console.log(wordPattern("aaaa", "dog cat cat dog"))
console.log(wordPattern("abba", "dog dog dog dog"))  
