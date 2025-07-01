

function shiftToRight(arr) {
    let temp = arr[arr.length - 1];
    for (let i = arr.length - 1; i >= 1; i--) {
        arr[i] = arr[i - 1]
    }
    arr[0] = temp
    console.log(arr);
}


const arr = [1, 2, 3, 4, 5, 6];
//           i
//           
shiftToRight(arr);