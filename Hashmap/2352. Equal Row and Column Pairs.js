/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
    // let count = 0;
    // for (let r = 0; r < grid.length; r++) {
    //     for (let c = 0; c < grid.length; c++) {
    //         let flag = true;
    //         for (let i = 0; i < grid.length; i++) {
    //             if (grid[r][i] != grid[i][c]) {
    //                 flag = false;
    //                 break;
    //             }
    //         }
    //         if (flag) count++
    //     }
    // }
    // return count;


    let rowMap = new Map();
    for (let i = 0; i < grid.length; i++) {
        const r = JSON.stringify(grid[i])
        rowMap.set(r, (rowMap.get(r) || 0) + 1);
    }

    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        let col = [];
        for (let j = 0; j < grid.length; j++) {
            col.push(grid[j][i]);
        }
        const colKey = JSON.stringify(col);
        if (rowMap.has(colKey)) count += rowMap.get(colKey);
    }
    return count;

};


console.log(equalPairs([[3, 2, 1], [1, 7, 6], [2, 7, 7]]))
console.log(equalPairs([[3, 1, 2, 2], [1, 4, 4, 5], [2, 4, 2, 2], [2, 4, 2, 2]]))
// console.log(equalPairs())

