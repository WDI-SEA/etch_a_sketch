// The magic happens here!
const ogPixel = document.querySelector(".pixel");
const sketchArea = document.querySelector("#screen");
const clrButton = document.querySelector("#clear-screen-button");

for (let i = 0; i <= 5000; i++) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("pixel");
  sketchArea.appendChild(newDiv);
}

sketchArea.addEventListener("mouseover", (e) => {
  e.target.classList.add("colored-in");
});

clrButton.addEventListener("click", () => {
  const pixels = document.querySelectorAll(".pixel");
  //   for (let i = 0; i < pixels.length; i++) {
  //     pixels[i].classList.remove("colored-in");
  //   }
  //   no loop needed for the code below
  pixels.forEach((element) => {
    element.classList.remove("colored-in");
  });
});
