//High Order Array loops

//for of

const numberArray = [1, 2, 3, 4, 5]

for (const num of numberArray) {

    //console.log(`Values of Array = ${num}`)
    
}

const stringArray = "SZA"

for (const str of stringArray) {

    //console.log(`Values of Array = ${str}`)
    
}

//for of loop on maps

const map = new Map()

map.set('PK', "Pakistan")
map.set('JP', "Japan")
map.set('USA', "United States of America")

for (const [key, value] of map) {
    
    //console.log(key, ":-", value)
}

//for in loop for object, because for of can't be used for objects

const myObject = {

    js: "JavaScript",
    py: "Python",
    re: "Ruby",
    cpp: "C++"
}

for (const key in myObject) {

    //console.log(`Shortcut for ${key} is = ${myObject[key]}`)
   
}

//for in loop for arrays

const programming = ["JS", "RE", "PY", "CPP"]

for (const key in programming) {
    
    //console.log(`Values in array = ${programming[key]}`)
}

//for each loop

//with function

const coding = ["JS", "RE", "PY", "CPP"]

coding.forEach(function (val){

    //console.log(`Value in array using for each = ${val}`)

})

//with arrow function

const codingalso = ["JS", "RE", "PY", "CPP"]

coding.forEach( (valTwo) => {

    //console.log(`Value in array using for each = ${valTwo}`)

} )

//finding the value of an object in array using for each

const arrayObject = [

    {
        languageName: "JavaScript",
        languageFileName: "Js"
    },

    {
        languageName: "React",
        languageFileName: "Re"
    },

    {
        languageName: "JavaScript_Backend",
        languageFileName: "Js_Backend"
    },
]

//with arrow function

arrayObject.forEach( (item) => {

    console.log(item.languageName)

})











