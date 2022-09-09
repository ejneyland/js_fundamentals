// declared using the function keyword

// function functionName(parameter1, parameter2, parameter3) {
// function body
// }

// We must explicitly return a value if we want to return it.

function myFunction(a, b) {
  return a * b; // Function returns the product of a and b
}

// we MUST use the parentheses () when executing a function

// console.log(myFunction) ==> [Function: myFunction]
console.log(myFunction(9, 11));

let x = myFunction(6, 7);
console.log(x);

// ------
// Variable Scope
// In JS, we are able to access variables declared outside of a function
// Variables declared within a function become local to the function

let number = 7;

function displayNumber() {
  number = 3;
  // redeclaring the 'number' variable inside the function mutates the variable and updates it in its memory location
}

console.log(number); // ==> 7
displayNumber();
console.log(number); // ==> 3
// NOT a good practice for obvious reasons

// another example of this
function myFunc(theObject) {
  theObject.make = "Toyota";
}

const mycar = {
  make: "Ford",
  model: "Falcon",
  year: 2004,
};

// c gets the value "Ford"
const c = mycar.make;
// console.log(c)

// the make property is changed by the function
myFunc(mycar);

// d gets the value "Toyota"
const d = mycar.make;
// console.log(d)

// ------
// Function Parameters
// rather than hard-coding variables, we can instead pass them in as arguments
function multiplyNums(num1, num2) {
  return num1 * num2;
}

console.log(multiplyNums(5, 7));

// ------
// Arrow Functions

// Traditionally declared function
// function addTwo(a, b) {
//     return a + b
// }

// Arrow declared function
// remove the 'function' keyword, replace with an arrow between the argument and opening body bracket.
// const addTwo = (a, b) => {
//     return a + b
// }

// next remove the brackets and the keyword `return` -- return is implied
// const addTwo = (a, b) => a + b

// if a function only takes one argument, we can omit the parentheses around the argument
// const takesOneArgument = arg => arg * 2

// When a function performs multiple lines of code, the curly braces are required and the 'return' keyword needs to be explicity called if required
// const doesManyThings = arg => {
//     if(arg < 0) {
//         throw "doesManyThings does not accept your negative input"
//     }
//     return arg * 2
// }

// ------
// Nested Functions and Closures

// nested - functions within other functions
function parentFunction(x) {
  let y = 1;

  // nested functions are private to its containing outer function
  function nestedFunction(x, y) {
    return x + y;
  }
  // a 'closure' is formed, where free variables are bound within the environment of an expression/function
  return nestedFunction(x, y);
  // nested functions can inherit arguments and variables of its containing outer function
  // outer function cannot use arguments/variables of the inner function
}

let answer = parentFunction(10);
console.log(answer); // ==> outputs 11
// the inner function can only be acessed from statements in the outer function

// Closures
// ---

const createPet = function (name) {
  let gender;
  let age;

  const pet = {
    // setName(newName) is equivalent to setName: function (newName)
    // in this context
    setName(newName) {
      name = newName;
    },

    getName() {
      return name;
    },

    setGender(newGender) {
      if (
        typeof newGender === "string" &&
        (newGender.toLowerCase() === "male" ||
          newGender.toLowerCase() === "female")
      ) {
        gender = newGender;
      }
    },

    getGender() {
      return gender;
    },

		setAge(newAge) {
			age = newAge
		},	

    getAge() {
      return age;
    },
  };

  return pet;
};

const pet = createPet("Murphy")

// pet.setName("Murphy");
pet.setGender("female");
pet.setAge(1)

console.log(pet.getName()); // Murphy
console.log(pet.getGender()); // female
console.log(pet.getAge()); // 1