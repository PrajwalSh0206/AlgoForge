/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    let hash = {}
    while (numbers[right] < target && numbers[right] != 0) {
        right--
    }
    hash[numbers[right]] = right
    while (left <= right) {
        let diff = target - numbers[left]
        if (hash[diff] != null) {
            let res = hash[diff] + 1 > left + 1 ? [left + 1, hash[diff] + 1] : [hash[diff] + 1, left + 1]
            return res
        }
        else {
            hash[numbers[left]] = left
        }
        left++
    }
};

let numbers = [2, 7, 11, 15]

console.log(twoSum(numbers, 9));