
// when array contains 0 & 1
function rearrange(arr) {
    let i = 0, j = 0;
    while (i < arr.length) {
        if (arr[i] == 0) {
            let temp = arr[i]
            arr[i] = arr[j];
            arr[j] = temp;
            i++
            j++
        } else {
            i++
        }
    }
    console.log(arr);
}

//arrange positive one side and negative one side
function arrangePositiveNegative(arr) {

    let i = 0, j = 0;
    while (i < arr.length) {
        if (arr[i] >= 0) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++
            j++
        } else {
            i++
        }
    }

    console.log(arr)

}
// rearrange([0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0])
arrangePositiveNegative([-9, -2, -4, 5, -7, 3, 0, 4]);