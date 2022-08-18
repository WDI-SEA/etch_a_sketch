// The magic happens here!

const pixel = document.querySelector('.pixel')
const clear = document.querySelector('#clear-screen-button')

pixel.addEventListener('mouseenter', (e) => {
    e.target.classList.add('colored-in')
})

const createPixels = (number) => {
    const screen = document.querySelector('#screen')
    for (let i = 0; i < number; i++) {
        const newPixel = document.createElement('div')
        newPixel.classList.add('pixel')
        newPixel.addEventListener('mouseenter', (e) => {
            e.target.classList.add('colored-in')
        })
        screen.append(newPixel)
    }
}

document.addEventListener('DOMContentLoaded', function () {
    createPixels(9999)
    clear.addEventListener('click', () => {
        const pixels = document.querySelectorAll('.pixel')
        for (let i = 0; i < pixels.length; i++) {
            pixels[i].classList.remove('colored-in')
        }
    })
})
