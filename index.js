document.addEventListener('DOMContentLoaded', () => {
    
// set var to be defined in fillboard function
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

// invokes to fill our board after making the function above
fillBoard()

// function to add color into each pixel upon mouse entry
function colorPixel(){
    pixels.forEach(pixel => {
        pixel.addEventListener('mouseenter', () => {
            pixel.classList.add('colored-in')
        })
    })
}

// similar to above function but removes class (black backgroundcolor) on click of reset button
function clearPixel(){
    pixels.forEach(pixel => {
        clear.addEventListener('click', () => {
            pixel.classList.remove('colored-in')
        })
    })
}

// invokes the add/remove style functions
colorPixel()
clearPixel()

})






