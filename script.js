function calculate() {
    let Num1 = parseFloat(document.getElementById('num1').value);
    let Operator = document.getElementById('operator').value;
    let Num2 = parseFloat(document.getElementById('num2').value);
    let res;

    if (Operator === "/") {
        res = Num1 / Num2;
    } else if (Operator === "*") {
        res = Num1 * Num2;
    } else if (Operator === "-") {
        res = Num1 - Num2;
    } else if (Operator === "+") {
        res = Num1 + Num2;
    } else if (Operator === "%") {
        res = Num1 % Num2;
    } else {
        res = "Invalid Operator!";
    }

    document.getElementById('result').value = res;
}





 