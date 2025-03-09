`use strict`

// The link
const link = document.querySelector(`.link`)

// The current link value
console.log(link.href);

const destination_change = document.querySelector(`.destinationChange`)

// Changing the destination of link to footer, And back to normal, After the user clicks on destination_change
destination_change.addEventListener(`click`, function(){

    // If the the selected file is page_2
    if(link.href === `http://127.0.0.1:5500/page_2.html`){
        link.href = `#footer`
    }
    else {
        link.href = `page_2.html`
    }

    // Refactored, The code is this:
    // link.href === `http://127.0.0.1:5500/page_2.html` ? link.href = `#footer` : link.href = `page_2.html`;
    

})
