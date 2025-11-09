/**
 * 
 * [ 2, 3, 6, 18]
 *             i
 *         j
 * c = 8
 * 
 * map = {
 *  2 : 1,
 *  3 : 1,
 *  6 : 3,
 * 18 : 4
 * }
 */
var numFactoredBinaryTrees = function (arr) {
    arr = arr.sort((a, b) => a - b);
    let MOD = 1e9 + 7;
    let map = new Map();
    map.set(arr[0], 1);
    for (let i = 1; i < arr.length; i++) {
        let root = arr[i];
        map.set(root, 1);
        for (let j = 0; j < i; j++) {
            if (root % arr[j] == 0 && map.has(root / arr[j])) {
                const sum =
                    map.set(root, (map.get(root) + (map.get(root / arr[j]) * map.get(arr[j])) % MOD));
            }
        }
    }
    let sum = 0;
    for (let [k, v] of map) {
        sum += v;
    }
    return sum % MOD;
};


console.log(numFactoredBinaryTrees([2, 4]))
console.log(numFactoredBinaryTrees([2, 4, 5, 10]))
console.log(numFactoredBinaryTrees([15, 13, 22, 7, 11]))
console.log(numFactoredBinaryTrees([18, 3, 6, 2]))
// console.log(numFactoredBinaryTrees())