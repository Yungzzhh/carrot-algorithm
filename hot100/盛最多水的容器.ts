// https://leetcode.cn/problems/container-with-most-water/
function maxArea(height: number[]): number {
    let l = 0, r = height.length-1
    let max = 0
    while(l<r) {
        let area = Math.min(height[l], height[r]) * (r - l)
        max = Math.max(area, max)
        if(height[l] <= height[r]) {
            l++
        } else {
            r--
        }
    }
    return max
};