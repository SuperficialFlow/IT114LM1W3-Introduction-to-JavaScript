/*
    Resources:
    - MDN on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    - JavaScript Tutorial on Functions: https://javascript.info/function-basics
    - freeCodeCamp on Functions: https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/
*/

// Todo 4.1 Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
// Then, Call the 'greet' function with your name as the argument
// Your code here
console.log("4.1")
greet("Rea")
function greet(name){
    console.log("Hello, " + name)
}

// Checkpoint 4.1 What is the difference between a function declaration and a function expression?
// Answer: 
console.log("\n4.1")
console.log("A function declration is dynamic and is able to used anywhere in the code once the declaration is defined. On the contrary,  function expression has the capability of being stored within a variable. However, you are only able to call the function after the assignment.")

// Todo 4.2 Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
// Then, Call the 'calculateArea' function with any length and width as arguments
// Your code here
console.log("\n4.2")
const calculateArea = function (length, width) {
    return length * width
}
let length = 3
let width = 4
let area = calculateArea(length, width)
console.log("Rectangle Area: ", area) 

// Checkpoint 4.2 What is a callback function? Provide an example.
// Answer: 
console.log("\n4.2")
console.log("A callback function that passes data or an argument to another function. An example would treating the callback function as a modifier or to perform after a task.")
function example(value, callBack) {
    value = 11
    callBack(value)
}
function addAge(value) {
    var svalue = 10
    var age = svalue + value
    console.log("I am age,", age)
}
example(0, addAge)

// Todo 4.3 Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters. The function should modify each element in the array using the provided function and return the modified array.
// Then, Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
// Useful Tutorial: https://youtu.be/H4awPsyugS0?si=7wC1B7whXVkG8X5l
// Your code here
console.log("\n4.3")
let numbers = [2, 4, 6, 8, 10]
function modifyArray(array, afunction) {
    return array.map(afunction)
}
function incrementByOne(i) {
    return i + 1
}
console.log("Without increment: ", numbers)
console.log("With increment:", modifyArray(numbers, incrementByOne))

// Todo 4.4 See mathUtils.js for the instructions to create the add method and PI constant.
// Then, import and call the add method here and display the value of the PI constant
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here
console.log("\n4.4")
import { add, PI } from './mathUtils.js'
const result = add(5, 10)
console.log("Add method: ", result)
console.log("PI constant", PI)

// Todo 4.5 See isPalindrome.js for the instructions to create the isPalindrome method.
// Then, import and call the isPalindrome method here
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here
console.log("\n4.5")
import isPalindrome from './isPalindrome.js'
console.log("Given word is a", isPalindrome('tenet'), "palindrome word.")

// Checkpoint 4.3 What does the require function and module.exports variable do?
// Should we use it over the import and export keywords? Why? Research your answer.
// Answer: 
console.log("\n4.3")
console.log("Module.exports is a variable that reflects the current module and returns an object that can be accessed using the need method. The require function would then be an import type module that takes a module name as a parameter and includes external modules or the module's contents. Module.exports normally exports objects, which are subsequently retrieved by the require function and saved in a variable that the user can reuse. In my perspective, the require function provides more flexibility than the import function. With require, you can write the necessary statement and use it within the program. In contrast, the import function is called at the beginning of the file. Notably, import can be used asynchronously for better efficiency, while require is synchronous. Import enables the selective loading of selected components, potentially conserving memory.")
