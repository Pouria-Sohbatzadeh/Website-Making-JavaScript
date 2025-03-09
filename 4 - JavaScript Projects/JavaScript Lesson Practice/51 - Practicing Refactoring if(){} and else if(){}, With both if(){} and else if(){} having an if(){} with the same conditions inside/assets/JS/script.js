`use strict`

// Practice 1
function checkNumber(num) {
    if (num > 10 || num <= 10) {

        if (num % 2 === 0) {
            num > 10 ? console.log("Greater than 10 and even") : console.log("10 or less and even");;
        } 
        else {
            num > 10 ? console.log("Greater than 10 and odd") : console.log("10 or less and odd");
        }

    } 
}


// Practice 2
function processValue(value) {
    if (value > 50 || value <= 50) {

        if (value % 5 === 0) {
            value > 50 ? console.log("Large and divisible by 5") : console.log("Small and divisible by 5");
        } 
        else {
            value > 50 ? console.log("Large but not divisible by 5") : console.log("Small but not divisible by 5");
        }

    } 

}