const input = {
    firstNumber: 0,
    secondNumber: null,
    operator: "",
};

const equal = () => {
    if(input.secondNumber != null){
        input.secondNumber = null;
        input.operator = "";
        output.textContent = input.firstNumber;
    }
};

const add = () =>{
    let sum = input.firstNumber + input.secondNumber;

    return sum;
};

const subtract = () =>{
    let difference = input.firstNumber - input.secondNumber;

    return difference;
};

const multiply = () =>{
    let product = input.firstNumber * input.secondNumber;

    return product;
};

const divide = () =>{
    let quotient = input.firstNumber / input.secondNumber;

    return quotient;
};


const output = document.querySelector(".output");

const numberInput = document.querySelectorAll(".numbers div, .zero");

numberInput.forEach((number) => {
    number.addEventListener("click", () =>{
        
        if(input.operator === ""){
            input.firstNumber = input.firstNumber*10 + Number(number.textContent);
            
            output.textContent = ` ${input.firstNumber}`;
        }
        else{
            input.secondNumber = input.secondNumber*10 + Number(number.textContent);
            output.textContent = ` ${input.secondNumber}`;
        }
    });
});


const operate = (operation) => {
    let num;

    if(operation != "equal"){
        input.operator = operation;
    }

    if(operation === "add") {
        output.textContent += " + ";
        if(input.secondNumber != null) {
            num = add();
            input.firstNumber = num;
        }
    }
    else if(operation === "subtract") {
        output.textContent += " - ";
        if(input.secondNumber != null) {
            num = subtract();
            input.firstNumber = num;
        }
    }
    else if(operation === "multiply") {
        output.textContent += " x ";
        if(input.secondNumber != null) {
            num = multiply();
            input.firstNumber = num;
        }
    }
    else if (operation === "divide") {
        output.textContent += " / ";
        if(input.secondNumber != null) {
            num = divide();
            input.firstNumber = num;
        }
    }
    else if (operation === "equal") {
        operate(input.operator);
        equal();
    }
};
const operations = document.querySelectorAll(".right div, .equal, .decimal");

operations.forEach((operation) => {
    operation.addEventListener("click", () => {
        operate(operation.className);
    });
});