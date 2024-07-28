//Number and Maths in Javascript

/*const score = 300
console.log(score)

const balance = new Number(500)
console.log(balance)

//changing number to string

console.log(balance.toString())
console.log(typeof balance)
console.log(balance.toFixed(3)) //for decimals

//some more properties

const otherNumber = new Number(300.567)
console.log(otherNumber.toPrecision(4)) //priority for first numbers

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))

//Maths

console.log(Math) //type this on console to get all the functions

console.log(Math.abs(-3))
console.log(Math.round(6.5))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.3))
console.log(Math.min(3, 9, 7, 11))
console.log(Math.max(9, 7, 1, 2)) */

console.log("About Random Number between 0-1")
console.log(Math.random())
console.log( (Math.random()*10) + 1) //just to avoid 0.1 condition
console.log( Math.floor (Math.random()*10) + 1)

const min = 10
const max = 20

console.log( Math.floor (Math.random() * (max - min + 1)) + min)