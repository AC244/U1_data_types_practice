/*
 * Prompt 1:
 *
 * Declare a variable called myFavoriteSong on one line and console.log the value
 * Then, using your Literals, console.log "my favorite song is..." with the song's value
 */
const myFavoriteSong = "No Tellin"
console.log(`my favorite song is ${myFavoriteSong}`)
/*
 * Prompt 2:
 *
 * Create 3 variables using let and const, then console.log each of them, using a string literal (` ${} `} in the log
 */
 const myName = "Aaron"
 let myAge = 21
 const myFavoriteFood = "pizza"

 console.log(`hello my name is ${myName} and I am ${myAge} years old and I love to eat ${myFavoriteFood}`)
 
/* Prompt 3:
 /*
/* //Create a variable and assign a number to it. On a separate line for each, using console.log:
 *  // - add a number to your variable
 *  // - subtract a number from your variable
 *  // - multiply your variable by 3
 *  // - divide your variable by 7
 *  // - calculate the remainder of dividing your variable by 2
 */
let myDog = 3
console.log(10 + myDog)
console.log(25 - myDog)
console.log(myDog*3)
console.log(myDog / 7)
console.log(myDog % 2)
/*
 * Prompt 4:
 *
 * Create a variable called firstName and assign it to a string of your first
 * name. Create a variable called lastName and assign it to a string of your
 * last name.
 *
 * Create a variable called fullName and use addition to combine your firstName
 * and lastName variables.
 * Run a console.log that says 'hello my name is..." with your fullName. 
 */
 let firstName = "Aaron"
 let lastName = "Carter"
 let fullName = firstName + " " + lastName
 console.log(`hello my name is ${fullName}`)
/* Arrays */

// Prompt 5
// Create an array of Movies, then log the 2nd movie in your array
// Use your array methods to add a movie in to the Front of the array, then the Back of the Array, then to the 2nd index point of the array
let movies = ['Endgame', 'Infinity War', 'Inception']
console.log(movies[1])

movies.unshift('The Maze Runner')
console.log(movies)

movies.push('The Hunger Games')
console.log(movies)

movies.splice(1, 0, 'Pulp Fiction')
console.log(movies)


/*
 *
 * Prompt 6 - Retrieve "Marty McFly" from each of the arrays below.
 */

let array1 = ['Marty Marion', 'Marty Feldman', 'Marty McFly', 'Marty Marion'];
let array2 = [
  ['Marty Feldman', 'Marty Marion'],
  ['Marty Stuart', 'Marty McFly'],
  ['Marty Jannetty', 'Marty Robbins']
];
let array3 = [
  ['Marty Feldman', ['Marty Marion']],
  ['Marty Stuart', ['Marty Janetty', ['Marty McFly'], 'Marty Robbins']]
];
//array1 [2]
console.log(array1[2])
//array2  [2][1]
console.log(array2[1][1])
//array3[1][1][1][0]
console.log(array3[1][1][1][0])
/* Prompt 7 
Use the length of the array below to retrieve the second to last item.
 */

let array4 = ['a', 'b', 'c', 'd', 'e'];
let answer = array4[array4.length -2]
console.log(answer)
//
 /* Prompt 8
 * Use the following arrays to answer the subprompts below.
 */

let thom = ['Thom', 1000, 'Christchurch'];
let karolin = ['Karolin', 16, 'New York'];
let kristyn = ['Kristyn', 5, 'Pittsburgh'];
let cathleen = ['Cathleen', 186, 'New York'];

// Cathleen decides that Thom can't be named "Thom" anymore. Remove "Thom" from
// the thom array and replace it with "Tom".
thom[0] = 'Tom'
// Karolin just had her birthday; change Karolin's array to reflect her being
// a year older.
karolin.splice(1,1)
karolin.splice(1,0,17)
// Change Cathleen's hometown from New York to "Gotham City".
cathleen[2] = 'Gotham City'
// Remove "Pittsburgh" from Kristyn's array and add "Oakland".
kristyn[2] = 'Oakland'

console.log(thom)
console.log(karolin)
console.log(kristyn)
console.log(cathleen)