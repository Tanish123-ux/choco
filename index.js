let a = 10;
let b = 5;
let operator = "+"; // +, -, *, /, %

let result;

switch (operator) {
  case "+":
    result = a + b;
    break;

  case "-":
    result = a - b;
    break;

  case "*":
    result = a * b;
    break;

  case "/":
    if (b !== 0) {
      result = a / b;
    } else {
      result = "Cannot divide by zero";
    }
    break;

  case "%":
    result = a % b;
    break;

  default:
    result = "Invalid operator";
}

console.log(result);
