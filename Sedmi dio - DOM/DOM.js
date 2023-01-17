let button = document.getElementById("enter");
let input = document.getElementById("input");
let ol = document.querySelector("ol");
let allLi = document.querySelectorAll("li");

function chechInputLength() {
    return input.value.length;
}

function createNewListElement() {
    let newLi = document.createElement("li");
    newLi.appendChild(document.createTextNode(input.value));
    let btnDone = document.createElement("button");
    let btnDel = document.createElement("button");
    btnDel.innerHTML = "delete";
    btnDone.innerHTML = "done";
    newLi.appendChild(btnDel);
    newLi.appendChild(btnDone);
    btnDel.addEventListener("click", function () {
        newLi.parentNode.removeChild(newLi);
    })
    btnDone.addEventListener("click", function () {
        newLi.classList.toggle("done");
    })
    ol.appendChild(newLi);
    input.value = "";
}

Array.from(allLi).forEach(function (item) {
    let btnDone = document.createElement("button");
    let btnDel = document.createElement("button");
    btnDone.innerHTML = "Done";
    btnDel.innerHTML = "Delete";
    item.appendChild(btnDone);
    item.appendChild(btnDel);
    btnDel.addEventListener("click", function () {
        item.parentNode.removeChild(item);
    })
    btnDone.addEventListener("click", function () {
        item.classList.toggle("done");
    })
})

function onClick() {
    if (chechInputLength() > 0) {
        createNewListElement();
    }
}

function onKeyPress(event) {
    if (chechInputLength() > 0 && event.code === "Enter") {
        createNewListElement();
    }
}

button.addEventListener("click", onClick);
input.addEventListener("keypress", onKeyPress);

// EXERCISE
/* 1. If you click on the list item, it toggles the .done  class on and off.

2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.

3. BONUS: When adding a new list item, it automatically adds the delete button next to it (hint: be sure to check if new items are clickable too!)
*/


