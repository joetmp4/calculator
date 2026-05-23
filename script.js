const input = {
    firstNumber: 0,
    secondNumber: 0,
    operator: "",
};

const add = () =>{
    sum = input.firstNumber + input.secondNumber;
    input.firstNumber = sum;
    input.secondNumber = 0;
    return sum;
};

const subtract = () =>{
    difference = input.firstNumber - input.secondNumber;
    input.firstNumber = difference;
    input.secondNumber = 0;
    return difference;
};

const multiply = () =>{
    product = input.firstNumber * input.secondNumber;
    input.firstNumber = product;
    input.secondNumber = 0;
    return product;
};

const divide = () =>{
    quotient = input.firstNumber / input.secondNumber;
    input.firstNumber = quotient;
    input.secondNumber = 0;
    return quotient;
};

const output = document.querySelector(".output");

const numberInput = document.querySelectorAll(".numbers div, .zero");

numberInput.forEach((number) => {
    number.addEventListener("click", () =>{
        if(input.operator == ""){
            input.firstNumber = input.firstNumber*10 + Number(number.textContent);

            output.textContent = `${input.firstNumber}`;
        }
        else{
            input.secondNumber = input.secondNumber*10 + Number(number.textContent);
            output.textContent = `${input.secondNumber}`;
        }
    });
});

