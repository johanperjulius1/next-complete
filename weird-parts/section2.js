// function outerFunction () {
//     const outerVariable = 'I am outside'

//     function innerFunction () {
//         console.log(outerVariable)
//     }

//     return innerFunction
// }

// const myClosure = outerFunction()
// myClosure()
// ------------------------------------------------------------------------------------
// console.log(a);
// c();
// b();
// var a = 1;
// const b = () => {
//   console.log("called b");
// };
// function c() {
//   console.log("called c");
// }
// ------------------------------------------------------------------------------------
// execution contextis created in two phases
// First is called creation phase.
// In creation phase the global object is created and set up in memory (when working win global execution context).
// Same for the this variable. Always created in an execution context
//  an Outer environment is created.

// In the creation phase when the syntax parser runs through the code and prepares to translate it,
// It recognizes where I have set up variables and function ad set up space in memory for it. This is called hoisting.
// In short, before my code is executed, Javascript engine has set aside memory space for all functions and variables.
// This means that when the code begins to execute, it can access them already.
// Functions are being stored in its entirety

// Assignments however, when something equals something are set, is not unil the second phase of creating the execution content,
// which is called the execution phase.
// So javascript engine doesn't know what a variable will be until it starts executing the code.
// Therefore it puts a placeholder, undefined until then.

// undefined is a special value, a special data type that means that the value hasn't been set yet

// function b () {
//     console.log('hello')
// }

// b()

// console.log(a)

// var a = 'hello world'

// console.log(a)

// variable environment - where variables live and how they relate to each other in memory

function a() {
  function b() {
    console.log(myVar);
  }

  var myVar = 2;
  b();
}

var myVar = 1;
a();

// Scope: Where can I access a variable
// Chain: The links of outer environment references
// Scope chain
// Can also think - who created me? The outer reference is to the execution context in which it was created