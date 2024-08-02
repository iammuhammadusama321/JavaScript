//Objects in Javascript part 2 

//Singelton Objects (using constructors)

//const webWiseworks_user = new Object() //thats singleton

const webWiseworks_user = {} //that's non singleton

webWiseworks_user.id = 123
webWiseworks_user.name = "Ryan"
webWiseworks_user.isLoggedin = false

//console.log(webWiseworks_user)

//example, lets make an object into object

const regularUser = {

    email: "him6969@gmail.com",
    fullName : {

        userfullName : {

            firstname: "Ryan",
            lastname: "Johnson"
        }
    }
}

console.log(regularUser.fullName.userfullName.lastname)

//assembling object values

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}
const obj4 = {7: "g", 8: "h"}

//const obj5 = Object.assign({}, obj1, obj2, obj3, obj4)
//console.log(obj5);

//another method we gonna use it 90% of times

const obj5 = {...obj1, ...obj2, ...obj3, ...obj4}
console.log(obj5);


//when we get data from database its in array object for

const users = [

    {

        hisName: "Usama",
        hisEmail: "s@yahoo.com"
    },
    {

        hisName: "Usama",
        hisEmail: "s@yahoo.com"
    },
    {

        hisName: "Usama",
        hisEmail: "s@yahoo.com"
    },
    {

        hisName: "Usama",
        hisEmail: "s@yahoo.com"
    }

]

users[1].hisEmail

console.log(webWiseworks_user)
//find object keys
console.log(Object.keys(webWiseworks_user))
//find object values
console.log(Object.values(webWiseworks_user))
//find object entries
console.log(Object.entries(webWiseworks_user))
//check if particular object has the entry
console.log(webWiseworks_user.hasOwnProperty('id'))
console.log(webWiseworks_user.hasOwnProperty('gentleWorld'))



