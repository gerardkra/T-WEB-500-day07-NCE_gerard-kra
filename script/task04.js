let size = 16; // base font size

// Get all buttons inside footer div
let buttons = document.querySelectorAll("footer div button");

// First button is +
buttons[0].onclick = () => {
  size += 2;
  document.body.style.fontSize = size + "px";
};

// Second button is -
buttons[1].onclick = () => {
  size -= 2;
  document.body.style.fontSize = size + "px";
};

// Dropdown menu (background color)
document.querySelector("footer div select").onchange = (e) => {
  document.body.style.backgroundColor = e.target.value;
};
