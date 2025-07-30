const OPERATORS = ["x", "÷", "+", "-"];
let preValue;
let result;
let operands = [];

const btn = document.querySelectorAll("button");
const displayOps = document.querySelector("#display-ops");
const displayResult = document.querySelector("#display-result");

btn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerText === "AC") return clearDisplay();
    if (e.target.innerText === "C") clearLast();
    if (result && OPERATORS.includes(e.target.innerText)) {
      displayOps.innerText = result;
      displayResult.innerText = "";
    }
    setInput(e.target);
    if (e.target.innerText === "=") {
      if (operands.length >= 3) {
        displayResult.innerText = `${operate(
          parseInt(operands[0]),
          operands[1],
          parseInt(operands[2])
        )}`;
      }
    }
  });
});

function setInput(target) {
  if (target.innerText === "C" || target.innerText === "=") return;
  preValue = target.innerText;
  operands.push(preValue);
  return (displayOps.innerText += target.innerText);
}

function clearLast() {
  operands.pop();
  displayOps.innerText = operands.join("");
  if (operands.length <= 2) displayResult.innerText = "";
}

function clearDisplay() {
  displayOps.innerText = "";
  displayResult.innerText = "";
  operands = [];
  result = 0;
  preValue = 0;
}

function add(num1, num2) {
  result = num1 + num2;
  operands = [];
  operands.push(result);
  return result;
}

function subtract(num1, num2) {
  result = num1 - num2;
  operands = [];
  operands.push(result);
  return result;
}

function multiply(num1, num2) {
  result = num1 * num2;
  operands = [];
  operands.push(result);
  return result;
}

function divide(num1, num2) {
  if (num2 === 0) return "can't divide by 0";
  result = num1 / num2;
  operands = [];
  operands.push(result);
  return result;
}

function operate(num1, ope, num2) {
  switch (ope) {
    case `x`:
      return multiply(num1, num2);
    case `÷`:
      return divide(num1, num2);
    case `+`:
      return add(num1, num2);
    case `-`:
      return subtract(num1, num2);
  }
}
