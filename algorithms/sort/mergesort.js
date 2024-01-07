const sort = (left, right) => {
    let result = []
    let leftLength = left.length
    let rightLength = right.length
    let i = 0;
    let j = 0;
    while (i < leftLength && j < rightLength) {
        if (left[i] > right[j]) {
            result.push(right[j])
            j++
        }
        else {
            result.push(left[i])
            i++
        }
    }
    while (i < leftLength) {
        result.push(left[i])
        i++
    }
    while (j < rightLength) {
        result.push(right[j])
        j++
    }
    return result
}

const divide = (array = []) => {

    // If array of length 1, hardstop and return the value
    if (array.length == 1) {
        return array
    }

    // Divide the array into 2 section - left and right
    let middle = Math.floor(array.length / 2)

    let left = array.slice(0, middle)
    let right = array.slice(middle)

    // Call recursively to divide and sort - first left then right
    let leftSort = divide(left)
    let rightSort = divide(right)

    return sort(leftSort, rightSort)

}

const unsortedArray = [38, 27, 43, 3, 65656, 9, 82, 10];

console.log(divide(unsortedArray))