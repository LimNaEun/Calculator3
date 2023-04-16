let display = document.querySelector('.display');
let buttons = document.querySelectorAll('.buttons button');
let clearButton = document.querySelector('.clear');
let calculateButton = document.querySelector('.calculate');

buttons.forEach(function(button) {
  button.addEventListener('click', addToDisplay);
});

clearButton.addEventListener('click', clearDisplay);

calculateButton.addEventListener('click', calculate);

function addToDisplay(e) {
  let buttonValue = e.target.innerText;
  display.value += buttonValue;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  let calculation = display.value;
  let result = eval(calculation);
  display.value = result;
}
