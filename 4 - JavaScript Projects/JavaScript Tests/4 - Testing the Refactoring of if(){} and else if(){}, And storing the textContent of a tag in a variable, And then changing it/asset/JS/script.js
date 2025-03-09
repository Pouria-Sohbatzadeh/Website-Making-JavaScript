// The tag that the user puts content into
const user_numberTag = document.querySelector(`.form__user_number`)

// The Score's Tag
const scoreTag = document.querySelector(`.score`)

// The Score
var score = Number(document.querySelector(`.score`).textContent)

document.querySelector(`.form__button`).addEventListener(`click`, function(){
    // The content that the user put in the form
    var user_number = Number(user_numberTag.value)

    if(user_number > 20||user_number < 20 && user_number !== 0 && Boolean(user_number) !== false){
        // The massage 
        user_number > 20 ? console.log(`Too high`): console.log(`Too small`);
        // Also, I now know that I don't have to worry about the ? operator activating in situations where the user_number isn't either greater or smaller than 20

        // Reducing the score (The automatic data type changing of -- is at work)
        // This line of text is suppoed to change the score (In the webpage) to be 1 less, Yet it doesn't
        // score--
        // Let me write its equivalent
        // document.querySelector(`.score`).textContent -- 

        // Appearantly, If you store a specific part of a tag (Its textContent, value, etc...) in a variable, Then all you do is store the value in the variable, And NOT
        // the code document.querySelector(`.score`).textContent, Just its result, All changing the stored value after that point does is effect the stored value of the 
        // variable, Not the tag, The "equivalent" that I wrote above is wrong.
        // If you want it to work, You have to write it like this:
        score--
        scoreTag.textContent = score

        // In short, If you store document.querySelector(``).textContent in a variable, And then change the stored value of the variable, It won't affect the text of the tag,
        // Becuase the value that's stored in the variable is the result of document.querySelector(``).textContent, Not the code itself.
        

        // Changing the .scoreTag tag so that the reduced score is shown in place of the text of .scoreTag
        // scoreTag.textContent = score
    }
})

