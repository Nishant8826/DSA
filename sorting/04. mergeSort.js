/**
 * Divide & Merge
 * 
 */

function merge(arr, low, mid, high) {
    let temp = [];
    let left = low
    let right = mid + 1;
    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            temp.push(arr[left]);
            left++;
        } else {
            temp.push(arr[right]);
            right++;
        }
    }
    while (left <= mid) {
        temp.push(arr[left]);
        left++
    }
    while (right <= high) {
        temp.push(arr[right]);
        right++
    }

    for (let i = low; i <= high; i++) {
        arr[i] = temp[i - low];
    }
    return arr;
}

function mergeSort(arr, low, high) {
    if (low >= high) return;
    let mid = Math.floor((low + high) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, mid, high);
}


function sort(arr) {
    mergeSort(arr, 0, arr.length - 1);
    return arr;
}

console.log(sort([2, 9, 4, 8, 7, 6, 1]))    



function mergeTwo(arr1, arr2) {
    let start1 = 0, start2 = 0, end1 = arr1.length - 1, end2 = arr2.length - 1;
    let temp = [];
    while (start1 <= end1 && start2 <= end2) {
        if (arr1[start1] < arr2[start2]) {
            temp.push(arr1[start1]);
            start1++;
        } else {
            temp.push(arr2[start2]);
            start2++;
        }
    }

    while (start1 <= end1) {
        temp.push(arr1[start1]);
        start1++;
    }

    while (start2 <= end2) {
        temp.push(arr1[start2]);
        start2++;
    }

    return temp
}

// console.log(mergeTwo([2, 3, 4, 8, 9], [1, 4, 6, 7, 8]))