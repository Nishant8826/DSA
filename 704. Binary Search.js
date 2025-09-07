/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 * [ -1 , 0 , 3 , 5 , 9 , 12 ]
 *   
 * 
 * l = 0
 * h = 5
 * 
 * mid = 2
 * 
 */
var search = function (nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        console.log(mid)
        if (nums[mid] > target) {
            high = mid - 1;
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;

};


console.log(search([-1,0,3,5,9,12],9))