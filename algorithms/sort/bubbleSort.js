function bubbleSort(arr) {
    const n = arr.length;
    let swapped;

    do {
        swapped = false;

        for (let i = 0; i < n - 1; i++) {
            // Compare adjacent elements and swap if they are in the wrong order
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // Swap using destructuring assignment
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}

// Example usage:
const unsortedArray = [5, 2, 9, 1, 5, 6];
const sortedArray = bubbleSort(unsortedArray.slice());
console.log(sortedArray);  // Output: [1, 2, 5, 5, 6, 9]
