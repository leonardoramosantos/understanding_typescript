function add(n1: number, n2: number) {
    return n1 + n2;
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