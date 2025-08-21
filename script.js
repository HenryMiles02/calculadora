const display = document.querySelector('.result');
const buttons = document.querySelectorAll('.buttons button');

let currentInput = '';
let operator = '';

function updateDisplay() {
    display.textContent = currentInput || '0';
}

updateDisplay();

function appendNumber(value) {
    if (currentInput.length < 10) {
        currentInput += value;
        updateDisplay();
    }
}

function appendOperator(operator) {
    if (currentInput=== '' && operator !== ',') return;
    currentInput += operator;
    updateDisplay();
}

function deleteAll() {
    currentInput = '';
    operator = '';
    updateDisplay();
}
