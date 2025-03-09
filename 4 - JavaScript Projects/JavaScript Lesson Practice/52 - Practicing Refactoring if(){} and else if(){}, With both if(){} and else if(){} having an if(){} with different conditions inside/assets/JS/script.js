// Practice 1
function checkDiscount(age) {
    if (age >= 65 || age < 18) {

        age >= 65 ? console.log("You qualify for a senior discount.") : console.log("You qualify for a youth discount.");

        if ((age > 65 && age >= 65) || (age <= 16 && age < 18)) {
            age > 65 && age >= 65 ? console.log("You are an eligible senior citizen.") : console.log("You are under 16 years old.");
        }
    }
}


// Practice 2
function checkAgeCategory(age) {
    if (age <= 12) {
        console.log("You are a child.");

        if (age < 6)console.log("You are a toddler.");
    }

    else if ((age > 12 && age <= 18) || (age > 18 && age <= 65)) {
        age > 12 && age <= 18 ? console.log("You are a teenager.") : console.log("You are an adult.");

        if ((age > 12 && age <= 16)  || (age > 18 && age > 40)) {
            age > 12 && age <= 16 ? console.log("You are a young teenager.") : console.log("You are a middle-aged adult.");
        }
    }

    else {
        console.log("You are a senior.");

        if (age > 80) {
            console.log("You are in your golden years.");
        }
    }
}
// We only Refactor a parent if(){} and else if(){}, If they have the same amount of conditions

// Practice 3
let value = 2;

if (value > 5 || value < 3) {

    value > 5 ? console.log(`values is greater than 5`) : console.log(`values is smaller than 3`) 

    if ((value > 5 && value % 2 === 0) || (value === 1 && value < 3)) {
        value > 5 && value % 2 === 0 ? console.log("Value is greater than 5 and even.") : console.log("Value is exactly 1.");
    }

} 
// Maybe instead of Refactoring the inner if(){} with each other, You can just add the condition of their parents to their brace|()| with &&, So that the if(){} only 
// activates its code if the conditions for its parent and itself are met, Like this (My method has nothing wrong with it, Just an observation):

// Practice 3, ChatGPT
// let value = 10;

// if (value > 5 || value < 3) {
//     console.log("Parent condition met.");

//     if (value > 5 && value % 2 === 0) {
//         console.log("Value is greater than 5 and even.");
//     } 
//     else if (value === 1 && value < 3) {
//         console.log("Value is exactly 1.");
//     }
// }


// Practice 4
let num = 3;
let message = "No conditions met.";

if (num % 2 === 0 || num % 2 !== 0) {
    num % 2 === 0 ? console.log("Number is even.") : console.log("Number is odd.");

    if ((num > 10 && num % 2 === 0) || (num < 5 && num % 2 !== 0)) {
        num > 10 && num % 2 === 0 ? message = "Even and greater than 10." : message = "Odd and less than 5.";
    }
} 

console.log(message);