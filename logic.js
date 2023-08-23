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


numberButtons = document.querySelectorAll('.number')
specialButtons = document.querySelectorAll('.special')
operatorButtons = document.querySelectorAll('.operator')
resetButton = document.getElementById('C')
resultButton = document.getElementById('=')


function addNumber(Event){
    document.getElementsByClassName('up')[0].innerHTML += Event.target.id
}

function reset(){
    resetButton.addEventListener("click", function(){
        document.getElementsByClassName('up')[0].innerHTML = ''
        document.getElementsByClassName('down')[0].innerHTML = ''
        a = undefined
        b = undefined
        operator = undefined
    })
}

