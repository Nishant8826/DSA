/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    /*          BY MEMOIZATION
    let memo = [];
    for (let i = 0; i < m; i++) {
        memo[i] = [];
        for (let j = 0; j < n; j++) {
            memo[i][j] = -1;
        }
    }
    function solve(i, j) {
        if (i == m - 1 && j == n - 1) return 1;
        if (i >= m || i < 0 || j < 0 || j >= n) return 0;
        if (memo[i][j] != -1) return memo[i][j]
        let right = solve(i, j + 1);
        let down = solve(i + 1, j);
        memo[i][j] = right + down;
        return memo[i][j];
    }
    return solve(0, 0)

    */

    //      Bottom up approach
    let memo = [];
    for (let i = 0; i < m; i++) {
        memo[i] = [];
        for (let j = 0; j < n; j++) {
            memo[i][j] = -1;
        }
    }

    memo[0][0] = 0;
    //fill 0th row
    for (let col = 1; col < n; col++) {
        memo[0][col] = 1
    }
    //fill 0th col
    for (let row = 1; row < m; row++) {
        memo[row][0] = 1
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            memo[i][j] = memo[i - 1][j] + memo[i][j - 1];
        }
    }

    return memo[m - 1][n - 1];

};



console.log(uniquePaths(3, 7))
// console.log(uniquePaths(3, 2))