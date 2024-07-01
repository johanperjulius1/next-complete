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

// Whenever code is run in javascript it is run in an execution context. The javascript engine puts the code in a wrapper, i.e. the execution context.
//  the base one is the global execution context.
// In the Global execution context we have the global object and the special variable this.
// The global object inside browsers is the window object. On a global level the this keyword and the global object are the same.
// In javascript the global object means "not inside a function"

// execution context is created in two phases
// First is called creation phase.
// In creation phase the global object is created and set up in memory (when working win global execution context).
// Same for the this variable. Always created in an execution context
//  an Outer environment is created. But on a global level the outer environment is null / nothing

// In the creation phase when the syntax parser runs through the code and prepares to translate it,
// It recognizes where I have set up variables and function ad set up space in memory for it. This is called hoisting.
// In short, before my code is executed, Javascript engine has set aside memory space for all functions and variables.
// This means that when the code begins to execute, it can access them already.
// Functions are being stored in its entirety

// Assignments however, when something equals something are set, is not until the second phase of creating the execution content,
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
// Just think "where is the variable"

// function a() {
//   function b() {
//     console.log(myVar);
//   }

//   var myVar = 2;
//   b();
// }

// var myVar = 1;
// a();

// Scope: Where can I access a variable
// Chain: The links of outer environment references
// Scope chain
// Can also think - who created me? The outer reference is to the execution context in which it was created
// the outer reference is to who created me.
// The outer reference is to the context in which something was created.

// function b() {
//   console.log(myVar);
// }

// function a() {
//   var myVar = 2;
//   b();
// }

// var myVar = 1;
// a();

// function a() {
//   function b() {
//     console.log(myVar);
//   }
//   b();
// }

// var myVar = 1;
// a();

// --------------------------------------
// 2.18 / Scope. es6 and let
let a = 2;
let b = 1;

if (a > b) {
  let c = true;
}

if (a > b) {
  var d = true;
}
// with block scoping, let, variables can not be called before they are referenced. Will throw reference error

// console.log(f)

// const f

// will throw missing initializer or cannot be called before initialization


// Asynchronous = more than one at a time

// Callback:

// A callback in JavaScript is a function passed as an argument to another function, which is 
// then invoked inside the outer function to complete some kind of routine or action. Here's a brief explanation:

// It's a function that's executed after another function has finished executing. FEL
// Let's revise that explanation:
// A more accurate description would be:
// "A callback is a function passed as an argument to another function, which can be invoked during the execution of that outer function."
// Callbacks don't necessarily execute after the outer function has finished. In fact, as we've seen in our example:

// The callback often executes before the outer function completes.
// The outer function may continue to execute after the callback has finished.
// In some cases (like with asynchronous operations or event listeners), the callback might execute much later, after the outer function has long since completed.

// Thank you for your persistence in clarifying this. It's crucial to be precise about these concepts in programming. Your questions have helped highlight an important nuance in how callbacks actually work in JavaScript.

// It allows asynchronous code execution, helping manage tasks that may take some time to complete.
// Callbacks are commonly used in event handling, AJAX requests, and with array methods.



// long running running function

function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms) {}
    console.log('finished function');
}


function clickHandler() {
    console.log('click event!');
}

// listen for the click event
document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution');