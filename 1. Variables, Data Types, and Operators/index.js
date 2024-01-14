/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here
console.log("1.1")
var a = 1
console.log("Assigned: ", a)
console.log("Unassigned: ", b)
var b = 1;

// TODO 1.2 Use the let keyword to define a variable.
// Your code here
console.log("\n1.2")
let c = 2
console.log("Assigned: ",c)
try {
    console.log("Reassigned: ", d)
    d = 3
} catch {
    console.log("Value Error")
}

// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here
console.log("\n1.3")
const e = 3
console.log("Assigned:  ",e)
try {
    e = 4
} catch {
    console.log("Reassignment Error\n")
}

// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: 
console.log("\n1.1")
console.log("var = would be considered as a global variable. So when assigning a value to var and printing the value, it will either display the value or as undefined depending on the placement of the value.")
console.log("let = would be considered as a local variable. Whereby assigning a value after printing it would lead to an error as they are not defined.")
console.log("const = unlike var and let. Once defining the variable under const, the value will not be able to change or be modified.")

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here
console.log("\n1.4")
const add = 1 + 2
console.log("\nAdding: ", add)
const string = "Value: Hello " + "World"
console.log(string)
const truth = "cat" || "dog"
console.log("Truth Value: "+truth)
const first = 1
const second = 2
const third =3
const output = first + (second * third)
console.log("Group:"+output)

// Checkpoint 1.2 What operators did you use?
// Answer: 
// Your code here
console.log("\n1.2")
console.log("Logical, String, Grouping, and Arithmatic operators. Logical operators represents as either true or false. String operators typically are ones that concatenates two string values together. Grouping which is represented as parenthesis, where by it would group expressions, and Arithmatic operatios commonly for mathematics.")

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here
console.log("\n1.5")
console.log("string " + "value")
var ass1 = "beta "
var ass2 = "alpha"
ass1 += ass2
console.log(ass1)

// Checkpoint 1.3 What operators did you use?
// Answer: 
console.log("\n1.3")
console.log("The concatanation operator which enables the user to join two string, and the assignment operator that works similarly, except it is capable of joining two values together.")

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here
console.log("\n1.6")
const and = true && false
const or = true || false
const not = true && !false
console.log(and)
console.log(or)
console.log(not)

// Checkpoint 1.4 What operators did you use?
// Answer: 
console.log("\n1.4")
console.log("And, Or, and Not operators. The And statement is able to return true once both values are true, otherwise false. And the Or statement returns true if either value is true, and if both are false, it ill return false. Lastly, the Not converts the truth value to its opposite value. So if !true is defined, then it is considered as false.")

// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators
console.log("\n1.7")
const colors = ["red","blue","yellow"]
c1 = 0 in colors
c2 = 2 in colors
c3 = 3 in colors
console.log(c1,"\t",c2,"\t",c3)

// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: 
// Your code here
console.log("\n1.5")
console.log([] == false)
console.log("The reason as to why the expression evaluates to true, would be that by comparison. An empty list is considered as a primitive value, thus it is treated as an empty string. Thus when validating the empty string which has a boolean value of false with false, it will result as true.")