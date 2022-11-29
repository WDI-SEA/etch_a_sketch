// The magic happens here!
// defining our variables
let screen = document.querySelector('#screen')
let pixel = document.querySelector('.pixel')
let clearButton = document.querySelector('#clear-screen-button')
// testing event listener. works fine.
pixel.addEventListener('mouseenter', () => {
    pixel.classList.add('colored-in')
})
// creating screen of pixels
for (let i = 0; i < 51000; i++) {
    let pixels = document.createElement('div')
    pixels.classList.add('pixel')
    screen.append(pixels)
    //adding the fill in
    pixels.addEventListener('mouseenter', (e) => {
        e.target.classList.add('colored-in')
        // if you leave this in here, it actually moves the colored-in pixel to the very bottom
        // screen.append(pixels)
    })

    screen.append(pixels)

}
// creating the clear all 
let clear = function () {
    let allPix = document.querySelectorAll('.pixel')
    allPix.forEach(pixel => {
        pixel.classList.remove('colored-in')
    })
}
// Utilizing clear button
clearButton.addEventListener('click', clear)