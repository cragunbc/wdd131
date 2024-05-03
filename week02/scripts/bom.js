const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");



// li.append(delButton);
// list.append(li);

button.addEventListener("click", function() {
    if (input.value != ""){
        const li = document.createElement("li");
        const delButton = document.createElement("button");
        li.textContent = input.value;
        delButton.textContent = "❌";
        li.append(delButton);
        list.append(li);
        delButton.addEventListener("click", () => {
            list.removeChild(li);
            input.focus();
        });
        input.value = "";
        input.focus();
    }
})