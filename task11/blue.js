document.querySelectorAll("p").forEach(p => {
  // On hover → blue text
  p.addEventListener("mouseover", () => {
    p.style.color = "blue";
  });

  // On mouse leave → normal text
  p.addEventListener("mouseout", () => {
    p.style.color = "";
  });

  // On click → toggle yellow background
  p.addEventListener("click", () => {
    if (p.style.backgroundColor === "yellow") {
      p.style.backgroundColor = "";
    } else {
      p.style.backgroundColor = "yellow";
    }
  });
});
