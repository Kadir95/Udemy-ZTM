let input1 = document.querySelector(".color1");
let input2 = document.querySelector(".color2");
let h3 = document.querySelector("h3");
let body = document.getElementById("body");
let random = document.querySelector("button");

function onLoad() {
    h3.innerHTML = `linear-gradient(to right, ${input1.value}, ${input2.value})`;
}

function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function generateColor() {
    input1.value = randomColors();
    input2.value = randomColors();
    changeColor();
}

function changeColor() {
    body.style.background = `linear-gradient(to right, ${input1.value}, ${input2.value})`;
    h3.innerHTML = body.style.background;
}

input1.addEventListener("input", changeColor);
input2.addEventListener("input", changeColor);
random.addEventListener("click", generateColor)
