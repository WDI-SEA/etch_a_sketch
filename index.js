
document.addEventListener('DOMContentLoaded', () => {

 const screen = document.getElementById("screen")
 const clearButton= document.getElementById("clear-screen-button")



 for (let i=0; i <10000; i++) {
    const addPixel = document.createElement("div")
    addPixel.classList.add("pixel") 
    screen.append(addPixel)
}
const pixels = document.querySelectorAll(".pixel")
pixels.forEach(pixel => {
    pixel.addEventListener("mouseenter", (e) =>{
        pixel.style.backgroundColor = "black"
    
    } )
    
})

clear.addEventListener('click', (e) => {
    // clear out both list while loops
    pixels.forEach(pixel => {
    pixel.style.backgroundColor = 'white'
})
})

// const clearScreen = document.querySelectorAll(".clear-screen-button")
// clearButton.addEventListener
// pixels.forEach(pixel => {
//     pixel.style.backgroundColor ="white"
})


