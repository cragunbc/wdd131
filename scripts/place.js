const year = document.querySelector("#currentYear");
const modified = document.querySelector("#lastModified");

const today = new Date();

year.innerHTML = today.getFullYear();
modified.innerHTML =`Last Modified: ${document.lastModified}`;

function windChill(temp, speed) {
    if (temp <= 50 && speed > 3) {
        return 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
    } else {
        return document.querySelector("#windChill").innerHTML = `N/A`;
    }
}

let wind = windChill(49, 5);
let finalResult = wind.toFixed(2);

document.querySelector("#windChill").innerHTML = finalResult;