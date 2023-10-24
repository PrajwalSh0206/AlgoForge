let memo = {}

const bestSum = (target, array) => {
    if (target in memo) return memo[target]
    if (target == 0) return []
    if (target < 0) return null

    let shortList = null
    let combination = []

    for (const num of array) {
        let rem = target - num
        let result = bestSum(rem, array)
        if (result != null) {
            combination = [...result, num]
            if (shortList == null || combination.length < shortList.length) {
                memo[target] = combination
                shortList = combination
            }
        }
    }
    return shortList

}

console.log(bestSum(5, [3, 1]))
console.log(bestSum(100, [1, 2, 5, 25]))
