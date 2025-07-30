const OPERATOR = ["*", "/", "+", "-"];
let preValue;
let curValue;
let result;

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
  if (num2 === 0) return "can't divide by 0";
  return num1 / num2;
}

function operate(num1, ope, num2) {
  switch (ope) {
    case `*`:
      return multiply(num1, num2);
    case `/`:
      return divide(num1, num2);
    case `+`:
      return add(num1, num2);
    case `-`:
      return subtract(num1, num2);
  }
}
