// const screen = document.querySelector("#screen")
// const clearButton = document.querySelector("#clear-screen-button")

// const createPixels = (numOfPixels) => {
//   for (let i = 0; i < numOfPixels; i++) {
//     const pixels = document.createElement("div")
//     pixels.classList.add("pixel")
//     // or document.querySelector("#screen").appendChild(pixels)
//     screen.appendChild(pixels)
//     pixels.addEventListener("mouseenter", fillPixels)
//   }
// }

// const fillPixels = (event) => {
//   event.target.classList.add("colored-in")
// }

// const clearScreen = () => {
//   document.querySelectorAll(".pixel").forEach((element) => {
//     element.classList.remove("colored-in")
//   })
// }

// document.addEventListener("DOMContentLoaded", () => {
//   createPixels(6000)
//   clearButton.addEventListener("click", clearScreen)
// })


// Code Along w/ class

// const etch = () => {
//   const pix = document.querySelector('.pixel')
//   pix.addEventListener('mouseenter', () => {
//     pix.classList.add('colored-in')
//   })
// }

const generatePixels = () => {
  for (let i = 0; i < 5500; i++) {
    // create a new div element
    let singleDiv = document.createElement("div")
    // add a class to that div
    singleDiv.classList.add("pixel")
    // append the new div to the container div
    document.getElementById("screen").appendChild(singleDiv)
    // add color in event listener to new pixel
    singleDiv.addEventListener("mouseenter", () => {
      singleDiv.classList.add("colored-in")
    })
  }
}

const clearScreen = () => {
  // remove  'coloer-in' class from all pixels
  const pixels = document.querySelectorAll(".pixel")
  for (let i = 0; i < pixels.length; i++) {
    pixels[i].classList.remove("colored-in")
  }
}

document.addEventListener("DOMContentLoaded", () => {
  generatePixels()
  document.getElementById("clear-screen-button").addEventListener("click", clearScreen)
})