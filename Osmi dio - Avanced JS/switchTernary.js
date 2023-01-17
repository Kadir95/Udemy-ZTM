// Ternary operator
// condition ? exp1 : exp2

function checkNightsOUt(bool) {
    return bool;
}

let answer = checkNightsOUt(true) ? "Going out w/the boys" : "Staying home";
console.log(answer);



// Switch case

function subjectLevel(subject) {
    let subjectLevle;
    switch (subject) {
        case subject = "Math":
            subjectLevle = 5;
            break;
        case subject = "Programming":
            subjectLevle = 5;
            break;
        case subject = "PE":
            subjectLevle = 1;
            break;
        default:
            subjectLevle = "Please enter a valid subject";
    }
    return subjectLevle;
}

subjectLevel("Programming");

// EXCERCISE 
//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}

function winBattle() {
    return true;
}

let expPoints = winBattle() ? 10 : 1;
console.log(expPoints);



//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");
// undefined

//#3 return value when moveCommand("back");
// "you arrived home"

//#4 return value when moveCommand("right");
// you found a river

//#5 return value when moveCommand("left");
// undefined

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!
