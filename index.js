document.addEventListener('DOMContentLoaded', () => {
    

    let pixels;
const screen = document.querySelector('#screen')
const clear = document.querySelector('#clear-screen-button')


// to fill the board with all the pixels
const fillBoard = () => {
    for (let i = 0; i < 6199; i++){
        // create the element
       const addPixel = document.createElement('div')
        // set the properties
        addPixel.classList.add('pixel')
        // append the element
        screen.appendChild(addPixel)
    }
    pixels = document.querySelectorAll('.pixel')
}

fillBoard()

function colorPixel(){
    pixels.forEach(pixel => {
        pixel.addEventListener('mouseenter', () => {
            pixel.classList.add('colored-in')
        })
    })
}

function clearPixel(){
    pixels.forEach(pixel => {
        clear.addEventListener('click', () => {
            pixel.classList.remove('colored-in')
        })
    })
}

colorPixel()
clearPixel()

})






