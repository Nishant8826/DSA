/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
    //  goal + goal 
    // = cde abcd eab -> return true
    // = abcedabced -> no substring -> return false;
    //  c d e a b c d e a b
    //              i 
    // 
    //  a b c d
    //        j

    if (s.length != goal.length) return 0;
    s += s;
    let j = 0;
    for (let i = 0; i < s.length; i++) {
        if (goal[j] == s[i]) {
            j++;
            if (j == goal.length - 1) return true;
        } else {
            j = 0;
        }
    }
    return false;

};


// console.log(rotateString("bbbacddceeb","ceebbbbacdd"))
// console.log(rotateString("abcde","cdeab"))
// console.log(rotateString("abcde","abced"))
console.log(rotateString("defdefdefabcabc","defdefabcabcdef"))


// defdefdefabcabcdefdefdefabcabc
//                     i
//
// defdefabcabcdef
//      j