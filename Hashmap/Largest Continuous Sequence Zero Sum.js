function longestSubArraySumZero(arr) {
    let map = new Map();
    let maxLen = 0;
    let start = -1, end = -1;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        // Case 1: subarray [0...i] has sum = 0
        if (sum === 0) {
            if (i + 1 > maxLen) {
                maxLen = i + 1;
                start = 0;
                end = i;
            }
        }

        // Case 2: same prefix sum seen before
        if (map.has(sum)) {
            let prevIndex = map.get(sum);
            let len = i - prevIndex;
            if (len > maxLen) {
                maxLen = len;
                start = prevIndex + 1;
                end = i;
            }
        } else {
            // Store first occurrence of this sum
            map.set(sum, i);
        }
    }

    return start !== -1 ? arr.slice(start, end + 1) : [];
}

console.log(longestSubArraySumZero([1, 2, -2, 4, -4]));
