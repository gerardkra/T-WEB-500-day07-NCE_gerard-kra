document.querySelector("button").onclick = () => {
  let val = document.querySelector("#listItem").value.trim();
  if (val) {
    let div = document.createElement("div");
    div.textContent = val;
    document.querySelector("#listItem").after(div);
  }
};
