
// [ 1 , 2 , 3 , 4 , 5 , 6 , 7 ]
//   
// 
// 
// k = 3
// len = 7 

var rotate = function (nums, k) {
    // k = k % nums.length
    // for (let j = 0; j < k; j++) {
    //     let temp = nums[nums.length - 1];
    //     for (let i = nums.length - 1; i > 0; i--) {
    //         nums[i] = nums[i - 1];
    //     }
    //     nums[0] = temp;
    // }
    // return nums


    k = k % nums.length;
    let i = nums.length - k;
    let j = nums.length - 1;
    while (i < j) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        i++;
        j--;
    }

    i = 0;
    j = nums.length - k - 1;
    while (i < j) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        i++;
        j--;
    }

    i = 0;
    j = nums.length - 1;
    while (i < j) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        i++;
        j--;
    }

    return nums


};


console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))