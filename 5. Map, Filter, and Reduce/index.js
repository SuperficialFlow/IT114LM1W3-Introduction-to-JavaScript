/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
// Your code here
console.log("5.1")
const squares = numbers.map(function(num) {
    return num * num
  })
console.log(squares)

// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
// Your code here
console.log("\n5.2")
const even = numbers.filter(item => item % 2 === 0)
console.log(even)

// TODO 5.3 Use the reduce method to find the sum of all numbers in the array
// Your code here
console.log("\n5.3")
const sum = numbers.reduce(function (result, item) {
    return result + item
  }, 0)
console.log("Sum:", sum)

// TODO 5.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world'];
// Your code here
console.log("\n5.4")
const upper = words.map(words => words.toUpperCase())
console.log(upper)

// TODO 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
// Your code here
console.log("\n5.5")
const four = words.filter(words => words.length > 4)
console.log(four)

// TODO 5.6 Use the reduce method to concatenate all words in the array into a single string
// Your code here
console.log("\n5.6")
const concatenatedString = words.reduce((acc, currentWord) => acc + currentWord, '')
console.log(concatenatedString)

// Checkpoint 5.1 Summarize what map, filter, and reduce do
// Answer: 
console.log("\n5.1")
console.log("Map, enables to to create a new array while adding a function or condition that may execute an action. Such as converting all letters into uppercase from 4.4.")
console.log("Filter, determines the resulting condition to be either boolean expressions. If condition is met, it will accept the result. Otherwise that element will not get pushed.")
console.log("Reduce, capable of itterating over all the values within an array and reduces it into a single value, depending by the condition.")