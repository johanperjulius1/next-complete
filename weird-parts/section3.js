// classes in javascript

// classes in javascript are just syntactic sugar for the prototype chain
// classes om javascript -
// The constructor in JavaScript classes is a special method for creating and 
// initializing objects created with a class. Here are the key points 
// about constructors in classes:

// Purpose:

// Initializes new objects created from the class.
// Automatically called when creating a new instance with new.
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }

//   There can only be one constructor per class.
// If you don't define a constructor, a default (empty) constructor is created.
// Uses the constructor keyword.

// this keyword:

// Inside the constructor, this refers to the newly created instance.

// Calling super in derived classes:

class Employee extends Person {
    constructor(name, age, position) {
      super(name, age);  // Call the parent constructor
      this.position = position;
    }
  }

//   Default parameters:


  class Car {
    constructor(make, model = 'Unknown') {
      this.make = make;
      this.model = model;
    }
  }

//   Using methods inside constructor:

class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.calculateArea();
    }
    
    calculateArea() {
      this.area = this.width * this.height;
    }
  }

//   Certainly. This is an important distinction between regular functions and arrow functions in JavaScript. Let's break it down:

// Regular Functions and Constructors:

// Regular functions can be used as constructors with the new keyword.
// When called with new, they get a new this binding to the object being created.
// Arrow Functions:

// Arrow functions do not have their own this binding.
// They inherit this from the enclosing lexical scope.
// They cannot be used with new.

// Why This Matters for Constructors:

// Constructors need to bind properties and methods to the newly created object.
// This binding is done via this.
// Arrow functions can't provide this new binding, so they can't initialize new objects properly.

// Lexical this in Arrow Functions:

// The this value inside an arrow function is always inherited from the surrounding scope.
// This is great for callbacks but not for object initialization.

function Counter() {
    this.count = 0;
    setInterval(() => {
      this.count++; // 'this' correctly refers to the Counter instance
    }, 1000);
  }

//   Constructor's Purpose Defeated:

// Constructors are meant to create and initialize new objects.
// Without the ability to bind this to a new object, arrow functions can't fulfill this role.


//   In summary, the lack of their own this binding makes arrow functions unsuitable as 
//   constructors. Constructors need to manipulate a new object context, which arrow 

// ------------ class vs construcctor functions
// can you tell me about this 

// These two approaches represent different ways of creating objects in JavaScript: 
// the constructor function pattern and the class syntax. Let's compare them:

// Constructor Function (ES5 and earlier):

function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name}`);
  };
  
  const john = new Person('John', 30);

//   Class Syntax (ES6+):

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const johan = new Person('Johan', 30);

//   Key differences and similarities:

// Syntax:

// Constructor function uses a regular function declaration.
// Class syntax provides a more intuitive and compact way to define objects and their methods.


// Under the hood:

// Both approaches create objects based on prototypes.
// Classes are essentially syntactic sugar over the prototype-based inheritance.


// Methods:

// In constructor functions, methods are typically added to the prototype.
// In classes, methods are automatically added to the prototype.


// Hoisting:

// Function declarations are hoisted.
// Class declarations are not hoisted.


// Strict mode:

// Class bodies are always executed in strict mode.
// Constructor functions are not strict by default.


// Inheritance:

// Classes provide a more straightforward extends keyword for inheritance.
// Constructor functions use Object.create() or other patterns for inheritance.


// this binding:

// Both use this to refer to the instance being created.


// Usage of new:

// Both require the new keyword to create instances.


// Readability and Modern Practice:

// Class syntax is generally considered more readable and is preferred in modern JavaScript.
// It aligns better with OOP concepts from other language