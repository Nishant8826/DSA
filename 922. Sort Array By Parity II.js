/**
 *[ 4 , 2 , 5 , 7 ]
 *          i
 *      j
 */
var sortArrayByParityII = function (nums) {

    let i = 0, j = 1;
    while (i < nums.length && j < nums.length) {
        if (nums[i] % 2 == 0) i += 2;
        else if (nums[j] % 2 != 0) j += 2;
        else {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i += 2;
            j += 2;
        }
    }
    return nums
};

console.log(sortArrayByParityII([4, 2, 5, 7]))