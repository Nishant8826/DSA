/**
 * @param {number[]} nums
 * @return {number}

 [ 2 , 4 , 3 , 1 , 5 , 2 , 3 , 7 ]
                               i

   first  = 2 , 4 , 5 , 7
   second = 2 , 3 , 4 , 5
   third = 2 , 3 , 4
 */
var thirdMax = function (nums) {
    let first = -Infinity, second = -Infinity, third = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === first || nums[i] === second || nums[i] === third) continue;
        if (nums[i] > first) {
            third = second;
            second = first;
            first = nums[i];
        } else if (nums[i] > second) {
            third = second;
            second = nums[i];
        } else if (nums[i] > third) {
            third = nums[i];
        }
    }
    return third == -Infinity ? first : third;
};


console.log(thirdMax([1, 2, -2147483648]))