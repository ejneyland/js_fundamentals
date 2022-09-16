// in JavaScript, we call what we referred to as 'hashes' in Ruby as 'objects' in JS 

let person = {
  name: "John",
  hairColour: "brown",
  eyeColour: "green",
};

let object = {}
// we can add key/value pairs with two methods
// dot notation and bracket notation

// dot notation
object.name = "square"

// bracket notation
object["sides"] = 4

console.log(object) // { name: 'square', sides: 4 }
// keys are always interpreted as strings


let student = {
  name: "Bob",
  age: 22,
  address: {
    street: "123 Siandra Drive",
    state: "NSW",
    city: "Sydney",
  },
};

// to read a specific value, we can use dot or bracket notation as well
console.log(student.name) // Bob
console.log(student["age"]) // 22
// to access nested values, we can chain commands
console.log(student.address.state) // NSW
console.log(student["address"]["city"]) // Sydney
// to update a value
// person.age = 23
// to delete a value
// delete person.age


// to create a new object in JS you can use the 'new' keyword with an object constructor function: 'Object()'
// object2 = new Object()
// console.log(object2) // {}

// object construction functions are kinda like classes in Ruby
// you can create instances of something without having to manually construct each one individually

function Character(name, age, awesome) {
  this.name = name;
  this.age = age;
  this.awesome = awesome;
} // 'this' when used in an object is the object itself. equiv to 'self' in Ruby

let character1 = new Character("Velma", 24, true);
let character2 = new Character("Fred", 30, false);
console.log(character1); // Person { name: 'Velma', age: 24, awesome: true }
console.log(character2); // Person { name: 'Fred', age: 30, awesome: true }

var foo = typeof character1.awesome
console.log(foo) // boolean

// to add a new property you must change the prototype, you cannot do it directly e.g. Character.country = "Australia" does not work

// to retroactively add extra attributes to our Character we must go through its prototype, e.g.
Character.prototype.country = "Australia"
let character3 = new Character("Raggy", 27, true)

console.log(character1.country) // Australia
console.log(character3.country) // Australia


function Hero(name, level) {
  this.name = name;
  this.level = level;
  // functions can be included in constructors
  this.shout = function () {
    return `My name is ${this.name}!`;
	};
	// the function will be duplicated for each instance of the object however, wich is inefficient for memory
	// a better way of doing this is demonstrated in the example below
}

let spiderman = new Hero("Spiderman", 93);
let batman = new Hero("Batman", 81);

spiderman.shout();
batman.shout();

// ------

function Villian(name, level) {
  this.name = name;
  this.level = level;
}

// attributes the function to the prototype, rather than each object
// each time an individual object calls on the function, it is using the same, singular function
Villian.prototype.shout = function () {
  return `I am the evil ${this.name}!`;
};

let joker = new Villian("Joker", 66);
let iceman = new Villian("Green Goblin", 42);

joker.shout();
iceman.shout();

// ------

function Human(name) {
  this.legs = 2;
  this.arms = 2;
  this.head = 1;
  this.name = name
}

Human.prototype.walk = function() {
  return `Taking a stroll with my ${this.legs} legs.`;
};

function Man(name) {
  Human.call(this, name); 
  // pass a reference of `this` object to the Human object constructor
  // similar to calling super in ruby
	// attributes 'this' Man object to the Human prototype
}

let homer = new Human("Homer");
console.log(homer); // Human { legs: 2, arms: 2, head: 1, name: 'Homer' }
console.log(homer.__proto__); // { walk: [Function (anonymous)] }
let garret = new Man("Garret");
console.log(garret); // Man { legs: 2, arms: 2, head: 1, name: 'Garret' }
// console.log(garret.__proto__); // {}

// The next line will cause a TypeError: garret.walk is not a function
// garret.walk();
// it is necessary to explicitly inherit the prototype chain from Human using Object.create to assign the Human prototype to Man.prototype
// SO, rather than doing it the above way, do dis...

Man.prototype = Object.create(Human.prototype)
let rowland = new Man("Rowland")
rowland.walk() // invokes the walk function on the Rowland object
console.log(rowland.walk()) // Taking a stroll with my 2 legs