// The first usage of the "this" keyword is when it's used on its own. On its own it can summon ALL the values in the map, Observe.


const example = {
    me: `Pouria`,
    state: `Tired`,
    age: 20,
    show_everything: function () {
        return this
    }
}

console.log(example.show_everything())

// The 2nd usage is summong one of the assigned values, by gluing its keyword to the "this" keyword using dot|.|.

const example_2 = {
    number_1: 10,
    number_2: 6,
    summon: function(){

        return this.number_1 + this.number_2; // The result must be 16
        
    }
}

console.log(example_2.summon())

// And the last usage is creating a New Key/Value pair, By gluing a name to the "this" keyword, And then giving it a valeu with the eqaul|=|operator.
// Just be sure to use the return ; keyword to add the new Key/Value pair to the Map

const example_3 = {
    place_1: `Gold`,
    place_2: `Silver`,
    place_maker: function(){
        this.place_3 = `Bronze`
        // Be SURE to use the "this" keyword when using the return ; keyword though
        return this.place_3;
    }
}

// And also be sure to first Apply the Method so the new Key/Value pair are proccessed.
example_3.place_maker()

console.log(example_3.place_3) 