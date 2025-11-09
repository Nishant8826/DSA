/**
 * dp = [0,1,2,Infinity,Infinity,Infinity]
 * 
 * i = 3
 * j = 1
 * 
 * dp[2] = In,2
 * 
 */
var numSquares = function (n) {
    if (n == 0) return 0;
    let minCount = Infinity;
    for (let i = 1; i * i <= n; i++) {
        let result = 1 + numSquares(n - i * i);
        minCount = Math.min(minCount, result);
    }

    return minCount


    // let dp = new Array(n + 1).fill(Infinity);
    // dp[0] = 0;
    // for (let i = 1; i <= n; i++) {
    //     for (let j = 1; j * j <= i; j++) {
    //         dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    //     };
    // };
    // return dp[n];
};


console.log(numSquares(6))
console.log(numSquares(12))
