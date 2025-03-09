// You have a button that, when clicked, changes the background color of all .box elements to red. 
// However, you need to prevent this from happening in these conditions:

// If the .box is inside an element with the .container class.
// If the .box has the .no-color class.

// const box = document.querySelectorAll(`.box`)

// const button = document.querySelector(`#changeColor`)

// console.log(box);

// // Attempt 1 : Checking if the code that I wrote in the curled brace|{}|of if(){} is flawed
// button.addEventListener(`click`, function(){
//     box[2].style.backgroundColor = `red`
// })
// // It has nothing wrong with it

// // Setting the grounds for repeatedly checking if each .box tag fulfills the conditions
// for(var i = 0; i < box.length; i++){

//     // Checking if the .box tags fulfill the conditions
//     if(!box.closest(`.container`) && !box.contain(`no-color`)){

        
//         button.addEventListener(`click`, function(){
//             box[i].style.backgroundColor = `red`
//         })

//     }
    

// }

// Attempt 2 : Checking if there was anything wrong with the condition of if(){}
// const box = document.querySelectorAll(`.box`)

// const button = document.querySelector(`#changeColor`)

// // The first condition works, Just change the number glued to the right of box to i
// if(!box[1].closest(`.container`)){
//     button.addEventListener(`click`, function(){
//         box[1].style.backgroundColor = `red`
//     })
// }

// Setting the grounds for repeatedly checking if each .box tag fulfills the conditions
// for(var i = 0; i < box.length; i++){

//     // Checking if the .box tags fulfill the conditions
//     // 1st flaw : I didn't summon each tag of box with i
//     // 2nd flaw : I  wrote the .classList.contain(``) wrong
//     if(!box[i].closest(`.container`) && !box[i].classList.contain(`no-color`)){

//         button.addEventListener(`click`, function(){
//             box[i].style.backgroundColor = `red`
//         })

//     }
    

// }

// Attempt 3 : Appearantly there's a problem with the code I run in the curled brace|{}|of if(){}
// const box = document.querySelectorAll(`.box`)

// const button = document.querySelector(`#changeColor`)

// console.log(box);

// // Setting the grounds for repeatedly checking if each .box tag fulfills the conditions
// for(var i = 0; i < box.length; i++){

//     // Attempt 3.2 : Let me CHECK
//     // box[i].style.backgroundColor = `red`


//     // Checking if the .box tags fulfill the conditions
//     if(!box[i].closest(`.container`)){

//         console.log(i);
//         // The problem isn't with how I summon the tags, The problem is that for some asinine reason the i 
//         // variable in the curled brace|{}|of if(){} becomes 1 thanks to the ++!
//         // You solve this problem by NEVER USING var EVER AGAIN! USE let INSTEAD


//         // Attempt 3.1 : More specificly, There's  problem in how I summon the selected tags of box
//         button.addEventListener(`click`, function(){
//             box[i].style.backgroundColor = `red`
//         })

//     }
    

// }

// Fixing attempt 4 : As it turns out, My initial 2nd condition was correct, The problem was with using the var 
// keyword
const box = document.querySelectorAll(`.box`)

const button = document.querySelector(`#changeColor`)


for(let i = 0; i < box.length; i++){

    if(!box[i].closest(`.container`) && !box[i].classList.contains(`no-color`)){

        button.addEventListener(`click`, function(){
            box[i].style.backgroundColor = `red`
        })

    }
    

}
