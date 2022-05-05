const screen = document.querySelector('#screen')
const clearButton = document.querySelector('#clear-screen-button')

document.addEventListener('DOMContentLoaded', () => {
    const pixel = document.querySelector('.pixel')
    pixel.addEventListener('mouseenter', darken)
    
    for (let i = 0; i < 4223; i++) {
        const newPixel = document.createElement('div')
        newPixel.classList.add('pixel')
        newPixel.addEventListener('mouseenter', darken)
        screen.append(newPixel)
    }
    clearButton.addEventListener('click', clearAll)
})

const clearAll = () => {
    const pixels = document.querySelectorAll('.pixel')
    pixels.forEach(function(j) {
        j.classList.remove('colored-in')
    })
}


const darken = e => {
    e.target.classList.add('colored-in')
}
