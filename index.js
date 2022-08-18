const makePalette = () => {
    const colorPalette = document.querySelector('#color-palette')

    // while something is in the element, remove it
    while (colorPalette.firstChild) {
        
        colorPalette.removeChild(colorPalette.firstChild)
    }

    for (let i = 0; i < 1000; i++) {
        // create the element
        const square = document.createElement('div')
        // set the properties
        square.classList.add('square')
        square.style.backgroundColor = randomRGB()
        square.addEventListener('hover', event => {
            console.log(event.target.style.backgroundColor)
            const color = event.target.style.backgroundColor
            // make a new square
            const newSquare = document.createElement('div')
            // set the props of the square
            newSquare.classList.add('square')
            newSquare.style.backgroundColor = color
            // append square to the DOM tree
            document.querySelector('#my-palette').appendChild(newSquare)
        })
        // append the element to the DOM tree
        colorPalette.appendChild(square)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    
    const generate = document.querySelector('#generate')
    generate.addEventListener('hover', makePalette)
})