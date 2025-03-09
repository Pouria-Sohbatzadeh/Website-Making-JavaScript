
// Creating the function
function determine(number){

    // If the number divided by 2 is equal to dividing the number by 2 and then turning it into a whole number
    if(number / 2 === Math.trunc(number / 2)){
        return `Even`;
    }
    // If the number divided by 2 is NOT equal to dividing the number by 2 and then turning it into a whole number
    else if(number / 2 !== Math.trunc(number / 2)){
        return `Odd`;
    }

}