const OPERATORS = ["x", "÷", "+", "-"];
let preValue;
let curValue;
let curOperator;
let result;
let operands = [];

const btn = document.querySelectorAll("button");
const displayOps = document.querySelector("#display-ops");
const displayResult = document.querySelector("#display-result");

btn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (result && OPERATORS.includes(e.target.innerText)) {
      operands = [result.toString()];
      displayOps.innerText = result;
      displayResult.innerText = "";
    }
    if (errorHandler(e)) return;
    if (e.target.innerText === "AC") return clearDisplay();
    if (e.target.innerText === "C") clearLast();

    if (OPERATORS.includes(e.target.innerText) || operands.length == 1) {
      curOperator = e.target.innerText;
    }
    if (result && !OPERATORS.includes(e.target.innerText)) clearDisplay();
    setInput(e.target);
    showResult(e);
  });
});

function setInput(target) {
  if (target.innerText === "C" || target.innerText === "=") return;
  preValue = target.innerText;
  operands.push(preValue);
  return (displayOps.innerText += target.innerText);
}

function showResult(e) {
  if (e.target.innerText === "=") {
    if (operands.length >= 3) {
      let expression = operands.join("");
      let [left, right] = expression.split(/[x÷+\-]/);
      displayResult.innerText = `${operate(
        Number(left),
        curOperator,
        Number(right)
      )}`;

      preValue = expression[0];
      curOperator = operands[1];
      curValue = expression[1];
      operands = [];
      operands.push(result);
    }
  }
}

function errorHandler(e) {
  if (operands.length === 0 && OPERATORS.includes(e.target.innerText)) {
    alert("invalid input");
    return true;
  }
  if (OPERATORS.includes(e.target.innerText)) {
    if (OPERATORS.includes(operands[operands.length - 1])) {
      alert("invalid input");
      return true;
    }
  }
  return false;
}

function clearLast() {
  if (displayOps.innerText) {
    operands = displayOps.innerText.split("");
    operands.pop();
    const operatorMatch = displayOps.innerText.match(/[x÷+\-]/);
    curOperator = operatorMatch ? operatorMatch[0] : undefined;
  }

  if (displayResult) {
    displayResult.innerText = "";
  }

  displayOps.innerText = operands.join("");
  result = 0;
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
  return formatNumber(result);
}

function subtract(num1, num2) {
  result = num1 - num2;
  operands = [];
  return formatNumber(result);
}

function multiply(num1, num2) {
  result = num1 * num2;
  operands = [];
  return formatNumber(result);
}

function divide(num1, num2) {
  if (num2 === 0) {
    alert("can't divide by 0");
  }
  result = num1 / num2;
  operands = [];
  return formatNumber(result);
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

function formatNumber(num) {
  return Number.isInteger(num) ? num : parseFloat(num.toFixed(2));
}
