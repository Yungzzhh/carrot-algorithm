/**
 * URL：https://leetcode.cn/problems/diameter-of-binary-tree/
 * 
 * 深度优先遍历
 * 递归
 */
var diameterOfBinaryTree = function(root) {
    let ans = 1

    function depth(rootNode) {
        if(!rootNode) return 0

        // 递归 获取左子树的深度
        let left = depth(rootNode.left)
        // 递归 获取右子树的深度
        let right = depth(rootNode.right)

        // l+r+1 = 左子树深度+右子树深度+根节点
        // 获得树的最长路径和现有最长路径中最大的一个
        ans = Math.max(ans, left + right + 1)

        //rootNode的左右子树深度已知，返回加上根节点的最大深的
        return Math.max(left, right) + 1
    }
    depth(root)
    
    // 之前默认加上了树节点的自身根节点路径，因此-1
    return ans - 1 
}