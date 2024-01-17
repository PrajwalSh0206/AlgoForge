var twoSum = function (nums, target) {
    let hashTable = {}
    for (let i = 0; i < nums.length; i++) {
        let currentNo = nums[i]
        let reminder = target - currentNo
        if (hashTable.hasOwnProperty(reminder)) {
            return [hashTable[reminder], i]
        }
        hashTable[currentNo] = i
    }
};

let nums = [2, 7, 11, 15]
let target = 9

console.log(twoSum(nums, target));