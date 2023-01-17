
// declaration
function askForAge() {
    var a = prompt("What is your age");
    console.log(a);
}

askForAge();

// expression
var askForAge = function () {
    console.log(prompt("What is your age : "));
}

askForAge();


function checkDriverAge() {
    var age = prompt("Please enter your age : ");
    if (Number(age) < 18) {
        alert("Sorry, you are too young to drive this car. Powering off");
    } else if (Number(age) > 18) {
        alert("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}

checkDriverAge();


var checkDriverAge2 = function () {
    var age = prompt("Please enter your age : ");
    if (Number(age) < 18) {
        alert("Sorry, you are too young to drive this car. Powering off");
    } else if (Number(age) > 18) {
        alert("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}

checkDriverAge2();



function checkDriverAge3(age) {
    console.log("Your age is : " + Number(age));
    if (Number(age) < 18) {
        return "Sorry, you are too young to drive this car. Powering off";
    } else if (Number(age) > 18) {
        return "Powering On. Enjoy the ride!";
    } else if (Number(age) === 18) {
        return "Congratulations on your first year of driving. Enjoy the ride!";
    }
}

console.log(checkDriverAge3(18));
