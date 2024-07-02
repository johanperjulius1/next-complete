// --- Objects and functions


// 1. Objects and the dot

// Objects can store primitives, other objects and Functions (then called methods)
// There will be adresses to these objects and its property and methods in memory

var person = new Object();

person["firstname"] = "Tony";
person["lastname"] = "Alicea";

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);

// Using variables to access property names and values, also known as 
// bracket notation or computed property names, offers several benefits:

// more flexible and dynamic code.

// You can use property names that wouldn't be valid with dot notation.

// Programmatic Property Manipulation:
// Useful when you need to work with properties in a loop or based on some logic.

const properties = ["name", "age", "city"];
properties.forEach(prop => {
  console.log(person[prop]);
});

// -------------------------------

// Working with User Input:
// When property names come from user input or external data.
// Internationalization:
// // Useful for accessing properties based on language codes.
// Avoiding Naming Conflicts:
// When property names might conflict with reserved words or existing variable names.
// Metaprogramming:
// Facilitates creating or manipulating objects based on runtime conditions.

// Working with APIs:
// When dealing with APIs that return property names that might not be known in advance.

// Creating Objects with Dynamic Keys:
// Useful when creating objects where the key names are determined at runtime.

