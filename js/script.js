let num1 = 0;
let num2 = 0;
let operator = NaN;

let num1Filled = false;
let num2Filled = false;

let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let plus= document.querySelector(".plus");
let subtract = document.querySelector(".subtract");
let multiply = document.querySelector(".multiply");
let divide = document.querySelector(".divide");
let equal = document.querySelector(".equal")

one.addEventListener("click", )


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