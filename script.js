const input = {
    firstNumber: 0,
    secondNumber: null,
    operator: "",
};

const equal = () => {

};

const add = () =>{
    return input.firstNumber + input.secondNumber;
};

const subtract = () =>{
    return input.firstNumber - input.secondNumber;
};

const multiply = () =>{
    return input.firstNumber * input.secondNumber;
};

const divide = () =>{
    return input.firstNumber / input.secondNumber;
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
    
};
const operations = document.querySelectorAll(".right div, .equal, .decimal");

operations.forEach((operation) => {
    operation.addEventListener("click", () => {
        operate(operation.className);
    });
});