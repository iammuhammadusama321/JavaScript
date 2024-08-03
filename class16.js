// Functions and parameter

//example

function print(){

    console.log("R")
    console.log("Y")
    console.log("A")
    console.log("N")
}

print()

//example: adding two numbers

function addTwonumbers(number1, number2){

    let result = number1 + number2
    return result
}

const result = addTwonumbers(3, 4)
console.log(result) 

//example

function displayText(username = "Sandra"){

    if(username === undefined){

        console.log("Please enter a username: ")
    }

    return `${username} just logged in`

}

console.log(displayText("Ryan"))

