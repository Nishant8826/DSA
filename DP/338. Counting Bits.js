/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    let result = [];
    result[0] = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 != 0) {
            result[i] = result[i >> 1] + 1;
        } else {
            result[i] = result[i >> 1];
        }
    }
    return result;
};


console.log(countBits(2))
console.log(countBits(5))