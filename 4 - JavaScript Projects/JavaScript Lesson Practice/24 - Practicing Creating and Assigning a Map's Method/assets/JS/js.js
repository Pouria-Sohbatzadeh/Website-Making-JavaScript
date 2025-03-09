// A Map's Method is basiclly a Function Expression that's assigned to a key. Example:

const prison = {
    prisoner: `Back Watch`,
    sentence: 20,
    years_spent: 3,
    favorite_color: function (color){
        console.log(`The Favorite color of the Prisoner is ${color}`)
    }
}

// Though in order to use the Method you must use the dot|.|way of summoning it.

prison.favorite_color(`Red`)