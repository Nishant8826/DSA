/**
 * -19, 8, 2, -8, 19, 5, -2, -23
 *                            i
 * 
 * sum = -2
 * 
 * map ={
 *  -19 : 0,
 *  8 : 1,
 *  2 : 2,
 *  -8 : 3,
 *  19 : 4,
 *  5 : 5,
 *  -2:6,
 *  
 * }
 * 
 * max = 
 * 
 * sub = []
 */



function longestSubArraySumZero(arr) {
    let map = new Map();
    let sum = 0;
    let sub = [];
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (sum == 0) {
            sub = arr.slice(0, i + 1)
        } else if (map.has(sum)) {
            let start = map.get(sum) + 1;
            if ((i - start + 1) > sub.length) {
                sub = arr.slice(start, i + 1);
            }
        }

        if (!map.has(sum)) {
            map.set(sum, i);
        }
    }
    return sub;
}

console.log(longestSubArraySumZero([1, 2, -2, 4, -4]));
console.log(longestSubArraySumZero([1, -1, 3, 2, -2, -8, 1, 7, 10, 2, 3]));
console.log(longestSubArraySumZero([1, 2, -3, 3]))
console.log(longestSubArraySumZero([-19, 8, 2, -8, 19, 5, -2, -23]))
// console.log(longestSubArraySumZero())
