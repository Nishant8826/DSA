/**
 * @param {number[]} nums
 * @return {number}
  [ 7 , 1 , 5 , 4 ]
            i

    maxDiff = -1, 4 
    minNum = In, 7 , 1
 */
var maximumDifference = function (nums) {
    let maxDiff = -1;
    let minNum = Infinity;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] < minNum){
            minNum = nums[i];
        }else{
            maxDiff = Math.max(maxDiff,nums[i] - minNum);
        }
    }

    return maxDiff;
};

console.log(maximumDifference([7, 1, 5, 4]))