//Stack and Heap memory in javascript

//Stack (Primitive Data Types)
//Heap (Non Primitive Data Types)

let myUsername = "Usama123"

let anotherName = myUsername
anotherName = "Usama321"

console.log(myUsername); 
console.log(anotherName);

//In Stack we get the copy of original data type

let userOne = {

    name: "Usama",
    email: "usamaaslam123@gmail.com",

}

let userTwo = userOne
userTwo.email = "livelongusama123@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

//In heap we get the same reference of original value


