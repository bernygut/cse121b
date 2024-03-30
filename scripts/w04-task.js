/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name : "Bernardino Gutiérrez",
    photo : "images/BernardinoGutierrez.png",
    favoriteFoods : ["Spagetti", "Pizza", "Steak", "Grilled cheese"],
    hobbies : ["Hiking", "Racquetball", "Soccer", "Riding my bike"],
    placesLived : []
};

myProfile.placesLived.push(
    {
        place: "Rohmoser, Costa Rica",
        lenght : "17 years"
    }
); 


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.add(
    {
        place: "Utah Valley, Utah",
        lenght : "4 years"
    },
    {
        place: "San Joaquin Valley, California",
        lenght : "2 years"
    },
    {
        place: "Escazu, Costa Rica",
        lenght : "4 years"
    },
    {
        place: "Ciruelas, Costa Rica",
        lenght : "10 years"
    },
    {
        place: "Santa Ana, Costa Rica",
        lenght : "6 years"
    }
); 


/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */

document.querySelector("img").setAttribute ("src", myProfile.photo);
document.querySelector("img").setAttribute ("alt", `Profile image of ${myProfile.name}`)

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(function (item) { 
    let thisLi = document.createElement("li");
    thisLi.textContent = item;
    document.querySelector("#favorite-foods").appendChild(thisLi);
    }
);

/* Hobbies List */

myProfile.hobbies.forEach(function (item) { 
    let thisLi = document.createElement("li");
    thisLi.textContent = item;
    document.querySelector("#hobies").appendChild(thisLi);
    }
);

/* Places Lived DataList */


