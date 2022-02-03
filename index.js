const screen = document.querySelector("#screen")
const clearButton = document.querySelector("#clear-screen-button")

const createPixels = (numOfPixels) => {
  for (let i = 0; i < numOfPixels; i++) {
    const pixels = document.createElement("div")
    pixels.classList.add("pixel")
    screen.appendChild(pixels)
    pixels.addEventListener("mouseenter", fillPixels)
  }
}

const fillPixels = (event) => {
  event.target.classList.add("colored-in")
}

const clearScreen = () => {
  document.querySelectorAll(".pixel").forEach((element) => {
    element.classList.remove("colored-in")
  })
}

document.addEventListener("DOMContentLoaded", () => {
  createPixels(6000)
  clearButton.addEventListener("click", clearScreen)
})
