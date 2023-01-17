// DOM SELECTORS

// getElement/s stariji ali ne losi
document.getElementsByTagName("h1");
document.getElementsByClassName("secondParagraph");
document.getElementById("firstP");

// querySelectori jaci i noviji
document.querySelector("h1");
document.querySelector("li");
document.querySelectorAll("li");
document.querySelectorAll("li, h1, ul");

// getAttribute i setAttribute

// prvi nacin
let firstLi = document.querySelectorAll("li")[0];
firstLi.getAttribute("random");

//drugi nacin
document.querySelector("li").getAttribute("attribute");
document.querySelector("li").setAttribute("attribute", "100");

// Class methods
document.querySelector("h1").style.textAlign = "center";
document.querySelector("h1").style.color = "aqua";

let h1Selection = document.querySelector("h1");
h1Selection.className = "tittle";

document.getElementsByTagName("li")[1].classList;
document.getElementsByTagName("li")[1].classList.add("tittle");
document.getElementsByTagName("li")[1].classList.remove("tittle");
document.getElementsByTagName("li")[1].classList.add("done");

// innerHTML
document.querySelector("h1").innerHTML = "<strong>HTINU SAM POMOC DOBILA!!!<strong>";

// parent-child
document.querySelectorAll("li")[2];
document.querySelectorAll("li")[2].parentElement;
document.querySelectorAll("li")[2].parentElement.parentElement;


// getElement/s stariji ali ne losi
let h1 = document.getElementsByTagName("h1");
let p1 = document.getElementById("firstP");
let p2 = document.getElementsByClassName("secondP");

// querySelectori jaci i noviji
//let ul = document.querySelector("ul"); 
let liAll = document.querySelectorAll("li");
let li0 = document.querySelectorAll("li")[0];
let li1 = document.querySelectorAll("li")[1];

// get and set
let getAtt = li0.getAttribute("attribute");
let setAtt = li0.setAttribute("attribute", "100");

// class
let ulStyle = document.querySelector("ul");
ulStyle.className = "tittle";
li1.classList;
li1.classList.remove("red");
li1.classList.add("done");
li1.classList.toggle("done");

// inerHTML
let h1InnerHTML = document.querySelector("h1");
h1InnerHTML.innerHTML = "Changing via innerHTML";

// parent-child
ul.children;
li0.parentElement;
li0.parentElement.parentElement;
li0.parentElement.parentElement.children;





