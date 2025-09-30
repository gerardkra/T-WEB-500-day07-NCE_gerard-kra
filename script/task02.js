let box = document.querySelector("footer div");

box.addEventListener("click", () => {
  let name = "";
  while (!name) {
    name = prompt("What's your name?");
  }
  if (confirm(`Are you sure that "${name}" is your name ?`)) {
    alert(`Hello ${name}!`);
    box.innerText = `Hello ${name}!`;
  }
});
