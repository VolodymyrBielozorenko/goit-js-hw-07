const myGeneralList = document.getElementById("categories");
const numberOfCategories = myGeneralList.children.length;
console.log("В списке", numberOfCategories, "категории.");


const firstTitle = document.getElementById("first-title");
const nameOfFirstCategory = firstTitle.textContent;
console.log("Категория:", nameOfFirstCategory);

const myFirstList = document.querySelectorAll(".first-item li");
const amountOfFirstElements = myFirstList.length;
console.log("Количество элементов:", amountOfFirstElements);


const secondTitle = document.getElementById("second-title");
const nameOfSecondCategory = secondTitle.textContent;
console.log("Категория:", nameOfSecondCategory);

const mySecondList = document.querySelectorAll(".second-item li");
const amountOfSecondElements = mySecondList.length;
console.log("Количество элементов:", amountOfSecondElements);


const thirdTitle = document.getElementById("third-title");
const nameOfThirdCategory = thirdTitle.textContent;
console.log("Категория:", nameOfThirdCategory);

const myThirdList = document.querySelectorAll(".third-item li");
const amountOfThirdElements = myThirdList.length;
console.log("Количество элементов:", amountOfThirdElements);
