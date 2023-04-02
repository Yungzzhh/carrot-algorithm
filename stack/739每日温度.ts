/**
 * 739每日温度
 * 
 * url: https://leetcode.cn/problems/daily-temperatures/
 */
function dailyTemperatures(temperatures: number[]): number[] {
    if(temperatures.length === 0) return []
    if(temperatures.length === 1) return [0]

    let res = new Array(temperatures.length).fill(0)
    let stack: number[] = []

    for(let i=0;i<temperatures.length;i++) {
        console.log(typeof temperatures[i])
        while(stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let index: number = stack.pop()!
            console.log(index)
            res[index] = i - index
        }
        stack.push(i)
    }

    return res
};