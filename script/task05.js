// --- Draw Play button (black square + white triangle) ---
let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

// Set numeric width/height
canvas.width = 20;
canvas.height = 20;

// Black background (button square)
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// White triangle (play symbol)
ctx.beginPath();
ctx.moveTo(6, 6);    // first coordinate
ctx.lineTo(14, 10);  // second coordinate
ctx.lineTo(6, 14);   // third coordinate
ctx.closePath();
ctx.fillStyle = "white";   // fill inside
ctx.fill();
ctx.strokeStyle = "white"; // 1px border
ctx.lineWidth = 1;
ctx.stroke();

// --- Audio setup ---
let audio = new Audio("https://universal-soundbank.com/sounds/13631.mp3");

// --- Play when canvas is clicked ---
canvas.addEventListener("click", () => {
  audio.play();
});

// --- Control buttons ---
let buttons = document.querySelectorAll("footer div button");
let pauseBtn = buttons[0];
let stopBtn  = buttons[1];
let muteBtn  = buttons[2];

pauseBtn.onclick = () => {
  audio.pause();
};

stopBtn.onclick = () => {
  audio.pause();
  audio.currentTime = 0; // reset to start
};

muteBtn.onclick = () => {
  audio.muted = !audio.muted;
};
