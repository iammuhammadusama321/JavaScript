//Objects in depth

//Singleton (Constructors)
//Object.create

//Object Literals

const mySymbol = Symbol("key1")

const user = {

    name: "Ryan",
    age: 23,
    email: "ryanjohnson123@gmail.com",
    "location": "Lahore",
    isLoggedin: true,
    lastLogindays: ["monday", "saturday"],
    [mySymbol] : "mykey1" //now this is symbol as an object key

}

/*

//to access elements of object we have two methods

console.log(user.email)
console.log(user["location"])
console.log(user[mySymbol]); //calling symbol

//now we gonna make a symbol, use it as object key then print it (see above)

//now change that email

user.email = "livelongryan123@gmail.com"
console.log(user)
Object.freeze(user)
user.email = "livelongryan1234@gmail.com" //chanfe it again but it won't
console.log(user)*/

//Greeting function

user.greeting = function(){

    console.log("Hello we gonna complete JS next tuesday")
}

console.log(user.greeting()) //calling

user.greetingtwo = function(){

    console.log(`Hello ${this.name} we gonna complete JS next tuesday`)
}

console.log(user.greetingtwo())