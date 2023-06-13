// 在利用数组的时候（并且使用栈或队列的情况下，还可以考虑利用数组的下标进行计算 ”连续性“ ）
// stack存储的是数组的下标
// link: https://leetcode.cn/problems/longest-valid-parentheses/
/**
 * input s = ")()())"
 * output 4
 */
function longestValidParentheses(s) {
    let stack = [-1]
    let arr = s.split('')
    let max = 0
    for(let i=0; i<arr.length; i++) {
        if(arr[i] === '(') {
            stack.push(i)
        } else {
            stack.pop() // 匹配上了，出栈

            if(stack.length === 0) {
                stack.push(i) // ）扔进去
            } else {
                max = Math.max(max, i-stack[stack.length-1])
            }
        }
    }
    return max
};