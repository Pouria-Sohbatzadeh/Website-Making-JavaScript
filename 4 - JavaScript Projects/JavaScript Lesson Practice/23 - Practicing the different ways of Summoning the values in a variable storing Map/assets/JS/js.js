// There are two ways to summon the values we stored wit the Map Method.
// While both of them allows us to summon the stored values, There are differences

// The first the is dot|.|way, With this way, If we have assigned an Arrays or Maps to a key, We can apply Methods 
// to the Key
// You can alos summon the individual values of the Array or Map. Example:

const me = {
    name: `Pouria`,
    lastName: `Sohbatzadeh`,

    // Array
    friends: [`Sajjad`, `Soozani`],

    // Map
    status: {
        living: true,
        graduate: false
    }
}

console.log(me.friends.length, me.friends[0], me.status.living)

// The second is Bracket|[]|, You can put variables, Operators or function in the Bracket|[]|, 
// Allowing you to Calculate the Key. Though You can't summon individual values in the Array or Map. Example:

const house = {
    roof: true,

    // Array
    furniture: [`Couch`, `Chair`, `TV`],
    
    wall_color: `red`
}

console.log(house[`furniture`]) 
console.log(house[`furniture`[0]]) // The result will be "undefined" not `Couch`