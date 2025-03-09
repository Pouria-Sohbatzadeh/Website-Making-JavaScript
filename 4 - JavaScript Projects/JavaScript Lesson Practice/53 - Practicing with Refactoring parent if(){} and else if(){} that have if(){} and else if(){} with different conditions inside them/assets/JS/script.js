`use strict`

// Practice 1
function categorizeNumber(num) {
    if (num > 100 || num > 50) {


        if(num % 2 === 0 && num > 100){
            num % 2 === 0 ? console.log("Very large and even") : console.log("Very large and odd");
        }
        else if(num % 3 === 0 && num > 50){
            num % 3 === 0 ? console.log("Moderately large and divisible by 3") : console.log("Moderately large but not divisible by 3");

        }

    } 

}

// I  think we don't merge the inner if(){} of two different parents to each other (Or even the parents themselves), If there are else and else if(){} in that
//  parent (Also, My version was incorrect, Here's ChatGPT's)
function categorizeNumber(num) {

    if (num > 100) {
        console.log(num % 2 === 0 ? "Very large and even" : "Very large and odd");
    } 
    
    else if (num > 50) {
        console.log(num % 3 === 0 ? "Moderately large and divisible by 3" : "Moderately large but not divisible by 3");
    }

}

// So I learned that we don't Refactor two parent if(){} and else if(){} with each other, If they have not only if(){} in each other (Regardless of them being the same
// or not), But else if(){} and else{} as well, What we do is we Refactor the if(){} and else if(){} inside each of that parent  (Or maybe we Refactor the code in the 
// parents first and THEN we Refactor them with each other!)
// Came back here after the attempt.... Yeah we just Refactor the inner if(){}, else if(){} and else{} in them, We don't actually Refactor the parent with each other.
// The only times where we Refactor a parent if(){} and else if(){} is when they ONLY have an inner if(){} in them. 

// Practice 2
function processNumber(num) {
    if (num > 200) {

        if (num % 5 === 0 || num % 2 === 0) {
            num % 5 === 0 ? console.log("Huge and multiple of 5") : console.log("Huge and even");
        }

    } 
    else if (num > 100) {

        if (num % 3 === 0 || num % 2 !== 0) {
            num % 3 === 0 ? console.log("Large and multiple of 3") : console.log("Large and odd");
        }

    }
}

// Practice 3
function categorizePerson(age) {
    if (age <= 12) {
        console.log("You are a child.");

        age < 6 ? console.log("You are a toddler.") : console.log("You are a pre-teen.");
    
    } 
    
    else if (age > 12 && age <= 18) {
        console.log("You are a teenager.");

        age <= 16 ? console.log("You are a young teenager.") : console.log("You are an older teenager.");

    } 
    
    else if (age > 18 && age <= 65) {
        console.log("You are an adult.");

        age > 40 ? console.log("You are a middle-aged adult.") : console.log("You are a young adult.");

    } 
    
    else {
        console.log("You are a senior.");

        age > 80 ? console.log("You are in your golden years.") : console.log("You are an older senior.");
   
    }
}