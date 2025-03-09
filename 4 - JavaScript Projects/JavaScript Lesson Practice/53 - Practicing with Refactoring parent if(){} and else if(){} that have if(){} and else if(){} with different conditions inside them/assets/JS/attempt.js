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
// The Correct Refactor

// But I want to make one more try at this, By setting the conditions of the ? in else to be NOT the condition
function categorizeNumber(num) {
    if (num > 100 || num > 50) {

        // I  Refactored the inner if(){} with each other
        if ((num % 2 === 0 && num > 100) || (num % 3 === 0 && num > 50)) {
            num % 2 === 0 && num > 100 ? console.log("Very large and even") : console.log("Moderately large and divisible by 3");;
        } 

        // Then tried to Refactor with else{} with each other
        else {
            num % 2 !== 0 && num > 100 ? console.log("Very large and odd") : console.log("Moderately large but not divisible by 3");
        }
    }
}
// Still incorrect

function categorizeNumber(num) {

    if (num > 100 || num > 50) {

        // I Refactored the if(){} and the else{} in each parent first, Then tried to Refactor the parents with each other.
        // num % 2 === 0 && num > 100 ? console.log("Very large and even") : console.log("Very large and odd");

        // num % 3 === 0 && num > 50 ? console.log("Moderately large and divisible by 3") : console.log("Moderately large but not divisible by 3");
        // Pre-Fixing
        // We have to put these in an if(){} and else if(){} so that the code after the colon is not actiaved outside the conditions we want, We also remove the connection 
        // to their parent's condition as we no longer need it thanks to the new if(){} and else if(){} for them.

        // After-fixing
        if(num > 100){
            num % 2 === 0 ? console.log("Very large and even") : console.log("Very large and odd");
        }
        else if(num > 50){
            num % 3 === 0 ? console.log("Moderately large and divisible by 3") : console.log("Moderately large but not divisible by 3");
        }

    } 
    // As I see it, I should remove the parent if(){} because I used ALL of its conditions in these new if(){} and else if(){} 
}