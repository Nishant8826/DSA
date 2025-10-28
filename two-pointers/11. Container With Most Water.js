/**
 *   0   1   2   3   4   5   6   7   8
 * [ 1 , 8 , 6 , 2 , 5 , 4 , 8 , 3 , 7 ]
 *       i
 *                                   j
 * h = min(h[i],h[j]) = 1
 * w = j-i = 8
 * area = l*b = 8
 * maxArea = -1,8
 * 
 */
var maxArea = function (height) {
    let maxArea = -Infinity;
    let i = 0;
    let j = height.length - 1;
    while (i < j) {
        let h = Math.min(height[i], height[j]);
        let w = j - i;
        let area = h * w;
        maxArea = Math.max(maxArea, area);
        if (height[i] < height[j]) i++
        else j--
    }
    return maxArea;
};


console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
console.log(maxArea([1, 1]))