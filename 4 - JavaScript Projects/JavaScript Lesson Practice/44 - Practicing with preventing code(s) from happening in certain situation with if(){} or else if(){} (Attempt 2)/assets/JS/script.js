// You need to write a function that validates an email address. The function should:

// 1-Check if the email contains an "@" symbol. If it doesn't, prevent further processing and log a message saying
// that the email is invalid.
// 2-Check if the email contains a domain (e.g., .com, .org, etc.). If not, prevent further processing and
// log a message saying that the domain is missing.
// If both checks pass, log a success message saying that the email is valid.

// Creating the function
// First, It must take the class name of the div tag that holds the input
function emailCheck(div_name){
    // It must take the .value of a tag after the send button is clicked, And then determine whether the email 
    // fills the conditions 
    document.querySelector(`.${div_name}__button`).addEventListener(`click`, function(){
        const user_email = document.querySelector(`.${div_name}__email`).value

        // If the email doesn't have an @
        if(!user_email.includes(`@`)){
            console.log(`the email is invalid`);
            return;
        }
        // Checking if the email has a domain (.com, .org)
        else if(user_email.includes(`.com`) || user_email.includes(`.org`)){
            
            console.log(`The email is valid`);

        }
        // In case it doesn't have a domain
        else{
            console.log(`the domain is missing`);
        }
    })

}

emailCheck(`form`);

var number = 14

for(var i = 0; i <= 25; i++){
	if(number !== 0){
		number--
	}
}

console.log(number);
