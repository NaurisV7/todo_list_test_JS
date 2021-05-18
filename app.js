const input = document.getElementById("input");
const button = document.getElementById("button");
const todoCont = document.getElementById("todo-cont");

button.addEventListener('click', function () {
    let paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-style");
    paragraph.innerHTML = input.value;
    todoCont.appendChild(paragraph);
    input.value = "";


    paragraph.addEventListener("click", function() {
        paragraph.style.textDecoration = "line-through";
    })

    paragraph.addEventListener("dblclick", function() {
        todoCont.removeChild(paragraph);
    })
})