function performOperation() {
// Get user input from input fields
let num1 = parseInt(document.getElementById('input1').value);
let num2 = parseInt(document.getElementById('input2').value);
// Check if inputs are valid numbers
if (!isNaN(num1) && !isNaN(num2)) {
// Perform operation
    let result = multiply(num1, num2);

    // Display result
    displayResult(result);
    } 
    else {
        displayResult('Please enter valid numbers.');
    }
}

function multiply(a,b) {
    // Introduce debugger statement to pause execution
    debugger;

    // Multiply numbers
    return a*b;
}

function displayResult(result){
    // Display result in paragraph element.
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is ${result}`;
}