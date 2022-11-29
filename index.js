
// grab html elements
const container = document.querySelector('.container')
const screen = document.querySelector('#screen')
const pixel = document.querySelector('.pixel')
const clearBtn = document.querySelector('#clear-screen-button')

document.addEventListener('DOMContentLoaded', () => {
    makePixels()
})
// make pixels fill screen
const makePixels = () => {
    for(let i = 0; i <8000; i++){
        const pixels = document.createElement('div')
        pixels.classList.add('pixel')
        screen.appendChild(pixels)
        pixels.addEventListener('mouseenter', changeColor)
        
    }
}


const changeColor = (event) => {
//console.log("it worked")
pixel.classList.add('colored-in')
console.log(event)
event.target.classList.add('colored-in')
}

clearBtn.addEventListener('click', () => {
    const selector = document.querySelectorAll('.pixel')
    selector.forEach(pixel => {
        pixel.classList.remove ('colored-in')
    })
})
//console.log("it works")


