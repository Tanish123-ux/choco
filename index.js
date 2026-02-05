<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Arithmetic Operations</title>
</head>
<body>

  <h2>Arithmetic Operations using Switch Case</h2>

  <label>First Number:</label>
  <input type="number" id="num1"><br><br>

  <label>Second Number:</label>
  <input type="number" id="num2"><br><br>

  <label>Operator:</label>
  <select id="operator">
    <option value="+">Addition (+)</option>
    <option value="-">Subtraction (-)</option>
    <option value="*">Multiplication (*)</option>
    <option value="/">Division (/)</option>
    <option value="%">Modulus (%)</option>
  </select><br><br>

  <button onclick="calculate()">Calculate</button>

  <h3 id="result"></h3>

  <script>
    function calculate() {
      let a = Number(document.getElementById("num1").value);
      let b = Number(document.getElementById("num2").value);
      let op = document.getElementById("operator").value;
      let res;

      switch (op) {
        case "+":
          res = a + b;
          break;

        case "-":
          res = a - b;
          break;

        case "*":
          res = a * b;
          break;

        case "/":
          res = b !== 0 ? a / b : "Cannot divide by zero";
          break;

        case "%":
          res = a % b;
          break;

        default:
          res = "Invalid operator";
      }

      document.getElementById("result").innerText = "Result: " + res;
    }
  </script>

</body>
</html>
