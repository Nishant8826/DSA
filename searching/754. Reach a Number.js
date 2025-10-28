/**
 * target = 7
 * step = 0,1,2,3,4,5
 * sum = 0,1,3,6,10
 * 
 * 
 */
var reachNumber = function (target) {
    if (target < 0) {
        target = target * -1;
    }
    let step = 0;
    let sum = 0;
    while (sum < target) {
        step++;
        sum += step;
    }
    while ((sum - target) % 2 != 0) {
        step++;
        sum += step;
    }
    return step;
};

console.log(reachNumber(2));
console.log(reachNumber(3));