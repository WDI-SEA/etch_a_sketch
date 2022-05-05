const screen = document.getElementById("screen")

for(let i = 0; i < 6423; i++) {
    let pixel = document.createElement("div")
    pixel.classList.add("pixel")
  
    pixel.addEventListener("mouseenter", (e) => {
    e.target.classList.add("colored-in")
    })
    screen.append(pixel)
}
const clearButton = document.getElementById("clear-screen-button")


clearButton.addEventListener("click", () => {
    const pixelList = document.querySelectorAll(".pixel")
    console.log(pixelList)
    pixelList.forEach(element=>element.classList.remove("colored-in"))
})
