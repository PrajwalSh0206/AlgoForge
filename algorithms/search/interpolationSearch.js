const binarySearch = (arr, target) => {
    let low = 0;
    let high = arr.length - 1;
    
    while (low <= high) {
        let middle = low + Math.floor(((target - arr[low]) / (arr[high] - arr[low])) * (high - low));
        if (target == arr[middle]) {
            return middle
        }
        else if (target > arr[middle]) {
            low = middle + 1
        }
        else {
            high = middle - 1
        }
    }
    return -1;
    
}

let unsortedArray = [3, 27, 43, 56, 84, 93];

unsortedArray=unsortedArray.sort((a,b)=>a-b)

console.log(binarySearch(unsortedArray,56));