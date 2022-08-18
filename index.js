
document.addEventListener('DOMContentLoaded', () => {

 const screen = document.getElementById("screen")
 //const clearButton= document.getElementById("clear-screen-button")

 const container = () =>{
        const containerElement = document.createElement('div')
        containerElement.setAttribute("id", "container")
       document.querySelector("body").append(containerElement)
     }


 for (let i=0; i <8000; i++) {
    const addPixel = document.createElement("div")
    addPixel.classList.add("pixel") 
    screen.append(addPixel)
}
const pixels = document.querySelectorAll(".pixel")
pixels.forEach(pixel => {
    pixel.addEventListener("mouseenter", (e) =>{
        pixel.style.backgroundColor = "lightgreen"
    
    } )
    
})
const clearButton= document.getElementById("clear-screen-button")
clearButton.addEventListener('click', (e) => {
    // clear out both list while loops
    pixels.forEach(pixel => {
    pixel.style.backgroundColor = 'darkgreen'
})
})

})


