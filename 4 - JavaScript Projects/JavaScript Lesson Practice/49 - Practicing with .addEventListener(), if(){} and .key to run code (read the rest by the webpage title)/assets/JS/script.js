// We apply .addEventListener() to docuemnt, With the function that we create for it having aparameter, So that the code is only run when the user clicks a key
// There unique special texts for .addEventListener() when it's applied to document, These are :
// keydown : The code is run after the user clicks the button (The most commonly used)
// keyup : The code is run after the user stops clicking the button
// keypress : The code is run when the user keeps in holding the button

const user_choice = document.querySelector(`.user_choice`)

const button = document.querySelector(`button`)

document.addEventListener(`keydown`, function(k){
    
    // Now in order for you to know the value of the key that you want the user to press, Log the parameter that you set for the function (k in this case) when it has .key 
    // applied to it.
    // Then go to the webpage, Click the button that you want the user to press, And set the value shown in the console as the condition for the .key of the parameter in 
    // if(){}, So that the code is only run IF the user presses the right button

    // Now  I want the user to press the "r" key
    console.log(k.key);
    // Went to the webpage, Pressed the "r" key, The shown value is "r". So:

    

    // Okay look I needlessly Complicated this
    // button.addEventListener(`click`, function(){
    //     user_choice.value
    // })

    
    // The 2nd condition that I had set up with && was this: user_choice.value === `Yes`
    if(k.key === `r`){
        document.querySelector(`body`).style.backgroundColor = `red`
    }
    
})

const check = document.querySelector(`.check`)

console.log(getComputedStyle(check).backgroundColor === `rgb(255, 215, 0)`);

getComputedStyle(check).backgroundColor = `rgb(255, 0, 0)`