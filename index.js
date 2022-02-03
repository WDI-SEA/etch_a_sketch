// code along
// const etch = () => {
//     const pix = document.querySelector('.pixel')
//     pix.addEventListener('mouseenter', () => {
//         pix.classList.add('colored-in')
//     })
// }
// etch()

// const getContainer = document.getElementById('screen')
const clearBtn = document.getElementById('clear-screen-button')

let numOfPixels = 4032

const generatePixels = () => {
for(let i = 0; i < numOfPixels; i++) {
    // create a new div element
    let singleDiv = document.createElement('div')
    // add a class to that new div
    singleDiv.classList.add('pixel')
    // append the new div to the container div
    document.getElementById('screen').appendChild(singleDiv)
    singleDiv.addEventListener('mouseenter', () => {
        singleDiv.classList.add('colored-in')
    })
}
}
generatePixels()

const clearScreen = () => {
    // remove 'colored-in' class from ALL pixels
    const pixels = document.querySelectorAll('.pixel')
    for(let i = 0; i<pixels.length; i++) {
        pixels[i].classList.remove('colored-in')
    }
}
document.getElementById('clear-screen-button').addEventListener('click', clearScreen)

// // need event listener
// // need a .classList.add
// // need mouseenter instead of click
// const container = document.querySelector('.container')
// const screen = document.querySelector('#screen')
// const pixel = document.querySelector('.pixel')
// const clear = document.querySelector('#clear-secreen-button')



// const pixelCreator = () => {
//     for (let i = 0; i <= 3500; i++) {
//         let pixelCreate = document.createElement('div');
//         pixelCreate.classList.add("pixel")
//         screen.appendChild(pixelCreate)
//         // pixel.addEventListener("mouseenter", () =>{
//         //     pixel.classList.add('colored-in')
//         // })
//     }
// }

// const draw = () => {
   
// }


// const shade = () => {
//     pixel.classList.add('colored-in')
// }
// pixel.addEventListener('mouseenter', shade)

// pixelCreator()
