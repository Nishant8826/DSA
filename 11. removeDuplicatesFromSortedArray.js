// Given a sorted array, remove duplicates
//                     i
let arr = [1, 1,2];
//            j


function remove(arr) {
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[j]) continue;
        else {
            j++
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    let newArr = [];
    for (let i = 0; i <= j; i++) {
        newArr.push(arr[i]);
    }
}


remove(arr)