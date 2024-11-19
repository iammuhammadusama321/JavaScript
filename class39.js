// //Class constructor and static 

// class User {

//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//         //method (refer as function in a class)

//         encryptPassword(){

//             return `${this.password}xyz`
//         }
//         changeUsername(){

//             return `${this.username.toUpperCase()}`
//         }
// }

// const show = new User("Ryan", "ryan123@gmail.com", "123")
// console.log(show.encryptPassword())
// console.log(show.changeUsername())

//About Inheritance

// class User{
//     constructor(username){
//         this.username = username
//     }
//     logMe(){
//         return `Username is ${this.username}`
//     }

// }

// class Teacher extends User{

//     constructor(username, email, password){

//         super(username)
//         this.email = email
//         this.password = password
//     }

//     addCourse(){
//         console.log(`A new course was added by ${this.username}`)
//     }
// }

// const show = new Teacher ("Ryan", "ryan123@gmail.com", 123)
// show.addCourse()

// const showtwo = new User('Usama')
// showtwo.logMe()

//Static Prop

console.log("Static Properties")

class User {

    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`)
    }
    static createID(){ //static is used to not give access to every object
        return 123
    }
}

const usama = new User("Usama")
//console.log(usama.createID());

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }

}
const teacherDetails = new Teacher("Hassan", "hassan123@yahoo.com")
teacherDetails.logMe()
