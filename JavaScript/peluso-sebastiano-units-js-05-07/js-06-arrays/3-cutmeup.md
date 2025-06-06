# Difference Between `slice()` and `splice()` in JavaScript

## Overview

Both `slice()` and `splice()` methods are used to manipulate arrays in JavaScript, but they have different behaviors and parameters.

---

## `slice()`

- **Purpose:** Returns a shallow copy of a portion of an array as a new array.
- **Parameters:** `(startIndex, endIndex)` (endIndex is optional)
- **Behavior:** Does not modify the original array.
- **Returns:** A new array with the selected elements.

### Syntax
```js

array.slice(start, end);

const arr = ['a', 'b', 'c', 'd', 'e'];

const newArr = arr.slice(1, 3);

console.log(newArr); 
console.log(arr);     


```