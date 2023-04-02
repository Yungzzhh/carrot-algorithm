/**
 * 503下一个更大元素 II
 * 
 * url: https://leetcode.cn/problems/next-greater-element-ii/
 */

function nextGreaterElements(nums: number[]): number[] {
    // let res = []

    // for(let i=0;i<nums.length;i++) {
    //     let preArr = nums.slice(0, i)
    //     let curArr = [...nums, ...preArr].slice(i)
    //     let curNum = nums[i]
    //     for(let j=0;j<curArr.length;j++) {
            
    //         if(curNum < curArr[j]) {
    //             res.push(curArr[j])
    //             break
    //         }
    //         if(j === curArr.length-1) {
    //             res.push(-1)
    //         }
    //     }
    // }
    // return res
    const stack: number[] = []
    let len = nums.length
    // 结果数组默认全部填充 -1，栈中剩余的元素找不到「下一个更大的元素」，为 -1
    let res = new Array(len).fill(-1)

    for (let i = 0; i < len * 2; i++) {
        let num = nums[i % len]
        while (stack.length && num > nums[stack[stack.length - 1]]) {
            console.log(nums[stack[stack.length - 1]])
            const index = stack.pop()
            res[(index as number)] = num
        }
        stack.push(i % len)
    }

    return res
};