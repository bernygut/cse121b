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
const imageElement = new Image();


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute ("src", profilePicture);
imageElement.setAttribute ("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */
foods = ["spagetti", "pizza", "steak", "grilled cheese"] /* 5.1 */

foodElement.innerHTML = `${foods}`;/* 5.2 */

additionalFood = "fried rice";/* 5.3 */ 
foods.push(additionalFood); /* 5.4 */

foodElement.innerHTML += `<br>${foods}`; /* 5.5 */

foods.shift();/* 5.6 */
foodElement.innerHTML += `<br>${foods}`; /* 5.7 */

foods.pop();/* 5.8 */
foodElement.innerHTML += `<br>${foods}`; /* 5.9 */



