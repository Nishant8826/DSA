/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function solve(nums, i, temp, result) {
    if (i >= nums.length) {
        result.push([...temp]);
        return;
    }
    // take
    temp.push(nums[i]);
    solve(nums, i + 1, temp, result);
    // not take
    temp.pop();
    solve(nums, i + 1, temp, result);
}

var subsets = function (nums) {
    let result = [];
    let temp = [];
    let i = 0;
    solve(nums, i, temp, result);
    return result;
};


console.log(subsets([1, 2, 3]))
console.log(subsets([0]))
// console.log(subsets())