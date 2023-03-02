/**
 * url:https://leetcode.cn/problems/palindrome-linked-list/submissions/
 *
 */

/**
 * 双指针
 *
 * 将链表按顺序放入数组，循环数组并比较前后指针的值
 * time O(N)
 * space O(N)
 */
{
    var isPalindrome = function (head) {
        let arr = [];
        while (head !== null) {
            arr.push(head.val);
            head = head.next;
        }
        for (let i = 0, j = arr.length - 1; i < j; ++i, --j) {
            if (arr[i] !== arr[j]) return false;
        }
        return true;
    };
}

/**
 * 快慢指针
 * 
 * 抽出一半的链表，再对比反转后的链表
 * time O(N)
 * space O(1)
 */
{
    const reverseList = (head) => {
        let prev = null;
        let curr = head;
        while (curr !== null) {
            let nextTemp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextTemp;
        }
        return prev;
    };

    const endOfFirstHalf = (head) => {
        let fast = head;
        let slow = head;
        while (fast.next !== null && fast.next.next !== null) {
            fast = fast.next.next;
            slow = slow.next;
        }
        return slow;
    };

    var isPalindrome = function (head) {
        if (head == null) return true;

        // 找到前半部分链表的尾节点并反转后半部分链表
        const firstHalfEnd = endOfFirstHalf(head);
        const secondHalfStart = reverseList(firstHalfEnd.next);

        // 判断是否回文
        let p1 = head;
        let p2 = secondHalfStart;
        let result = true;
        while (result && p2 != null) {
            if (p1.val != p2.val) result = false;
            p1 = p1.next;
            p2 = p2.next;
        }
        return result;
    };
}

/**
 * 递归
 * 
 * 利用堆栈帧
 * temp从前往后指，head从后往前指
 * time O(N)
 * space O(N)
 */
{
    let temp = null;
    var isPalindrome = function (head) {
        temp = head;
        return check(head);
    };

    function check(head) {
        if (head === null) return true;
        let res = check(head.next) && (temp.val === head.val);
        temp = temp.next;
        return res;
    }
}
