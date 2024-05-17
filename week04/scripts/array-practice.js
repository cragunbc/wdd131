let list = ["one", "two", "three"];
const steps = steps.map(function (step) {
    return `<li>${step}</li>`;
});
document.getElementById("myList").innerHTML = steps.join();

let grades = ["A", "B", "A"];
function gradeAverage(grade) {
    let points = 0;
    if (grade === "A") {
        points = 4;
    } else if (grade === "B") {
        points = 3;
    }
    return points;
}

const gpaPoints = grades.map(gradeAverage);
const totalPoints = gpaPoints.reduce(function (total, item) {
    return total + item;
});
const gpa = totalPoints / gpaPoints.length;


let food = ["watermelon", "peach", "apple", "tomato", "grape"];

let food1 = food.filter(function (word) {
    return word.length < 6;
});


let array = [12, 34, 21, 54];
let luckNumber = 21;

let luckyIndex = array.indexOf(luckNumber);