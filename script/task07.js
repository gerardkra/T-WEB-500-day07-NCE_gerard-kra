// --- Cookie helpers ---
function setCookie(name, value, days) {
  let d = new Date();
  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
}

function getCookie(name) {
  let cookies = document.cookie.split(";");
  for (let c of cookies) {
    let [k, v] = c.trim().split("=");
    if (k === name) return v;
  }
  return null;
}

function deleteCookie(name) {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
}

// --- DOM references ---
let firstBox = document.querySelector("footer div"); // the first white box
let okLink = firstBox.querySelector("a");

// Function to create the second white box dynamically
function createSecondBox() {
  let secondBox = document.createElement("div");
  let btn = document.createElement("button");
  btn.textContent = "Delete the cookie";

  // Delete cookie and second box when clicked
  btn.onclick = () => {
    deleteCookie("acceptsCookies");
    secondBox.remove();
    firstBox.style.display = "block";
  };

  secondBox.appendChild(btn);
  firstBox.parentElement.appendChild(secondBox);
}

// --- On page load ---
if (getCookie("acceptsCookies") === "true") {
  // Hide first box and show second
  firstBox.style.display = "none";
  createSecondBox();
}

// --- On clicking OK link ---
okLink.addEventListener("click", (e) => {
  e.preventDefault(); // prevent jumping
  setCookie("acceptsCookies", "true", 1);
  firstBox.style.display = "none";
  createSecondBox();
});
