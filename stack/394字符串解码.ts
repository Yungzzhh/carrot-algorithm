/**
 * 394. 字符串解码
 * 
 * url: https://leetcode.cn/problems/decode-string/
 */

function decodeString(s: string): string {
    const stack: string[] = []
    let str = ''
    let count = ''
    for(const char of s) {
        if(char === '[') {
            stack.push('[')
        } else if (char === ']') {
            while(true) {
                const temp = stack.pop()
                if(temp === '[') break
                str = temp + str
            }
            // [c]
            while(true) {
                const temp = stack.pop()
                if(isNaN(+temp!)) { // 遇到字母则push进去
                    stack.push(temp!) 
                    break 
                }
                count = temp+count // 2[c]
            }

            stack.push(str.repeat(+count))
            str = ''
            count = ''
        } else {
            stack.push(char)
        }
    }

    return stack.join('')
};