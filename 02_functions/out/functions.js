function add(n1, n2) {
    return n1 + n2;
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
