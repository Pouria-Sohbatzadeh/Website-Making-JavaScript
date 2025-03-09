// The 1st Method is .length, This determines the number of values in the Array.

const ages = [17, 20, 45, 48]
console.log(`The Number of values in ages (${ages}) is = ${ages.length}`) // The result will be 4

// The 2nd Method is .unshift(), Which allows us to add a value to the start of the Array by putting a value in the brace|()|, It also returns ;
// the number of values in the Array

const numbers = [2, 3, 4]

numbers.unshift(1)

console.log(numbers)

// The 3rd Method is .push(), Which allows us to add a value to the end of the Array by putting a value in the brace|()|, It also returns ;
// the number of values in the Array

const number2 = [6, 7, 8]

number2.push(5)

console.log(number2)

// The 4th Method is .shift(), Which allows us to remove a value from the start of the Array, It also returns ; the removed value
const friends = [`Hajinejad`, `Sajjad`, `Soozani`]

// Though you have to store the operation in a variable in order to view the removed value
const actual_friends = friends.shift()
console.log(friends, actual_friends)

// The 5th Method is .pop(), Which allows us to remove a value from the end of the Array, It also returns ; the removed value
const colors = [`red`, `blue`, `green`]

// Though you have to store the operation in a variable in order to view the removed value
const favored_colors = colors.pop()
console.log(colors, favored_colors)

// The 6th Method is .indexOf() Method, Which allows us to determine the syntax address of our desired value, By putting the value in the brace|()|
console.log(colors.indexOf(`blue`))

// The 7th method is .includes() Method, Whcih allows us to determine whether a value is in the Array or not, By putting the value in the brace|()|
console.log(numbers.includes(10)) // The 10 value isn't in the Array of numbers, Thus the result is flase
console.log(numbers.includes(1)) // The 1 value is in the Array of numbers, Thus the result is true
