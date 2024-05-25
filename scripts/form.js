const year = document.querySelector("#currentYear");
const modified = document.querySelector("#lastModified");

const today = new Date();

year.innerHTML = today.getFullYear();
modified.innerHTML =`Last Modified: ${document.lastModified}`;

const selectOptions = document.querySelector("#productName");

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      avgeragerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

products.forEach(product => {
  const newOption = document.createElement("option");
  // newOption.value = product.id;
  newOption.textContent = product.name;

  selectOptions.appendChild(newOption);
});

