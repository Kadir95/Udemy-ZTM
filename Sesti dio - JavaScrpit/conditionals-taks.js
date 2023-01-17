
// IF they say they are below 18, respond with:
// "Sorry, you are too young to drive this car. Powering off"

// IF they say they are 18, respond with:
// "Congratulations on your first year of driving. Enjoy the ride!"

// IF they say they are over 18, respond with:
// "Powering On. Enjoy the ride!"


var agePrompt = prompt("Enter your age please : ");

if (agePrompt < 18) {
    alert("Sorry, you are too young to drive this car. Powering off");
} else if (agePrompt == 18) {
    alert("Congrats on your first year of driving. Enjoy the ride!");
} else if (agePrompt > 18) {
    alert("Powering on. Enjoy the ride!");
}