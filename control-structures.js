// Control Structures

// 1. If / Else statements
// 2. Ternary Operators
// 3. Switch statements

// If / Else
const temp = 32
if (temp < 15) {
    console.log("It is cold right now!")
} else if (temp >= 15 && temp < 25) {
    console.log("The weather is mild today")
} else {
    console.log("It's bloody stinkin' hot today!")
}

// To join two or more conditions into a single if statement, use logical operators viz. && (and), || (or) and ! (not)
// && (and) expression is True, if all the conditions are true

// The equality operator in javascript is used to compare if two values are equal. The comparison is made by == and === operators in javascript. 

// The main difference between the == and === operator in javascript is that the == operator does the type conversion of the operands before comparison, whereas the === operator compares the values as well as the data types of the operands

// Ternary Operators
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

const weekday = days.slice(0, 4)
const weekend = days.slice(4, 7)

let day = "Friday"

const x = weekday.includes(day)
const y = weekend.includes(day);


let drink = x || y ? "you cannot have a beer" : "you can have a beer"

console.log(`Today is a ${day}, ${drink}`)

// Switch Statements
const species = "Almond"
switch (species.toLowerCase()) {
    case 'almond':
    case 'cashew':
    case 'peanuts':
    case 'pistachio':
        console.log("It's not really a nut")
        break
    case 'acorn':
    case 'chestnut':
    case 'hazelnut':
        console.log("This nut is the real deal. It's nuts!")
        break
    default:
        console.log("It's not a nut, nor does it claim to be a nut")
}