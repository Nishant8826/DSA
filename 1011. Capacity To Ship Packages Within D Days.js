/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 *  [ 3 , 2 , 2 , 4 , 1 , 4 ]   max days => 3
 *    
 * if weight => 6kg
 *  1 day => 3,2
 *  2 day => 2,4
 *  3 day => 1,4
 *   
 * 
 * ans = 8,7,6
 * 
 */


var shipWithinDays = function (weights, days) {
    let maxWeight = -Infinity;
    let sumOfAllWeights = 0;

    for (let i = 0; i < weights.length; i++) {
        maxWeight = Math.max(maxWeight, weights[i]);
        sumOfAllWeights += weights[i];
    }

    // for (let i = maxWeight; i < sumOfAllWeights; i++) {

    //     let daysRequired = 1;
    //     let load = 0;
    //     for (let j = 0; j < weights.length; j++) {
    //         if (load + weights[j] > i) {
    //             daysRequired = daysRequired + 1;
    //             load = weights[j];
    //         } else {
    //             load += weights[j];
    //         }
    //     }

    //     if (daysRequired <= days) {
    //         return i;
    //     }

    // }


    let low = maxWeight;
    let high = sumOfAllWeights;
    let min = Infinity;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let daysRequired = 1;
        let loads = 0;
        for (let i = 0; i < weights.length; i++) {
            if (loads + weights[i] > mid) {
                daysRequired += 1;
                loads = weights[i];
            } else {
                loads += weights[i];
            }
        }

        if (daysRequired <= days) {
            min = Math.min(min, mid)
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return min;


};


console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5))
console.log(shipWithinDays([3, 2, 2, 4, 1, 4], 3))
console.log(shipWithinDays([1, 2, 3, 1, 1], 4))