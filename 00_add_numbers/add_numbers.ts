function addNumbers(num1: number, num2: number): number {
    return num1 + num2;
}

// This variable type assignment can happen, but it's not recommended
// because Javascript is perfectly able to infer the right type
const number1: number = 10;
const number2 = 5.4;

const result = addNumbers(number1, number2);
console.log(result);