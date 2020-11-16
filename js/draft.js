// const mySections = document.querySelector("section")
// console.log(mySections)
// console.dir(mySections)
// console.log(mySections.className)
// console.log(mySections.tagName)

const myListId = document.getElementById("categories")
console.log(myListId.children.length)
console.dir(myListId)

const myList = document.querySelectorAll("#categories .item")
console.log(myList)
console.dir(myList)

// const myList = document.getElementsByClassName("item")
// console.log(myList)
// console.dir(myList)

const newImg = document.createElement("img")
newImg.setAttribute("src", "https://fit-cook.ru/upload/000/u3/014/3c490624.jpg")
newImg.width = "200"
console.log(newImg)
console.dir(newImg)

const secondTitle = document.getElementById("second-title")
secondTitle.after(newImg)



console.log(secondTitle.textContent)