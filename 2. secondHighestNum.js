// Find scond highest Number

let arr = [34, 23, 45, 57, 51, 56, 23, 24, 35, 46]


function secondHighest(arr) {
    let max;
    let secondMax;
    if (arr[0] > arr[1]) {
        max = arr[0];
        secondMax = arr[1];
    } else {
        max = arr[1];
        secondMax = arr[0];
    }

    for (let i = 2; i < arr.length; i++) {

        if (arr[i] > max) {
            secondMax = max;
            max = arr[i]
        } else if (arr[i] > secondMax) {
            secondMax = arr[i];
        }
    }
    console.log(max)

    console.log(secondMax)

}


secondHighest(arr)