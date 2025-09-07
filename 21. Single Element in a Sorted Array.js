// 540. Single Element in a Sorted Array



var singleNonDuplicate = function (nums) {
    for (let i = 0; i < nums.length; i += 2) {
        if (nums[i] != nums[i + 1]) return nums[i];
    }
    return nums[nums.length - 1];
};


console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]))  //2
console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11])) //10
console.log(singleNonDuplicate([1, 1, 2])) //2

