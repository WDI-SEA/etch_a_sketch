// The magic happens here!
const container = document.querySelector(".container")
const screen = document.querySelector("#screen")
const pixel = document.querySelector(".pixel")
const btn = document.querySelector("clear-screen-button")

document.addEventListener("DOMContentLoaded",() => {
    makePixels()
})

const addColor = (event) => {
    
    console.log(event)
    event.target.classList.add ('colored-in')
}
const makePixels = () => {
    for( let i =0; i < 4799; i++){
        const pixels = document.createElement('div')
        pixels.classList.add('pixel')
        screen.appendChild(pixels)
        pixels.addEventListener('mouseenter', addColor)
    }
}
btn.addEventListener('click', () => {
    // variable to select all of the pixels
    const selector = document.querySelectorAll('.pixel')
    selector.forEach (pixel =>{
        pixel.classList.remove ('colored-in')
    })
})
const addH1 = ()=> {
    const h1 = document.createElement("h1")
    h1.innerText = "sketch"
    document.querySelector("body").prepend(h1)

}
addH1()