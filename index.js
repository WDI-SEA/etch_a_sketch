const sketch = () => {
    const sketch = document.querySelector('#screen')

    // while something is in the element, remove it
    while (sketch.firstChild) {
        
        sketch.removeChild(sketch.firstChild)
    }

    for (let i = 0; i < 1000; i++) {
        // create the element

        const screen = document.createElement('pixel')
        // set the properties

        screen.classList.add('pixel')
        screen.style.backgroundColor = randomRGB()
        screen.addEventListener('mouseEnter', event => {
            console.log(event.target.style.backgroundColor)
            const color = event.target.style.backgroundColor
            // make a new square

            const newPixel = document.createElement('div')
            // set the props of the square

            newPixel.classList.add('pixel')
            newPixel.style.backgroundColor = color
            // append square to the DOM tree

            document.querySelector('#screen').appendChild(newPixel)
        })
        // append the element to the DOM tree

        sketch.appendChild(square)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    
    const generate = document.querySelector('#generate')
    generate.addEventListener('mouseEnter', sketch)
})