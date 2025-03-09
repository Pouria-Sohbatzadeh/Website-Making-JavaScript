// Create a JavaScript function that starts with a number and repeatedly doubles it.
// However, if the number ever becomes greater than or equal to 100, stop doubling 
// and return "Limit reached: [number]"

// Creating the function
function doubler(number){
    

    // The starting loop
    var i = 0

    while(i < 10){
        // We don't want the number to be multiplied by 2 if multiplying the number by 2 is equal or
        // greater than 100, Which means we only want the number multiplied when it's either smaller than 100,
        // or isn't 100, Both conditions work, Only need one of them
        if(number *= 2 < 100){
            // Multiplying by 2
            number *= 2
        }    
        else if(number >= 100){
            return `${number} is not valid`
        }   

        // Ending the loop
        if(number >= 100) break;
    }   
    
    return number
}

console.log(doubler(100));