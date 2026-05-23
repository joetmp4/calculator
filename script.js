const input = { //input object. Stores numbers and operator
    firstNumber: 0,
    secondNumber: null,
    operator: "",
};


const add = () =>{ //returns sum of both numbers
    return input.firstNumber + input.secondNumber;
};

const subtract = () =>{ //returns difference of both numbers
    return input.firstNumber - input.secondNumber;
};

const multiply = () =>{ //returns product of both numbers
    return input.firstNumber * input.secondNumber;
};

const divide = () =>{ //returns quotient of both numbers
    return input.firstNumber / input.secondNumber;
};

const equal = (op = "") => {//takes operation and outputs num
    if(op == "add"){
        input.firstNumber = add();
    }
    else if(op == "subtract"){
        input.firstNumber = subtract();
    }
    else if(op == "multiply"){
        input.firstNumber = multiply();
    }
    else if(op == "divide"){
        input.firstNumber = divide();
    }

    input.secondNumber = null;
    output.textContent = input.firstNumber;

};

const output = document.querySelector(".output"); //selects the output div

const numberInput = document.querySelectorAll(".numbers div, .zero"); //selects all numbers

numberInput.forEach((number) => { //loop through each number
    number.addEventListener("click", () =>{ //event listener for each num
        
        if(input.operator === ""){ //decides which half of the operation we're on
            input.firstNumber = input.firstNumber*10 + Number(number.textContent); //set firstNum
            output.textContent = ` ${input.firstNumber}`; //output current num
        }
        else{
            if(input.secondNumber == null){ //checks if a current secondNum exists
                input.secondNumber = Number(number.textContent);
            }else{ //sets secondNum (if one exitst alr)
                input.secondNumber = input.secondNumber*10 + Number(number.textContent);
            }
            output.textContent = ` ${input.secondNumber}`;
        }
    });
});

const clear = document.querySelector(".clear");

clear.addEventListener("click", () => {
    output.textContent = "|";
    input.firstNumber = 0;
    input.secondNumber = null;
    input.operator = "";
});

const backspace = document.querySelector(".backspace");

backspace.addEventListener("click", () => {
    if(input.operator === ""){
        input.firstNumber = Math.floor(input.firstNumber /10);
        if(input.firstNumber !== 0) output.textContent = input.firstNumber;
        else output.textContent = "|";
    }
    else if (input.secondNumber === null){
        input.operator = "";
        output.textContent = input.firstNumber;
    }
    else {
        input.secondNumber = Math.floor(input.secondNumber / 10);
        if(input.secondNumber === 0){
            input.secondNumber = null;

            output.textContent = input.firstNumber;

            if (input.operator === "add") output.textContent += "+";
            else if (input.operator === "subtract") output.textContent += "-";
            else if (input.operator === "multiply") output.textContent += "x";
            else if (input.operator === "divide") output.textContent += "/";
        } else {
            output.textContent = input.secondNumber;
        }
    }
});

const printOperation = (operation) => {
    if(operation == "add") {
        output.textContent += "+";
    }
    else if(operation == "subtract") {
        output.textContent += "-";
    }
    else if(operation == "multiply") {
        output.textContent += "x";
    }
    else if(operation == "divide") {
        output.textContent += "/";
    }
}

const operate = (operation) => { //performs operations
    if(input.operator == "" && operation !== "equal"){
        printOperation(operation);

        input.operator = operation;
    }
    else if(operation === "equal") {
        equal(input.operator);
        input.operator = "";
    }
    else {
        equal(input.operator);
        printOperation(operation);
        input.operator = operation;
    }
};
const operations = document.querySelectorAll(".right div, .equal, .decimal"); //selects all operations

operations.forEach((operation) => { //loop through each operation
    operation.addEventListener("click", () => { //event listener for each operation
        operate(operation.className);
    });
});