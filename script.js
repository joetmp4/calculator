const input = {
    firstNumber: 0,
    secondNumber: 0,
    operator: "",
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
            
            output.textContent = `${input.firstNumber}`;
        }
        else{
            input.secondNumber = input.secondNumber*10 + Number(number.textContent);
            output.textContent = `${input.secondNumber}`;
        }
    });
});

const equal = (num) => {
    output.textContent = num;
};

const operate = (operation = "=") => {
    let output = 0;

    if(operation === "add") if(input.secondNumber != 0)output = add();
    else if(operation === "subtract") output = add();
    else if(operation === "multiply") output = multiply();
    else if (operation === "divide") output = divide();
    else if (operation === "equal") equal(output);


    
};
const operations = document.querySelectorAll(".right div, .equal, .decimal");

operations.forEach((operation) => {
    operation.addEventListener("click", () => {
        operate(operation.className);
    });
});