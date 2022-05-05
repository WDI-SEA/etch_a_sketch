const markPixel = (e) => {
  const pixel = e.currentTarget
  pixel.classList.add("colored-in")
}

const generatePixels = () => {
  const screen = document.querySelector("#screen")

  for (let i = 0; i < 5000; i++) {
    const pixel = document.createElement("div")
    pixel.classList.add("pixel")
    screen.appendChild(pixel)

    pixel.addEventListener("mouseenter", markPixel)
  }
}

const clearScreen = () => {
  const pixels = [...document.querySelectorAll(".pixel")]
  pixels.forEach((pixel) => pixel.classList.remove("colored-in"))
}

generatePixels()

document
  .querySelector("#clear-screen-button")
  .addEventListener("click", clearScreen)
