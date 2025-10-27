/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
    let minDiff = Infinity
    let sorted = arr.sort((a, b) => a - b);
    for (let i = 1; i < sorted.length; i++) {
        minDiff = Math.min(minDiff, sorted[i] - sorted[i - 1])
    }
    let ans = [];
    for (let i = 0; i < sorted.length; i++) {
        // for (let j = i + 1; j < sorted.length; j++) {
        //     if (Math.abs(sorted[i] - sorted[j]) == minDiff) {
        //         ans.push([sorted[i], sorted[j]])
        //     }
        // }

        let diff = sorted[i] - sorted[i - 1];
        if (diff == minDiff) {
            ans.push([sorted[i - 1], sorted[i]])
        }
    }
    return ans
};


console.log(minimumAbsDifference([4, 2, 1, 3]))
console.log(minimumAbsDifference([1, 3, 6, 10, 15]))
console.log(minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27]))