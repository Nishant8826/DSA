/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 * 
 * 
 *  [ 3, 6, 7, 11 ]
 *6=> 1  1  2  2   => 4
 *3=> 1  2  3  4   => 10 
 *4=> 1  2  2  3   => 8
 * 
 * [1,2,3,4,5,6,7,8,9,10,11]
 *  
 * 
 * low = 1, 4
 * high = 11, 5
 * 
 * mid = 6, 3, 4
 */
var minEatingSpeed = function (piles, h) {
    let max = -Infinity;
    for (let i = 0; i < piles.length; i++) {
        max = Math.max(max, piles[i]);
    }
    // for (let i = 1; i < max; i++) {
    //     let totalHr = 0;
    //     for (let j = 0; j < piles.length; j++) {
    //         totalHr = totalHr + Math.ceil(piles[j] / i);
    //     }
    //     if (totalHr <= h) {
    //         return i;
    //     }
    // }

    let low = 1;
    let high = max;
    let min = Infinity;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let totalHr = 0;
        for (let i = 0; i < piles.length; i++) {
            totalHr += Math.ceil(piles[i]/mid);
        }
        if (totalHr <= h) {
            min = Math.min(min,mid);
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return min;
};


console.log(minEatingSpeed([3, 6, 7, 11], 8))