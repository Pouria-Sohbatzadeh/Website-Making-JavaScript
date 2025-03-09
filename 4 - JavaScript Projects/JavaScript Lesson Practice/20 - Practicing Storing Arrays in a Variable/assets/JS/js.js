// An Array is the Collective Data Type of the Multiple Values that we store in a variable.

// We do this by putting the values in a Bracket|[]|, And then putting a brief Pause|,| symbol between them to seperate them. 
// This causes each of them to have a Syntax Address, This address, Starting from the first value, Is zero (0).

var ages = [4, 20, 50, 32];
// 4's Syntax Address = 0
// 20's Syntax Address = 1
// 50's Syntax Address = 2
// 32's Syntax Address = 3

// We can summon each of the Values we want/need, By gluing a bracket|[]|to the right of the variable, And then putting its Syntax Address in the bracket|[]|.
console.log(ages[3] + 8) // 32 + 8 = 40