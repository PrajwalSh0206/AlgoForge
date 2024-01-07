function insertionSort(arr) {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        // Store the current element to be compared
        let currentElement = arr[i];

        // Compare the current element with elements in the sorted part
        let j = i - 1;
        while (j >= 0 && arr[j] > currentElement) {
            // Shift elements to make space for the current element
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert the current element into its correct position in the sorted part
        arr[j + 1] = currentElement;
    }

    return arr;
}

// Example usage:
const unsortedArray = [5, 2, 9, 1, 5, 6];
const sortedArray = insertionSort(unsortedArray.slice());
console.log(sortedArray);  // Output: [1, 2, 5, 5, 6, 9]
