# 🧮 JavaScript Calculator

A simple yet functional web-based calculator built with HTML, CSS, and JavaScript.  
It supports basic arithmetic operations, decimal input, keyboard control, and input validation to prevent invalid expressions.

---

## 🚀 Features

- Basic arithmetic operations: `+`, `-`, `x`, `÷`
- Decimal (floating point) input support
- Keyboard input handling (e.g. `Enter`, `Backspace`, `Escape`, numeric keys, and operators)
- Prevents:
  - Multiple consecutive operators (e.g. `5 + *`)
  - Leading operators
  - Multiple decimal points in a single number
  - Division by zero
- Live input and result display
- Clear current entry (`C`) and all input (`AC`)
- Result formatting (e.g. `5.333333` → `5.33`)

---

## 📸 Demo

> ![demo-image](/assets/image/demo-app-image.png)

---

## Run locally

1. Open index.html in your browser
   OR

2. Use Live Server in VS Code for a better experience.

## 🧑‍💻 Usage

- Use the on-screen buttons or your keyboard to enter values.

- Press = or Enter to compute the result.

- Press C or Backspace to clear the last input.

- Press AC or Escape to clear everything.

## 📁 File Structure

.
├── index.html # Calculator UI
├── assets/css/style.css # Styling
├── assets/js/script.js # All calculator logic (event handling, validation, math ops)
└── assets/image/demo-app-image.png # demo calculator app screenshot

👨‍💻 Author
Fanuel Hindeya
https://github.com/fanuelH

## 🧰 Getting Started

### Clone the repository

```bash
git clone https://github.com/your-username/calculator-app.git
cd calculator-app

```
