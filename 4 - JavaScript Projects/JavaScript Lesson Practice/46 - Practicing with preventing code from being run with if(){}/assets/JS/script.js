// You have a button that, when clicked, changes the background color of all .box elements to red. 
// However, you need to prevent this from happening in these conditions:

// If the .box is inside an element with the .container class.
// If the .box has the .no-color class.

const box = document.querySelectorAll(`.box`)

const button = document.querySelector(`#changeColor`)

console.log(box);

// Setting the grounds for repeatedly checking if each .box tag fulfills the conditions
for(let i = 0; i < box.length; i++){

    // Checking if the .box tags fulfill the conditions
    if(!box[i].closest(`.container`) && !box[i].classList.contains(`no-color`)){

        // Changing the background color of the <div> if it fullfils the conditions
        button.addEventListener(`click`, function(){
            box[i].style.backgroundColor = `red`

        })
    }
}

