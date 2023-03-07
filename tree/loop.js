let tree = {
    val:1,
    left: {
        val:2,
        left: {
            val:3,
            left: null,
            right: null
        },
        right: {
            val:4,
            left: null,
            right: null
        },
    },
    right: {
        val:6,
        left: {
            val:7,
            left: null,
            right: null
        },
        right: {
            val:8,
            left: null,
            right: null
        },
    },
}
let arr = []
function levelTraversal(root) {
    let queue = [root]
    while(queue.length) {
        let cur = queue.shift()
        arr.push(cur.val)
        if(cur.left) queue.push(cur.left)
        if(cur.right) queue.push(cur.right)
    }
}
levelTraversal(tree)
// console.log(arr);
console.log(1+null);