/**
 * @param {number[]} nums
 * @return {boolean}
 */

function solve(i, j, nums, memo) {
    if (i > j) return 0;
    if (i == j) return nums[i];

    let take_i = nums[i] + Math.min(solve(i + 2, j, nums, memo), solve(i + 1, j - 1, nums, memo));
    let take_j = nums[j] + Math.min(solve(i, j - 2, nums, memo), solve(i + 1, j - 1, nums, memo));

    return memo[i][j] = Math.max(take_i, take_j);
}

var predictTheWinner = function (nums) {
    let totalSum = 0;
    let memo = [];
    for (let i = 0; i < nums.length; i++) {
        totalSum += nums[i]
        memo[i] = new Array(nums.length).fill(-1);
    };
    let p1 = solve(0, nums.length - 1, nums, memo);
    let p2 = totalSum - p1;
    return p1 >= p2;
};


console.log(predictTheWinner([1, 5, 2]))
console.log(predictTheWinner([1, 5, 233, 7]))
console.log(predictTheWinner([1]))
