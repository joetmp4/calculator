const input = { //input object. Stores numbers and operator
    firstNumber: 0,
    secondNumber: null,
    operator: "",
    decimal: false,
    decimalPlace: 10,
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
    if(input.secondNumber == 0){
        return null
    }
    return input.firstNumber / input.secondNumber;
};

const equal = (op = "") => {//takes operation and outputs num
    
    if(input.secondNumber === null){
        return; 
    }
    
    input.decimal = false;
    input.decimalPlace = 10;

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
    if (input.firstNumber === null){
        output.textContent = "Error :(";
        input.firstNumber = 0;
    }
    else{
        output.textContent = input.firstNumber;
    }
};

const output = document.querySelector(".output"); //selects the output div

const numberInput = document.querySelectorAll(".numbers div, .zero"); //selects all numbers

numberInput.forEach((number) => { //loop through each number
    number.addEventListener("click", () =>{ //event listener for each num

        if(input.operator === ""){ //decides which half of the operation we're on
            if(input.decimal === false){
                input.firstNumber = input.firstNumber*10 + Number(number.textContent); //set firstNum
            }
            else{
                input.firstNumber = input.firstNumber + Number(number.textContent)/input.decimalPlace;
                
                input.decimalPlace *= 10;
            }
            output.textContent = `${input.firstNumber === 0 ? "0" : ""}${input.firstNumber}`; //output current num
        }
        else{
            if(input.decimal === true){
                if(input.secondNumber === null){
                    input.secondNumber = 0 + Number(number.textContent)/input.decimalPlace;
                }
                else{
                    input.secondNumber = input.secondNumber + Number(number.textContent)/input.decimalPlace;
                }

                input.decimalPlace *= 10;
            }
            else{
                if(input.secondNumber === null){ //checks if a current secondNum exists
                    input.secondNumber = Number(number.textContent);
                }
                else{ //sets secondNum (if one exitst alr)
                    input.secondNumber = input.secondNumber*10 + Number(number.textContent);
                }
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
    input.decimal = false;
    input.decimalPlace = 10;
});

const backspace = document.querySelector(".backspace");

backspace.addEventListener("click", () => { //backspace function; turns output into string to perform opperations
    let tempOutput = output.textContent; //save output into temp variable

    if (tempOutput === "|" || tempOutput === "Error :(") return; //if there is no number return

    tempOutput = tempOutput.slice(0,-1); //backspace lol

    if (tempOutput === "" || tempOutput === "0" || tempOutput === "-"){ //if remaining char is empty, 0, or neg. num
        tempOutput = "|"; //reset input if empty

        if (input.operator === ""){ //check if first number
            input.firstNumber = 0; //reset number
        } else {
            input.secondNumber = null;
        }
        //reset decimal
        input.decimal = false;
        input.decimalPlace = 10;
        return;
    }

    if(input.operator === ""){//check if first number
        input.firstNumber = Number(tempOutput); //reset number
    }
    else {
        input.secondNumber = Number(tempOutput);
    }

    input.decimal = tempOutput.includes("."); //assign decmial boolean to if there is a '.'
});

const printOperation = (operation) => {
    if(operation === "add") {
        output.textContent += "+";
    }
    else if(operation === "subtract") {
        output.textContent += "-";
    }
    else if(operation == "multiply") {
        output.textContent += "x";
    }
    else if(operation === "divide") {
        output.textContent += "/";
    }
    else if(operation === "decimal" && input.decimal === false){
        if (input.operator === ""){
            if(input.firstNumber === 0){
                output.textContent = "0.";
                return;
            }
        }
        else if(input.secondNumber === null){
            output.textContent = "0.";
            return;
        }
        output.textContent += ".";
    }
};

const operate = (operation) => { //performs operations
    if(input.operator === "" && operation !== "equal"){
        printOperation(operation);

        if(operation !== "decimal") {
            input.decimal = false;
            input.decimalPlace = 10;
            input.operator = operation;
        }
        else {
            input.decimal = true;
        }
    }
    else if(operation === "equal") {
        equal(input.operator);
        input.operator = "";
    }
    else {
        if(operation == "decimal") {
            printOperation(operation);
            input.decimal = true;
            return;
        }

        if(input.secondNumber === null){
            input.operator = operation;
            output.textContent = input.firstNumber;
            printOperation(input.operator);

            input.decimal = false;
            input.decimalPlace = 10;

            return;
        }
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