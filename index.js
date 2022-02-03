// The magic happens here!
const etch = () => {
    const pix = document.querySelector('.pixel')
    pix.addEventListener('mouseenter', () => {
        pix.classList.add('colored-in')
    })
}
// const getContainer = document.getElementById('screen')
// let numOfPixels = 29999

const generatePiixel = () => {
    for (let i = 0; i < 6000; i++) {
        // create a new div element
        const singleDiv = document.createElement('div')
        // add a class to the new element
        singleDiv.classList.add('pixel')
        // append the new div to the conatiner div
        document.getElementById('screen').appendChild(singleDiv)
        // add color in event listener to new pixel
        singleDiv.addEventListener('mouseenter', () => {
            singleDiv.classList.add('colored-in')
        })

    }
}

const clearScreen = () => {
    const pixels = document.querySelectorAll('.pixel')
    for (let i = 0; i < pixels.length; i++) {
        pixels[i].classList.remove('colored-in')
    }
}


document.addEventListener(('DOMContentLoaded'), () => {
    generatePiixel()
    etch()
    document.getElementById('clear-screen-button').addEventListener('click', clearScreen)
})