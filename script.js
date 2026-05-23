const input = {
    firstNumber: 0,
    secondNumber: 0,
    operator: "",
};

const equal = (num) => {
    if(input.secondNumber != 0){
        input.firstNumber = num;
        input.secondNumber = 0;
        output.textContent = num;
    }
};

const add = () =>{
    let sum = input.firstNumber + input.secondNumber;

    equal(sum);

    return sum;
};

const subtract = () =>{
    let difference = input.firstNumber - input.secondNumber;

    equal(difference);

    return difference;
};

const multiply = () =>{
    let product = input.firstNumber * input.secondNumber;

    equal(product);

    return product;
};

const divide = () =>{
    let quotient = input.firstNumber / input.secondNumber;

    equal(quotient);

    return quotient;
};


const output = document.querySelector(".output");

const numberInput = document.querySelectorAll(".numbers div, .zero");

numberInput.forEach((number) => {
    number.addEventListener("click", () =>{
        
        if(input.operator === ""){
            input.firstNumber = input.firstNumber*10 + Number(number.textContent);
            
            output.textContent = `${input.firstNumber}`;
        }
        else{
            input.secondNumber = input.secondNumber*10 + Number(number.textContent);
            output.textContent = `${input.secondNumber}`;
        }
    });
});


const operate = (operation = "") => {
    let num = input.firstNumber;

    input.operator = operation;

    if(operation === "add") {
        output.textContent += " + ";
        if(input.operator != "") {
            num = add();
        }
    }
    else if(operation === "subtract") {
        output.textContent += " - ";
        if(input.operator != "") {
            num = subtract();
        }
    }
    else if(operation === "multiply") {
        output.textContent += " x ";
        if(input.operator != "") {
            num = multiply();
        }
    }
    else if (operation === "divide") {
        output.textContent += " / ";
        if(input.operator != "") {
            num = divide();
        }
    }
    else if (operation === "equal") {
        if(input.operator != "") equal(num);
    }
};
const operations = document.querySelectorAll(".right div, .equal, .decimal");

operations.forEach((operation) => {
    operation.addEventListener("click", () => {
        operate(operation.className);
    });
});