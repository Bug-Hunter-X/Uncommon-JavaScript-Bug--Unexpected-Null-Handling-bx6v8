function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    throw new TypeError('Parameters cannot be null or undefined');
  }
  return a + b;
}

console.log(foo(null, 5)); // Throws TypeError
console.log(foo(5, null)); // Throws TypeError
console.log(foo(5, 5)); // Output: 10