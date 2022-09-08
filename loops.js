// Loops

// while loops
// do while loops
// for loops
// for of / in loops
// break and continue


// while loops

// a while loop will continue to execute WHILE the specified condition is true

// while (condition === true) {
//     execute code
// }

// Once the condition is false, or the loop has been explicitly broken, the flow of the application continues to the next code afterwards.

// As a while loop, the condition is checked BEFORE the code inside the loop is executed. So if the condition being checked is not true to begin with, the code inside the loop will not be executed. 

// let height = 167
// let weight = 65

// while ((height > 165 && height < 169) && (weight > 56 && weight < 69)) {
//     console.log("You're inside the healthy weight range for your height, according to the BMI")
//     weight += 1
// }


// do while loops

// A do...while loop is similar to a while loop, but instead of the code ONLY executing while the given condition is true, a do...while statement will execute the code BEFORE the condition is evaluated.

// Therefore the code will be executed at least once, regardless of the condition

// function liftOff(time) {
//   do {
//     console.log(`T-minus ${time} seconds until liftoff`);
//     time -= 1;
//   } while (time >= 0);
//   console.log("WE HAVE LIFTOFF!");
// }

// liftOff(7);


// for loops

// The for loop is used when wanting to execute a block of code a pre-determined amount of times. A forloop has a unique structure, taking three expressions within parenthesis separated by semicolons.  The structure looks like this:

// for (initialization; condition; final-expression) {
//     code to be executed here
//  }

// for (let i = 0; i <= 5; i++) {
//   console.log(`i: ${i}`);
// }
// console.log("Our loop is finished");


// for of / in loops

// Used when you want to loop over a collection of data, like an array or object. In the code below, we have access to each element and key respectively, the difference is the use of the 'of' or 'in' keyword

// An 'of' must be used for an array and an 'in' must be used for an object

// an array
// for (let element of array) {
//     code
// }

// an object
// for (let key in object) {
//     code
// }

// ---
let pets = ["cat", "dog", "aardvark"]

for (let pet of pets) {
    console.log(`I have a pet ${pet}`)
}
// ---
let person = {
    name: "Ethan",
    hairColour: "brown",
    eyeColour: "blue"
}

for (let key in person) {
    console.log(`My ${key} is ${person[key]}`)
}
// ---

// break and continue

// The syntax for break :

while (true) {
  console.log("Before the break");
  break;
  console.log("This code won't execute");
}
console.log("After the loop");

// The syntax for a continue is similar:

let i = 0;
while (i < 10) {
  if (i === 7) {
    console.log("Lucky number 7 boi");
    console.log("Before the continue");
    continue;
  }
    console.log(`i: ${i}`); // This code is unreachable when i === 7 as the continue skips it
    break
}

// ---
