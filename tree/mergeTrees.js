/**
 * url: https://leetcode.cn/problems/merge-two-binary-trees/
 */
// 在n1的基础上做修改。。。
var mergeTrees = function(root1, root2) {
    // 层序遍历
        if(!root1) return root2
        if(!root2) return root1
    
        let queue = [root1, root2]
        while(queue.length) {
            let n1 = queue.shift()
            let n2 = queue.shift()
            n1.val = n1.val + n2.val
            if(n1.left && n2.left) {
                queue.push(n1.left)
                queue.push(n2.left)
            }
            if(n1.right && n2.right) {
                queue.push(n1.right)
                queue.push(n2.right)
            }
            if(!n1.left && n2.left) n1.left = n2.left
            if(!n1.right && n2.right) n1.right = n2.right
        }
        return root1
    
    //递归 前中后都可
        // const preOrder = (root1, root2) => {
        //     if(!root1) return root2
        //     if(!root2) return root1
        //     root1.val = root1.val + root2.val
        //     root1.left = preOrder(root1.left, root2.left)
        //     root1.right = preOrder(root1.right, root2.right)
        //     return root1 // 记得返回节点
        // }
        // return preOrder(root1, root2)
    };