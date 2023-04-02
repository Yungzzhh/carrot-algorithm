/**
 * 1047. 删除字符串中的所有相邻重复项
 * 
 * url: https://leetcode.cn/problems/remove-all-adjacent-duplicates-in-string/
 */

function removeDuplicates(s) {
    let str = s.split('')
    const stack = []
    for(let i=0; i<str.length;i++) {
        let temp = str[i]
        if(stack.indexOf(temp) === -1) {
            stack.push(s[i])
        } else {
            if(s[i] === stack[stack.length-1]) {
                stack.pop()
            } else {
                stack.push(s[i])
            }
        }
    }
    return stack.join('')
};