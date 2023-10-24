let memo={}

const countConstruct = (target, array) => {
    if(target in memo) return memo[target]
    if (target === "") return 1
    let totalCount = 0
    for (const char of array) {
        if (target.indexOf(char) == 0) {
            let reminder = target.slice(char.length)
            let result = countConstruct(reminder,array)
            totalCount += result
        }
    }
    memo[target]=totalCount
    return totalCount
}

console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "eeeeeee", "eeeeeeeeeee", "eeeeeeeeeeeeeeeeeeeee", "eeeeeeeeeeeeeeeeeeeeeeeeeeeeee", "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"]))