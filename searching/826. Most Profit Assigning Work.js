/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function (difficulty, profit, worker) {
    let sum = 0;
    for (let i = 0; i < worker.length; i++) {
        let max = -Infinity;
        let j = 0;
        while (j < difficulty.length && j < profit.length) {
            if (difficulty[j] <= worker[i]) {
                max = Math.max(max, profit[j]);
            }
            j++
        }
        sum += max == -Infinity ? 0 : max;
    }
    return sum;
};

console.log(maxProfitAssignment([2, 4, 6, 8, 10], [10, 20, 30, 40, 50], [4, 5, 6, 7]))
console.log(maxProfitAssignment([85, 47, 57], [24, 66, 99], [40, 25, 25]))