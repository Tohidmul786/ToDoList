let inputs = document.querySelector("#inp");
let text = document.querySelector(".list-container");

function add() {
    if (inputs.value == "") {
        alert("Enter your task first buddy !!");
    }
    else {
        let newElement = document.createElement("li");
        newElement.innerHTML =`${inputs.value} "<i>Click for delete</i>"`;
        text.appendChild(newElement);
        inputs.value = "";
        newElement.querySelector("i").addEventListener("click", remove)
        function remove() {
            newElement.remove();
        }
    }
}