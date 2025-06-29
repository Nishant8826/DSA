// Find scond highest Number

let arr = [34, 23, 45, 57, 60, 60, 60, 60]


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
        } else if (arr[i] > secondMax && max != arr[i]) {
            secondMax = arr[i];
        }
    }
    console.log("Max : ", max);

    console.log("Second Max : ", secondMax)

}


secondHighest(arr)