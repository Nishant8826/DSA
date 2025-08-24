// maxProfit = 0;
let stockArr = [7, 1, 4, 3, 6, 5]
//              m
//              i

function bestTime(arr) {
    let maxProfit = 0;
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i]
        else if (arr[i] > min) {
            let temp = arr[i] - min;
            maxProfit = Math.max(temp, maxProfit)
        }
    }
    console.log(maxProfit)
}

bestTime(stockArr);