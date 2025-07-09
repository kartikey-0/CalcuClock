//lets go
function updateClock(){
  const now=new Date();
  const hours=String(now.getHours()).padStart(2,'0');
  const mins=String(now.getMinutes()).padStart(2,'0');
  const secs=String(now.getSeconds()).padStart(2,'0');
  document.getElementById('clock').textContent=`${hours}:${mins}:${secs}`;

}
setInterval(updateClock,1000);
updateClock();



// calculatOR-------------->
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