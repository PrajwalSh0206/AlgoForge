function linearSearch(arr, target) {
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        // Compare the current element with the target
        if (arr[i] === target) {
            // Target found, return the position
            return i;
        }
    }

    // Target not found in the list
    return -1;
}

// Example usage:
const myArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const targetValue = 2;
const result = linearSearch(myArray, targetValue);

if (result !== -1) {
    console.log(`Target ${targetValue} found at position ${result}.`);
} else {
    console.log(`Target ${targetValue} not found in the list.`);
}
