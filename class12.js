//Array part 2

const marvel_heroes = ["Thor", "Antman", "Iron-Man"]
const dc_heroes = ["Superman", "Batman", "Flash"]
const season_heros = ["Thomas Shelby", "Gustavo Fring", "Jon Snow"]

//using push

/*marvel_heroes.push(dc_heroes)
console.log(marvel_heroes);
console.log(marvel_heroes[3][1]);*/

//using concat 

const allHeros = marvel_heroes.concat(dc_heroes)
console.log(allHeros)

//using dot method to combine arrays

const allnewHeros = [...marvel_heroes, ...dc_heroes, ...season_heros]
console.log(allnewHeros)

//.flat: to spread all the elements of an array

const anotherArray = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10, [11, 12]]] 
const realArray = anotherArray.flat(Infinity)
console.log(realArray)

//.isArray to check if its an array

console.log(Array.isArray("Scott"))

//to make
console.log(Array.from("Kevin"))

//interesting for interview, it will return the empty brackets so we need to identify the key

console.log(Array.from({name: "Ryan"}))

//we can also write Array.of

let scoreone = 100;
let scoretwo = 200;
let scorethree = 300;
let scorefour = 400;

console.log(Array.of(scoreone, scoretwo, scorethree, scorefour))