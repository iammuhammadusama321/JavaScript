//Strings in Javascript

const name = "Usama"
const repoCount = 50

//we can do like
//console.log(name + " " + repoCount + " value")
//but not the best case scenario

//one method 

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

//another method

const anotherString = new String('JahsehOnfroy')

//using some build-in string functions

console.log(anotherString.length)
console.log(anotherString.toUpperCase())
console.log(anotherString[3])
console.log(anotherString.__proto__)
console.log(anotherString.charAt(4))
console.log(anotherString.indexOf('f'))
console.log(anotherString.substring(0, 6))

//using slice by new variable

const stringOne = new String('RyanMiller')
const stringTwo = stringOne.slice(-9, 3)

console.log(stringTwo)

//using trim by new variable

const stringThree = new String('      Thomas      ')
console.log(stringThree)
console.log(stringThree.trim())

//using replace 

const url = "https://webwiseworks%20reactjs.com"
console.log(url.replace('%20', '_'))

//include 

console.log(url.includes('wise'))
console.log(url.includes('gaymax'));

//using split with a new variable

const stringFive = new String('Im-Gonna-Be-There')
console.log(stringFive.split('-'))

const stringSix = new String('Going_to_buy_a_new_Car')
console.log(stringSix.split('_'))

//Note: this is an object so we're not getting original value we're getting a reference aka Heap