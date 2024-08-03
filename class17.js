//Functions with objects and array

//example: shoppping cart

function calculateCartprice(value1, value2, ...num1){

    return num1
}

console.log(calculateCartprice(200, 400, 500, 900));

//example: passing object in function

const user = {

    name: "Ryan",
    age: 23
}

function handleObject(anyObject){

console.log(`Username is ${anyObject.name} and User's Age is ${anyObject.age}`)

}

//handleObject(user)

//passing direct object

handleObject({

    name: "Ryan",
    age: 23
})

//Example: passing array in function

const numbersArray = [200, 400, 600, 800, 1000]

function anyArray(returnLastvalue){

    return returnLastvalue[4]
}

console.log(anyArray(numbersArray))
