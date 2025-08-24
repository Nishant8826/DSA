var check = function (nums) {
    let count = 0;
    if (nums[0] < nums[nums.length - 1]) count++
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i + 1]) {
            count++
        } else {
            if (count > 1) {
                return false;
            }
        }

    }
    return true;
};


console.log(check([3, 4, 5, 1, 2]))
console.log(check([2, 1, 3, 4]))
console.log(check([5, 5, 6, 6, 6, 9, 1, 2]))
console.log(check([5, 1, 5, 1]))



//
//  [ 5 , 1 , 5 , 1 ]
//                i
//
//
//
//
//
// count = 2
// 
