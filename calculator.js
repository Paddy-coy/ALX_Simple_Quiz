// Function for addition
function add(num1, num2) {
    return num1 + num2;
}

// Function for subtraction
function subtract(num1, num2) {
    return num1 - num2;
}

// Function for multiplication
function multiply(num1, num2) {
    return num1 * num2;
}

// Function for division
function divide(num1, num2) {
    return num2 !== 0 ? num1 / num2 : "Cannot divide by zero!";
}

// Function to handle the calculation
function handleCalculation(operation) {
    const number1 = parseFloat(document.getElementById("number1").value) || 0;
    const number2 = parseFloat(document.getElementById("number2").value) || 0;
    let result;

    switch (operation) {
        case 'add':
            result = add(number1, number2);
            break;
        case 'subtract':
            result = subtract(number1, number2);
            break;
        case 'multiply':
            result = multiply(number1, number2);
            break;
        case 'divide':
            result = divide(number1, number2);
            break;
    }

    document.getElementById("calculation-result").textContent = result;
}

// Event listeners for buttons
document.getElementById("add").addEventListener("click", () => handleCalculation('add'));
document.getElementById("subtract").addEventListener("click", () => handleCalculation('subtract'));
document.getElementById("multiply").addEventListener("click", () => handleCalculation('multiply'));
document.getElementById("divide").addEventListener("click", () => handleCalculation('divide'));
