// The magic happens here!

let screen = document.querySelector("#screen");
let pixel = document.querySelector(".pixel");

// clear button
let clearButton = document.querySelector("#clear-screen-button");

pixel.addEventListener("mouseenter", () => {
  pixel.classList.add("colored-in");
});
// loop nthrough and make newpixels
for (let i = 0; i < 4735; i++) {
  let newPixel = document.createElement("div");
  newPixel.classList.add("pixel");

  //  add mouseEnter functionality
  newPixel.addEventListener("mouseenter", (e) => {
    e.target.classList.add("colored-in");
  });
  screen.append(newPixel);
}

let clearFunction = function () {
  let everyPixel = document.querySelectorAll(".pixel");
  everyPixel.forEach((pixel) => {
    pixel.classList.remove("colored-in");
  });
};
clearButton.addEventListener("click", clearFunction);
