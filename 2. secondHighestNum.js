// Find scond highest/minimum Number

function secondHighest(arr) {
    let max = Math.max(arr[0], arr[1]);
    let secondMax = Math.min(arr[0], arr[1])

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



function secondMinimum(arr) {
    let min = Math.min(arr[0], arr[1]);
    let secondMin = Math.max(arr[0], arr[1]);

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] < min) {
            secondMin = min;
            min = arr[i];
        }else if(arr[i]<secondMin){
            secondMin = arr[i]
        }
    }

    console.log('Min : ', min);
    console.log('Second Min : ', secondMin);
}

let arr = [34, 23, 30, 57, 6, 10, 40, 60]

// secondHighest(arr)
secondMinimum(arr);