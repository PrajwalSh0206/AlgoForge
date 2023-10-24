const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr
    }

    let pivot = arr[0]
    let left = []
    let right = []

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > pivot) {
            right.push(arr[i])
        }
        else {
            left.push(arr[i])
        }
    }

    let leftSort = quickSort(left)
    let rightSort = quickSort(right)

    return [...leftSort, pivot, ...rightSort]
}

const unsortedArray = [38, 27, 43, 3, 65656, 9, 82, 10];

console.log(quickSort(unsortedArray));