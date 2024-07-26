//Datatype conversion confusion

//1 convert string in number

let score = false //true, string, null, undefined

console.log(typeof score)

let changeType = Number(score) 

console.log(typeof changeType);

console.log(changeType);  

//2 boolean check

let a = ""

let b = Boolean(a)
console.log(b)

//1 => true; 0=>false
//"" => flase
//"Usama" true

//3 convert number into string

let num = 23

let stringnum = String(num) 

console.log(stringnum)

console.log(typeof stringnum)