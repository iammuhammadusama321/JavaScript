//Object de-structure and JSON API

//Object de-structure 

const course = {

    courseName: "JS Complete Frontend",
    coursePrice: 10000,
    courseInstructor: "Ryan Miller"
}

const {courseInstructor: professor} = course
//console.log(courseInstructor)
console.log(professor)

//JSON FORMAT

/*{

    "name" : "ryan",
    "age" : 23,
    "monthly income" : 1000000
}

[

    {},
    {},
    {}
]

*/

