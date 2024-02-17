/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = []
    let operands = ["*", "/", "-", "+"]
    for (const char of tokens) {
        stack.push(char)
        while (stack.length != 1 && operands.includes(stack[stack.length - 1])) {
            let operator = stack.pop()
            let b = stack.pop()
            let a = stack.pop()
            let operation = `${a}${operator}${b}`
            operation = operation.replace('--', "+")
            let result = eval(operation)
            stack.push(parseInt(result))
        }
    }
    return stack[0]
};

let tokens = ["4", "13", "5", "/", "+"]

console.log(evalRPN(tokens));