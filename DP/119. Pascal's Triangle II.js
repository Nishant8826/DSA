/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let arr = [];
    for (let i = 0; i <= rowIndex; i++) {
        arr[i] = new Array(i + 1).fill(1);
        for (let j = 1; j < i; j++) {
            arr[i][j] = arr[i - 1][j] + arr[i - 1][j - 1];
        }
    }
    return arr[rowIndex];
};



console.log(getRow(3))
console.log(getRow(0))
console.log(getRow(1))