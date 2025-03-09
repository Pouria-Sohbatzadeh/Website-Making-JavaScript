`use strict`

// All the forms
const forms = document.querySelectorAll(`.input_form`)

// All error massages
const error_massages = document.querySelectorAll(`.error_massage`)

// // Name Form
const user_name_form = document.querySelector(`.forms__name`)

// Name Error massage
const name_error = document.querySelector(`.forms__error_name`)

// Phone form
const user_phone_form = document.querySelector(`.forms__phone`)

// Phone Number Error Massages
const phoneNum_error = document.querySelector(`.forms__error_phoneNum`)

// Email form
const user_email_form = document.querySelector(`.forms__email`)

// Email Error Massages
const email_error = document.querySelector(`.forms__error_email`)

// Initial password form
const user_password_form = document.querySelector(`.forms__password`)

// Repeat password form
const user_password_repeatForm = document.querySelector(`.forms__password_repeat`)

// Password Error Massages
const password_error = document.querySelector(`.forms__error_password`)

// Send Button
const button = document.querySelector(`.forms__submit`)

function reveal_error(error){
    error.style.display = `inline`
}

function disappear_error(error){
    error.style.display = `none`
}

button.addEventListener(`click`, function(){
    // Checking all the forms one by one to see whether they're empty or not (We need to do them one by one, So ONLY their error massage appears)
    if(Boolean(user_name_form.value) === false){
        reveal_error(name_error)
    }

    if(Boolean(user_phone_form.value) === false){
        reveal_error(phoneNum_error)
    }

    if(Boolean(user_email_form.value) === false){
        reveal_error(email_error)
    }
    
    if(Boolean(user_password_form.value) === false||Boolean(user_password_repeatForm.value) === false){
        reveal_error(password_error)
    }

    // The name the user put in
    const user_name = user_name_form.value

    // Checking if the name put in was long enough
    if(user_name.length <= 3){
        reveal_error(name_error)
    }
    else if(user_name.length > 3){
        disappear_error(name_error)
    }

    // The Phone Number the user put in
    const user_phone = user_phone_form.value
    
    // User's phone number without space
    const user_phoneNoSpce = user_phone.replace(/\s/g, '')
    
    // If the user didn't put a proper phone number in
    if(user_phone[0] + user_phone[1] + user_phone[2] !== `915`|| user_phoneNoSpce.length !== 10){
        reveal_error(phoneNum_error)
    }
    else if(user_phone[0] + user_phone[1] + user_phone[2] === `915` && user_phoneNoSpce.length === 10){
        disappear_error(phoneNum_error)
    }

    // The email the user put into the form
    const user_email = user_email_form.value

    // If user's email didn't have an @ or dominion
    if(!user_email.includes(`@`) || !user_email.includes(`.com`) || !user_email.includes(`.ir`)){
        reveal_error(email_error)
    }
    else if(user_email.includes(`@`) && (user_email.includes(`.com`) || user_email.includes(`.ir`))){
        disappear_error(email_error)
    }

    // The password the user put in the form
    const user_password = user_password_form.value

    // The password that the user put in the form again
    const user_password_repeat = user_password_repeatForm.value

    // Making sure the user properly remembers his password
    if(user_password !== user_password_repeat || (user_password === user_password_repeat && Boolean(user_password) !== false)){
        user_password !== user_password_repeat ? reveal_error(password_error) : disappear_error(password_error);
    }

    // Making sure the code doesn't procede if one of the
    for(let i = 0; i < forms.length; i++){

        // If the user didn't put any values in any of the forms
        if(Boolean(forms[i].value) === false){
            
            return
        
        }
    
    }
    // The problem with this code is that if even ONE form is empty,  Then it will not allow the appearance or removal of the error massages (Yu have to put it at the bottom)


})