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