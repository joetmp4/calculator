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
                output.textContent = ` ${input.secondNumber}`;
            }
        }
    });
});


const operate = (operation) => { //performs operations
    if(input.operator == ""){
        if(operation == "add") {
            output.textContent += " + ";
        }
        else if(operation == "subtract") {
            output.textContent += " - ";
        }
        else if(operation == "multiply") {
            output.textContent += " x ";
        }
        else if(operation == "divide") {
            output.textContent += " / ";
        }

        input.operator = operation;
    } else {
        equal(operation);
        input.operator = "";
    }
};
const operations = document.querySelectorAll(".right div, .equal, .decimal"); //selects all operations

operations.forEach((operation) => { //loop through each operation
    operation.addEventListener("click", () => { //event listener for each operation
        operate(operation.className);
    });
});