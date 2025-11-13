/**
 * [ 7 , 1 , 5 , 3 , 6 , 4 ]
 *                   i
 *               i-1   
 * 
 *  i > i-1
 * 
 *  profit = 4
 * 
 * max = 4
 * 
 */
var maxProfit = function (prices) {
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            maxProfit = maxProfit + prices[i] - prices[i - 1];
        }
    }
    return maxProfit
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))