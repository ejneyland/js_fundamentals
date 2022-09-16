// special function that abstract the JS prototype inheritance system
// they are defined with the 'class' keyword

class Shape {}
let shape = new Shape();

// differences between prototypes and classes
// main diff: classes are NOT hoisted, prototypes ARE
// i.e. classes must be declared before creating instances
// a class defines a type which can be instantiated at runtime, whereas a prototype is itself an object instance

// class Triangle {
//   constructor(side1, side2, side3) {
//     this.side1 = side1;
//     this.side2 = side2;
//     this.side3 = side3;
//   }
// }
// let equ = new Triangle(7,7,7);
// let iso = new Triangle(9,9,6);
// let sca = new Triangle(3, 5, 7);

// console.log(equ)
// console.log(iso)
// console.log(sca)

// when declaring a function inside of a class, we do not use the 'function' keyword
// this is because a function within a class is called a 'method' in JS
// instance properties and methods within a class can be referred to using the 'this' keyword

class Triangle {
	constructor(height, width) {
    this.height = height;
		this.width = width;
	}
  area() {
    return 0.5 * (this.height * this.width);
  }
  
  // outputStats is a class method that refers to 
  // the instance properties (height, width)
  // and the area method
  outputStats() {
      console.log(`The Triangle's height is ${this.height}`)
      console.log(`The Triangle's width is ${this.width}`)
      console.log(`The Triangle's area is ${this.area()}`)
  }
}

let tri = new Triangle(9, 7)

console.log(tri.area()) // 200
tri.outputStats()

// "The Triangle's height is 20"
// "The Triangle's width is 10"
// "The Triangle's area is 200"

// Static Properties and Methods
// you can define static properties directly on the class
// can be used to define a property that is consistent for all instances of a particular class

Shape.measurement = "cm"
let sh = new Shape(1, 5)
console.log(sh.measurement) // undefined
console.log(Shape.measurement) // "cm"

// static methods can also be added directly in a class
// they are only available to be called on the class
// they are NOT called on class instances, and have no access to them

class Application {
	static version() {
		return "3.8.14"
	}
}

Application.version() // "3.8.14"

// Class Inheritance
// one class can inherit from another by using the 'extends' keyword
// by extending/inheriting another class, you gain access to all properties and methods from the class
// e.g. Square extends Shape

class Shape {
  constructor(height, width) {
    this.height = height
    this.width = width
  }
  area() {
    return this.height * this.width
  }
}

class Square extends Shape {
  isSquare() {
    if (this.height === this.width) {
      console.log("I am a square!")
    } else {
      console.log("ERR I am not a square!")
    }
  }
}

let sq = new Square(10, 10)
sq.isSquare() // "I am a square!"
sq.area() // 100

// by using the 'super' keyword we gain access to the parent class
// we can use it to call methods on the parent class

Shape.prototype.talk = function(input = "shape") {
  console.log(`I am a talking ${input}`);
};

class Octagon extends Shape {
  
  talk() {
    super.talk("octagon");
  }
}

let oct = new Octagon(4, 9);
oct.talk() // "I am a talking octagon"
sq.talk() // "I am a talking shape"