let a
let b 
let operator

function add(a,b){
    return a+b
}

function subtract(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
}

function divide(a,b){
    return a/b
}

function operate(a,operator,b){
    switch (operator){
        case "+":
            return add(a,b)
        case "-":
            return subtract(a,b)
        case "/":
            return divide(a,b)
        case "*":
            return multiply(a,b)
    }
}
console.log(multiply(3,5))