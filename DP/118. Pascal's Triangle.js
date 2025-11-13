/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let arr = [];
    for (let i = 0; i < numRows; i++) {
        arr[i] = new Array(i + 1).fill(1);
        for (let j = 1; j < i; j++) {
            arr[i][j] = arr[i - 1][j] + arr[i - 1][j - 1];
        }
    }
    return arr;
};


console.log(generate(5))