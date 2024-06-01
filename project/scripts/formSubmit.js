const questionCount = document.querySelector("#counter");

let visits = Number(window.localStorage.getItem("questionNumber")) || 0;

if (visits !== 0) {
  questionCount.textContent = visits + 1;
} else {
  questionCount.innerHTML = `1st submmitted question!`;
}

visits++;

localStorage.setItem("questionNumber", visits);