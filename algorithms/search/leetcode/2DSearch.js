const binarySearch = (left, right, potentialArray, target) => {
    while (left <= right) {
        let middle = parseInt((left + right) / 2)
        if (potentialArray[middle] == target) {
            return true
        }
        else if (target > potentialArray[middle]) {
            left = middle + 1
        }
        else {
            right = middle - 1
        }
    }
    return false
}

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let rowLength = matrix?.[0].length - 1 || 0;
    let potentialArray = []
    for (const element of matrix) {
        let nums = element
        let a = nums[0]
        let b = nums[rowLength]
        if (target >= a && target <= b) {
            potentialArray = nums
            break
        }
    }
    if (potentialArray) {
        let left = 0;
        let right = rowLength;
        return binarySearch(left, right, potentialArray, target)
    }
    return false
};