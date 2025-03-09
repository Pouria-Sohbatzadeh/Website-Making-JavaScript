// Practice 1
function categorizeNumber(num) {
    if (num > 100) {
        if (num % 2 === 0) {
            console.log("Very large and even");
        } else {
            console.log("Very large and odd");
        }
    } 
    else if (num > 50) {
        if (num % 3 === 0) {
            console.log("Moderately large and divisible by 3");
        } else {
            console.log("Moderately large but not divisible by 3");
        }
    }
}

// Practice 2
function processNumber(num) {
    if (num > 200) {
        if (num % 5 === 0) {
            console.log("Huge and multiple of 5");
        }
        else if (num % 2 === 0) {
            console.log("Huge and even");
        }
    } 
    else if (num > 100) {
        if (num % 3 === 0) {
            console.log("Large and multiple of 3");
        }
        else if (num % 2 !== 0) {
            console.log("Large and odd");
        }
    }
}

// Practice 3
function categorizePerson(age) {
    if (age <= 12) {
        console.log("You are a child.");

        if (age < 6) {
            console.log("You are a toddler.");
        } else {
            console.log("You are a pre-teen.");
        }
    } 
    else if (age > 12 && age <= 18) {
        console.log("You are a teenager.");

        if (age <= 16) {
            console.log("You are a young teenager.");
        } else {
            console.log("You are an older teenager.");
        }
    } 
    else if (age > 18 && age <= 65) {
        console.log("You are an adult.");

        if (age > 40) {
            console.log("You are a middle-aged adult.");
        } else {
            console.log("You are a young adult.");
        }
    } 
    else {
        console.log("You are a senior.");

        if (age > 80) {
            console.log("You are in your golden years.");
        } else {
            console.log("You are an older senior.");
        }
    }
}
