// Practice 1
let number = 10;

if (number > 0) {
    console.log("Positive number");
    
    if (number % 2 === 0) {
        console.log("Even number");
    }
} 
else if (number < 0) {
    console.log("Negative number");
} 
else {
    console.log("Zero");
}

// Practice 2
let age = 66;

if (age >= 18) {
    console.log("Adult");

    if (age >= 65) {
        console.log("Senior Citizen");
    }
} 
else if (age > 12) {
    console.log("Teenager");
} 
else {
    console.log("Child");
}