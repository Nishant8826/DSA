/****
 *  [ 1 , 2 , 3 , 4 , 5 ] ,  k =2
 *   [1,2,3,5,4]  -> reverse 
 * [3,2,1,5,4]
 * [4,5,1,2,3]                 
 * 
 * 
 *  
 *  [4,5,1,2,3] 
 */

function shift(arr, k) {
    // k = k % arr.length;
    // for (let j = 0; j < k; j++) {
    //     let temp = arr[arr.length - 1];
    //     for (let i = arr.length - 1; i > 0; i--) {
    //         arr[i] = arr[i - 1]
    //     }
    //     arr[0] = temp
    // }
    // console.log(arr)
    //  --------- Time is N2 --------------------------


    let len = arr.length;
    k = k % len;
    let j = arr.length - k - 1;
    let i = 0;
    reverse(arr, i, j)


    j = arr.length - 1;
    i = arr.length - k
    reverse(arr, i, j)


    i = 0;
    reverse(arr, i, j)


    console.log(arr)

}

function reverse(arr, i, j) {
    for (let k = i; k < j; k++) {
        let temp = arr[k];
        arr[k] = arr[j];
        arr[j] = temp
        j--
    }
}

shift([1, 2, 3, 4, 5], 2);