// 5 methods:
//
// 1 - add()
// 2 - subtract()
// 3 - multiply()
// 4 - divide()
//
// 5 - clear()

// accepts:
// operate(number1, an operator, number2)

// subproblems:
// - how are we going to capture/collect a number?
// - how are we going to capture/collect the operator?
// - how are we going to display current value(s) to the screen?
// - how do we actually run / display the output

let numberString1 = ""; // e.g. '9' or '98' or '98...' INSTEAD of 9 + 8
let numberString2 = ""; // e.g. '2' or '3' or '1234567890'
let operator = ""; // e.g. '+' or '-' or '*' or '/'

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function clearScreen() {
  numberString1 = "";
  numberString2 = "";
  operator = "";

  const screenElement = document.querySelector("#display-text");
  screenElement.innerText = "0";
}

function handleNumberClick(numberJustClicked) {
  console.log('OPERATOR: ', operator);

  if (operator) {
    numberString2 = `${numberString2}${numberJustClicked}`;
  } else {
    console.log('updating numberString1...');
    console.log('current numberString1:', numberString1);
    console.log('number to add to numberString1:', numberJustClicked);


    numberString1 = `${numberString1}${numberJustClicked}`; // '7' + '8' -> '78' NOT 15 because '7' and '8' are strings NOT numbers

    console.log('new numberString1:', numberString1);
  }

  setScreenText(`${numberString1}${operator}${numberString2}`);
}

function handleOperatorClick(newOperator) { // argument is '+' because i clicked the + button
  operator = newOperator;
  setScreenText(`${numberString1}${operator}${numberString2}`);
}

function setScreenText(screenText) {
  const screenElement = document.querySelector("#display-text");

  console.log('typeof screenElement', typeof screenElement); // this is an object (NOT a string or number)
  console.log({screenElement});

  screenElement.innerHTML = screenText;
}

function operate() {
  const num1 = parseFloat(numberString1); // '7' -> 7
  const num2 = parseFloat(numberString2); // '3' -> 3

  let result; // this doesn't do anything yet, just sets up the variable

  if (operator === "+") {
    result = 10; // add(num1, num2);
  } else if (operator === "-") {
    result = subtract(num1, num2);
  } else if (operator === "*") {
    result = multiply(num1, num2);
  } else if (operator === "/") {
    result = divide(num1, num2);
  } else {
    setScreenText("ERROR");
  }

  setScreenText(result);
}
