/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function solve(temp, nums, map, result) {
    if (temp.length == nums.length) {
        result.push([...temp]);
        return;
    }

    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            temp.push(nums[i]);
            map.set(nums[i]);
            solve(temp, nums, map, result);

            temp.pop();
            map.delete(nums[i]);
        }
    }
}
var permute = function (nums) {
    let map = new Map()
    let result = [];
    let temp = [];

    solve(temp, nums, map, result)
    return result;
};



console.log(permute([1, 2, 3]))
// console.log(permute([0, 1]))
// console.log(permute([1]))