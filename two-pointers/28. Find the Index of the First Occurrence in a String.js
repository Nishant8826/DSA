/**
0123456789
mississippi
        i
issip
    j

index = 4

 */
var strStr = function (haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        let j = 0;
        while (j < needle.length) {
            if (haystack[i + j] == needle[j]) {
                j++;
            } else {
                break;
            }
        }
        if (j == needle.length) return i;
    }
    return -1
};


console.log(strStr("sadbutsad", "sad"))
console.log(strStr("leetcode", "leeto"))
console.log(strStr("mississippi", "issip"))
console.log(strStr("aaa", "aaaa"))