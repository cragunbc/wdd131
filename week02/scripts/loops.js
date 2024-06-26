// loops.js
myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };
  // Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
//   let favoriteFood1 = document.createElement("li");
//   favoriteFood1.textContent = myInfo.favoriteFoods[0];
  
//   let favoriteFood2 = document.createElement("li");
//   favoriteFood2.textContent = myInfo.favoriteFoods[1];
  
//   let favoriteFood3 = document.createElement("li");
//   favoriteFood3.textContent = myInfo.favoriteFoods[2];
  
//   let favoriteFood4 = document.createElement("li");
//   favoriteFood4.textContent = myInfo.favoriteFoods[3];
  
  // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
//   document.querySelector("#favorite-foods").appendChild(favoriteFood1);
//   document.querySelector("#favorite-foods").appendChild(favoriteFood2);
//   document.querySelector("#favorite-foods").appendChild(favoriteFood3);
//   document.querySelector("#favorite-foods").appendChild(favoriteFood4);


const foodsElement = document.querySelector("#favorite-foods");
function createFood(food) {
    let favoriteFood = document.createElement("li");
    favoriteFood.textContent = food;
    foodsElement.appendChild(favoriteFood);
}
myInfo.favoriteFoods.forEach(createFood);

const foodsElement1 = document.querySelector("#favorite-foods");
function mapFood(food) {
    let favoriteFood = document.createElement("li");
    favoriteFood.textContent = food;
    return favoriteFood;
}

// const foodsElement2 = document.querySelector("#favorite-foods");
// const placesElement = document.querySelector("#places-lived");

// function generateList(list, templateCallback) {
//     const htmlList = list.map(templateCallback);
//     return htmlList.join("");
// }

// function foodsTemplate(food) {
//     return `<li>${food}</li>`
// }

// function placesTemplate(place) {
//     return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
// }

// foodsElement2.innerHTML = generateList(myInfo.favoriteFood, foodsTemplate);
// placesElement.innerHTML = generateList(myInfo.placesLived, placesTemplate);


const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

let i = 0;
while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
    i++;
}

studentReport.forEach(function (item) {
    if (item < LIMIT) {
        console.log(item);
    }
});

for (let i in studentReport) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

const output = document.getElementsByTagName("ul");
const options = { weekday: "long"};

const today = new Date();
let todaystring = new Intl.DateTimeFormat("en-US", options).format(today);
document.getElementById("today").innerHTML = `Today is ${todaystring}. `;

for (let i = 1; i <= DAYS; i++ ){
    let nextday = newDate();
    nextday.setDate(today.getDate() + i);
    let nextdaystring = new Intl.DateTimeFormat("en-US", options).format(nextday);
    item = document.createElement("li");
    item.textContent = nextdaystring;
    output[0].appendChild(item);
}