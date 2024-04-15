
import {validate} from "./myModule.js"

let calculator = {};


function calculate(operation) {
    if (initCalculator()) {
        const result = document.getElementById('resultSpan');
        switch (operation) {
            case "add": {
                result.innerHTML = calculator.a + calculator.b;
                break;
            };
            case "multiply": {
                result.innerHTML = calculator.a * calculator.b;
                break;
            };
            default: {
                break;
            }
        }
    }
}
let x;
function add() {
    calculate("add");

    window.clearInterval(x);
}

function multiply() {
    calculate("multiply");
    x = window.setInterval(() => {
        console.log("Hi there! I am doing some staff here....");
        alert();
    }, 3000);

}

function initCalculator() {
    let inputOne = document.getElementById("inputOne");
    let inputTwo = document.getElementById("inputTwo");
    let inputOneValue = inputOne.value;
    let inputTwoValue = inputTwo.value;

    if (!validate(inputOneValue) || !validate(inputTwoValue)) {
        console.log("ERROR");
        alert("Please enter valid numbers!");
        return false;
    }

    calculator.a = parseInt(inputOneValue);
    calculator.b = parseInt(inputTwoValue);
    return true;
}

document.getElementById("add").addEventListener("click", add);
document.getElementById("multiply").addEventListener("click", multiply);

