/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

function solve(s1, s2, i, j, memo) {
    if (i >= s1.length || j >= s2.length) return 0;
    if (s1[i] == s2[j]) {
        return 1 + solve(s1, s2, i + 1, j + 1, memo);
    }
    if (memo[i][j] != -1) return memo[i][j];
    let include_i = solve(s1, s2, i + 1, j, memo);
    let include_j = solve(s1, s2, i, j + 1, memo);
    memo[i][j] = Math.max(include_i, include_j);
    return memo[i][j];
}

var longestCommonSubsequence = function (text1, text2) {
    // let memo = [];
    // for (let i = 0; i < text1.length; i++) {
    //     memo.push(new Array(text2.length).fill(-1));
    // }
    // return solve(text1, text2, 0, 0, memo);


    let memo = [];
    for (let i = 0; i <= text1.length; i++) {
        memo.push(new Array(text2.length + 1).fill(-1));
    }

    for (let row = 0; row < text1.length; row++) {
        memo[row][0] = 0;
    }
    for (let col = 0; col < text2.length; col++) {
        memo[0][col] = 0;
    }

    for (let i = 1; i <= text1.length; i++) {
        for (let j = 1; j <= text2.length; j++) {
            if (text1[i - 1] == text2[j - 1]) {
                memo[i][j] = 1 + memo[i - 1][j - 1];
            } else {
                memo[i][j] = Math.max(memo[i - 1][j], memo[i][j - 1]);
            }
        }
    }


    return memo[text1.length][text2.length]
};


console.log(longestCommonSubsequence("abcde", "ace"))
// console.log(longestCommonSubsequence("abc", "abc"))
// console.log(longestCommonSubsequence("abc", "def"))
// console.log(longestCommonSubsequence("pmjghexybyrgzczy", "hafcdqbgncrcbihkd"))