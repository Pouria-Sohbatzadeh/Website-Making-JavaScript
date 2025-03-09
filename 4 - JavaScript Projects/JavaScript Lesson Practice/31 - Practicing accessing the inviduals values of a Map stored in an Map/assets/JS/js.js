const medals = {
    first: `Gold`,
    second: `Silver`,
    third: `Bronze`,
    other: {
        material: `Garbage`
    }
}

// Double Dot|.|method
console.log(medals.other.material)

// Dot|.|then bracket|[]|method
console.log(medals.other[`material`])

// Bracket|[]|then Dot|.|method
console.log(medals[`other`].material)

// Double bracket|[]|method
console.log(medals[`other`][`material`])
