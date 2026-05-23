const input = {
    firstNumber: 0,
    secondNumber: 0,
    operator: "",
};

const add = () =>{
    sum = input.firstNumber + input.secondNumber;
    input.firstNumber = sum;
    return sum;
};

const subtract = () =>{
    difference = input.firstNumber - input.secondNumber;
    input.firstNumber = difference;
    return difference;
};

const multiply = () =>{
    product = input.firstNumber * input.secondNumber;
    input.firstNumber = product;
    return product;
};

const divide = () =>{
    quotient = input.firstNumber / input.secondNumber;
    input.firstNumber = quotient;
    return quotient;
};