/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums = nums.sort((a, b) => a - b)
    let result = {}
    let hash = []
    for (let i = 0; i < nums.length - 2; i++) {
        let a = nums[i]
        let target = 0 - a
        let j = i + 1;
        let k = nums.length - 1
        if (!hash.includes(a)) {
            while (j < k) {
                let b = nums[j]
                let c = nums[k]
                let diff = b + c
                if (diff == target) {
                    result[`${a}${b}${c}`] = [a, b, c]
                    hash.push(a)
                    k--
                    j++
                }
                else if (target > diff) {
                    j++
                }
                else if (target < diff) {
                    k--
                }
            }
        }
    }
    return Array.from(Object.values(result))
};


let nums = [-2, 0, 1, 1, 2]

console.log(threeSum(nums));