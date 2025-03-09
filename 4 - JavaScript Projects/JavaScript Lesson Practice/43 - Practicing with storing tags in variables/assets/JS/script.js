// The act of storing a tag in a variable is simple, Just store the document.querySelector(``) that you use to 
// summon it in a variable

const spanTag = document.querySelector(`.text`)

// Now, You don't have to write document.querySelector(``) over and over again, And you still can apply 
// DOM methods to the variable that affect the content

spanTag.style.color = `red`

// Sadly, If you store a part of the content (Like textContent) in a variable, And then change the stored
// value of the variable, It won't affect that content.

var span_Text = document.querySelector(`.text`).textContent

// I now change the stored value of span_Text, But it won't do anything
span_Text = 20