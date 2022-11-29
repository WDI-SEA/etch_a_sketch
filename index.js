// The magic happens here!

const wholeScreen = document.getElementById('screen')
const clearScreen = document.getElementById('clear-screen-button')

const mouseOver = (event) => {
    event.target.classList.add('colored-in')
}

const clearPixel = () => {
    const pixel = document.querySelectorAll('.pixel')
    pixel.forEach(colored => {
        colored.classList.remove('colored-in')
    })
}

for (let i = 0; i < 10973; i++) {
    const pixelFill = document.createElement('div')
    pixelFill.classList.add('pixel')
    wholeScreen.appendChild(pixelFill)
    pixelFill.addEventListener('mouseenter', mouseOver)
}

clearScreen.addEventListener('click', clearPixel)