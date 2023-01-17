var person = {
    name: 'Kadir',
    age: 18,
    isMarried: false,
    hobby: "Football",
    subjects: ["Math", "Bosnian", "PE"],
    study: function (predmet) { // 
        console.log("Kadir is studying " + predmet + " right now");
    },
    info: function () {
        console.log(`Hello my name is ${this.name}, I am ${this.age} years old. My hobby is ${this.hobby}. Am I married? The answer is ${this.isMarried}.`);
    }
}

person.study(person.subjects[0]); // passing in the array index
person.info();


var lista = [
    {
        username: "Roki",
        password: 12345,
    },
    {
        username: "Blob",
        password: "admin"
    }
];

var emptyObj = {}; // moze se puniti vrijednostima
var nullObj = null;  // ne moze se puniti, dobijemo error



