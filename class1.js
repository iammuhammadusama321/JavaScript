//starting my first class of node js its about variables and constants 

const accountId = 1234
let accountEmail = "user123@gmail.com"
var accountPassword = "12345"
accountCity = "Irving"
let accountState //its gonna be undefined

//lets try to change values

//accountId = 2 we can't change the value of constant

accountEmail = "hello@gmail.com"
accountPassword = "123"
accountCity = "Bradenton"

//lets use table for displaying multiple values

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*scope is all the data between {} we don't have to use var because its changes all the values
if try to change one, instead we will use "let" all the time*/
