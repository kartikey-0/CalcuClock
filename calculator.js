//lets go
// Get the display element
  const display = document.getElementById("display");

  // adds input (numbers/operators) 
  function appendToDisplay(input) {
    display.value += input;
  }

  //  clear display
  function clearDisplay() {
    display.value = "";
  }

  //evaluates the expression on display/ shows the result
  function calculate() {
    try {
      display.value = eval(display.value); 
    } catch (error) {
      display.value = "Error"; 
    }
  }
