const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr
    }

    let left = []
    let right = []
    let pivot = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        }
        else {
            right.push(arr[i])
        }
    }
    const leftSort = quickSort(left)
    const rightSort = quickSort(right)

    return [...leftSort, pivot, ...rightSort]
}

const unsortedArray = [38, 27, 43, 3, 65656, 9, 82, 10];

console.log(quickSort(unsortedArray));