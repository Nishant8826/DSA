/**
 * [0,3,7,2,5,8,4,6,0,1]
 * 
 * [ 0 , 0 , 1 , 2 , 3 , 4  , 6 , 7 , 8 ]
 *           i
 * 
 * len = 1
 */
var longestConsecutive = function (nums) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], true);
    }

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i] - 1)) map.set(nums[i], false);
    }

    let maxCount = 0;
    for (let [k, v] of map) {
        if (v) {
            let curr = k;
            let count = 1;
            while (map.has(curr + 1)) {
                count++;
                curr++;
            }
            maxCount = Math.max(maxCount, count);
        }
    }

    return maxCount

}

console.log(longestConsecutive([]));
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
console.log(longestConsecutive([0, 0, 3, 7, 2, 5, 8, 8, 8, 4, 5, 9, 6, 0, 1]));