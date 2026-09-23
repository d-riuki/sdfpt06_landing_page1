// two slashes in js represent a code comment 
// to run a js file use the node command followed by the file name 
// node script.js
// print js execution using node on the terminal
console.log("This is my first JS script!")
// notation on what data type best represents a value 
// data type : format/nature of data 
// JS organizes its data types into two variations a. Non-primitive (single values rep collection of data)
//  b. Primitive (single values) 
// variables allow us to store and reference data within a programming script.
// In JS we can represent variables in two ways 
// - let keyword (mutable - change) - const keyword (immutable - no changes)
// let number - defines mutable variable 
// let number = 10 : number has a value , 10 , 
// const number - 10 
// Primitive data types
let number = 10 // integer variable (number)
let fullname = "Joseph Mbugua" // string variable (sequence of characters enclosed inside quotes)
let temperature = 32.0 // float (number) - represents decimal notations 
let isActive = true // boolean variable = equates to true or false 
let undefined_variable  // variable that is of the undefined data type 
let empty = null // represents value absence for a variable 
// non primitive data types (collections)
// 1. Object data type - representation of key and value pairs 
const student = {
    "name" : "Joseph Mbugua",
    "admissionNo" : 3456,
    "course_enrolled" : "Software Development",
    "is_added_to_lms" : false,
    "clubs" : ["Simba Club","Journalism"]
}
// 2. Array -list  (collection of similar or different elements/values)
const fruits = ["Apple","banana", "Orange"]
const random = [true, "Strings" , 3.45]
console.log(number)
number = 20
console.log(number)
console.log(fullname)
fullname = true
console.log(fullname)
// immutability
console.log(fruits)
// fruits = "Pear"
// console.log(fruits)
fruits[0] = "Pear"
console.log(fruits)
// fruits = ["volvo","toyota"]
// console.log(fruits)
let sum = 0 
sum = 10 + 10 
console.log(sum)
sum = sum + 20 
console.log(sum)
sum = 100 + 100
console.log(sum)
// functions in programming : a block of code that returns a single a value 
// .js arrow functions or named functions // used to make work modular (reusablity)
function add_numbers(a,b){
    return a + b 
}
// to call a function use the name of the function followed by its brackets : add_numbers()
console.log(add_numbers(10,20))
console.log(add_numbers(100,200))
console.log(add_numbers(-10,-20))