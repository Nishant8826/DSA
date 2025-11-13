/**
 * [ 2, 1 , 1 , 2 ]
 *              i
 * 
 * 
 * steal = 1 + 0
 * skip = 
 * 
 * memo [ 0 , 2 , 1 ,  ]
 * 
 */

function solve(nums, i, memo) {
    if (i >= nums.length) return 0;
    if (memo[i] != -1) return memo[i];
    let steal = nums[i] + solve(nums, i + 2, memo);
    let skip = solve(nums, i + 1, memo);
    memo[i] = Math.max(steal, skip);
    return memo[i];
}
var rob = function (nums) {
    // let memo = new Array(nums.length + 1).fill(-1);
    // return solve(nums, 0, memo);
    // ------------ Memoization ------------


    let memo = new Array(nums.length + 1).fill(0);
    memo[0] = 0;
    memo[1] = nums[0];

    for (let i = 2; i <= nums.length; i++) {
        let steal = nums[i - 1] + memo[i - 2];
        let skip = memo[i - 1];
        memo[i] = Math.max(steal, skip);
    }
    return memo[nums.length];

};



console.log(rob([1, 2, 3, 1]))
console.log(rob([2, 7, 9, 3, 1]))
console.log(rob([2, 1, 1, 2]))
// console.log(rob())