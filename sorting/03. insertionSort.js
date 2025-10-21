/**
 * [ 1 , 2 , 4 , 6 , 7 , 8 , 9 ]
 *                           i
 *       j
 *   j-1
 */


function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            }
        }
    }
    return arr;
}

console.log(insertionSort([2, 9, 4, 8, 7, 6, 1]))