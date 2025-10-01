document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.querySelector("footer canvas");     // black square
  const box = canvas.parentElement;                           // white container
  const coords = document.querySelectorAll("footer div")[1];  // second box

  box.style.position = "relative";
  canvas.style.position = "absolute";

  let dragging = false;
  let offsetX = 0, offsetY = 0;

  canvas.addEventListener("mousedown", (e) => {
    dragging = true;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
  });

  document.addEventListener("mousemove", (e) => {
    if (!dragging) return;

    const rect = box.getBoundingClientRect();

    let x = e.clientX - rect.left - offsetX;
    let y = e.clientY - rect.top - offsetY;

    // keep square inside the white box
    x = Math.max(0, Math.min(rect.width - canvas.offsetWidth, x));
    y = Math.max(0, Math.min(rect.height - canvas.offsetHeight, y));

    canvas.style.left = x + "px";
    canvas.style.top = y + "px";

    coords.textContent = `New coordinates => {x:${Math.round(x)}, y:${Math.round(y)}}`;
  });

  document.addEventListener("mouseup", () => dragging = false);
});

