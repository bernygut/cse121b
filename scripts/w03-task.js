/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add (number1, number2){
    return number1 + number2;
}

function addNumbers (){
    let AddInputNumber1 = Number(document.querySelector("#add1").value);
    let AddInputNumber2 = Number(document.querySelector("#add2").value);
    document.querySelector("#sum").value = add(AddInputNumber1, AddInputNumber2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);


/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2){
    return number1 - number2;
}

function subtractNumbers (){
    let SubInputNumber1 = Number(document.querySelector("#subtract1").value);
    let SubInputNumber2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = subtract(SubInputNumber1, SubInputNumber2);
}

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */

let multiply = (Mfactor1, Mfactor2) => Mfactor1 * Mfactor2;

function multiplyNumbers (){
    let factorInputNumber1 = Number(document.querySelector("#factor1").value);
    let factorInputNumber2 = Number(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(factorInputNumber1, factorInputNumber2);
}

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);


/* Open Function Use - Divide Numbers */
function divide (Dnumber1, Dnumber2){
    return Dnumber1 / Dnumber2;
}

function divideNumbers (){
    let DividendInputNumber1 = Number(document.querySelector("#dividend").value);
    let DivisorInputNumber2 = Number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divide(DividendInputNumber1, DivisorInputNumber2);
}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */

function getTotal () {
    let SubTotalInputNumber = Number(document.querySelector("#subtotal").value); 

    let membershipSelected = document.querySelector("#member");
    /*console.log("membershipSelected:", membershipSelected);*/
    let isSelected = membershipSelected.checked
    /*console.log("isSelected:", isSelected); */
    if  (isSelected) {
        let formattedTotal = (SubTotalInputNumber * 0.8).toFixed(2);
        document.getElementById("total").textContent = `$${formattedTotal}`
    } else {
        let formattedTotal = SubTotalInputNumber.toFixed(2);
        document.getElementById("total").textContent = `$${formattedTotal}`
    }
}

document.querySelector("#getTotal").addEventListener("click", getTotal);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let array = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector("#array").innerHTML = array;
/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = array.filter(number => number % 2 === 1);
/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = array.filter(number => number % 2 === 0);
/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = array.reduce((sum, number) => sum + number)
/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").innerHTML = array.map(number => number * 2)
/* Output Sum of Multiplied by 2 Array */
multipliedArray = array.map(number => number * 2)
document.querySelector("#sumOfMultiplied").innerHTML = multipliedArray.reduce((sum, number) => sum + number)