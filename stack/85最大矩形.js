/**
 * 85. 最大矩形
 * 
 * url: https://leetcode.cn/problems/maximal-rectangle/
 */

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if(matrix.length === 0) return 0

    let res = 0
    let height = new Array(matrix[0].length).fill(0)
    for(let row = 0;row < matrix.length;row++) {
        for(let col = 0;col<matrix[0].length;col++) {
            if(matrix[row][col] === '1') {
                height[col] += 1
            } else {
                height[col] = 0
            }
        }
        res = Math.max(res, largestRectangleArea(height))
    }
    return res
};

const largestRectangleArea = (height) => {
    let maxArea = 0
    const stack = []
    height = [0, ...height, 0]
    for(let i=0;i<height.length;i++) {
        while(height[i] < height[stack[stack.length - 1]]) {
            const index = stack.pop()
            maxArea = Math.max(
                maxArea,
                height[index] * (i - stack[stack.length - 1] -1)
            )
        }
        stack.push(i)
    }

    return maxArea
}