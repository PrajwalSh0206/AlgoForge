let memo = {}

const canConstruct = (target, array) => {
    if (target in memo) return memo[target]
    if (target == "") { return true }

    for (const char of array) {
        if (target.indexOf(char) == 0) {
            let reminder = target.slice(char.length)
            if (canConstruct(reminder, array) != false) {
                memo[target] = true
                return true
            }
        }
    }
    memo[target] = false
    return false
}

console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "eeeeeee", "eeeeeeeeeee", "eeeeeeeeeeeeeeeeeeeee", "eeeeeeeeeeeeeeeeeeeeeeeeeeeeee", "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"]))
