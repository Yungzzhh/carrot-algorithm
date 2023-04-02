/**
 * url: https://leetcode.cn/problems/simplify-path/
 * 
 * 71:简化路径
 * 
 * */
var simplifyPath = function(path) {
    let temp = path.split('/')
    let stack = []
    for(let i of temp) {
        if(i =='.' || i == '') {
            continue
        } else if (i === '..') {
            stack.pop()
        } else {
            stack.push(i)
        }
    }
    return '/' + stack.join('/')
};