// The magic happens here!  


const screen = document.querySelector('screen')
const clearScreenButton = document.querySelector('clear-screen-button')

const makePixels = (number) => {
    for (let i = 0; i < number; i++) {
        let newPixel = document.createElement('div')
        newPixel.classList.add('pixel')
        screen.appendChild(newPixel)

        newPixel.addEventListener('mouseenter', fillInBox)
    }
    }

const fillInBox = (event) => {
    event.target.classList.add('colored-in')
}

const clearScreen = () => {
    for (let i = 0; i < 6059; i++) {
        document.querySelectorAll(".pixel")[i].classList.remove("colored-in")
    }
}

document.addEventListener('DOMContentLoaded', () => {
    makePixels(6059)
    clearScreenButton.addEventListener('click', clearScreen)
})