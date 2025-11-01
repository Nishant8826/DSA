/**
 * [ 1 , 1 , 1 ]
 *   i
 *       j
 * 
 * sum = 0,2
 */
var subarraySum = function (nums, k) {
    // let count = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     let sum = 0;
    //     for (let j = i; j < nums.length; j++) {
    //         sum += nums[j];
    //         if (sum == k) count++;

    //     }
    // }
    // return count

    /**-------------O(N^2)------------- */
    let count = 0;
    let map = new Map();
    let sum = 0;
    map.set(sum, 1);
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (map.has(sum - k)) count += map.get(sum - k);
        if (map.has(sum)) map.set(sum, map.get(sum) + 1);
        else map.set(sum, 1);
    }
    return count
};


console.log(subarraySum([1, 1, 1], 2))
console.log(subarraySum([1, 2, 3], 3))
console.log(subarraySum([1, -1, 0], 0))