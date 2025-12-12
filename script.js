// №1
console.log(" номер 1")
const Book = (599.99)
const Del = (250)

const result = ((Book)*3 + (Del)).toFixed(2)

console.log("Задание 1: " + result + " рублей.")

// №2
console.log(" номер 2")
const number1 = (42)
const number2 = (53)

console.log(number1 % 2 === 0)
console.log(number2 % 2 === 0)

// №3
console.log(" номер 3")
const ID = Math.floor(Math.random() * 100) + 1
if (1 <= (ID) <= 100) {
    console.log(ID)
}
else {
    console.log("Произошла ошибка, попробуйте снова")
}

// №4
console.log(" номер 4")
const ID2 =(9999999999999999n)
ID3 = ((ID2) + 1n)
console.log(typeof(ID3))

// №5
console.log(" номер 5")
console.log("Are you ready?" + "\nYes!".toUpperCase())
console.log(("Are you ready?" + "\nYes!".toUpperCase()).length)