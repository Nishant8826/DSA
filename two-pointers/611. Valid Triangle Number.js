/**
 * [ 2 , 2 , 3 , 4 ]
 *   i
 *       j
 *           k
 */
var triangleNumber = function (nums) {
    if (nums.length < 3) {
        return 0;
    }
    /**
    let count = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] > nums[k] && nums[j] + nums[k] > nums[i] && nums[i] + nums[k] > nums[j]) count++
            }
        }
    }
    return count;
    O(n^3)
    */
    nums = nums.sort((a, b) => a - b);
    let count = 0;
    for (let k = nums.length - 1; k >= 2; k--) {
        let i = 0;
        let j = k - 1;
        while (i < j) {
            if (nums[i] + nums[j] > nums[k]) {
                count += (j - i);
                j--;
            } else {
                i++
            }
        }
    }
    return count

};

console.log(triangleNumber([2, 2, 3, 4]))
console.log(triangleNumber([4, 2, 3, 4]))
