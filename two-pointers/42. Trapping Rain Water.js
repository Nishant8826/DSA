/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {

    function getLeftMax(h) {
        let leftMax = [];
        let max = 0;
        for (let i = 0; i < h.length; i++) {
            max = Math.max(max, h[i]);
            leftMax.push(max)
        }
        return leftMax;
    }

    function getRightMax(h) {
        let rightMax = [];
        let max = 0;
        for (let i = h.length - 1; i >= 0; i--) {
            max = Math.max(max, h[i]);
            rightMax[i] = max
        }
        return rightMax;
    }

    let leftMax = getLeftMax(height)
    let rightMax = getRightMax(height)
    let sum = 0;
    for (let i = 0; i < height.length; i++) {
        let h = Math.min(leftMax[i], rightMax[i]) - height[i];
        sum += h;
    }
    return sum
};

console.log(trap([4, 2, 0, 3, 2, 5]))
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
