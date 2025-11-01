/**
 * b a b a d 
 * 
 */
var longestPalindrome = function (s) {
    function isPal(str) {
        let i = 0;
        let j = str.length - 1;
        while (i < j) {
            if (str[i] != str[j]) return false;
            i++;
            j--;
        }
        return true;
    }
    let ans = '';
    let maxLen = 0;
    for (let i = 0; i <= s.length; i++) {
        let str = '';
        for (let j = i; j <= s.length; j++) {
            str += s[j]
            if (isPal(str)) {
                if (maxLen < str.length) {
                    maxLen = str.length;
                    ans = str;
                }
            }
        }
    }
    return ans;
};

console.log(longestPalindrome("babad"))
console.log(longestPalindrome("cbbd"))