console.log("Prvi arg.", "Drugi arg");


// Function declaration
function sayHello() {
    console.log("Hello, world!");
}

sayHello();

// Function expression
var sayBye = function () { // ovo je anonimusna funckija
    console.log("Bye");
}

sayBye();


// DRY - do not repeat yourself
function personInfo(name, surname) {
    console.log(name + " " + surname)
}

personInfo('Bob', 'Smith');


function divide(firstNum, secondNum) {
    return firstNum / secondNum;
}

divide();

function multiply(a, b) {
    if (a > 5 || b > 5) {
        return "Preveliki brojevi momak!";
    } else {
        return a * b;
    }
}

alert(multiply(6, 2));





