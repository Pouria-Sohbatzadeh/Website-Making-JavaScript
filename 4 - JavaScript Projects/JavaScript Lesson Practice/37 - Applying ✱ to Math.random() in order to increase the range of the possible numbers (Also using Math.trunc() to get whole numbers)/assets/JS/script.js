// Math.random() normally generates a number between 0 and 1, Or 0 itself.
// By multiplying the result of Math.random() with a number, We increase the range of the possible numbers
// to be between 0, And 1 below the multiplied number, So be sure that, Let's say you want a number between 0 
// and 3, Then you multiply Math.random() by 4, So 3 is in the possible numbers.

// Also Math.trunc() is for turning the random decimal number of Math.random() whole

const random_number = Math.trunc(Math.random() * 4) // The possible number is between 0 and 3, Or 0 and 
// 3 themselves

console.log(random_number);

// But if you don't want to start from 0, Simply add a 1 to the result of the multiplication, However, This also 
// causes the biggest number to be possible from the range of numbers, So don't do the above.

const random_number_2 = Math.trunc((Math.random() * 3) + 1) // The possible number is between 1 and 3, Or 1 and 3 itself

console.log(random_number_2);