


function reverseArr(arr) {
    /*
    with new space
    let newArr = new Array(arr.length);
    let j = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr[j] = arr[i];
        j++
    }
    console.log(newArr)
    */

    /**
     * 
     * [ 4 , 2 , 5 , 6 , 7 ]
     *   i    
     *                   j 
     * 
     */


    let j = arr.length - 1;


    for (let i = 0; i <= j; i++) {
        let temp = arr[i];
        arr[i] = arr[j]
        arr[j] = temp
        j--
    }

    console.log(arr)

}

reverseArr([5, 6, 7, 8, 2, 3, 8, 0])