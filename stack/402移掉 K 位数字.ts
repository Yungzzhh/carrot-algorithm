/**
 * 402. 移掉 K 位数字
 * 
 * 
 * url: https://leetcode.cn/problems/remove-k-digits/
 */

function removeKdigits(num: string, k: number): string {
    let n = num.length
    if(n <= k) return '0'
    let stack: string[] = []
    for(let i=0; i<num.length;i++) {
        while(k && stack.length && num[i] < stack[stack.length -1]) {
            k--
            stack.pop()
        }
        if(stack.length || num[i] !== '0') {
            stack.push(num[i])
        }
    }
    while(k--) stack.pop() // 字符串递增的情况
    return stack.join('') || '0'
};