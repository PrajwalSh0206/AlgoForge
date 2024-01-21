/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
    let hashMap = {
        left: {},
        right: {}
    }
    let result = []
    for (let i = 0; i < nums.length; i++) {
        let lt = i - 1;
        let inc = -1;
        let leftProduct = 1
        while (lt < i && lt >= 0) {
            if (hashMap["left"][lt - 1]) {
                hashMap["left"][lt] = hashMap["left"][lt - 1] * nums[lt]
                leftProduct = hashMap["left"][lt]
                break;
            }
            else if (lt == 0) {
                leftProduct = leftProduct * nums[lt]
                hashMap["left"][lt] = leftProduct
                inc = 1
            }
            lt = lt + inc
        }

        // Right Side
        let rt = i + 1
        let rightProduct = 1;
        inc = 1
        while (rt > i && rt < nums.length) {
            if (hashMap["right"][rt + 1] != null) {
                hashMap["right"][rt] = hashMap["right"][rt + 1] * nums[rt]
                rightProduct = hashMap["right"][rt]
                if (rt == i + 1) {
                    break
                }
            }
            else if (rt == nums.length - 1) {
                rightProduct = rightProduct * nums[rt]
                hashMap["right"][rt] = rightProduct
                inc = -1
            }
            rt = rt + inc
        }
        result.push(leftProduct * rightProduct)
    }
    return result
};

const nums = [1, 2, 3, 4, 5]
console.log(productExceptSelf(nums));
