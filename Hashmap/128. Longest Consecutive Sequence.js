/**
 * [0,3,7,2,5,8,4,6,0,1]
 * 
 * [ 0 , 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 ]
 *           i
 * 
 * len = 1
 */
var longestConsecutive = function (nums) {
    nums = nums.sort((a, b) => a - b);
    let maxLen = nums.length > 0 ? 1 : 0;
    let prev = nums[0];
    let len = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] == prev) continue;
        if (nums[i] == prev + 1) {
            len++;
        } else {
            len = 1;
        }
        prev = nums[i];
        maxLen = Math.max(len, maxLen);
    }
    return maxLen
};

console.log(longestConsecutive([]));
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));