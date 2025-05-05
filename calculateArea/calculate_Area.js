// Length & Width Variables
let length;
let width;

// CalculateArea
function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

let area = length * width;

document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;

}

//Practice Task: JavaScript

function groceryTracker () {
    let grocery1 = parseFloat(document.getElementById('grocery1').value) || 0;
    let grocery2 = parseFloat(document.getElementById('grocery2').value) || 0;
    let grocery3 = parseFloat(document.getElementById('grocery3').value) || 0;

let grandtotal = grocery1 + grocery2 + grocery3;

document.getElementById('total').innerText = `The total amount is: ${grandtotal.toFixed(2)}`;
}