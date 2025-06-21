let prevNumber = 0;
let prevOperation = '';
let curNumber = 0;

let wasOperatorPressed = false;

function printNumber() {
    let mynumber = document.getElementById("displayResult");
    console.log("The number is " + mynumber.value);
}

function clearDisplay(){
    curNumber = 0;
    prevNumber = 0;
    prevOperation = '';
    document.getElementById("");
}

function enterNumber(number) {
    let displayResult = document.getElementById("displayResult");
    let displayOperations = document.getElementById("displayOperations");

    if (wasOperatorPressed) {
        curNumber = number;
        displayResult.value = Number(number);
    } else {
        curNumber = curNumber + number;
        displayResult.value = Number(displayResult.value + "" + number);
    }

    wasOperatorPressed = false;
    displayOperations.value +=  "" + Number(number);
}

function enterOperation(operation) {
    wasOperatorPressed = true;

    let displayResult = document.getElementById('displayResult');
    let displayOperations = document.getElementById("displayOperations");
    let currentValue = displayResult.value;
    // This handles the previous Operation.
    switch (prevOperation) {
        case '+':
            prevNumber = Number(prevNumber) + Number(currentValue);
            prevOperation = '';
            break;
        case '-':
            prevNumber = Number(prevNumber) - Number(currentValue);
            prevOperation = '';
            break;
        case '/':
            prevNumber = Number(prevNumber) / Number(currentValue);
            prevOperation = '';
            break;
        case '*':
            prevNumber = Number(prevNumber) * Number(currentValue);
            prevOperation = '';
            break;
        case '%':
            prevNumber = Number(prevNumber) % Number(currentValue);
            prevOperation = '';
            break;
        case '=':
            displayOperations.value =  prevNumber;     
        default:
            // There is not previous operation.
            prevNumber = currentValue;
    }

    prevOperation = operation;
    // To handle the current result.
    if (operation == '=') {
       displayResult.value = prevNumber;
       displayOperations.value =  '';
       clearDisplay();
    } else {
        displayOperations.value += operation;
    }     
}
