/**
 * Bubble sort
 * -> Sort the maximum first
 * 
 * 
 * [20, -5, 3, 45, -20, 22]
 *  i
 *          j
 * 
 *  */

function bubbleSort(arr) {
    // Outer loop for passes
    for (let i = 0; i < arr.length - 1; i++) {

        // Inner loop for comparisons and swaps
        for (let j = 0; j < arr.length - 1 - i; j++) {
            // Compare adjacent elements
            if (arr[j] > arr[j + 1]) {
                // Swap elements if they are in the wrong order
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }

    }
    return arr;
}

console.log(bubbleSort([20, -5, 3, 45, -20, 22]))


// Selection sort
// -> Sort the minimum first

function selectionSort(arr) {
    const n = arr.length;

    // Outer loop iterates through each position to be filled in the sorted portion
    for (let i = 0; i < n - 1; i++) {
        // Assume the current element is the minimum
        let minIndex = i;

        // Inner loop finds the actual minimum element in the unsorted portion
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // If the minimum element found is not at the current position 'i', swap them
        if (minIndex !== i) {
            // Swap elements
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}


console.log(selectionSort([20, -5, 3, 45, -20, 22]))


/**
 * Insertion Sort
 * 
 * 
 */