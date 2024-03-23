/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){
    return number1 + number2;
}

function addNumbers (){
    let InputNumber1 = Number(document.querySelector("#add1").value);
    let InputNumber2 = Number(document.querySelector("#add2").value);
    document.querySelector("#sum").value = add(InputNumber1, InputNumber2);
}

document.querySelector("#addNumbers").addEventListerner("click", addNumbers);

/* Function Expression - Subtract Numbers */


/* Arrow Function - Multiply Numbers */


/* Open Function Use - Divide Numbers */


/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
