// The magic happens here!

// const makePixels = (numberOfPixels) => {
//     for (let i = 0; i < numberOfPixels; i++){
//         const newPix = document.createElement('div')
//         newPix.classList.add('.pixel')
//         document.querySelector('.pixel').append(newPix)
//         console.log(newPix)
//     }
//     const blackPixels = ('hover', ()) {
//         if ('hover' > pixel === true) {
//             return ('colored-in')
//         }
//     }
// }


// document.addEventListener('DOMContentLoaded', () => {
//     makePixels(10)

// })

// make variables

// const container = document.querySelector('.container')
// const screen = document. querySelector('#screen')
// const pixel = document. querySelector('.pixel')
// const clearButton = document.querySelector('#clear-search-button')

// const makePix = (pixBox) => {
//     for (let i = 0; i < pixBox; i++) {
//         let newPix = document.createElement('div')
//         newPix.addClassList('pixel')
//         newPix.addEventListener('hover' () {
//             if ('hover' > pixel === true)
//             return.classList.add('colored-in')
//         })

//     }
//     clearButton.addEventListener('click', (e) => {
//         if ('click' === true) {
//             return.classList.remove('colored-in')
//         }
//     })
// }

// document.addEventListener('DOMContentLoaded', () => {
//     makePix(5000)
// })




// const generateQuilt = (numberOfSquares) => {
//     // iterate 1001 times adding 1001 divs
//     for (let i = 0; i <= numberOfSquares; i++) {
//         //create an element
//         const square = document.createElement('div')
//         //set the props
//         square.innerText = i
//         square.classList.add('square')
//         square.style.backgroundColor = randRGB()
//         // append the element
//         document.querySelector('body').append(square)
//     }
// }

// teacher code
let screen = document.querySelector('#screen')
let pixel = document.querySelector('.pixel')

let clearButton = document.querySelector('#clear-screen-button')

pixel.addEventListener('mouseenter', () => {
    pixel.classList.add('colored-in')
})

//loop through and make new pixels
for (let i = 0; i < 3135; i++) {
    let newPixel = document.createElement('div')
    newPixel.classList.add('pixel')

    //add mouseEnter functionality

    newPixel.addEventListener('mouseenter', (e) => {
        e.target.classList.add('colored-in')
    })

    screen.append(newPixel)
}

let clearFunction = function() {
    let everyPixel = document.querySelectorAll('.pixel')
    everyPixel.forEach(pixel => {
        pixel.classList.remove('colored-in')
    })
}

clearButton.addEventListener('click', clearFunction)

