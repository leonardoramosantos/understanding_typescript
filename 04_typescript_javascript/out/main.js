// Arrow functions
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// It works
var addFunction = function (a, b) {
    return a + b;
};
console.log(addFunction(2, 5));
// It works too
var add = function (a, b) { return a + b; };
console.log(add(2, 10));
// The complete form should be like that
// const add: (a: number, b: number) => number = (a: number, b: number): number => a + b;
// Breaking down
// Type of const == printOutput: (a: number | string) => void
// Value of const == output => console.log(output);
var printOutput = function (output) { return console.log(output); };
console.log(typeof printOutput);
console.log(printOutput);
// -----
// Default arguments should be defined from last to first
var addWithDefaultValue = function (a, b) {
    if (b === void 0) { b = 4; }
    return a + b;
};
printOutput(addWithDefaultValue(2));
// -----
// Array extract
var hobbies = ["Soccer", "Hiking"];
var activeHobbies = ["Gym"];
// Extract values of an array
activeHobbies.push.apply(activeHobbies, hobbies);
console.log(activeHobbies);
console.log.apply(console, activeHobbies);
var person = {
    name: "Leo",
    age: 32
};
var newPerson = __assign({ spouse: "June" }, person);
console.log(person, newPerson);
// Doesnt work
// console.log(...newPerson);
// -----
// Here you can set as much parameters as you want without a need of using an array
var addRestParameters = function () {
    var numbersParameters = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbersParameters[_i] = arguments[_i];
    }
    return numbersParameters.reduce(function (currResult, currValue) { return currResult + currValue; }, 0);
};
console.log(addRestParameters(1, 2, 3, 4));
// Array Destructuring
var hobby1 = activeHobbies[0], hobby2 = activeHobbies[1], otherHobbies = activeHobbies.slice(2);
console.log(hobby1, hobby2, otherHobbies);
// Object Destructuring
var pName = newPerson.name, age = newPerson.age;
console.log(pName, age);
