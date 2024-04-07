function add(n1, n2) {
    return n1 + n2;
}
function multiply(n1, n2) {
    return n1 * n2;
}
function showResult(result) {
    console.log("The result is: " + result);
}
showResult(add(10, 15).toString());
function showResultUndefined(result) {
    console.log("The result is: " + result);
    // To use undefined, you have to return
    return;
}
function addAndMultiply(functions) {
    for (var _i = 0, functions_1 = functions; _i < functions_1.length; _i++) {
        var funct = functions_1[_i];
        console.log(funct.name + " - " + funct(10, 15));
    }
}
addAndMultiply([add, multiply]);
function calculateAndShowResult(functions, n1, n2, callback) {
    for (var _i = 0, functions_2 = functions; _i < functions_2.length; _i++) {
        var funct = functions_2[_i];
        callback(funct(n1, n2).toString());
    }
}
calculateAndShowResult([add, multiply], 5, 7, showResultUndefined);
