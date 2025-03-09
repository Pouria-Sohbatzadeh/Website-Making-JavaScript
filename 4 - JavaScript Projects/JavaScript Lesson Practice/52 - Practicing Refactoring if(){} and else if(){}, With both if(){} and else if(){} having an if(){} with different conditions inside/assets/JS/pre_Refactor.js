// Practice 1
function checkDiscount(age) {
    if (age >= 65) {
        console.log("You qualify for a senior discount.");

        if (age > 65) {
            console.log("You are an eligible senior citizen.");
        }
    }

    else if (age < 18) {
        console.log("You qualify for a youth discount.");

        if (age <= 16) {
            console.log("You are under 16 years old.");
        }
    }
}

// Practice 2
function checkAgeCategory(age) {
    if (age <= 12) {
        console.log("You are a child.");

        if (age < 6) {
            console.log("You are a toddler.");
        }
    }

    else if (age > 12 && age <= 18) {
        console.log("You are a teenager.");

        if (age <= 16) {
            console.log("You are a young teenager.");
        }
    }

    else if (age > 18 && age <= 65) {
        console.log("You are an adult.");

        if (age > 40) {
            console.log("You are a middle-aged adult.");
        }
    }

    else {
        console.log("You are a senior.");

        if (age > 80) {
            console.log("You are in your golden years.");
        }
    }
}

// Practice 3
let value = 10;

if (value > 5) {
    console.log(`values is greater than 5`)
    if (value % 2 === 0) {
        console.log("Value is greater than 5 and even.");
    }
} else if (value < 3) {
    console.log(`values is smaller than 3`) 
    if (value === 1) {
        console.log("Value is exactly 1.");
    }
}

// Practice 4
let num = 8;
let message = "No conditions met.";

if (num % 2 === 0) {
    console.log("Number is even.");

    if (num > 10) {
        message = "Even and greater than 10.";
    }
} else if (num % 2 !== 0) {
    console.log("Number is odd.");

    if (num < 5) {
        message = "Odd and less than 5.";
    }
}

console.log(message);
