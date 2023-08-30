const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

let currentInput = "";
let operator = "";
let firstInput = "";
let shouldClearDisplay = false;

// ... (existing code)

buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.textContent;
  
      if (!isNaN(value) || value === ".") {
        if (shouldClearDisplay) {
          currentInput = "";
          shouldClearDisplay = false;
        }
        currentInput += value;
        display.value = currentInput;
      } else if (value === "C") {
        clear();
      } else if (value === "=") {
        calculate();
      } else {
        if (operator !== "") {
          calculate();
          shouldClearDisplay = true;
        }
        operator = value;
        firstInput = currentInput;
        currentInput = "";
        display.value = operator; // Display the operator sign
      }
    });
  });
  
  // ... (rest of the code)
  

function clear() {
  currentInput = "";
  operator = "";
  firstInput = "";
  display.value = "";
}

function calculate() {
  if (currentInput !== "" && firstInput !== "") {
    switch (operator) {
      case "+":
        currentInput = String(parseFloat(firstInput) + parseFloat(currentInput));
        break;
      case "-":
        currentInput = String(parseFloat(firstInput) - parseFloat(currentInput));
        break;
      case "*":
        currentInput = String(parseFloat(firstInput) * parseFloat(currentInput));
        break;
      case "/":
        currentInput = String(parseFloat(firstInput) / parseFloat(currentInput));
        break;
    }
    display.value = currentInput;
    operator = "";
    firstInput = "";
  }
}
