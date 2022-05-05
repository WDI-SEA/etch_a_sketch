// pixels.addEventListener("mouseenter", () => {
//   pixels.classList.add("colored-in");
// });

document.addEventListener("DOMContentLoaded", () => {
  const screen = document.querySelector("#screen");

  for (let i = 0; i <= 6467; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");

    pixel.addEventListener("mouseenter", () => {
      pixel.classList.add("colored-in");
    });

    screen.appendChild(pixel);
  }
});

document.querySelector("#clear-screen-button").addEventListener("click", () => {
  const pixels = document.querySelectorAll(".pixel");

  for (let i = 0; i < pixels.length; i++) {
    pixels[i].classList.remove("colored-in");
  }
});
