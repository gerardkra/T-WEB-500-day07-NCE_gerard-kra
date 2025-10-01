let form = document.querySelector("form");
let list = document.querySelector("#list");

form.onsubmit = (e) => {
  e.preventDefault();
  let text = document.querySelector("#textInput").value.trim();
  let type = document.querySelector("#typeSelect").value;
  if (text) {
    let li = document.createElement("li");
    li.textContent = text;
    li.className = type;
    list.appendChild(li);
    form.reset();
  }
};
