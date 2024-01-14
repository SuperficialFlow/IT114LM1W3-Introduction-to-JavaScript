/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
// Your code here
console.log("3.1")
console.log("First: ",numbers[0],"\nSecond: ",numbers[4],"\nLast: ",numbers[14])

// Todo 3.2 calculate the min, max, and the average of the numbers array
// Your code here
console.log("\n3.2")
const min = Math.min(...numbers)
console.log("Min:", min)
const max = Math.max(...numbers)
console.log("Max:", max)
let sum = 0
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}
const average = sum / numbers.length
console.log("Average:", average)

// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: 
console.log("\n3.1")
console.log("Although they are similar, they utilize difference syntaxes. Then the dynamic nature of lists in python, compared to java's fixed array size.")

// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
// Your code here
console.log("\n3.3")
const it114l = {
    courseCode: 'IT114L',
    name: 'Introduction to JavaScript',
    units: 3,
    numberOfStudents: 40
}

// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
// Your code here
console.log("\n3.4")
it114l.professor = {
    name: 'Job Lipat'
}
console.log("Professor Name:", it114l.professor.name)

// Todo 3.5 Declare and array of objects with information about the courses you are taking this term
// Your code here
console.log("\n3.5")
const courses = {
    HUM039: 3, 
    CS107L: 1, 
    CS107: 2, 
    IT132L: 1, 
    IT132: 2, 
    IT133: 3, 
    IT114L: 1, 
    IT114: 2
}

// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
// Your code here
console.log("\n3.5")
let totalUnits = 0
for (let course in courses) {
    totalUnits += courses[course]
}
console.log("Total Units:", totalUnits)

// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: 
console.log("\n3.2")
console.log("The objects in JavaScript are similar to the dictionaries Python uses, wherein curly brackets are employed instead of square brackets. However, their methods of updating values, in terms of syntax and iterating through values, may differ in methodologies.")

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here
console.log("\n3.6")
let additionalNumber = 75
let newArray = [...numbers, additionalNumber]
console.log(newArray)

// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
// Your code here
console.log("\n3.7")
const { courseCode, units } = it114l
console.log("Course Code:", courseCode)
console.log("Units:", units)
