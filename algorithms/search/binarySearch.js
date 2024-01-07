const binarySearch = (arr, target) => {
    let low = 0;
    let high = arr.length - 1;
    let middle = parseInt((low + high) / 2);
    while (low <= high) {
        if (target == arr[middle]) {
            return middle
        }
        else if (target > arr[middle]) {
            low = middle + 1
        }
        else {
            high = middle - 1
        }
        middle = parseInt((low + high) / 2);
    }
    return -1;
}

let unsortedArray = [38, 27, 43, 3, 65656, 9, 82, 10];

unsortedArray=unsortedArray.sort((a,b)=>a-b)

console.log(binarySearch(unsortedArray,47));