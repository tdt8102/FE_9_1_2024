function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;

    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            result = "Invalid operator";
            break;
    }

    // Tìm phần tử có id là "result-box" và cập nhật nội dung của nó
    const resultBox = document.getElementById("result-box");
    resultBox.innerHTML = "Ket qua la: " + result;
}
