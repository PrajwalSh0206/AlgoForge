let memo = {}

function canSum(target, array) {
    if (target in memo) return true
    if (target == 0) return true
    if (target < 0) return false
    for (const num of array) {
        let rem = target - num;
        if (canSum(rem, array)) {
            memo[target] = true
            return true
        }
    }
    memo[target] = false
    return false
}

console.log(canSum(300, [7, 14]));