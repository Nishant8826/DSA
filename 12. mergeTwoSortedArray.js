// Merge 2 sorted arrays

let arr1 = [1, 3, 5, 6];
//                                  i

let arr2 = [2, 4, 7];
//                   j

function merge(arr1, arr2) {

    let tem = new Array(arr1.length + arr2.length);
    let j = k = i = 0;
    while (j < arr1.length && k < arr2.length) {
        if (arr1[j] < arr2[k]) {
            tem[i] = arr1[j];
            j++
            i++
        } else if (arr2[k] < arr1[j]) {
            tem[i] = arr2[k];
            k++
            i++
        }
    }

    while (j < arr1.length) {
        tem[i] = arr1[j];
        i++;
        j++;
    }

    while (k < arr2.length) {
        tem[i] = arr2[k];
        i++;
        k++;
    }

    console.log(tem)

}

merge(arr1, arr2);
