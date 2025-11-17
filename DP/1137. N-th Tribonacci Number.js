/**
 * @param {number} n
 * @return {number}
 */

function solve(n, memo) {
    if (n == 0) return 0;
    if (n == 1 || n == 2) return 1;
    if (memo[n] != -1) return memo[n];
    memo[n] = solve(n - 1, memo) + solve(n - 2, memo) + solve(n - 3, memo);
    return memo[n];
}

var tribonacci = function (n) {
    // let memo = new Array(n + 1).fill(-1);
    // return solve(n, memo);


    let dp = [];
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 1;

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
    }
    return dp[n]
};


// console.log(tribonacci(4))
console.log(tribonacci(25))
console.log(tribonacci(10))