/**
 * url:https://leetcode.cn/problems/move-zeroes/submissions/
 *
 */

/**
 * 统计0的个数，将不为0的全放在前面，最后把0补上
 * arr[0]===0,i继续走，遇到不为0的，0变成nums[i],j++(统计0的格式)
 * arr[0]！==0，j跟随i走，知道遇到0
 * 
 * time O(N)
 * space O(1)
 */
{
    let moveZeroes = function(nums) {
        let j=0
        for(let i=0;i<nums.length;i++){
            if(nums[i] !== 0) {
                nums[j] = nums[i]
                j++
            }
        }
        for(let i=j;i<nums.length;i++) {
            nums[i] = 0
        }
    
        return nums
    };
}

/**
 * 循环，当碰到不为0的时候交换i和j的值，（永远和第一个0做交换）
 * 
 *  time O(N)
 * space O(1)
 */
{
    let moveZeroes = function(nums) {
        let j = 0
        for(let i=0;i<nums.length;i++) {
            if(nums[i] !== 0) {
                let temp = nums[i]
                nums[i] = nums[j]
                nums[j] = temp
                j++
            }
        }

        return nums
    }
}