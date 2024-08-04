//Immediately Invoked Function Expressions

//To remove the global scope pollution or variables, we use IIFE to execute functions

(function usingIIFE () {

    console.log("DB: Connected")
})();

//now an arrow function with IIFE

((name) => {    //argument

    console.log(`DB2: Connected ${name} `) //variable
})('Usama') //parameter

//so after invoking a function with IIFE we have to use semicolon at the end 
//first one is named IIFE second is unnamed IIFE

