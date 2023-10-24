const memo = {}

const howSum = (target, array) => {
    if (target in memo) return memo[target]
    if (target == 0) return []
    if (target < 0) return null
    for (let num of array) {
        let resultArray = howSum(target - num, array)
        if (resultArray != null) {
            {
                memo[target] = [...resultArray, num]
                return memo[target]
            }
        }
    }
    memo[target] = null
    return memo[target]
}

console.log(howSum(21, [7, 14]));