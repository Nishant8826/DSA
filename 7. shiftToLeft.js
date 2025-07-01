

function shiftToLeft(arr) {
    const temp = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = temp
    console.log(arr);
}

let arr = [2, 3, 4, 5, 6, 7];
shiftToLeft(arr);