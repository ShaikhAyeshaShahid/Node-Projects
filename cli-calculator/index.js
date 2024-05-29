// index.js

const readline = require('readline');
const calculator = require('./calculator');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Simple CLI Calculator");
console.log("Available operations: add, subtract, multiply, divide");
console.log("Format: operation number1 number2");

rl.setPrompt('Enter your command: ');
rl.prompt();

rl.on('line', (input) => {
    const [operation, num1, num2] = input.split(' ');
    
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
        console.log("Please provide valid numbers.");
    } else {
        try {
            let result;
            switch (operation) {
                case 'add':
                    result = calculator.add(a, b);
                    break;
                case 'subtract':
                    result = calculator.subtract(a, b);
                    break;
                case 'multiply':
                    result = calculator.multiply(a, b);
                    break;
                case 'divide':
                    result = calculator.divide(a, b);
                    break;
                default:
                    console.log("Unknown operation. Available operations: add, subtract, multiply, divide");
                    rl.prompt();
                    return;
            }
            console.log(`Result: ${result}`);
        } catch (error) {
            console.log(error.message);
        }
    }
    rl.prompt();
});

rl.on('close', () => {
    console.log('Calculator closed.');
    process.exit(0);
});
