`use strict`

// The name of the user
const user_name = document.querySelector(`.user_form__name`)

// Send
const send = document.querySelector(`.user_form__button`)

send.addEventListener(`click`, function(){

    // Making sure that the name the user put in isn't Michael
    if(user_name.value === `Michael`){
        console.log(`Unacceptable!`);

        return
    }

    console.log(`Hello to you ${user_name.value}`);

})