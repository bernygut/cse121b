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
        length: "17 years"
    }
); 


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: "Utah Valley, Utah",
        length: "4 years"
    });

myProfile.placesLived.push(
    {
        place: "San Joaquin Valley, California",
        length: "2 years"
    });

myProfile.placesLived.push(
    {
        place: "Escazu, Costa Rica",
        length: "4 years"
    });

myProfile.placesLived.push(
    {
        place: "Ciruelas, Costa Rica",
        length: "10 years"
    });

myProfile.placesLived.push(
    {
        place: "Santa Ana, Costa Rica",
        length: "6 years"
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
    document.querySelector("#hobbies").appendChild(thisLi);
    }
);

/* Places Lived DataList */

myProfile.placesLived.forEach(function (item) { 
    let thisDt = document.createElement("dt");
    thisDt.textContent = item.place;
    document.querySelector("#places-lived").appendChild(thisDt);
  
    let thisDd = document.createElement("dd");
    //console.log("Length:", item.length);
    thisDd.textContent = item.length;
    document.querySelector("#places-lived").appendChild(thisDd);
    }
);


