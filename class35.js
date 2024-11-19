//https://jsonplaceholder.typicode.com/users dummy data

//promise 1

const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //like DB calls, cryptography, network

    setTimeout(() => {

        console.log("Async task is complete")
        resolve()
    }, 1000)
})
promiseOne.then(function(){

    console.log("Promise is complete")
})

//promise 2

new Promise(function(resolve, reject){

    setTimeout(function(){

        console.log("Async Task 2 Complete")
        resolve()

    }, 1000)

}).then(function(){
    console.log("Async 2 resolved")
})

//Promise 3

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Ryan", email: "abc123@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user)  
})

//promise 4

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Ryan", password: "123"})
        }
        else{
            reject("Error: somthing went wrong")
        }  
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) =>{
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(() => console.log("The promise is either resloved or rejected"))

//promise 5

const promiseFive = new Promise(function(resolve, reject){
        
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "Usama", password: "123"})
        }
        else{
            reject("Error: somthing went wrong")
        }  
    }, 1000)
})
//another way

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()

async function getALlUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
    }
    catch(error) {
        console.log("E: ", error)
    }
}
getALlUsers()

//another way
fetch('https://jsonplaceholder.typicode.com/users')
.then(() => {
    return response.JSON()
})
.then((data) =>{
    console.log(data)
})
.catch((error) =>{
    console.log(error)
})