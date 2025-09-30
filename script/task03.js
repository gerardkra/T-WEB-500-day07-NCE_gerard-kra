let box = document.querySelector("footer div");
let track = "";

document.addEventListener("keydown", (e) => {
  track += e.key;
  if (track.length > 42) {
    track = track.slice(-42); // keep last 42
  }
  box.innerText = track;
});
