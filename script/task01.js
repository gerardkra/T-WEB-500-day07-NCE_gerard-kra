// Select the white box inside the footer
let box = document.querySelector("footer div");
let count = 0;

// Add a click event listener
box.addEventListener("click", () => {
  count++;
  box.textContent = `Clicks: ${count}`;
});
