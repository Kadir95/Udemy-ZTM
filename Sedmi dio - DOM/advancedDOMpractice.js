let button = document.getElementById("btn");
let reset = document.getElementById("resetBtn");
let input = document.getElementById("input");
let ul = document.getElementById("ul");


function resetInput() {
    input.value = '';
}

function addNewLi() {
    if (input.value.length !== 0) {
        const newLi = document.createElement("li");
        newLi.appendChild(document.createTextNode(input.value));
        ul.appendChild(newLi);
        input.value = "";
        const delBtn = document.createElement("button");
        delBtn.innerHTML = "delete";
        ul.appendChild(delBtn);
        newLi.addEventListener("click", function () {
            if (this.style.textDecoration === "line-through") {
                this.style.textDecoration = "none";
            } else {
                this.style.textDecoration = "line-through";
            }
        });
        delBtn.addEventListener("click", () => {
            newLi.remove(); delBtn.remove();
        })
    }
}


reset.addEventListener("click", resetInput);
button.addEventListener("click", addNewLi);