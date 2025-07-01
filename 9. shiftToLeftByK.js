function shift(arr, k) {
    //  ------------------------------
    // k = k % arr.length;
    // for (let j = 0; j < k; j++) {
    //     let copy = arr[0];
    //     for (let i = 0; i < arr.length - 1; i++) {
    //         arr[i] = arr[i + 1];
    //     }
    //     arr[arr.length - 1] = copy
    // }
    // console.log(arr)
    // Time complexity is n2

    // -----------------------------------------------
    k = k % arr.length
    let j = k - 1
    for (let i = 0; i < j; i++) {
        let temp = arr[i]
        arr[i] = arr[j];
        arr[j] = temp
        j--
    }

    let len = arr.length - 1;
    for (let i = k; i < len; i++) {
        let tem = arr[i];
        arr[i] = arr[len];
        arr[len] = tem;
        len--
    }
    let l = arr.length - 1
    for (let i = 0; i <= l; i++) {
        let tem = arr[i];
        arr[i] = arr[l];
        arr[l] = tem;
        l--
    }
    console.log(arr)

}


shift([1, 2, 3, 4, 5], 2);
