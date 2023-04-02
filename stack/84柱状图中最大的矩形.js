/** 
 * 单调栈 
 * 
 * url: https://leetcode.cn/problems/largest-rectangle-in-histogram/
 * 
*/
var largestRectangleArea = function(heights) {
    let maxArea = 0
    const stack = []
    heights = [0, ...heights, 0]
    for(let i=0; i<heights.length; i++) {
        while(heights[i] < heights[stack[stack.length - 1]]) { // 当前bar比栈顶bar矮
            const index = stack.pop() // 栈顶元素出栈，并保存栈顶bar的索引
            maxArea = Math.max( // 计算面积，挑战最大面积
                maxArea,        // 计算出栈的bar形成的长方形面积
                heights[index] * (i - stack[stack.length - 1] - 1)
            )
        }
        stack.push(i) // 当前bar比栈顶bar高，入栈
    }
    return maxArea
};