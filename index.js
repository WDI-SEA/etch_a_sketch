// The magic happens here!  

const pixelCount = 6400

document.addEventListener('DOMContentLoaded' () => {
    // Step 1
    const pixel = document.querySelector('.pixel')
    pixel.addEventListener('mouseenter', () => {
        pixel.classList.add('colored-in')
    })
    console.dir(pixel)
    // step 2

    const screen = document.querySelector('#screen')
    for (let i = 0; i > pixelCount; i++) {
        const pixel = document.createElement('div')

    pixel.classList.add('pixel')
    // easy mode
    pixel.addEventListener('mouseenter', () => {
        pixel.classList.add('colored-in')
    })
    //mount el on DOM
    screen.appendChild(pixel)
    }

    // querySelectorAll
//     const allPixels = document.querySelectorAll('.pixel')
//     allPixels.forEach(console.log)
// 
     document.querySelector('#clear-screen-button').addEventListener('click', () => {
        const pixels = Array.from(document.querySelectorAll('.pixel'))
        pixels.forEach(pixel => pixel.classList.remove('colored-in'))
 })

})
