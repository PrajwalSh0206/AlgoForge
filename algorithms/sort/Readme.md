# Table of Contents

1. Sorting Algorithms
   - [1.1 Bubble Sort](#bubble-sort)
   - [1.2 Selection Sort](#selection-sort)
   - [1.3 Insertion Sort](#insertion-sort)
   - [1.4 Merge Sort](#merge-sort)
   - [1.5 Quick Sort](#quick-sort)

## Sorting Algorithms

### Bubble Sort

- *Description:* A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.
- *Time Complexity:* O(n^2) in the worst case.

### Selection Sort

- *Description:* A simple sorting algorithm that divides the input list into two parts: a sorted and an unsorted region. It repeatedly selects the smallest (or largest) element from the unsorted region and swaps it with the first element of the unsorted region.
- *Time Complexity:* O(n^2) in the worst case.

### Insertion Sort

- *Description:* Builds the sorted array one element at a time by repeatedly taking elements from the unsorted part and inserting them into their correct position in the sorted part.
- *Time Complexity:* O(n^2) in the worst case.

### Merge Sort

- *Description:* A divide-and-conquer algorithm that divides the unsorted list into n sub-lists, each containing one element, and then repeatedly merges sub-lists to produce new sorted sub-lists until there is only one sub-list remaining.
- *Time Complexity:* O(n log n) in the worst case.

### Quick Sort

- *Description:* Another divide-and-conquer algorithm that selects a 'pivot' element and partitions the other elements into two sub-arrays according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively.
- *Time Complexity:* O(n^2) in the worst case, but O(n log n) on average.
