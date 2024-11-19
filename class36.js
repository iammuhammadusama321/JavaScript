//OOP in js

const user = {

    username: "Ryan",
    age: 23,
    loggedIn: true,

    getUserDetails: function(){

        console.log(this)
    }

}

console.log(user.username)
console.log(user.getUserDetails())

function UserData (username, loginCount, isLoggedin){

    this.username = username
    this.loginCount = loginCount
    this.isLoggedin = isLoggedin

    this.greeting = function(){

        console.log(`Welcome ${this.username}`)
    }

    return this
}

const userOne = new UserData("Ryan", 23, true)
const userTwe = new UserData("Usama", 23, true)

console.log(userOne.constructor)
//console.log(userTwe)

//text

/*# javascript and classes

## OOP

## Object
- collection of properties and methods
- toLowerCase

## why use OOP

## parts of OOP
Object literal 

- Constructor function
- Prototypes
- Classes
- Instances (new, this)


## 4 pillars
Abstraction
Encapsulation
Inheritance
Polymorphism*/