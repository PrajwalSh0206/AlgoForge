function exponentialSearch(arr, target) {
    const n = arr.length;

    // If the target is the first element
    if (arr[0] === target) {
        return 0;
    }

    // Find the range for binary search by doubling the index
    let i = 1;
    while (i < n && arr[i] <= target) {
        i *= 2;
    }

    // Perform binary search within the found range
    return binarySearch(arr, target, Math.floor(i / 2), Math.min(i, n - 1));
}

function binarySearch(arr, target, low, high) {
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            return mid; // Element found
        } else if (arr[mid] < target) {
            low = mid + 1; // Discard the left half
        } else {
            high = mid - 1; // Discard the right half
        }
    }

    return -1; // Element not found
}

// Example usage
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const targetElement = 79;

const result = exponentialSearch(sortedArray, targetElement);

if (result !== -1) {
    console.log(`Element ${targetElement} found at index ${result}`);
} else {
    console.log(`Element ${targetElement} not found in the array`);
}
