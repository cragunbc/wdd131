const reviewCount = document.querySelector("#counter");

let visits = Number(window.localStorage.getItem("reviewNumber")) || 0;

if (visits !== 0) {
  reviewCount.textContent = visits + 1;
} else {
  reviewCount.textContent = "1st review!";
}

visits++;

localStorage.setItem("reviewNumber", visits);