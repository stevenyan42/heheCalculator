let num1 = "";
let num2 = "";
let operator = null;

let num1Filled = false;
let num2Filled = false;

let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let equal = document.querySelector(".equal");
let display = document.querySelector(".display");

function numberHandler(event) {
    if (!num1Filled) {
        num1 += event.target.value;
        setDisplay(num1);
        console.log(num1);
    } else if (!num2Filled) {
        num2 += event.target.value;
        setDisplay(num2);
        console.log(num2);
    }
}

function operatorHandler(event) {
    //set operator = value
    operator = event.target.value;
    console.log(operator);
    if (!num1Filled) {
        num1Filled = true;
    } else {
        //if two numbers were already filled
        num1 = operate(Number(num1), Number(num2), operator);
        num2 = "";
        setDisplay(num1);
        num1Filled = true;
    }
}

function setDisplay(num) {
    display.textContent = num;
}

function equalHandler() {
    num1 = operate(Number(num1), Number(num2), operator);
    num2 = "";
    num1Filled = false;
    setDisplay(num1);
}

numbers.forEach(number => {
    number.addEventListener("click", numberHandler);
});

operators.forEach(number => {
    number.addEventListener("click", operatorHandler);
});

equal.addEventListener("click", equalHandler)


function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate(num1, num2, operator) {
    let result = 0;

    switch(operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
        default:
            result = 0;
    }

    return result;
}