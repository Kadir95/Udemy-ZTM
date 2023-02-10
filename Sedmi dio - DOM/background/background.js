var _ = require('lodash');

let arr = [1, 2, 3, 4, 5, 6];
console.log(_.chunk(arr, 3));

let input1 = document.querySelector(".color1");
let input2 = document.querySelector(".color2");
let h3 = document.querySelector("h3");
let body = document.getElementById("body");
let random = document.querySelector("button");

/* function onLoad() {
    body.style.background = `linear-gradient(to right, ${input1.value}, ${input2.value})`
    h3.innerHTML = body.style.background;
} */

function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function generateColor() {
    input1.value = randomColors();
    input2.value = randomColors();
    body.style.background = `linear-gradient(to right, ${input1.value}, ${input2.value})`
    h3.innerHTML = body.style.background;
}

input1.addEventListener("input", generateColor);
input2.addEventListener("input", generateColor);
random.addEventListener("click", generateColor);
