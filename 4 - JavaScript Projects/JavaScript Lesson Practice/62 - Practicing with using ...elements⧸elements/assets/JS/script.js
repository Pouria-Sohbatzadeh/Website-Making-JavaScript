// Creating a function that adds a 20 value to any number that's put in it

function add20(...elements){

    // Using for(){} to go through all the valus that the user could put in
    for(let i = 0; i < elements.length; i++){

        // Making sure that the value put is a number
        if(typeof elements[i] !== `number`){
            console.log(`Wrong data type`);

            return;
        }

        elements[i] += 20
    }

    return elements

}

// Sadly ...elements/elements doesn't work well with Arrays, Normally at least
console.log(add20(2, 30, 40));
// The result of the numbers that I've put in now must be 22, 50, 60