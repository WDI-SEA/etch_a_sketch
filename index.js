// The magic happens here!
const pixel = document.querySelector('.pixel')
// console.log(pixel)
const screen = document.querySelector('#screen')
const clear = document.querySelector('#clear-screen-button')
console.log(clear)

// to fill the board with all the pixels
const fillBoard = () => {
    for (let i = 0; i < 6199; i++){
        // create the element
        const pixel = document.createElement('div')
        // set the properties
        pixel.classList.add('pixel')


        screen.appendChild(pixel)
    }
}

pixel.addEventListener('mouseenter', () => {
    pixel.classList.add('colored-in')
})






document.addEventListener('DOMContentLoaded', () => {
    fillBoard()
})

