function add(n1: number, n2: number) {
    return n1 + n2;
}

function multiply(n1: number, n2: number) {
    return n1 * n2;
}

function showResult(result: string) {
    console.log("The result is: " + result);
}

showResult(add(10, 15).toString());

function showResultUndefined(result: string): undefined {
    console.log("The result is: " + result);

    // To use undefined, you have to return
    return;
}

type mathFunction = (a: number, b: number) => number;

function addAndMultiply(functions: mathFunction[]) {
    for (const funct of functions) {
        console.log(funct.name + " - " + funct(10, 15));
    }
}
addAndMultiply([add, multiply]);

function calculateAndShowResult(functions: mathFunction[], n1: number, n2: number, callback: (a: string) => void) {
    for (const funct of functions) {
        callback(funct(n1, n2).toString());
    }
}

calculateAndShowResult([add, multiply], 5, 7, showResultUndefined);

//------
// UNKNOWN

let name: unknown;
let nameString: string;

name = 10;
name = "Maria"
// It will not work. You have to check the type first
// nameString = name;
if (typeof name === "string") {
    nameString = name;
}

// ------
// NEVER

function errorGenerator(message: string, code: number): never {
    throw { message: message, errorCode: code }
}

const result = errorGenerator("ERROR MESSAGE", 500);
// won't execute if the function is not declared as returning Never
console.log("Works");
