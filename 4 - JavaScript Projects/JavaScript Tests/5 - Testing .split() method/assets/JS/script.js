`use strict`

// An example of a phone number
let number = "0915 939 9429"

// Turning the phone number as an Array in order to remove all the possible spaces from it.
let number_arr = number.split(" ")

console.log(number_arr);

// Changing the stored value of the number variable to "" in order to change its stored value its original value, Just without the space
number = "";

// Going through all the values in the Array 
for(let i = 0; i < number_arr.length; i++){

    // Adding all the values in the Array to each other in order to create a single string
    number += number_arr[i]

}

console.log(number);
// Turning the phone number back into a normal number, After removing the space
