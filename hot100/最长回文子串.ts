//https://leetcode.cn/problems/longest-palindromic-substring/solution/by-alexyang-4bkr/
function longestPalindrome(s: string): string {
    let maxLen = 0
    let start = -1
    for(let i =0; i<s.length; i++) {
        let now = 1 // 当前回文串长度
        let l = i-1 
        while(s[i+1] === s[i]) {
            now++
            i++
        }
        let r = i+1
        while(s[l] === s[r] && s[l] !== undefined) {
            now += 2
            l--
            r++
        }
        if(now > maxLen) {
            maxLen = now
            start = l+1
        }
    }
    return s.slice(start, start+maxLen)
};