let input = document.getElementById("input");
let btn = document.getElementById("cta-btn");
let list = document.getElementById("list");

btn.addEventListener("click", (item, remove, edit) => {
    item = document.createElement("li");
    item.innerHTML = input.value;
    list.appendChild(item);
    remove = document.createElement("button");
    remove.innerHTML = "x";
    item.appendChild(remove);
    remove.addEventListener("click", () => {
        list.removeChild(item);
    });
    input.value = "";
});