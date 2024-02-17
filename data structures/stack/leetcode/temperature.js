var dailyTemperatures = function (temperatures) {
    let res = new Array(temperatures.length).fill(0)
    let stack = []
    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && temperatures[i] > (stack[stack.length - 1][1] || 0)) {
            let [ind,] = stack.pop()
            res[ind] = (i - ind)
        }
        stack.push([i, temperatures[i]])
    }
    return res
};

let temp = [73, 74, 75, 71, 69, 72, 76, 73]

console.log(dailyTemperatures(temp))