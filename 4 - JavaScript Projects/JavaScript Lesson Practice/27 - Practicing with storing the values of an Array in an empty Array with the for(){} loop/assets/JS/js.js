var ages = [];

const birthdays = [1383, 1385, 1355, 1358]

// In order to do this, We must first set the variable of the starting loop to 0, Then make sure that the loops are only the length of the filled Array minus 1, Andd then...
// We make sure that each of the values are transferred
for (var rep = 0; rep <= birthdays.length - 1; rep++) {

    // Then we simply glue a Bracket|[]|to Each variable, With the variable determining the current loop inside those Brackets.
    ages[rep] = 1403 - birthdays[rep]
}

console.log(ages)