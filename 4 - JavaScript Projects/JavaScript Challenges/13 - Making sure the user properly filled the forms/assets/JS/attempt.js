// Checking all the forms one by one
for(let i = 0; i < forms.length; i++){

    // If the user didn't put any values in any of the forms
    if(Boolean(forms[i].value) === false){
        
        for(let r = 0; i < error_massages.length; r++){
            error_massages[i].style.display = `inline`
        }

        return
    
    }

}
// The problem here was that if only ONE of the forms was empty, Then ALL the error massages would've appeared.