class Calculator {
    constructor(previousOperationText, currentOperationText) {
        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText
        this.clearDisplay();
    }

    setDisplay() {
        this.currentOperationText.textContent = 
            this.getDisplayNum(this.currentOperation);
        if (this.operator != null) {
            this.previousOperationText.textContent = 
            `${this.getDisplayNum(this.previousOperation)} ${this.operator}`;
        } else {
            this.previousOperationText.textContent = '';
        }
    }

    getDisplayNum(num){
        const stringNum = num.toString();
        const integerDigits = parseFloat(stringNum.split('.')[0]);
        const decimalDigits = stringNum.split('.')[1]
        let integerDisplay;
        if(isNaN(integerDigits)) {
            integerDisplay = '';
            console.log(integerDisplay)
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0 });
        }
        if (decimalDigits != undefined) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }

    appendNumber(num) {
        if (num ==='.' && this.currentOperation.includes('.')) return
        this.currentOperation += num;
    }

    chooseOperator(operator) {
        if (this.currentOperation === '') return
        if (this.previousOperation !==''){
            this.operate();
        }
        this.operator = operator;
        this.previousOperation = this.currentOperation;
        this.currentOperation = '';
    }

    clearDisplay() {
        this.currentOperation = '';
        this.previousOperation = '';
        this.operator = undefined;
    }

    operate() {
        let computation
        const prev = parseFloat(this.previousOperation);
        const current = parseFloat(this.currentOperation);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operator) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '/':
                computation = prev / current;
                break;
            default:
                return   
        }
        this.currentOperation = computation;
        this.operator = undefined;
        this.previousOperation = '';
    }   

    delete() {
        this.currentOperation = this.currentOperation.slice(0,-1);
    }
}



const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const display = document.querySelector(".display");
const clearButton = document.querySelector(".clear");
const delButton = document.querySelector('.del')
const previousOperationText = document.querySelector(".previousDisplay")
const currentOperationText = document.querySelector(".currentDisplay")

const calculator = new Calculator(previousOperationText, currentOperationText);

numbers.forEach(number => {
    number.addEventListener("click", () => {
        calculator.appendNumber(number.value);
        calculator.setDisplay();
    })
});

operators.forEach(operator => {
    operator.addEventListener("click", () => {
        calculator.chooseOperator(operator.value);
        calculator.setDisplay();
    })
});

equal.addEventListener("click", () => {
    calculator.operate();
    calculator.setDisplay();
});

clearButton.addEventListener("click", () => {
    calculator.clearDisplay();
    calculator.setDisplay();
});

delButton.addEventListener("click", () => {
    calculator.delete();
    calculator.setDisplay();
});

// function equalHandler() {
//     if (resetScreen == true) {
//         return
//     }
//     num1 = operate(Number(num1), Number(num2), operator);
//     num2 = "";
//     operator = "";
//     num1Filled = false;
//     resetScreen = true;
//     setDisplay(num1);
// }

// function clearHandler() {
//     num1 = "";
//     num2 = "";
//     operator = "";
//     num1Filled = false;
//     resetScreen = false;
//     setDisplay("0");
// }


// equal.addEventListener("click", equalHandler);
// clearButton.addEventListener("click", clearHandler);


// function add(a,b) {
//     return a + b;
// }

// function subtract(a,b) {
//     return a - b;
// }

// function multiply(a,b) {
//     return a * b;
// }

// function divide(a,b) {
//     if (b == 0) {
//         return "ERROR"
//     } else {
//         return a / b;
//     }
    
// }

// function operate(num1, num2, operator) {
//     let result = 0;

//     switch(operator) {
//         case "+":
//             result = add(num1, num2);
//             break;
//         case "-":
//             result = subtract(num1, num2);
//             break;
//         case "*":
//             result = multiply(num1, num2);
//             break;
//         case "/":
//             result = divide(num1, num2);
//             break;
//         default:
//             result = "";
//     }

//     return result;
// }

