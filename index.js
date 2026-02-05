function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  if (y === 0) {
    return "Cannot divide by zero";
  }
  return x / y;
}

console.log(add(8, 4));       // 12
console.log(subtract(8, 4));  // 4
console.log(multiply(8, 4));  // 32
console.log(divide(8, 4));    // 2
