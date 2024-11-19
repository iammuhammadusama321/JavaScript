//Call and this in javascript

function SetUsername(username){

    this.username = username
    console.log("called")
}

function CreateUser(username, email, password){

    SetUsername.call(this, username)
    this.email = email
    this.password = password
}

const show = new CreateUser('Sarah', 'sarah123@gmail.com', 123)
console.log(show)