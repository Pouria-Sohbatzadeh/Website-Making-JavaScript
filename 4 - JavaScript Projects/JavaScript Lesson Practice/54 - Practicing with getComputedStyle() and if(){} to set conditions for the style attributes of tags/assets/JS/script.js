// The modal
const modal = document.querySelector(`.modal`)

// The button
const button = document.querySelector(`.button`)

// Setting the .button tag as the button that disappears the modal when it's clicked on
button.addEventListener(`click`, function(){
    
    var modal_displayState = getComputedStyle(modal).display

    // Disappearing the modal, And making it so that if the modal is already gone, Then pressing the .button makes it reappear
    if(modal_displayState !== `none` || modal_displayState === `none`){
        modal_displayState !== `none` ? modal.style.display = `none` : modal.style.display = `flex`;
    }

})