const test = [`Pouria`,
    {
        hobby: `games`,
        color: `red`
    }
]

console.log(test[1])

// Yes you can, Though you can't access any of the values in the Map
const test_2 = {
    // Map
    first: {
        one: 1,
        two: 2
    },

    // Array
    second: [4, 5, 6]
}
console.log(test_2[`first`][`one`], test_2[`second`][0])
