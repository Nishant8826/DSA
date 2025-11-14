/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function solve(candidates, target, curr, idx, result) {

    if (target < 0) return;

    if (target == 0) {
        result.push([...curr]);
        return
    }

    for (let i = idx; i < candidates.length; i++) {
        if (i > idx && candidates[i] == candidates[i - 1]) continue;
        curr.push(candidates[i]);       //DO
        solve(candidates, target - candidates[i], curr, i + 1, result);       //EXPLORE
        curr.pop();     //UNDO
    }
}

var combinationSum2 = function (candidates, target) {
    let result = [];
    let curr = [];
    candidates = candidates.sort((a, b) => a - b);
    solve(candidates, target, curr, 0, result)
    return result;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8))
console.log(combinationSum2([2, 5, 2, 1, 2], 5))
