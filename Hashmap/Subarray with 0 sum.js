function subArrayExists(arr) {
    let map = new Map();
    let sum = 0;
    map.set(sum, 1);
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (map.has(sum)) return true;
        else map.set(sum, 1);
    }
    return false;
}

console.log(subArrayExists([4, 2, -3, 1, 6]));
console.log(subArrayExists([4, 2, 0, 1, 6]));
console.log(subArrayExists([1, 2, -1]));

