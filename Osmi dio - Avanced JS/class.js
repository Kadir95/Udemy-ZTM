// REFERENCE TYPE - types created by users; 

let obj1 = { value: 10 };
let obj2 = obj1;
let obj3 = { value: 10 };

// CONTEXT - we we are in the object; this 

let obj4 = {
    vlaue: 10,
    a: function () {
        console.log(this);
    }
}


// INSTANTIATION - class

class Athlete {
    constructor(name, sport) {
        this.name = name;
        this.sport = sport;
    }
    about() {
        return `Hi my name is ${this.name} and I play ${this.sport}`;
    }
}

const athlete1 = new Athlete('Roger Federed', 'tennis');

class Basketball extends Athlete {
    constructor(name, sport, club) {
        super(name, sport);
        this.club = club;
    }
    play() {
        return `I play for ${this.club}, and we're the best!`;
    }
}

const bbplayer1 = new Basketball('Dzanan Musa', 'Basketball', 'Real Madrid');
const bbplayer2 = new Basketball('Jusuf Nurkic', 'Basketball', 'Portland');


// EXCERCISE 

//Evaluate these:
//#1
[2] === [2];  // false
// {} === {} - false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; // a === 4
const object2 = object1; // a === 4
const object3 = object2; // a === 4
const object4 = { a: 5 }; // a === 5
object1.a = 4;


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mamal extends Animal {
    constructor(name, type, color) {
        super(name, type, color)
    }
    moo() {
        return `Hello, my name is ${this.name}, I'm a ${this.type} and my color is ${this.color}`;
    }
}

let mamal1 = new Mamal('Sarulja', 'Krava', 'Crno-bijela');