// Create a container div
const container = document.createElement('div');
container.className = 'container';

// Create and style the calculator body
const calculatorBody = document.createElement('div');
calculatorBody.className = 'calculatorBody';
container.appendChild(calculatorBody);

// Add title
const title = document.createElement('h1');
title.textContent = 'BMI Calculator';
calculatorBody.appendChild(title);

// Create calculator container
const calculator = document.createElement('div');
calculator.className = 'calculator';
calculatorBody.appendChild(calculator);

// Create weight input field
const weightInput = document.createElement('input');
weightInput.type = 'number';
weightInput.id = 'weight';
weightInput.placeholder = 'Weight (kg)';
calculator.appendChild(weightInput);

// Create height input field
const heightInput = document.createElement('input');
heightInput.type = 'number';
heightInput.id = 'height';
heightInput.placeholder = 'Height (m)';
calculator.appendChild(heightInput);

// Create button for calculating BMI
const button = document.createElement('button');
button.textContent = 'Calculate BMI';
button.onclick = calculateBMI;
calculator.appendChild(button);

// Create result div
const resultDiv = document.createElement('div');
resultDiv.className = 'result';
resultDiv.id = 'result';
calculator.appendChild(resultDiv);

// Append the container to the document body
document.body.appendChild(container);

// Apply styles dynamically
const style = document.createElement('style');
style.textContent = `
    .calculatorBody {
        font-family: Arial, sans-serif;
        margin: 20px;
        text-align: center;
    }
    .calculator {
        max-width: 300px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    input {
        width: 100%;
        padding: 10px;
        margin: 10px 0;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-sizing: border-box;
    }
    button {
        background-color: #28a745;
        color: white;
        border: none;
        padding: 10px;
        width: 100%;
        border-radius: 5px;
        cursor: pointer;
    }
    button:hover {
        background-color: #218838;
    }
    .result {
        margin-top: 20px;
        font-size: 18px;
    }
`;
document.head.appendChild(style);

// BMI Calculation function
function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (!weight || !height || height <= 0) {
        document.getElementById('result').innerHTML = "Please enter valid values.";
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);

    let category = "";
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    document.getElementById('result').innerHTML = `Your BMI is <strong>${bmi}</strong> (${category}).`;
}
