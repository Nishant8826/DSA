var searchRange = function (nums, target) {

    const res = [-1, -1];
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] == target) {
            res[0] = mid;
            high = mid - 1;
        } else if (nums[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }


    // if (res[0] === -1) return res;

    low = res[0];
    high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] == target) {
            res[1] = mid;
            low = mid + 1;
        } else if (nums[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return res;

};


console.log(searchRange([5, 7, 7, 8, 8, 10], 8));

