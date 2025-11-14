/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
function solve(days, cost, i, memo) {
    if (i >= days.length) return 0;

    if (memo[i] != -1) return memo[i];

    //1 day pass
    let cost_1 = cost[0] + solve(days, cost, i + 1, memo);

    //7 day
    let j = i;
    let max_day = days[i] + 7;
    while (j < days.length && days[j] < max_day) {
        j++;
    }
    let cost_7 = cost[1] + solve(days, cost, j, memo);

    //30 day
    j = i;
    max_day = days[i] + 30;
    while (j < days.length && days[j] < max_day) {
        j++;
    }
    let cost_30 = cost[2] + solve(days, cost, j, memo);

    let min = Math.min(cost_1, cost_7, cost_30);
    memo[i] = min;
    return memo[i];
}


var mincostTickets = function (days, costs) {
    let memo = new Array(366).fill(-1);
    return solve(days, costs, 0, memo);
};


console.log(mincostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15]))
console.log(mincostTickets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31], [2, 7, 15]))
console.log(mincostTickets([3, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 20, 21, 23, 25, 26, 27, 29, 30, 33, 34, 35, 36, 38, 39, 40, 42, 45, 46, 47, 48, 49, 51, 53, 54, 56, 57, 58, 59, 60, 61, 63, 64, 67, 68, 69, 70, 72, 74, 77, 78, 79, 80, 81, 82, 83, 84, 85, 88, 91, 92, 93, 96], [3, 17, 57]))
// console.log(mincostTickets())