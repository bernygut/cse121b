/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */
/* Done

/* Step 2 - Variables */
let fullName = "Bernardino Gutiérrez";
let currentYear = "2024";
let profilePicture = "images/BernardinoGutierrez.png";


/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute ("src", profilePicture);
imageElement.setAttribute ("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */
foods = ["spagetti", "pizza", "steak", "grilled cheese"] /* 5.1 Declare array*/
foodElement.innerHTML = `${foods}`;/* 5.2  Display array in foodElement - Original*/

additionalFood = "fried rice";/* 5.3 Declare and instantiate a variable to hold another single favorite food item. */ 
foods.push(additionalFood); /* 5.4 Add the value stored in this new variable to your favorite food array - Added at the end*/
foodElement.innerHTML += `<br>${foods}`; /* 5.5 Display array in foodElement - Original+Additional*/

foods.shift();/* 5.6 Remove the first element*/
foodElement.innerHTML += `<br>${foods}`; /* 5.7 Display array in foodElement - Original+Additional with first element removed*/

foods.pop();/* 5.8 Remove the last element*/
foodElement.innerHTML += `<br>${foods}`; /* 5.9 Display array in foodElement - Original without the first element or the element that was added temporarily at the end */
