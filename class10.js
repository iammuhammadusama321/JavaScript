//Dates

/*const myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)*/

//to create custom date

//let myCreatedDate = new Date(2023, 0, 23, 5, 3) //year, month, date, hour, minutes
let myCreatedDate = new Date("03-23-2023")
//console.log(myCreatedDate.toLocaleString());

//Time Stamp

/*let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));*/

const newDate = new Date()
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

//obj

newDate.toLocaleString( 'default', {

    weekday: "long"
}


)