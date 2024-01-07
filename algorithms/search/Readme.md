# Algorithms

## Table of Contents

1. Search Algorithms
    [1.1. Linear Search](#linear-search)
    [1.2. Binary Search](#binary-search)
    [1.3. Interpolation Search](#interpolation-search)
    [1.4. Exponential Search](#exponential-search)

## Searching Algorithms

## Linear Search

- *Description:* A simple search algorithm that checks each element in the data structure until a match is found or the entire structure has been searched.
- *Time Complexity:* O(n) in the worst case.

## Binary Search

- *Description:* Applicable to sorted arrays, binary search repeatedly divides the search range in half until the target element is found or the search range becomes empty.
- *Time Complexity:* O(log n) in the worst case.

## Interpolation Search

- *Description:* An improvement over binary search for uniformly distributed datasets, especially when the values in the dataset are ordered and have a known range.
- *Time Complexity:* O(log log n) on average (assuming uniform distribution).

## Exponential Search

- *Description:* Combines binary search with linear search. It first finds a range where the target element might be and then performs a binary search within that range.
- *Time Complexity:* O(log n) in the worst case.
