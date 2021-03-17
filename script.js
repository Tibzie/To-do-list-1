let input = document.getElementById("input");
let addBtn = document.getElementById("cta-btn");
let list = document.getElementById("list");
let taskCount = document.getElementById("task-count");

addBtn.addEventListener("click", (item) => {
    item = document.createElement("li");
    item.innerHTML = input.value;
    list.appendChild(item);
    item.addEventListener("click", () => {
        list.removeChild(item);
    });
    input.value = "";
});

