// The magic happens here!
// const showBlackSquare = () => {
//   const pixel = document.querySelector(".pixel");
//   pixel.addEventListener("mouseenter", () => {
//     pixel.classList.add("colored-in");
//   });
// };

const resetBtn = () => {
  const pixels = document.querySelectorAll(".pixel");
  for (let i = 0; i < pixels.length; i++) {
    pixels[i].classList.remove("colored-in");
  }
};

const generatePixels = () => {
  // need to get height of the whole
  for (i = 1; i < 10000; i++) {
    let singleDiv = document.createElement("div");

    singleDiv.classList.add("pixel");

    document.getElementById("screen").appendChild(singleDiv);
    singleDiv.addEventListener("mouseenter", () => {
      singleDiv.classList.add("colored-in");
    });
  }
};

document.addEventListener("DOMContentLoaded", () => {
  generatePixels();
  document
    .getElementById("clear-screen-button")
    .addEventListener("click", resetBtn);
});
``;
