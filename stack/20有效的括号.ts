// 
function isValid(s: string): boolean {
    let n = s.length
    if(n%2 !== 0) return false

    let stack: string[] = []
    for(let i=0; i<n; i++) {
        if(s[i] === '{' || s[i] === '(' ||s[i] === '[') {
            stack.push(s[i])
        } else {
            let temp = stack[stack.length - 1]
            if((s[i] === '}' && temp === '{') || (s[i] === ')' && temp === '(') || (s[i] === ']' && temp === '[')) {
                stack.pop()
            } else {
                return false
            }
        }
    }
    return stack.length === 0;
}