/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
*/

const randomNumber = Math.floor((Math.random() * 100) + 1); // feel free to mock this value for testing

// TODO 2.1 Display "more than fifty" if randomNumber is more than fify
// Your code here
console.log("2.1:")
if (randomNumber > 50) {
    console.log("More than fifty: ", randomNumber);
} else {
    console.log("Less than fifty: ", randomNumber);
}

// TODO 2.2 Display whether the random number is odd or even
// Your code here
console.log("\n2.2:")
if (randomNumber % 2 == 0) {
    console.log("Even")
} else {
    console.log("Odd")
}

// TODO 2.3 If the number if a multiple of 3, write "fizz".
// if the number is a multiple of 5 display "buzz".
// if the number is divisible by both 3 and 5, display "fizzbuzz". otherwise, display the number
// Your code here
console.log("\n2.3:")
if (randomNumber % 5 == 0) {
    console.log("buzz")
} else if (randomNumber % 3 == 0 && randomNumber % 5 == 0) {
    console.log("fizzbuzz")
} else {
    console.log(randomNumber)
}

let toDisplay = randomNumber
// TODO 2.4 Use the ternary conditional operator to set toDisplay to "Even" if randomNumber is even and "Odd" if randomNumber is odd
// Your code here
console.log("\n2.4:")
if (toDisplay % 2 == 0) {
    console.log("Even")    
} else {
    console.log("Odd")
}
console.log("toDisplay", toDisplay);

// Checkpoint 2.1 How do you use switch statements and when would you use them? Try researching the answer
// Answer: 
console.log("\n2.1") 
switch (randomNumber % 2) {
    case 0: console.log("Even")
    case 1: console.log("Odd") 
}

// TODO 2.5 Use a for loop to print the numbers 1 to N
console.log("\n2.5")
const n = 10
// Your code here
for (var i = 1; i <= n; i++) {
    console.log(i)
}
const list = ["apple", "banana", "cherry", "date", "elderberry"];

// TODO 2.6 Use a while loop to display all the values in the list
// Your code here
console.log("\n2.6")
var i = 0
while (i < list.length) {
    console.log(list[i])
    i++
}

// Checkpoint 2.3 What is the difference between do while and while loop?
// Answer: 
console.log("\n2.3")
var i = 0
do {
    console.log(list[i])
    i++
} while (i < list.length)

// TODO 2.7 Use a for of loop to display all the values in the list
// Your code here
console.log("\n2.7")
for (var i = 0; i < list.length; i++) {
    console.log(list[i])
} 

// TODO 2.8 Use a for in loop to display all the values in the list
// Your code here
console.log("\n2.8")
for (var i in list) {
    console.log(list[i])
    i++
}

// TODO 2.9 Use the for each method of the list to display all its values 
// Your code here
console.log("\n2.9")
list.forEach(function(color) {
    console.log(color)
})

// Checkpoint 2.2 When should you use for of, for in, or .forEach loops? Try researching the answer
// Answer: 
console.log("\n2.2")
console.log("The use of for of loops are those that scan through the values within the list that can be iterated over. For in are used in a niche of itterating values that have a property, such as 'name: user' which ill then display both the property and value. Lastly, for each can be used in printing out arrays, however it will not be able to print any empty arrays.")

// TODO 2.10 Use the try and catch block to catch division by zero errors in the code below.
// In the finally block, simulate cleaning up resources by displaying "cleaning up resources"
console.log("\n2.10")
const numerator = Math.floor((Math.random() * 100) + 1);
const denominator = Math.floor((Math.random() * 5)); // feel free to mock this value for testing

try {
    if(denominator === 0){
        throw new Error("Division by zero error")
    } else {
        console.log(numerator / denominator);
    }
} catch (error) {
    console.error("Zero error")
} finally {
    console.log("cleaning up resources")
}



