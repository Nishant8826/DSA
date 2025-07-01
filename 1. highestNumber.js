// Find Highest/Minimun Number in a array
let arr = [4, 3, 55, 33, 77, 4, 44, 1, 9, 67]


function maxNum(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    console.log(max)
}

// maxNum(arr)

function minNum(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log(min);

}
minNum(arr)