// make an addEventListener for mouse enter so pixel turns black when hovered over
// const etch = () => {
//     const pix = document.querySelector('.pixel')
//     pix.addEventListener('mouseenter', () => {
//         pix.classList.add('colored-in')
//     })
// }

// const getContainer = document.getElementById('screen')
// let numOfPixels = 2999

const generatePixels = () => {
for(let i=0; i<5000; i++) {
    //create a new div element
    let singleDiv = document.createElement('div')
    // add a class name to that new div
    singleDiv.classList.add('pixel')
    // append the new div to the container div
    document.getElementById('screen').appendChild(singleDiv)
    // add color in event listener to new pixel div
    singleDiv.addEventListener('mouseenter', () => {
        singleDiv.classList.add('colored-in')
    })
    }
}

const clearScreen = () => {
    // remove 'colored-in' class from ALL pixels when clicking clear button
    const pixels = document.querySelectorAll('.pixel')
   for (let i=0; i<pixels.length; i++) {
       pixels[i].classList.remove('colored-in')
   }
}


document.addEventListener('DOMContentLoaded', () => {
    // etch()
    // must call generatePixel
    generatePixels()
    document.getElementById('clear-screen-button').addEventListener('click', clearScreen)
})