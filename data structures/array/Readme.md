# Arrays

In JavaScript, an array is a data structure that allows you to store and organize multiple values in a single variable. Arrays can hold elements of different data types, including numbers, strings, objects, and even other arrays. Each element in an array is assigned a unique index, starting from 0 for the first element.


## Table of Contents
1. [Mutators](#mutators-modify-the-original-array)
    1. [Push](#1-push)
    2. [Pop](#2-pop)
    3. [Shift](#3-shift)
    4. [Unshift](#4-unshift)
    5. [Splice](#5-splice)
    6. [Sort](#6-sort)
2. [Accessor Methods](#accessor-methods-do-not-modify-the-original-array-but-return-some-representation-of-it)
    1. [Slice](#1-slice)
    2. [Concat](#2-concat)
3. [Filtering and Searching Methods](#filtering-and-searching-methods)
    1. [indexOf() and lastIndexOf()](#1-indexof-and-lastindexof)
    2. [filter()](#2-filter)
    3. [find()](#3-find)
    4. [every() and some()](#4-every-and-some)
3. [Reduction Methods](#reduction-methods)
    1.[reduce()](#1-reduce)
4.Iteration Methods:
1. [forEach()](#1-foreach)
2. [map()](#2-map)

## Mutators (Modify the original array):

### 1. `push()`:
Adds one or more elements to the end of an array.
```javascript
let fruits = ['apple', 'banana'];
fruits.push('orange');
// fruits is now ['apple', 'banana', 'orange']
```

### 2. `pop()`:
Removes the last element from the end of an array and returns that element.
```javascript
let fruits = ['apple', 'banana', 'orange'];
let lastFruit = fruits.pop();
// lastFruit is 'orange', fruits is now ['apple', 'banana']
```

### 3. `shift()`:
Removes the first element from the beginning of an array and returns that element.
```javascript
let fruits = ['apple', 'banana', 'orange'];
let firstFruit = fruits.shift();
// firstFruit is 'apple', fruits is now ['banana', 'orange']
```

### 4. `unshift()`:
Adds one or more elements to the beginning of an array.
```javascript
let fruits = ['banana', 'orange'];
fruits.unshift('apple');
// fruits is now ['apple', 'banana', 'orange']
```

### 5. `splice()`:

Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
#### Syntax:
```javascript
array.splice(startIndex, deleteCount, item1, item2, ...);
```
- startIndex: The index at which to start changing the array.
- deleteCount: The number of elements to remove from the array. If set to 0, no elements are removed.
- item1, item2, ...: Elements to add to the array at the specified startIndex.

#### Example:

```javascript
let fruits = ['apple', 'banana', 'orange'];
fruits.splice(1, 1, 'kiwi', 'grape');
// fruits is now ['apple', 'kiwi', 'grape', 'orange']
```

### 6. `sort()`:

Sorts the elements of an array in place.
```javascript
let fruits = ['banana', 'kiwi', 'apple', 'orange'];
fruits.sort();
// fruits is now ['apple', 'banana', 'kiwi', 'orange']
```

## Accessor Methods (Do not modify the original array, but return some representation of it):


### 1. `slice()`:
The slice() method returns a shallow copy of a portion of an array into a new array. It does not modify the original array.

#### Syntax:

```javascript
array.slice(startIndex, endIndex);
```
- startIndex: The index at which to begin extraction (inclusive).
- endIndex: The index at which to stop extraction (exclusive). If omitted, slice() extracts to the end of the array.

#### Example:
```javascript
let fruits = ['apple', 'banana', 'kiwi', 'grape', 'orange'];

// Extract elements from index 1 to index 4 (exclusive)
let slicedFruits = fruits.slice(1, 4);

// Result: ['banana', 'kiwi', 'grape']
```

### 2. `concat()`:

Combines two or more arrays, returning a new array.
javascript

```javascript
let fruits = ['apple', 'banana'];
let moreFruits = ['kiwi', 'grape'];
let combinedFruits = fruits.concat(moreFruits);
// combinedFruits is ['apple', 'banana', 'kiwi', 'grape']
```


## Filtering and Searching Methods

### 1. `indexOf() and lastIndexOf()`:

Returns the first (or last) index at which a given element can be found in the array, or -1 if it is not present.

```javascript
let fruits = ['apple', 'banana', 'kiwi', 'grape', 'orange'];
let index = fruits.indexOf('kiwi');
// index is 2
```

### 2. `filter()`:

Creates a new array with all elements that pass the test implemented by the provided function.
```javascript
let numbers = [1, 2, 3, 4];
let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});
// evenNumbers is [2, 4]
```

### 3. `find()`:

Returns the first element in the array that satisfies the provided testing function.
```javascript
let numbers = [1, 2, 3, 4];
let found = numbers.find(function(number) {
    return number > 2;
});
// found is 3
```

### 4. `every() and some()`:

every() tests whether all elements in the array pass the provided function, and some() tests whether at least one element passes.
```javascript
let numbers = [1, 2, 3, 4];
let allGreaterThanZero = numbers.every(function(number) {
    return number > 0;
});
// allGreaterThanZero is true

let atLeastOneEven = numbers.some(function(number) {
    return number % 2 === 0;
});
// atLeastOneEven is true
```
## Reduction Methods:

### 1. `reduce()`:

Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
```javascript
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce(function(accumulator, current) {
    return accumulator + current;
}, 0);
// sum is 10
```

## Iteration Methods:

### 1. `forEach()`:

Executes a provided function once for each array element.
javascript
Copy code
```javascript
let numbers = [1, 2, 3, 4];
numbers.forEach(function(number) {
    console.log(number);
});
// Output: 1, 2, 3, 4
```

### 2. `map()`:

Creates a new array with the results of calling a provided function on every element in the array.
```javascript
let numbers = [1, 2, 3, 4];
let squaredNumbers = numbers.map(function(number) {
    return number * number;
});
// squaredNumbers is [1, 4, 9, 16]
```