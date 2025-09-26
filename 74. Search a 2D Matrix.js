/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    // for (let i = 0; i < matrix.length; i++) {
    //     if (matrix[i][0] <= target && matrix[i][matrix[i].length - 1] >= target) {
    //         let low = 0;
    //         let high = matrix[i].length - 1;
    //         while (low <= high) {
    //             let mid = Math.floor((low + high) / 2);
    //             if (matrix[i][mid] == target) {
    //                 return true;
    //             } else if (matrix[i][mid] > target) {
    //                 high = mid - 1;
    //             } else {
    //                 low = mid + 1;
    //             }
    //         }
    //     }
    // }
    // return false;


    let low = 0;
    let high = (matrix.length * matrix[0].length) - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let row = Math.floor(mid / matrix[0].length);
        let col = mid % matrix[0].length;
        if (matrix[row][col] > target) {
            high = mid - 1;
        } else if (matrix[row][col] < target) {
            low = mid + 1;
        } else {
            return true;
        }
    }
    return false;
};


console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3))
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13))