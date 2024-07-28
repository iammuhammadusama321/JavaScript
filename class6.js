//Data types of javascript summary

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const characters = ["Thomas Shelby", "Jon Snow", "Jesee Pinkman"]

let myObj = {

    name: "Usama",
    age: 23,
}

let myFunction = function(){

    console.log("Hello World")
}

console.log(typeof anotherId);
