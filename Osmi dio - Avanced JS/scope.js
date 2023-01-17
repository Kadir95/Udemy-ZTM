// Root Scope - Window Scope


let number = 10;

function numberLog() {
    let number = 110;
    console.log(number);
}

function numberLog2() {
    let number = 200;
    console.log(number);
}

function numberLog3() {
    number = 2100;
    console.log(number);
}

console.log(number);
numberLog();
numberLog2();
numberLog3();


// For all of these, what is the value of a when the function gets called with the alert()
// #1
function q1() {
    var a = 5;
    if (a > 1) {
        a = 3;
    }
    alert(a);
}
q1();

//#2
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);
}


//#3
function q3() {
    window.a = "hello";
}


function q32() {
    alert(a);
}

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}
q4();

//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a);


