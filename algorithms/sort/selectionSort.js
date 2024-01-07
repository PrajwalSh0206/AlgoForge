function selectionSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        // Assume the current index is the minimum
        let minIndex = i;

        // Find the index of the minimum element in the unsorted region
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found minimum element with the first element in the unsorted region
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }

    return arr;
}

// Example usage:
const unsortedArray = [5, 2, 9, 1, 5, 6];
const sortedArray = selectionSort(unsortedArray.slice());
console.log(sortedArray);  // Output: [1, 2, 5, 5, 6, 9]
