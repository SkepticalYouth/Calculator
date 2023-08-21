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


buttons = document.querySelectorAll('button')

buttons.forEach(button => {
    button.addEventListener("click", function(){
        document.getElementById('up').innerHTML=button.id.value
    })
});