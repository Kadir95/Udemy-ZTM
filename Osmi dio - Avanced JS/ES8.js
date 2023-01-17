// PAD-START && PAD-END
"Dongi".padStart(10);
"Grongi".padEnd(100);

// LEAVING COMMAS
let arr1 = [1, 2, 3,];
let fun = (x, y, z,) => {
    return x * y;
}

// ENTRIES && VALUES
// keys === properties; values === values
// Old method
let obj1 = {
    animal0: 'Fish',
    animal1: 'Cat',
    animal2: 'Bird',
}

Object.keys(obj1).forEach((key, index) => {
    console.log(key, index);
})

Object.values(obj1).forEach((value, index) => {
    console.log(value, index);
})

Object.entries(obj1).forEach((value) => {
    console.log(value);
})

Object.entries(obj1).map(value => {
    return value[1] + "!";
})


// EXERCISe
// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtleStart = '🐢'.padStart(9);
let rabbitStart = '🐇'.padStart(9);

console.log(startLine);
console.log(turtleStart);
console.log(rabbitStart);

// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
turtle = turtleStart.trim().padEnd(9, '=');

// #3) Get the below object to go from:
let obj = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}

Object.entries(obj).map(((value) => {
    return value.join(" ")
})).join(' ')