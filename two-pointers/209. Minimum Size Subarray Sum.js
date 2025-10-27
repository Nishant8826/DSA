/**
 *   0   1   2   3   4   5
 * [ 2 , 3 , 1 , 2 , 4 , 3 ]
 *               s
 *                   e
 * 
 * sum = 2,5,6,8,6,10,7,6
 * minLen = 4,3
 * 
 */
var minSubArrayLen = function (target, nums) {
    let s = 0;
    let e = 0;
    let minLen = Infinity;
    let sum = 0;
    while (e < nums.length) {
        sum += nums[e];

        while (sum >= target) {
            minLen = Math.min(minLen, e - s + 1);
            sum -= nums[s];
            s++
        }
        e++
    }

    return minLen == Infinity ? 0 : minLen;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))