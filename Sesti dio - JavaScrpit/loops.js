let predmeti = [
    "matematika",
    "bosanski",
    "sociologija",
    "programiranje",
    "web-programiranje"
]
let predmeti2 = [
    "TIZO",
    "Zastita sistema",
    "Mob. apl"
]


// FOOR LOOP

let predmetiLength = predmeti.length;
for (let index = 0; index < predmetiLength; index++) {
    console.log(predmeti[index], index);
}

predmeti.forEach(function (predmet, index) {
    console.log(predmet, index);
});

function logPredmeti(predmet, index) {
    console.log(predmet, index);
}

predmeti.forEach(logPredmeti);
predmeti2.forEach(logPredmeti);


// WHILE LOOP

let counter1 = 10;
while (counter1 > 0) {
    console.log(counter1);
    counter1--;
}

// DO WHILE LOOP

let counter2 = 10;
do {
    console.log(counter2);
    counter2--;
} while (counter2 > 0);


let books = [
    "Darvish and death",
    "War and piece",
    "Crime and punishment",
    "Atomic habbits",
    "Harry Potter",
]


let writters = [
    "Mesa Selimovic",
    "Lav Tolstoj",
    "Fjord Dostojevski",
    "IDK",
    "JK Rownling",
]

//FOR & FOR EACH

for (let i = 0; i < books.length; i++) {
    console.log(books[i], + "-" + writters[i], i);
}

function logItem(item, index) {
    console.log(item, index);
};

books.forEach(logItem);
writters.forEach(logItem);




// WHILE 

while (books.length > 0) {
    console.log(writters.pop());
    books.length--;
}

let number = 10;
while (number > 0) {
    console.log(number)
    number--;
}

// DO WHILE

let counter3 = 0;
do {
    console.log(counter3);
    counter3++;
} while (counter3 <= 10);


