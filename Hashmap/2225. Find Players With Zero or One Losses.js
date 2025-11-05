/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
    let lostMap = new Map();
    for (let i = 0; i < matches.length; i++) {
        lostMap.set(matches[i][1], (lostMap.get(matches[i][1]) || 0) + 1)
    }
    let never_lost = [];
    let lost_once = [];
    for (let i = 0; i < matches.length; i++) {
        let winner = matches[i][0];
        let looser = matches[i][1];
        if (!lostMap.has(winner)) {
            never_lost.push(winner);
            lostMap.set(winner, 2);
        };
        if (lostMap.get(looser) == 1) lost_once.push(looser);
    }
    return [never_lost, lost_once];
};


console.log(findWinners([[1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5], [4, 8], [4, 9], [10, 4], [10, 9]]))
console.log(findWinners([[2, 3], [1, 3], [5, 4], [6, 4]]))
// console.log(findWinners())
// console.log(findWinners())