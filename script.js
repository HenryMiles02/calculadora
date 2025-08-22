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

function calculate() {
    try {
        let expression = currentInput
        .replace(/,/g, '.') // Substitui vírgula por ponto
        .replace(/x/g, '*') // Substitui 'x' por '*'
        .replace(/%/g, '/100') // Substitui '%' por '/100', porcentagem
        .replace(/÷/g, '/'); // Substitui '÷' por '/'
        
        let result = Function(`"use strict"; return (${expression})`)();
        currentInput = result.toString();
        updateDisplay();
    } catch (error) {
        display.textContent = 'Error';
        currentInput = '0';
    }
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    updateDisplay();
}


function deleteAll() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}