// Arrow functions

// It works
const addFunction = (a: number, b: number): number => {
    return a + b;
}
console.log(addFunction(2, 5));

// It works too
const add = (a: number, b: number): number => a + b;
console.log(add(2,10));
// The complete form should be like that
// const add: (a: number, b: number) => number = (a: number, b: number): number => a + b;

// Breaking down
// Type of const == printOutput: (a: number | string) => void
// Value of const == output => console.log(output);
const printOutput: (a: number | string) => void = output => console.log(output);
console.log(typeof printOutput);
console.log(printOutput);

// -----
// Default arguments should be defined from last to first
const addWithDefaultValue = (a: number, b: number = 4) => a + b;
printOutput(addWithDefaultValue(2))

// -----
// Array extract
const hobbies = ["Soccer", "Hiking"];
const activeHobbies = ["Gym"];

// Extract values of an array
activeHobbies.push(...hobbies);
console.log(activeHobbies);
console.log(...activeHobbies);

const person = {
    name: "Leo",
    age: 32
};

const newPerson = {
    spouse: "June",
    ...person
};
console.log(person, newPerson);
// Doesnt work
// console.log(...newPerson);


// -----
// Here you can set as much parameters as you want without a need of using an array
const addRestParameters = (...numbersParameters: number[]) => {
    return numbersParameters.reduce((currResult, currValue) => currResult + currValue, 0);
}
console.log(addRestParameters(1, 2, 3, 4));

// Array Destructuring
const [hobby1, hobby2, ...otherHobbies] = activeHobbies;
console.log(hobby1, hobby2, otherHobbies);

// Object Destructuring
const { name: pName, age } = newPerson;
console.log(pName, age)