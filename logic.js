let a
let b 
let operator

function add(a,b){
    return Math.round(a+b)
}

function subtract(a,b){
    return Math.round(a-b)
}

function multiply(a,b){
    return Math.round(a*b)
}

function divide(a,b){
    return Math.round(a/b)
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
    if (document.getElementsByClassName('down')[0].innerHTML === ''){
        document.getElementsByClassName('up')[0].innerHTML += Event.target.id
    } else {
        document.getElementsByClassName('up')[0].innerHTML = document.getElementsByClassName('down')[0].innerHTML + Event.target.id
        document.getElementsByClassName('down')[0].innerHTML=''
        a = parseInt(document.getElementsByClassName('up')[0].innerHTML)
    }
    
}

//Logic for the mathematical operators button
function operatorClick(Event){
    if (a === undefined || (a*b === undefined)){
        a = parseInt(document.getElementsByClassName('up')[0].innerHTML)
        operator = Event.target.id
    } else{
        b = parseInt(document.getElementsByClassName('up')[0].innerHTML)
        operator = Event.target.id
    }
    if (document.getElementsByClassName('up')[0].innerHTML !== '' && document.getElementsByClassName('down')[0].innerHTML !== ''){
        document.getElementsByClassName('up')[0].innerHTML = ""
        document.getElementsByClassName('down')[0].innerHTML = ""
    } else{
        document.getElementsByClassName('up')[0].innerHTML = ""
    }
    
}

//Logic for C
function reset(){
    resetButton.addEventListener("click", function(){
        document.getElementsByClassName('up')[0].innerHTML = ''
        document.getElementsByClassName('down')[0].innerHTML = ''
        a = undefined
        b = undefined
        operator = undefined
    })
}

function result(){
    if (a === undefined){
        ;;
    }
    if (b === undefined && operator === undefined){
        document.getElementsByClassName('down')[0].innerHTML = document.getElementsByClassName('up')[0].innerHTML
    }
    else{
        b = parseInt(document.getElementsByClassName('up')[0].innerHTML)
        document.getElementsByClassName('down')[0].innerHTML = operate(a,operator,b)
        a = operate(a,operator,b)
    }
}

numberButtons.forEach(button => {
    button.addEventListener('click',addNumber)
});

operatorButtons.forEach(operator => {
    operator.addEventListener('click', operatorClick)
});

resultButton.addEventListener('click', result)

reset()
