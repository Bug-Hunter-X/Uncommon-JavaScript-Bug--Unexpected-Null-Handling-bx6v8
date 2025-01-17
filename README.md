# Uncommon JavaScript Bug: Unexpected Null Handling

This repository demonstrates a subtle bug related to null value handling in JavaScript. The `foo` function attempts to add two numbers but returns 0 if either input is null. This might not always be the expected behavior.  The bug and solution are contained within `bug.js` and `bugSolution.js` respectively.

## Bug Description:

The `foo` function in `bug.js` uses loose equality (`===`) to check for null values. While functional, this might lead to unexpected results. For example, it returns 0 for null inputs instead of signaling an error or providing a default value. This behavior may be inconsistent with the expected operation of the function.

## Solution:

The `bugSolution.js` file presents an improved version of the function, offering better error handling. The updated function uses strict equality to check for null and undefined values, providing improved clarity.  Alternatively, the implementation throws a TypeError for better error management.