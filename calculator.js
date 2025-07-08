//lets go
// Get the display element
  const display = document.getElementById("display");

  // This function adds input (numbers/operators) to the display
  function appendToDisplay(input) {
    display.value += input;
  }

  // This function clears the display
  function clearDisplay() {
    display.value = "";
  }

  // This function evaluates the expression on display and shows the result
  function calculate() {
    try {
      display.value = eval(display.value); // Evaluates the string expression
    } catch (error) {
      display.value = "Error"; // If expression is invalid
    }
  }