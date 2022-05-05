// The magic happens here!

// const pixels = document.querySelector('#pixel')
// const sketchScreen = document.querySelector('#screen')
// const pixel = document.querySelector('#pixel')
// const sketchScreen = document.querySelector('#screen')

// const screen = document.getElementById('screen')
// const pixels = document.getElementsByClassName('pixel')

const screen = document.querySelector("#screen")
const clear = document.querySelector("#clear-screen-button")

// const sketch = (event) => {
//     const color = event.target.style.backgroundColor
//     pixel.classList.add('#colored-in')
//     pixel.style.backgroundColor = color
//     pixel.addEventListener('mouseenter', sketch)
// }


// creates the sketch pad
const sketchPad = () => {
    //while loops handle clear
    while (screen.firstChild) {
        screen.removeChild(screen.firstChild)
    }
    while (pixels.firstChild) {
        pixels.removeChild(pixels.firstChild)
    }
    // adding pixels to the parent pixel in created div
    for (let i = 0; i < 6199; i++) {
        const morePixels = pixels()
        screen.append(morePixels)
    }
}

// giving the pixels the same css styling as the parent pixel
const pixels = () => {
    const morePixels = document.createElement("div")
    morePixels.classList.add("pixel")
    // event listener for drawing/hovering pixel
    morePixels.addEventListener('mouseenter', draw)
    return morePixels
}

const draw = e => {
    //giving the draw function the ability to change css style
    e.target.classList.add('colored-in')
}

// const clearButton = () => {
//     while ()
// }

// resetting sketch pad
// clear.addEventListener('click', sketchPad)

// const sketch = (e) => {
//     const pixels = document.getElementsByClassName('pixel')
//     const color = e.target.style.backgroundColor
//     pixels.classList.add('colored-in')
//     pixels.style.backgroundColor = color
//     document.addEventListener('mouseenter', sketch)
// }

document.addEventListener('DOMContentLoaded', () => {
    sketchPad()
    clear.addEventListener('click', sketchPad)
})

// const sketch = () => {
//     for (let i = 0; i < 15000; i++) {
//         // create a new div
//         const pixels = document.createElement('div')
//         // add a css class to the div to give it some color
//         pixels.classList.add('pixel')
//         // add a one off style of the background color
//         pixels.style.backgroundColor = ('#pixel')
//         // append the div to the body
//         document.querySelector('#pixel').append(pixels)
//         pixels.addEventListener('mouseenter', (sketch))
//     }
// }


// document.getElementsByClassName("pixel").addEventListener("mouseenter", mouseEnter)

// function mouseEnter() {
//     document.getElementsByClassName("pixel").style.backgroundColor= "black";
// }
