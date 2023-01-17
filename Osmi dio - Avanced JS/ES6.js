// let & const
// let - for non-constant variables
// const - for constant variables
const personName = "Andrew";
let age = 35;
let job = "entrepenuer";

if (age === 35) {
    let job = "Driver";
}

console.log(name, job);

// DESTRUCTURING
const country = {
    name: "Japan",
    continent: "Asia",
    population: 100,
}

/* OLD
const continent = country.continent;
const countryName = country.name;
const countryPopulation = country.population; */

const { name, population } = country;
console.log(name, population);
let { continent } = country;
console.log(continent);


// OBJECT PROPERTIES
let namae = "Eren";
const scout = {
    [namae]: "hello",
    [10 / 2]: "his kills",
}

let a = true, b = 25, c = "C";
const abc = {
    a, b, c
}

// TEMPLATE STRING
let pet = "cat";
let car = "Honda";
let hobby = "Programmer";
function aboutUser() {
    return `He is a ${hobby}, he drives a ${car} and has a ${pet} pet`;
}

// DEFAULT PROPERTIES
function userInfo(hobby = "footballer", car = "BMW", pet = "") {
    return `He is a ${hobby}, he drives a ${car} and has a ${pet} pet`;
}

// SYMBOL
let firstSim = Symbol(2);
let secondSim = Symbol(2);
let thirdSim = Symbol("foo");

// ARROW FUNCTIONS
function oldFunctions(numb1, numb2) {
    return numb1 / numb2;
}

let newFunctions = (numb1, numb2) => numb1 * numb2;



//EXERCISe

// let + const
let aa = 'test';
const bb = true;
const cc = 789;
a = 'test2';


// Destructuring
const person = {
    firstName: "John",
    lastName: "Doe",
    agee: 50,
    eyeColor: "blue"
};


const { firstName, lastName, agee, eyeColor } = person;



// Object properties
let x = 'test';
let y = true;
let z = 789;

const okObj = {
    x,
    y,
    z
};


// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";
let message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;

// default arguments
// default age to 10;
const isValidAge = (age = 10) => age;


// Symbol
// Create a symbol: "This is my first Symbol"
let firstEver = Symbol("This is my first symbol");

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}


const whereAmI = (username, location) => {
    if (username && location) {
        return "I am not lost";
    } else { "I am totally lost!"; }
}