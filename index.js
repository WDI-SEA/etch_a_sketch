// The magic happens here!
const container = document.querySelector(".container")
const screen = document.querySelector("#screen")
const clearScreenButton = document.getElementById("clear-screen-button")
const pixel = document.querySelector(".pixel")

let allPixels = document.querySelectorAll(".pixel")
pixel.addEventListener("mouseenter", (e) => {
  pixel.classList.add("colored-in")
})
for (let i = 0; i < 7000; i++) {
  let newPixel = document.createElement("div")
  newPixel.classList.add("pixel")
  newPixel.addEventListener("mouseenter", (e) => {
    e.target.classList.add("colored-in")
  })
  screen.append(newPixel)
}

clearScreenButton.addEventListener("click", (e) => {
  document.querySelectorAll(".pixel").forEach((p) => {
    p.classList.remove("colored-in")
  })
})
