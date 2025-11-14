/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function solve(nums, idx, temp, result) {
    result.push([...temp]);
    for (let i = idx; i < nums.length; i++) {
        if (i > idx && nums[i] == nums[i - 1]) continue;
        temp.push(nums[i]);     //DO
        solve(nums, i + 1, temp, result);       //EXPLORE
        temp.pop();     //UNDO
    }
}

var subsets = function (nums) {
    let result = [];
    let temp = [];
    nums = nums.sort((a, b) => a - b);
    solve(nums, 0, temp, result);
    return result;
};


console.log(subsets([1, 2, 2]))
console.log(subsets([0]))
// console.log(subsets())