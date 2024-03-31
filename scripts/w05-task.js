/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (theTemples) => {
    theTemples.forEach(function (item) { 
        let thisArticle = document.createElement("article");
        
        let thisH3 = document.createElement("h3");
        thisH3.innerHTML = `<h3>${item.templeName}</h3`;
        
        let thisImg = document.createElement("img");
        thisImg.setAttribute ("src", item.imageUrl);
        thisImg.setAttribute ("alt", `${item.location} Temple`);

        thisArticle.appendChild (thisH3);
        thisArticle.appendChild (thisImg);

        templesElement.appendChild (thisArticle);
        }
    );
}

/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch ("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok){
        const jsonResponse = await response.json();
        displayTemples(jsonResponse);
    }
    
}


/* reset Function */


/* filterTemples Function */


getTemples();

/* Event Listener */
