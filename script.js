const display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operation = null;

const numbers = document.querySelectorAll('.num');
const clear = document.getElementById('clear');
const equals = document.getElementById('equals');
const operators = {
    add: document.getElementById('add'),
    subtract: document.getElementById('subtract'),
    multiply: document.getElementById('multiply'),
    divide: document.getElementById('divide')
};

numbers.forEach(button => {
    button.addEventListener('click', () => {
        currentInput += button.textContent;
        updateDisplay();
    });
});

Object.keys(operators).forEach(key => {
    operators[key].addEventListener('click', () => {
        if (currentInput === '') return;
        operation = key;
        previousInput = currentInput;
        currentInput = '';
    });
});

equals.addEventListener('click', () => {
    if (!operation || currentInput === '' || previousInput === '') return;
    calculate();
    operation = null;
});

clear.addEventListener('click', () => {
    currentInput = '';
    previousInput = '';
    operation = null;
    updateDisplay();
});

function updateDisplay() {
    display.textContent = currentInput || '0';
}

function calculate() {
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
    switch (operation) {
        case 'add':
            currentInput = (prev + curr).toString();
            break;
        case 'subtract':
            currentInput = (prev - curr).toString();
            break;
        case 'multiply':
            currentInput = (prev * curr).toString();
            break;
        case 'divide':
            currentInput = (prev / curr).toString();
            break;
    }
    updateDisplay();
}
