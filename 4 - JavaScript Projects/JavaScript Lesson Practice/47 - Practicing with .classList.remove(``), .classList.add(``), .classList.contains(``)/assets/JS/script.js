const example = document.querySelector(`.example`)


// Now, .classList.remove(``), .classList.add(``) and .classList.contains(``) brace work identically. We glue them to the right of docuemnt.querySelector(``), 
// docuemnt.querySelectorAll(``), Or variables storing one of those 2, Then we put a (utility) class name in their quotes|``|(without glueing  a dot to the right of the
// utlity class name), Now as for what they do with that class name:

// .classList.remove(``) : Allows us to remove the utility class name from the tag, By putting it in the quote
example.classList.remove(`flex`)
// This causes the two texts of yellow to no longer be in an axis, And affected by justify-content: space-evenly as a result

// .classList.add(``) : Allows us to add the utility class name from the tag, By putting it in the quote
example.classList.add(`margin_t`)

// However, The .classList.add(``) doesn't do well when the utility class name's style attributes are contradicted before it's applied, This can come in 3 ways

// 1 - When we apply the style attribute with a different value in CSS
// The solution to this is putting the !important text to the left of the semi-colon|;| of the style attributes that we apply to the utility class name when we created the 
// utility class name
const example_style_contradiction = document.querySelector(`.example_style_contradiction`)
example_style_contradiction.classList.add(`red_BorderBg`)
// This changes the background and border color of .example_style_contradiction, Despite the the background and border style attriubtes already being applied to the 
// .example_style_contradiction tag because we put !important to the left of the semi-colon|;|of the style attribute


// 2 - When we've already given a utility class name to the tag with, With either .classList.add(``) Or in HTML, that has the same style attribute as the utility class name 
// that we're tring to add now, But with a different value.
// The solution to this is removing the utility class name from the tag with .classList.remove(``), And then adding the new utility class name to the tag with
// .classList.add(``)
const example_class_contradiction = document.querySelector(`.example_class_contradiction`)
// The .example_class_contradiction tag already has the flex utility class name, If I were to give it the hidden utility class name without removing the flex utility class
// name, It wouldn't work
example_class_contradiction.classList.remove(`flex`)
// Removes the flex utility class name from the green box 
example_class_contradiction.classList.add(`hidden`)
// Add the hidden utility class name to the green box 

// 3 - When we've used .style to apply the same style attriubte to the tag that we've applied in our utility class name
// There are 2 solutions:
// 3.1 : Put !important text to the left of the semi-colon of the style attributes that you've applied to you utility class name when creating it. (Don't recommend)
const styleAttribute_contracdiction = document.querySelector(`.styleAttribute_contracdiction`)
styleAttribute_contracdiction.style.color = `brown`
styleAttribute_contracdiction.classList.add(`brownText`)
// The color style attribute for .brownText has !important glued to the left of its semi-colon|;|

// 3.2 : set the value of the style attribute to empty string, And THEN give the utility class name to the tag
const styleAttribute_contracdictionII = document.querySelector(`.styleAttribute_contracdictionII`)
styleAttribute_contracdictionII.style.backgroundColor = `brown`
styleAttribute_contracdictionII.style.backgroundColor = ``

// This line of code will do nothing without us first setting the .style.backgroundColor of .styleAttribute_contracdictionII tag to empty string
styleAttribute_contracdictionII.classList.add(`greyBg`)


// .classList.contains(``) : Allows us to check whether a tag has a (utility) class name (true) or not (false). Example :
const check_class = document.querySelector(`.check_class`) 
// Logging the result to the console
console.log(check_class.classList.contains(`checkShape`));
