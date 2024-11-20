let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

const filtered = names.filter((name) => name.charAt(0) =="B");
const mapped = names.map((name) => name.length);
const reduced = names.reduce((total, name) => total + name.length, 0) / names.length

const steps = ['one', 'two', 'three'];
const listTemplate = function(step) {
    return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join()

const grades = ['A', 'B', 'A']
function gradePoints(grade) {
    switch(grade) {
        case 'A':
            return 4;
        case 'B':
            return 3;
        case 'C':
            return 2;
        default:
            return 1;
    }
}
const points = grades.map(gradePoints)
const gpa = points.reduce((total, point) => total + point, 0) / points.length;

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const fruitFilter = fruits.filter((fruit) => fruit.length > 6);

const numbers = [12, 34, 21, 54];
var luckyNumber = 21;
const index = numbers.indexOf(luckyNumber);

