const year = document.querySelector("#currentYear");
const modified = document.querySelector("#lastModified");

const today = new Date();

year.innerHTML = today.getFullYear();
modified.innerHTML =`Last Modified: ${document.lastModified}`;


const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});


const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Brigham City Utah",
      location: "Brigham City, Utah",
      dedicated: "2012, September, 23",
      area: 36000,
      imageUrl: "https://www.churchofjesuschrist.org/imgs/154ee0c38f920aa66074c0338fe29f535e0d0a65/full/320%2C/0/default"
    },
    {
      templeName: "Salt Lake City",
      location: "Salt Lake City, Utah",
      dedicated: "1893, April, 6",
      area: 382207,
      imageUrl: "https://www.churchofjesuschrist.org/imgs/cd4d22a965af18a50f8589bb1b917859d5935209/full/!320%2C214/0/default"
    },
    {
      templeName: "Ogden Utah",
      location: "Ogden, Utah",
      dedicated: "2014, September, 21",
      area: 112232,
      imageUrl: "https://www.churchofjesuschrist.org/imgs/b001df653b3ca0c2dd39002cabb240b275025cf5/full/320%2C/0/default"
    }
    // Add more temple objects here...
  ];

  createTempleCard(temples);

  const homeTempleLink = document.querySelector("#home");
  const oldTempleLink = document.querySelector("#old");
  const newTempleLink = document.querySelector("#new");
  const largeTempleLink = document.querySelector("#large");
  const smallTempleLink = document.querySelector("#small");

  
  oldTempleLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.dedicated < "1900"));
  });
  
  newTempleLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.dedicated > "2000"));
  });
  
  largeTempleLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area > 90000));
  });
  
  smallTempleLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area < 10000));
  });
  
  homeTempleLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.templeName.includes("")));
  });

  function createTempleCard(filteredTemples) {
    document.querySelector("#templesCard").innerHTML = "";
    filteredTemples.forEach(temple => {
      let card = document.createElement("section");
      let name = document.createElement("h3");
      let loc = document.createElement("p");
      let dedicate = document.createElement("p");
      let templeArea = document.createElement("p");
      let img = document.createElement("img");

      name.textContent = temple.templeName;
      loc.innerHTML = `Location: ${temple.location}`;
      dedicate.innerHTML = `Dedicated: ${temple.dedicated}`;
      templeArea.textContent = `Area: ${temple.area} sq ft`;
      img.setAttribute("src", temple.imageUrl);
      img.setAttribute("alt", `${temple.templeName} Temple`);
      img.setAttribute("loading", "lazy");

      card.appendChild(name);
      card.appendChild(loc);
      card.appendChild(dedicate);
      card.appendChild(templeArea);
      card.appendChild(img);

      document.querySelector("#templesCard").appendChild(card);
    });
  }