let longestConsecutive = function (nums) {
    nums = nums.sort((a, b) => a - b)
    let i = 0;
    if (nums.length <= 1) {
        return nums.length
    }
    else {
        j = i + 1
        let prev = nums[i]
        let s = new Set()
        let hashMap = {}
        s.add(prev)
        while (j < nums.length) {
            if (![1, 0].includes(nums[j] - prev) && (nums[j] != prev)) {
                if (!hashMap[s.size]) hashMap[s.size] = []
                hashMap[s.size].push(...s.values())
                s.clear()
            }
            s.add(nums[j])
            prev = nums[j]
            j++
        }
        hashMap[s.size] = [...s.values()]

        let keys = Object.keys(hashMap).reverse();

        return keys[0]

    }
};

let nums = [100, 4, 200, 1, 3, 2]

console.log(longestConsecutive(nums));