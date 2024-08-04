//Control flow in javascript

//if (<, >, <=, >=, ==, !=, ===, !====)

/*const value = 37;

if(value>=30){

    console.log(`${value} is a correct answer` )
    console.log(`I'm Ryan and I make Bike and Gym content as Side Quest`)
}

else{

    console.log(`${value} is a wrong answer` )    
}

//else if

const balance = 1000

if(balance < 500){

    console.log(`Balance is less than 750`)
}

else if(balance < 700){

    console.log(`Balance is less than 850`)
}

else if(balance < 900){

    console.log(`Balance is less than 980`)
}

else {

    console.log(`Balance is less than 1000`)
}*/

//example: user is buying a course

/*let user = "Ayesha"
const isLoggedin = true
const debitCard = true
const loginFromEmail = false
const loginFromGoogle= true

if(isLoggedin && debitCard && 2==2){

    console.log(`${user} can buy the course`)
}

if(loginFromEmail || loginFromGoogle || 2==1){

    console.log(`${user} can register for the course`)
} */

//Example: switch, checking the month

/*const month = 3

switch (month) {

    case 1:

        console.log("Jan")
        break;

    case 2:

        console.log("Feb")
        break;

    case 3:

        console.log("March")
        break;

    case 4:

        console.log("April")
        break;

    default:

        console.log("No month to show")
        break;
}   */

//Truthy and Falsy Values

//T: true, "0", 'false', " ", [], {}, function(){}
//F: false, 0, -0, BigInt On, "", null, undefined, NaN

/*const userEmail = []

if (userEmail){

    console.log(`User got email`)
}
else{

    console.log(`User ain't got email`)
}

//check an empty array

if(userEmail.lenght === 0){

    console.log("Array is empty")
    
}

//check an empty object

let objOne = {}

if(Object.keys(objOne).lenght === 0){

    console.log("Object is empty")
}*/

//Nullish Caolescing Operator ?? (null, undefined)

/*let val1;
//val1 = 20 ?? 10
//val1 = null ?? 15
//val1 = undefined ?? 25
val1 = null ?? 30 ?? 35

console.log(val1)*/

//Ternary Operator

const iceTeaPrice = 100

iceTeaPrice <= 100 ? console.log("Price is 100") : console.log("More than 100")
