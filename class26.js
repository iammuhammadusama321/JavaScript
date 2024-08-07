//Filter map and reduce in javascript

//for each loop does not return values

// const coding = ["JS", "React", "JS-Backend"]

// const values = coding.forEach( (item) => {

//     //console.log(item)
//     return item
// })

//console.log(values)

//Filter (requires call back means arrow function)

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//  const val = myNums.filter((num) => {

//   return num > 4

// } )

//console.log(val) 

//filter with for each (requires call back means arrow function)

//second option if good with filter then go otherwise this would be our second option

// myNums.forEach((num) => {

//     if(num > 4){

//         myNums.push(num)
//     }

// })

//console.log(myNums)

//Example

// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

//   let userBooks = books.filter( (bk) => bk.genre === 'History')

//   userBooks = books.filter( (bk) => { 
//     return bk.publish >= 1995 && bk.genre === "History"
// })
//   console.log(userBooks);

//we have to use return when we will start the scope otherwise values won't print 

//map

//let newNums = [1, 2, 3, 4, 5]
//let addedValues = newNums.map((num) => {

   // return num = num + 2
//})

//console.log(addedValues)

//chaining

//let addedValues = newNums
                        // .map((num) => num * 10)
                        // .map((num) => num + 1)
                        // .filter((num) => num > 11)
//console.log(addedValues)

//reduce

//const myNumsOne = [1, 2, 3]

//const myTotal = myNumsOne.reduce(function(accumulator, current_value){

    //console.log(`Accumulator is = ${accumulator} and Current Value = ${current_value}`)
    //return accumulator + current_value

//}, 0 ) //function value

//console.log(myTotal)

//now with arrow function

//const myTotal = myNumsOne.reduce((acc, cur) => acc + cur , 0)
//console.log(myTotal)   

//Shpping Cart

const shoppingCart = [

    {
        itemName: "JavaScript Course",
        price: 2999
    },

    {
        itemName: "Python Course",
        price: 999
    },

    {
        itemName: "Mobile Dev Course",
        price: 7999
    },

    {
        itemName: "Data Scientist Course",
        price: 12999
    }

]

const totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )
console.log(totalPrice)



